/**
 * Name Masking Utility
 *
 * Privacy-compliant name masking for patient data display
 * Masks 3-4 characters per word while preserving readability
 *
 * @module utils/name-masking
 */

/**
 * Mask a single word with asterisks
 * - Words ≤4 chars: show first char only (e.g., "Adi" → "A**")
 * - Words 5-7 chars: mask 3 chars (e.g., "Ahmad" → "Ah***")
 * - Words ≥8 chars: mask 4 chars (e.g., "Suryadi" → "Sur****")
 *
 * @param word - Word to mask
 * @returns Masked word
 */
function maskWord(word: string): string {
  if (word.length <= 4) {
    // Short word: show first char only
    return word[0] + '*'.repeat(word.length - 1);
  } else if (word.length <= 7) {
    // Medium word: show first 2 chars, mask 3
    const visible = word.slice(0, 2);
    const masked = '*'.repeat(3);
    const remaining = word.slice(5);
    return visible + masked + remaining;
  } else {
    // Long word: show first 3 chars, mask 4
    const visible = word.slice(0, 3);
    const masked = '*'.repeat(4);
    const remaining = word.slice(7);
    return visible + masked + remaining;
  }
}

/**
 * Mask patient name for privacy compliance
 *
 * Examples:
 * - "Ahmad Suryadi" → "Ah*** Sur****"
 * - "Siti Nurhaliza" → "Si** Nur****za"
 * - "Adi Wijaya" → "A** Wij***"
 *
 * @param fullName - Full patient name
 * @returns Masked name
 */
export function maskPatientName(fullName: string): string {
  const words = fullName.trim().split(/\s+/);
  return words.map(maskWord).join(' ');
}

/**
 * Get patient initials
 *
 * @param fullName - Full patient name
 * @returns Initials (e.g., "Ahmad Suryadi" → "AS")
 */
export function getInitials(fullName: string): string {
  const words = fullName.trim().split(/\s+/);
  return words.map((w) => w[0].toUpperCase()).join('');
}

/**
 * Format patient display name with options
 *
 * @param fullName - Full patient name
 * @param options - Display options
 * @returns Formatted name
 */
export function formatPatientName(
  fullName: string,
  options: {
    masked?: boolean;
    initialsOnly?: boolean;
  } = {}
): string {
  if (options.initialsOnly) {
    return getInitials(fullName);
  }

  if (options.masked) {
    return maskPatientName(fullName);
  }

  return fullName;
}

// ============================================================================
// EXAMPLES & TESTS
// ============================================================================

/**
 * Example usage:
 *
 * maskPatientName("Ahmad Suryadi") → "Ah*** Sur****"
 * maskPatientName("Siti Nurhaliza") → "Si** Nur****za"
 * maskPatientName("Adi") → "A**"
 * maskPatientName("Muhammad Abdullah") → "Muh**** Abd****h"
 *
 * getInitials("Ahmad Suryadi") → "AS"
 * getInitials("Siti Nurhaliza") → "SN"
 */
