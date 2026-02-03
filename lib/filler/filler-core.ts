/**
 * Precision-Architected. Future-Built by Docsyanpse
 * Sentra Healthcare Artificial Intelligence
 */

/**
 * Sentra Assist - Filler Core
 * Event dispatch engine for auto-fill form fields in ePuskesmas
 *
 * Event Chains (per PRD Section 9.2):
 * - Text fields: input → change → blur
 * - Select dropdowns: change only
 * - Checkboxes: click → change
 * - AJAX autocomplete: focus → input → keydown → wait → click item
 */

import { waitForElement } from '@/lib/scraper/dom-utils';

// ============================================================================
// TYPES
// ============================================================================

export interface FillResult {
  success: boolean;
  field: string;
  value: string | number | boolean;
  method: 'direct' | 'autocomplete' | 'select' | 'checkbox';
  error?: string;
}

export interface AutocompleteOptions {
  timeout?: number;
  dropdownSelector?: string;
  retries?: number;
  typeDelay?: number;
}

// ============================================================================
// SAFETY HELPERS
// ============================================================================

/**
 * Check if element is readonly or disabled
 */
export function isFieldReadonly(element: HTMLElement): boolean {
  if (
    element instanceof HTMLInputElement ||
    element instanceof HTMLTextAreaElement ||
    element instanceof HTMLSelectElement
  ) {
    return element.readOnly || element.disabled;
  }
  return element.hasAttribute('readonly') || element.hasAttribute('disabled');
}

/**
 * Check if element is a CSRF token field (should never be modified)
 */
export function isFieldCsrf(element: HTMLElement): boolean {
  if (element instanceof HTMLInputElement) {
    const name = (element.name || '').toLowerCase();
    const id = (element.id || '').toLowerCase();
    return (
      name.includes('csrf') ||
      name.includes('token') ||
      name.includes('_token') ||
      id.includes('csrf') ||
      id.includes('token')
    );
  }
  return false;
}

// ============================================================================
// EVENT DISPATCH
// ============================================================================

/**
 * Dispatch a chain of events on an element with proper timing
 * @param element Target DOM element
 * @param events Array of event names to dispatch
 * @param delayMs Delay between events (default: 10ms)
 */
export async function dispatchEventChain(
  element: HTMLElement,
  events: string[],
  delayMs: number = 10
): Promise<void> {
  for (const eventName of events) {
    const eventOptions = getEventOptions(eventName);
    const event = new Event(eventName, eventOptions);
    element.dispatchEvent(event);

    console.log(`[Filler] Dispatched: ${eventName}`);

    if (delayMs > 0) {
      await sleep(delayMs);
    }
  }
}

/**
 * Get appropriate event options for each event type
 */
function getEventOptions(eventName: string): EventInit {
  const baseOptions: EventInit = { bubbles: true, cancelable: true };

  switch (eventName) {
    case 'input':
      return { ...baseOptions, bubbles: true, cancelable: true };
    case 'change':
      return { ...baseOptions, bubbles: true };
    case 'blur':
      return { ...baseOptions, bubbles: true };
    case 'focus':
      return { ...baseOptions, bubbles: true };
    case 'click':
      return { ...baseOptions, bubbles: true };
    case 'keydown':
      return { ...baseOptions, bubbles: true };
    default:
      return baseOptions;
  }
}

/**
 * Dispatch keyboard event (for autocomplete trigger)
 */
export function dispatchKeyboardEvent(
  element: HTMLElement,
  eventName: string,
  key: string = 'ArrowDown',
  keyCode: number = 40
): void {
  const event = new KeyboardEvent(eventName, {
    bubbles: true,
    cancelable: true,
    key,
    keyCode,
    which: keyCode,
  });
  element.dispatchEvent(event);
}

// ============================================================================
// FIELD FILLERS
// ============================================================================

/**
 * Fill a text input field
 * Event chain: input → change → blur
 */
