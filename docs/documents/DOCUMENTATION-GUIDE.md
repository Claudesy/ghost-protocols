# Documentation Guide

## Overview

This guide covers how to write effective documentation for the Sentra Assist Chrome extension using TSDoc and Mintlify Doc Writer.

## TSDoc Inline Documentation

### Basic Function Documentation

````typescript
/**
 * Calculates the total price including tax.
 *
 * @param price - The base price before tax
 * @param taxRate - The tax rate as a decimal (e.g., 0.1 for 10%)
 * @returns The total price including tax
 *
 * @example
 * ```typescript
 * const total = calculateTotal(100, 0.1);
 * console.log(total); // 110
 * ```
 */
function calculateTotal(price: number, taxRate: number): number {
  return price * (1 + taxRate);
}
````

### React Component Documentation

````typescript
/**
 * A button component with loading state support.
 *
 * @param props - Component props
 * @param props.children - Button content
 * @param props.onClick - Click handler function
 * @param props.isLoading - Whether the button is in loading state
 * @param props.variant - Button style variant
 *
 * @example
 * ```tsx
 * <Button onClick={handleClick} isLoading={false} variant="primary">
 *   Click Me
 * </Button>
 * ```
 */
export function Button({ children, onClick, isLoading = false, variant = 'primary' }: ButtonProps) {
  // Implementation
}
````

### Interface/Type Documentation

```typescript
/**
 * Represents a patient record in the system.
 *
 * @remarks
 * This interface is used throughout the application for patient data.
 * All fields are required except for `notes`.
 */
interface PatientRecord {
  /** Unique identifier for the patient */
  id: string;

  /** Patient's full name */
  name: string;

  /** Patient's date of birth in ISO format */
  dateOfBirth: string;

  /** Optional medical notes */
  notes?: string;
}
```

### Class Documentation

````typescript
/**
 * Manages patient data storage and retrieval.
 *
 * @remarks
 * This class uses Chrome's storage API to persist patient data.
 * Data is automatically synced across devices when the user is signed in.
 *
 * @example
 * ```typescript
 * const manager = new PatientDataManager();
 * await manager.savePatient(patientData);
 * const patient = await manager.getPatient('patient-123');
 * ```
 */
class PatientDataManager {
  /**
   * Saves a patient record to storage.
   *
   * @param patient - The patient record to save
   * @throws {StorageError} If storage quota is exceeded
   * @returns Promise that resolves when save is complete
   */
  async savePatient(patient: PatientRecord): Promise<void> {
    // Implementation
  }
}
````

## Using Mintlify Doc Writer

### Installation

1. Open VS Code Extensions panel (`Ctrl+Shift+X`)
2. Search for "Mintlify Doc Writer"
3. Click **Install**
4. Reload VS Code if prompted

### Usage

#### Method 1: Right-Click Menu

1. Select a function, class, or component
2. Right-click → **Mintlify: Generate Documentation**
3. AI-generated documentation will appear above the code

#### Method 2: Keyboard Shortcut

1. Place cursor inside a function/class
2. Press `Ctrl+Shift+.` (Windows/Linux) or `Cmd+Shift+.` (Mac)
3. Documentation will be generated automatically

#### Method 3: Command Palette

1. Open Command Palette (`Ctrl+Shift+P`)
2. Type "Mintlify: Generate Documentation"
3. Press Enter

### Best Practices

1. **Review AI-Generated Docs**: Always review and edit AI-generated documentation for accuracy
2. **Add Examples**: Include practical examples in `@example` tags
3. **Document Edge Cases**: Use `@remarks` to explain special behaviors or edge cases
4. **Keep It Updated**: Update documentation when code changes
5. **Use Proper Tags**: Leverage TSDoc tags appropriately:
   - `@param` - Parameter descriptions
   - `@returns` - Return value description
   - `@throws` - Exceptions that may be thrown
   - `@example` - Usage examples
   - `@remarks` - Additional context
   - `@deprecated` - Mark deprecated code
   - `@see` - Link to related code/docs

## Generating API Documentation

### Generate Documentation

```bash
npm run docs:generate
```

This creates HTML documentation in `./docs/api/`

### View Documentation Locally

```bash
npm run docs:serve
```

Opens documentation in your browser at `http://localhost:8080`

## Documentation Standards

### Required Documentation

All exported functions, classes, interfaces, and components MUST have:

- Brief description (first line)
- `@param` tags for all parameters
- `@returns` tag (if applicable)
- At least one `@example`

### Optional but Recommended

- `@remarks` for complex logic or edge cases
- `@see` for related code references
- `@throws` for error conditions
- `@deprecated` for legacy code

### Writing Style

- **Be concise**: First line should be a brief summary
- **Be specific**: Avoid vague terms like "handles data"
- **Use active voice**: "Calculates total" not "Total is calculated"
- **Include units**: Specify units for numbers (ms, px, %, etc.)
- **Link types**: Reference other types using `{@link TypeName}`

## Examples by Use Case

### Utility Function

````typescript
/**
 * Formats a date string to Indonesian locale format.
 *
 * @param dateString - ISO 8601 date string
 * @param includeTime - Whether to include time in output
 * @returns Formatted date string in Indonesian locale
 *
 * @example
 * ```typescript
 * formatDate('2024-02-04T12:00:00Z'); // "4 Februari 2024"
 * formatDate('2024-02-04T12:00:00Z', true); // "4 Februari 2024, 12:00"
 * ```
 */
export function formatDate(dateString: string, includeTime = false): string {
  // Implementation
}
````

### Custom Hook

````typescript
/**
 * Hook for managing patient selection state.
 *
 * @returns Object containing selected patient and selection methods
 *
 * @example
 * ```tsx
 * function PatientList() {
 *   const { selectedPatient, selectPatient, clearSelection } = usePatientSelection();
 *
 *   return (
 *     <div>
 *       <button onClick={() => selectPatient('patient-123')}>
 *         Select Patient
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 */
export function usePatientSelection() {
  // Implementation
}
````

### Chrome Extension API Wrapper

````typescript
/**
 * Sends a message to the background script.
 *
 * @param type - Message type identifier
 * @param payload - Message payload data
 * @returns Promise resolving to the response from background script
 *
 * @throws {Error} If background script is not available
 *
 * @example
 * ```typescript
 * const response = await sendToBackground('GET_PATIENT', { id: '123' });
 * console.log(response.patient);
 * ```
 */
export async function sendToBackground<T>(type: string, payload: unknown): Promise<T> {
  // Implementation
}
````

## Tips for Better Documentation

1. **Document the "why", not just the "what"**: Explain reasoning behind complex logic
2. **Keep examples realistic**: Use actual use cases from the codebase
3. **Update docs with code**: Make documentation updates part of your PR
4. **Use TypeScript types**: Let types do some documentation work for you
5. **Link related code**: Use `@see` to connect related functions/classes
6. **Mark experimental features**: Use `@beta` or `@experimental` tags
7. **Deprecate gracefully**: Always provide migration path in `@deprecated` tag

## Workflow Integration

### Before Committing

```bash
# Generate fresh documentation
npm run docs:generate

# Check for TypeScript errors (includes TSDoc validation)
npm run typecheck

# Run full quality checks
npm run quality
```

### During Code Review

- Verify all new exports have documentation
- Check that examples are accurate and helpful
- Ensure parameter descriptions match actual behavior
- Validate that `@throws` tags cover all error cases

## Resources

- [TSDoc Official Spec](https://tsdoc.org/)
- [TypeDoc Documentation](https://typedoc.org/)
- [Mintlify Doc Writer](https://marketplace.visualstudio.com/items?itemName=mintlify.document)
