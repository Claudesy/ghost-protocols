# Sentra Code Mode — Agent Behavioral Guidelines

> **Owner:** Sentra Principal Infrastructure Engineering
> **Version:** 1.0.0 · February 2026
> **Scope:** All coding agents operating under Sentra projects

---

## 0 — Purpose

These guidelines govern how every agent MUST behave when writing, editing, or reviewing code across Sentra repositories. The goal is **professional, clean, maintainable code** — every time, no exceptions.

Rules marked **MUST** are non-negotiable. Rules marked **SHOULD** are strongly recommended and require justification to skip.

---

## 1 — Before Writing Any Code

| # | Rule | Level |
|---|------|-------|
| 1.1 | **Understand before you build.** Read the task, referenced files, and relevant context fully before proposing changes. Never assume — verify. | MUST |
| 1.2 | **Ask clarifying questions** when requirements are ambiguous. Do not guess intent on critical decisions. | MUST |
| 1.3 | **Draft an approach first** for any change touching 3+ files or introducing new patterns. Get approval before implementation. | SHOULD |
| 1.4 | **Search the codebase** for existing patterns, utilities, and conventions before creating anything new. Reuse over reinvent. | MUST |
| 1.5 | **Scope narrowly.** Solve exactly what is asked. Do not refactor unrelated code, add unrequested features, or "improve" things outside scope. | MUST |

---

## 2 — Code Quality Standards

### 2.1 — Naming

- Use **descriptive, intention-revealing names**. A reader should understand purpose without reading the implementation.
- Follow language conventions strictly: `camelCase` for JS/TS functions and variables, `PascalCase` for classes/components, `snake_case` for Python, `UPPER_SNAKE_CASE` for constants.
- No abbreviations unless they are universally understood (`id`, `url`, `api`). When in doubt, spell it out.
- Boolean variables and functions start with `is`, `has`, `can`, `should` — e.g., `isAuthenticated`, `hasPermission`.

### 2.2 — Functions & Methods

- **Single Responsibility.** Each function does ONE thing well.
- **MUST** keep functions under **50 lines**. If it's longer, extract.
- **MUST** keep cyclomatic complexity under **10**. Flatten deeply nested logic.
- Pure functions over side effects wherever possible. When side effects are necessary, isolate them at the edges.
- Maximum **3 parameters**. Beyond that, use an options/config object.

### 2.3 — Files & Modules

- **MUST** keep files under **500 lines**. Split by responsibility if approaching the limit.
- One primary export per file. Group related helpers in dedicated utility modules.
- Organize by feature or domain, not by file type (prefer `features/auth/` over `controllers/`, `models/`, `services/` scattered).

### 2.4 — Types & Safety

- **MUST** use strict typing. No `any` in TypeScript. No untyped dictionaries in Python when a dataclass/TypedDict applies.
- Define interfaces/types for all data boundaries: API responses, function params, state shapes.
- Prefer immutability. Use `const`, `readonly`, `frozen` by default. Mutate only when there is a measurable reason.

### 2.5 — Comments & Documentation

- **Code should be self-documenting.** If you need a comment to explain *what* the code does, the code is unclear — rewrite it.
- Comments explain **why**, not what. Document non-obvious decisions, business rules, workarounds, and tradeoffs.
- **MUST** add JSDoc/docstrings to all public functions and exported APIs with: purpose, parameters, return value, and thrown errors.
- Never leave commented-out code. Delete it. Git has history.
- Never leave `TODO` or `FIXME` without a linked issue/ticket.

---

## 3 — Error Handling

| # | Rule | Level |
|---|------|-------|
| 3.1 | Never swallow errors silently. Every `catch` block MUST log or re-throw with context. | MUST |
| 3.2 | Use custom error classes with meaningful codes and messages for domain errors. | SHOULD |
| 3.3 | Validate all external inputs at system boundaries (API handlers, form processors, CLI args). | MUST |
| 3.4 | Fail fast and fail loud. Surface problems immediately rather than propagating corrupted state. | MUST |
| 3.5 | Handle the unhappy path first. Guard clauses at the top, happy path at the bottom. | SHOULD |

```typescript
// ✅ CORRECT — Guard clauses, early returns, clear error context
async function getPatient(id: string): Promise<Patient> {
  if (!id?.trim()) {
    throw new ValidationError('Patient ID is required', { field: 'id' });
  }

  const patient = await patientRepo.findById(id);
  if (!patient) {
    throw new NotFoundError(`Patient not found: ${id}`);
  }

  return patient;
}

// ❌ WRONG — Swallowed error, nested logic, no context
async function getPatient(id) {
  try {
    if (id) {
      const patient = await patientRepo.findById(id);
      if (patient) {
        return patient;
      } else {
        return null;
      }
    }
  } catch (e) {
    console.log(e); // Swallowed with no context
  }
}
```

---

## 4 — Security (Non-Negotiable)

