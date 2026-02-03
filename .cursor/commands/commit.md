Create a well-formatted git commit for the current changes:

1. Analyze staged and unstaged changes with `git diff` and `git diff --staged`
2. Determine the appropriate Conventional Commit type:
   - `feat:` for new features
   - `fix:` for bug fixes
   - `refactor:` for code restructuring
   - `clinical:` for any changes in `src/lib/cdss/` (ALWAYS use this for clinical logic)
3. Write a commit message under 60 characters for the subject line
4. Add a body with: what changed, why, and which Safety Gates are affected
5. Stage the changes and commit
6. Do NOT push — Chief reviews before push to protected branches