export async function fillTextField(
  selector: string,
  value: string
): Promise<FillResult> {
  const field = 'text:' + selector;

  try {
    const element = await waitForElement(selector, 3000);

    if (!element || !(element instanceof HTMLInputElement || element instanceof HTMLTextAreaElement)) {
      return { success: false, field, value, method: 'direct', error: 'Element not found or wrong type' };
    }

    if (isFieldReadonly(element)) {
      console.warn(`[Filler] Skipped readonly: ${selector}`);
      return { success: false, field, value, method: 'direct', error: 'Field is readonly' };
    }

    if (isFieldCsrf(element)) {
      console.warn(`[Filler] Skipped CSRF field: ${selector}`);
      return { success: false, field, value, method: 'direct', error: 'CSRF field protected' };
    }

    // Set value
    element.value = value;

    // Dispatch event chain
    await dispatchEventChain(element, ['input', 'change', 'blur']);

    // Visual feedback - yellow highlight
    highlightField(element);

    console.log(`[Filler] ✓ Text filled: ${selector} = "${value}"`);
    return { success: true, field, value, method: 'direct' };

  } catch (error) {
    console.error(`[Filler] Error filling text ${selector}:`, error);
    return { success: false, field, value, method: 'direct', error: String(error) };
  }
}

/**
 * Fill a number input field
 * Event chain: input → change → blur
 */
export async function fillNumberField(
  selector: string,
  value: number
): Promise<FillResult> {
  const field = 'number:' + selector;

  try {
    const element = await waitForElement(selector, 3000);

    if (!element || !(element instanceof HTMLInputElement)) {
      return { success: false, field, value, method: 'direct', error: 'Element not found or wrong type' };
    }

    if (isFieldReadonly(element)) {
      return { success: false, field, value, method: 'direct', error: 'Field is readonly' };
    }

    // Set value
    element.value = String(value);

    // Dispatch event chain
    await dispatchEventChain(element, ['input', 'change', 'blur']);

    highlightField(element);

    console.log(`[Filler] ✓ Number filled: ${selector} = ${value}`);
    return { success: true, field, value, method: 'direct' };

  } catch (error) {
    console.error(`[Filler] Error filling number ${selector}:`, error);
    return { success: false, field, value, method: 'direct', error: String(error) };
  }
}

/**
 * Fill a textarea field
 * Event chain: input → change → blur
 */
export async function fillTextarea(
  selector: string,
  value: string
): Promise<FillResult> {
  return fillTextField(selector, value); // Same logic as text field
}

/**
 * Fill a select dropdown
 * Event chain: change only
 */
export async function fillSelect(
  selector: string,
  value: string
): Promise<FillResult> {
  const field = 'select:' + selector;

  try {
    const element = await waitForElement(selector, 3000);

    if (!element || !(element instanceof HTMLSelectElement)) {
      return { success: false, field, value, method: 'select', error: 'Element not found or wrong type' };
    }

    if (isFieldReadonly(element)) {
      return { success: false, field, value, method: 'select', error: 'Field is readonly' };
    }

    // Set value (must match <option value="...">)
    element.value = value;

    // Dispatch change event only
    await dispatchEventChain(element, ['change']);

    highlightField(element);

    console.log(`[Filler] ✓ Select filled: ${selector} = "${value}"`);
    return { success: true, field, value, method: 'select' };

  } catch (error) {
    console.error(`[Filler] Error filling select ${selector}:`, error);
    return { success: false, field, value, method: 'select', error: String(error) };
  }
}

/**
 * Fill a checkbox
 * Event chain: click → change
 */
