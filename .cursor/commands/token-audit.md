Audit the entire codebase for Sentra Design Token compliance:

## Scan Targets
Scan all files in: `src/components/`, `src/entrypoints/`, `src/styles/`

## Color Violations
1. Search for hardcoded hex values: `#[0-9a-fA-F]{3,8}` in `.tsx`, `.ts`, `.css` files
2. Allowed exceptions: only inside `src/lib/tokens.ts` (the source of truth)
3. Flag every other occurrence as VIOLATION with file path and line number

## Spacing Violations
4. Search for arbitrary pixel values not on the base-4 grid (4, 8, 12, 16, 20, 24, 32, 48, 64)
5. Allowed: `0px`, `1px` (borders), and values defined in token spacing scale
6. Flag non-compliant spacing as WARN

## Typography Violations
7. Verify all `font-family` declarations use only `Geist` or `JetBrains Mono`
8. Check that data/code displays use `JetBrains Mono`, UI text uses `Geist`
9. Flag any `Arial`, `Helvetica`, `sans-serif` standalone usage as VIOLATION

## Shadow/Elevation Violations
10. Verify neumorphic shadows match token definitions (raised/inset states)
11. Flag any `box-shadow` not imported from tokens

## Report
- Output: TOTAL violations, TOTAL warnings
- Group by file, sorted by severity
- If zero violations: "✅ TOKEN AUDIT PASSED — Design DNA intact"
