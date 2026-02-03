Run pre-deployment checks before Chrome Web Store submission:

## Build Verification
1. Run `pnpm build` — must complete with zero errors and zero warnings
2. Verify output directory `.output/` exists and contains valid extension files
3. Check `manifest.json` in output: version bumped, permissions minimal, content_security_policy present

## Extension Compliance
4. Verify no `eval()`, `new Function()`, or inline scripts in built output
5. Check that all external resources use `https://` only
6. Verify `manifest.json` permissions match what the extension actually uses (no unused permissions)
7. Run `web-ext lint` if available — report any Chrome Web Store policy violations

## Sentra-Specific Checks
8. Verify design tokens are compiled (no raw token references in CSS output)
9. Check bundle size: warn if total > 5MB, block if > 10MB
10. Verify no console.log statements in production build (console.error allowed)
11. Confirm all clinical modules pass Gate 6 evaluation score ≥ 8.0

## Security Scan
12. Run `pnpm audit` — no critical or high vulnerabilities allowed
13. Verify no API keys, secrets, or credentials in built output
14. Check CSP headers in `manifest.json` are restrictive

## Output
- Generate deployment checklist summary: READY ✅ or NOT READY ❌
- If ready, output the version number and ZIP command for Web Store upload
