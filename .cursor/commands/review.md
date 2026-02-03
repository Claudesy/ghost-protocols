Review the current changes for clinical safety compliance:

1. Scan all staged/unstaged changes with `git diff`
2. Check if any files in `src/lib/cdss/` are modified — if yes, flag for Gate 5 + Gate 6
3. Verify no hardcoded clinical thresholds without source citation comments
4. Verify no `any` types introduced
5. Verify all colors/spacing use token imports (no hardcoded hex values)
6. Verify all interactive elements have `aria-label`
7. Check test coverage for modified files: clinical modules need 100%
8. Summarize findings with severity: BLOCK (must fix) | WARN (should fix) | INFO