export async function fillCheckbox(
  selector: string,
  checked: boolean
): Promise<FillResult> {
  const field = 'checkbox:' + selector;

  try {
    const element = await waitForElement(selector, 3000);

    if (!element || !(element instanceof HTMLInputElement) || element.type !== 'checkbox') {
      return { success: false, field, value: checked, method: 'checkbox', error: 'Element not found or wrong type' };
    }

    // Skip if already in desired state
    if (element.checked === checked) {
      console.log(`[Filler] Checkbox already ${checked ? 'checked' : 'unchecked'}: ${selector}`);
      return { success: true, field, value: checked, method: 'checkbox' };
    }

    // Set checked state
    element.checked = checked;

    // Dispatch click + change
    await dispatchEventChain(element, ['click', 'change']);

    console.log(`[Filler] ✓ Checkbox ${checked ? 'checked' : 'unchecked'}: ${selector}`);
    return { success: true, field, value: checked, method: 'checkbox' };

  } catch (error) {
    console.error(`[Filler] Error filling checkbox ${selector}:`, error);
    return { success: false, field, value: checked, method: 'checkbox', error: String(error) };
  }
}

// ============================================================================
// AJAX AUTOCOMPLETE FILLER
// ============================================================================

/**
 * Fill an AJAX autocomplete field
 * Event chain: focus → input (typing) → keydown → wait for dropdown → click item
 *
 * This is the most complex filler as it needs to:
 * 1. Simulate typing character by character
 * 2. Wait for AJAX dropdown to appear
 * 3. Find and click the matching item
 */
export async function fillAutocomplete(
  selector: string,
  value: string,
  options: AutocompleteOptions = {}
): Promise<FillResult> {
  const {
    timeout = 1000,
    dropdownSelector = '.ui-autocomplete .ui-menu-item, .dropdown-menu .dropdown-item, .autocomplete-results li, .tt-suggestion',
    retries = 2,
    typeDelay = 50,
  } = options;

  const field = 'autocomplete:' + selector;

  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      // 1. Find input field
      const input = await waitForElement(selector, 3000);

      if (!input || !(input instanceof HTMLInputElement)) {
        return { success: false, field, value, method: 'autocomplete', error: 'Input not found' };
      }

      if (isFieldReadonly(input)) {
        return { success: false, field, value, method: 'autocomplete', error: 'Field is readonly' };
      }

      // 2. Clear existing value and focus
      input.value = '';
      input.focus();
      await dispatchEventChain(input, ['focus'], 0);

      // 3. Simulate typing character by character
      console.log(`[Filler] Typing: "${value}"`);
      for (let i = 0; i < value.length; i++) {
        input.value = value.substring(0, i + 1);
        await dispatchEventChain(input, ['input'], typeDelay);
      }

      // 4. Trigger AJAX call with keydown
      dispatchKeyboardEvent(input, 'keydown', 'ArrowDown', 40);

      // 5. Wait for dropdown to appear
      console.log(`[Filler] Waiting for dropdown (${timeout}ms)...`);
      const dropdown = await waitForDropdown(dropdownSelector, timeout);

      if (!dropdown) {
        if (attempt < retries) {
          console.warn(`[Filler] Dropdown not appeared, retry ${attempt + 1}/${retries}...`);
          await sleep(300);
          continue;
        }

        // Fallback: try direct value set if dropdown doesn't appear
        console.warn(`[Filler] Dropdown not appeared, using direct value`);
        await dispatchEventChain(input, ['change', 'blur']);
        highlightField(input, '#fef3c7'); // Yellow for fallback
        return { success: true, field, value, method: 'autocomplete' };
      }

      // 6. Find matching item in dropdown
      const items = document.querySelectorAll(dropdownSelector);
      let matchedItem: HTMLElement | null = null;

      for (const item of items) {
        const text = item.textContent?.toLowerCase() || '';
        if (text.includes(value.toLowerCase())) {
          matchedItem = item as HTMLElement;
          break;
        }
      }

      if (!matchedItem && items.length > 0) {
        // Take first item if no exact match
        matchedItem = items[0] as HTMLElement;
        console.log(`[Filler] No exact match, using first item`);
      }

      if (!matchedItem) {
        return { success: false, field, value, method: 'autocomplete', error: 'No dropdown items found' };
      }

      // 7. Click matched item
      matchedItem.click();
      console.log(`[Filler] Clicked: "${matchedItem.textContent?.trim()}"`);

      // 8. Wait for value to be set
      await sleep(200);

      // 9. Verify and dispatch final events
      await dispatchEventChain(input, ['change', 'blur']);
      highlightField(input, '#d1fae5'); // Green for success

      console.log(`[Filler] ✓ Autocomplete filled: ${selector} = "${input.value}"`);
      return { success: true, field, value: input.value, method: 'autocomplete' };

    } catch (error) {
      console.error(`[Filler] Error in autocomplete attempt ${attempt + 1}:`, error);
      if (attempt === retries) {
        return { success: false, field, value, method: 'autocomplete', error: String(error) };
      }
    }
  }

  return { success: false, field, value, method: 'autocomplete', error: 'Max retries exceeded' };
}