- **MUST** never hardcode secrets, API keys, tokens, or credentials. Use environment variables or secret managers.
- **MUST** never log sensitive data (passwords, tokens, PHI/PII, patient records).
- **MUST** sanitize and validate all user/external input. Assume it is hostile.
- **MUST** use parameterized queries. Never concatenate SQL strings.
- **MUST** never commit `.env`, credentials, or private keys to version control.
- Apply the **principle of least privilege** for all access scopes, permissions, and token grants.

---

## 5 — Testing

| # | Rule | Level |
|---|------|-------|
| 5.1 | Every new function/feature MUST ship with tests. No exceptions. | MUST |
| 5.2 | Tests verify behavior, not implementation. Test *what* it does, not *how*. | MUST |
| 5.3 | Use the **Arrange → Act → Assert** pattern. Each test has one clear assertion focus. | SHOULD |
| 5.4 | Name tests as sentences describing expected behavior: `should return 404 when patient not found`. | SHOULD |
| 5.5 | Never hardcode or fabricate test results to make tests pass. | MUST |
| 5.6 | Run the full test suite after changes. Fix what you break. | MUST |

---

## 6 — Git & Version Control

- **MUST** work on a **feature branch**. Never commit directly to `main` or `develop`.
- Write **conventional commits**: `feat:`, `fix:`, `refactor:`, `docs:`, `test:`, `chore:`.
- Keep commits **atomic** — one logical change per commit.
- Commit messages explain the *why* of a change, not just the *what*.
- **MUST** never commit generated files, build artifacts, `node_modules`, or OS files.

---

## 7 — Agent Operational Discipline

These rules govern *how the agent works*, not just *what it produces*.

| # | Rule | Level |
|---|------|-------|
| 7.1 | **Verify before claiming done.** Run linters, type checks, and tests. If any fail, fix before reporting success. | MUST |
| 7.2 | **Never fabricate outputs.** If a command fails or a file doesn't exist, report it honestly. Do not invent results. | MUST |
| 7.3 | **Minimal diff.** Change only what is necessary. Do not reformat untouched code, reorder imports globally, or make cosmetic changes outside scope. | MUST |
| 7.4 | **One file at a time for new creation.** When creating something new, build incrementally. Validate each step. | SHOULD |
| 7.5 | **Preserve existing patterns.** Match the style, naming, and architecture of the surrounding codebase even if you "know a better way." Consistency > personal preference. | MUST |
| 7.6 | **If unsure, stop and ask.** It is always better to ask Chief than to guess wrong and introduce technical debt. | MUST |
| 7.7 | **Delegate to tooling.** Let linters handle formatting. Let type checkers catch type errors. Focus the agent's intelligence on logic, architecture, and correctness. | SHOULD |
| 7.8 | **Clean up after yourself.** No debug `console.log`, no leftover temp files, no stale imports. | MUST |

---

## 8 — Code Review Checklist (Self-Review)

Before presenting any code as complete, the agent MUST verify:

- [ ] Meets the stated requirements — nothing more, nothing less
- [ ] Follows naming conventions of the project
- [ ] Functions are focused and under 50 lines
- [ ] All public APIs have documentation
- [ ] No hardcoded secrets or sensitive data
- [ ] Error handling is comprehensive with meaningful messages
- [ ] Input validation present at boundaries
- [ ] Tests exist and pass
- [ ] Linter and type checker pass with zero warnings
- [ ] No commented-out code or orphaned imports
- [ ] Git diff contains only relevant changes

---

## 9 — Anti-Patterns (Explicitly Forbidden)

These are behaviors agents MUST NOT exhibit:

1. **Shotgun Surgery** — Making a small change that requires edits in 10+ unrelated files.
2. **Gold Plating** — Adding features, abstractions, or optimizations that were not requested.
3. **Copy-Paste Programming** — Duplicating code blocks instead of extracting shared logic.
4. **Premature Abstraction** — Creating interfaces, factories, or patterns for things used once.
5. **Silent Failures** — Catching errors and returning `null`/`undefined` without logging or re-throwing.
6. **Magic Values** — Using unexplained numbers or strings inline. Extract to named constants.
7. **God Objects** — Classes or modules that know/do too much. Split by responsibility.
8. **Test Fabrication** — Writing tests that are rigged to pass without actually validating behavior.

---

## 10 — Enforcement

These guidelines are enforced through a layered approach:

| Layer | Mechanism |
|-------|-----------|
| **Automated** | Linters (ESLint/Biome), formatters (Prettier/Black), type checkers (tsc/mypy), pre-commit hooks |
| **Agent Self-Check** | Section 8 checklist run before every code submission |
| **Human Review** | Chief reviews all code before merge. Agent code is not exempt. |

> **Remember:** The agent is a tool in service of the engineer, not a replacement.
> When in doubt, ask. When unsure, search. When wrong, own it and fix it.

---

*Maintained by Sentra Principal Infrastructure Engineering. Last updated: February 2026.*
