<!-- Claudesy's vision, brought to life. -->
# Contributing to Sentra Assist

Thank you for your interest in contributing to Sentra Assist — a Clinical Decision Support System (CDSS) Chrome Extension for ePuskesmas. This document outlines the process for contributing to this project.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Commit Convention](#commit-convention)
- [Pull Request Process](#pull-request-process)
- [Coding Standards](#coding-standards)
- [Clinical Safety Guidelines](#clinical-safety-guidelines)
- [Testing Requirements](#testing-requirements)

---

## Code of Conduct

By participating in this project, you agree to abide by our [Code of Conduct](CODE_OF_CONDUCT.md). Please read it before contributing.

---

## Getting Started

### Prerequisites

- Node.js 22+ (LTS)
- pnpm 9+
- Chrome 120+ with Developer Mode enabled

### Setup

```bash
# Clone the repository
git clone <repository-url>
cd ghost-protocols

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

### Environment Configuration

```bash
# Copy environment template
cp .env.example .env.local

# Edit with your values
# Never commit .env.local to git
```

---

## Development Workflow

### Branch Naming

```
feature/<short-description>     # New features
fix/<issue-number>-<description> # Bug fixes
chore/<description>             # Maintenance tasks
docs/<description>              # Documentation updates
refactor/<description>          # Code refactoring
```

### Daily Workflow

1. Pull the latest changes from `main`
2. Create a feature branch
3. Implement your changes
4. Run the quality checks: `pnpm quality`
5. Commit using Conventional Commits format
6. Open a Pull Request

---

## Commit Convention

We follow [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <short description>

[optional body]

[optional footer(s)]
```

### Types

| Type | Description |
|------|-------------|
| `feat` | New feature |
| `fix` | Bug fix |
| `chore` | Maintenance, dependency updates |
| `docs` | Documentation changes |
| `refactor` | Code restructuring without behavior change |
| `test` | Adding or modifying tests |
| `perf` | Performance improvements |
| `ci` | CI/CD configuration changes |
| `style` | Code formatting (no logic change) |

### Examples

```
feat(diagnosis-engine): add hypertension crisis classifier
fix(filler): resolve autocomplete race condition in resep form
chore(deps): upgrade wxt to v0.21.0
docs(readme): update installation prerequisites
```

---

## Pull Request Process

1. Ensure all quality checks pass: `pnpm quality`
2. Update `CHANGELOG.md` under `[Unreleased]`
3. Update documentation if APIs change
4. Request review from at least one maintainer
5. Address all review comments
6. Squash commits if requested

### PR Checklist

- [ ] Tests pass (`pnpm test`)
- [ ] TypeScript compiles without errors (`pnpm typecheck`)
- [ ] Linting passes (`pnpm lint`)
- [ ] Documentation updated if needed
- [ ] `CHANGELOG.md` updated
- [ ] No hardcoded secrets or credentials
- [ ] No PII in `chrome.storage`
- [ ] Clinical safety review done (if applicable)

---

## Coding Standards

### TypeScript

- **Strict mode** — no `any` types
- **Functional components** with hooks (no class components)
- **Named exports** preferred over default exports
- **Max ~30 lines per function** — extract helpers as needed
- No `eval`, no unsafe `innerHTML`

### React

- Use functional components with TypeScript generics
- Co-locate component logic with component file
- Use Zustand for global state management
- Dark-mode only — no light mode code

### File Organization

```
components/<domain>/<ComponentName>.tsx   # React components
lib/<domain>/<module>.ts                  # Business logic
utils/<utility-name>.ts                   # Shared utilities
types/<domain>.ts                         # Type definitions
```

### Naming Conventions

| Item | Convention | Example |
|------|-----------|---------|
| Components | PascalCase | `DiagnosisCard.tsx` |
| Hooks | camelCase + `use` prefix | `useDiagnosis.ts` |
| Utilities | camelCase | `formatDate.ts` |
| Types/Interfaces | PascalCase | `DiagnosisResult` |
| Constants | SCREAMING_SNAKE_CASE | `MAX_RETRY_COUNT` |

---

## Clinical Safety Guidelines

> **Patient safety is paramount.** All clinical logic changes require special attention.

1. **Evidence-based only** — cite authoritative sources for dosing/vitals thresholds
2. **Advisory mode** — never auto-submit or auto-fill without doctor confirmation
3. **Confidence levels** — every clinical suggestion must show confidence
4. **DDI severity hierarchy**: `contraindicated > major > moderate > minor`
5. **No PII off-device** — never transmit patient data to external services
6. **Red flags first** — critical findings must always be prominently displayed

Changes to clinical logic (diagnosis engine, DDI checker, dosage calculator, emergency detector) require review by the principal engineer.

---

## Testing Requirements

### Coverage Targets

- Unit tests: ≥ 80% coverage on `lib/` modules
- Integration tests: all critical message-passing flows
- E2E tests: core prescription workflow

### Running Tests

```bash
# All tests
pnpm test

# Unit tests only
pnpm test --config vitest.unit.config.ts

# E2E tests
pnpm test:e2e

# With coverage
pnpm test --coverage
```

### Writing Tests

- Place unit tests alongside source files: `<module>.test.ts`
- Place integration tests in `tests/integration/`
- Use `vitest` for unit/integration, `playwright` for E2E
- Mock chrome extension APIs using `vitest` mocks

---

## Questions?

Open an issue with the `question` label or contact the principal engineer.

_Architected and built by Claudesy._