/**
 * Wait for dropdown to appear using MutationObserver
 */
async function waitForDropdown(
  selector: string,
  timeout: number
): Promise<HTMLElement | null> {
  return new Promise((resolve) => {
    // Check if dropdown already visible
    const existing = document.querySelector(selector);
    if (existing && isVisible(existing as HTMLElement)) {
      resolve(existing as HTMLElement);
      return;
    }

    // Setup MutationObserver
    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        // Check added nodes
        for (const node of mutation.addedNodes) {
          if (node instanceof HTMLElement) {
            if (node.matches(selector) || node.querySelector(selector)) {
              observer.disconnect();
              resolve(node.matches(selector) ? node : node.querySelector(selector) as HTMLElement);
              return;
            }
          }
        }

        // Check for visibility changes
        const dropdown = document.querySelector(selector);
        if (dropdown && isVisible(dropdown as HTMLElement)) {
          observer.disconnect();
          resolve(dropdown as HTMLElement);
          return;
        }
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['style', 'class'],
    });

    // Timeout fallback
    setTimeout(() => {
      observer.disconnect();
      // Final check
      const dropdown = document.querySelector(selector);
      resolve(dropdown && isVisible(dropdown as HTMLElement) ? dropdown as HTMLElement : null);
    }, timeout);
  });
}

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

/**
 * Check if element is visible
 */
function isVisible(element: HTMLElement): boolean {
  return !!(
    element.offsetWidth ||
    element.offsetHeight ||
    element.getClientRects().length
  );
}

/**
 * Highlight field with color (visual feedback)
 */
function highlightField(element: HTMLElement, color: string = '#fef3c7'): void {
  const originalBg = element.style.backgroundColor;
  element.style.transition = 'background-color 0.3s ease';
  element.style.backgroundColor = color;

  setTimeout(() => {
    element.style.backgroundColor = originalBg;
  }, 2000);
}

/**
 * Sleep helper
 */
function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// ============================================================================
// BATCH FILL HELPER
// ============================================================================

export interface FieldMapping {
  selector: string;
  value: string | number | boolean;
  type: 'text' | 'number' | 'textarea' | 'select' | 'checkbox' | 'autocomplete';
  autocompleteOptions?: AutocompleteOptions;
}

/**
 * Fill multiple fields with delay between each
 */
export async function fillFields(
  fields: FieldMapping[],
  delayBetweenFields: number = 100
): Promise<FillResult[]> {
  const results: FillResult[] = [];

  for (const field of fields) {
    let result: FillResult;

    switch (field.type) {
      case 'text':
      case 'textarea':
        result = await fillTextField(field.selector, String(field.value));
        break;
      case 'number':
        result = await fillNumberField(field.selector, Number(field.value));
        break;
      case 'select':
        result = await fillSelect(field.selector, String(field.value));
        break;
      case 'checkbox':
        result = await fillCheckbox(field.selector, Boolean(field.value));
        break;
      case 'autocomplete':
        result = await fillAutocomplete(field.selector, String(field.value), field.autocompleteOptions);
        break;
      default:
        result = { success: false, field: field.selector, value: field.value, method: 'direct', error: 'Unknown type' };
    }

    results.push(result);

    if (delayBetweenFields > 0) {
      await sleep(delayBetweenFields);
    }
  }

  return results;
}
