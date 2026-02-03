Run the Sentra 6 Safety Gates pre-flight check on current working tree:

## Gate 1: Scope
- Verify no infrastructure code leaked into `src/lib/cdss/` (clinical logic isolation)
- Check that modified files align with the current task scope in `tasks.md`

## Gate 2: Integrity
- Run `git diff --staged` — flag any DELETE operations on patient-related types
- Verify no `DROP`, `DELETE`, `TRUNCATE` keywords in migration files
- Confirm backup/snapshot exists if database schema changes detected

## Gate 3: Access
- Scan for hardcoded API keys, tokens, or secrets in staged files
- Verify `manifest.json` permissions are least-privilege (no new permissions without justification)
- Check that `chrome.storage` access is scoped correctly

## Gate 4: Quality
- Run `pnpm typecheck` — zero errors required
- Run `pnpm lint` — zero warnings allowed
- Run `pnpm test` — all tests must pass
- Check test coverage: clinical modules (`src/lib/cdss/`) require 100%

## Gate 5: Approvals
- If any file in `src/lib/cdss/` is modified, output: "⚠️ CLINICAL CHANGE — requires Chief approval before merge"
- If `manifest.json` permissions changed, output: "⚠️ PERMISSION CHANGE — requires Chief approval"
- List all files requiring human review

## Gate 6: Agent Eval
- Self-evaluate generated code: score Correctness, Security, Clinical Safety, Compliance (0-10 each)
- If average score < 8.0, list specific improvements needed
- Output final gate status: ALL PASS ✅ or BLOCKED ❌ with reasons
