<!-- Designed and constructed by Claudesy. -->
# Commit Convention

This repository follows the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification.

## Format

```
<type>(<scope>): <short description>

[optional body]

[optional footer(s)]
```

### Rules

- **type**: required, lowercase
- **scope**: optional, lowercase, describes the module affected
- **short description**: imperative mood, no capital first letter, no period at end
- **body**: optional, explains the *why*, not the *what*
- **footer**: optional, references issues or breaking changes

---

## Commit Types

| Type | Description | Example |
|------|-------------|---------|
| `feat` | New feature for the user | `feat(diagnosis): add hypertension crisis triage` |
| `fix` | Bug fix for the user | `fix(filler): correct autocomplete timing` |
| `chore` | Maintenance, tooling, dependency updates | `chore(deps): upgrade wxt to v0.21.0` |
| `docs` | Documentation changes only | `docs(readme): add pnpm setup instructions` |
| `refactor` | Code restructuring, no behavior change | `refactor(engine): extract symptom scorer` |
| `test` | Adding or modifying tests | `test(ddi-checker): add contraindicated drug pair cases` |
| `perf` | Performance improvements | `perf(rag): cache ICD-10 search index` |
| `ci` | CI/CD configuration changes | `ci: add security scanning workflow` |
| `style` | Formatting, whitespace (no logic change) | `style: format with prettier` |
| `revert` | Revert a previous commit | `revert: feat(diagnosis): add trajectory scoring` |

---

## Scopes

Common scopes for this project:

| Scope | Description |
|-------|-------------|
| `diagnosis` | Iskandar Diagnosis Engine |
| `ddi` | Drug-Drug Interaction checker |
| `filler` | Auto-fill engine |
| `scraper` | DOM scraping subsystem |
| `rag` | ICD-10 RAG search |
| `emergency` | Emergency detector |
| `rme` | RME transfer/payload mapping |
| `das` | Dynamic Adaptive Scraping |
| `api` | API clients (Vertex AI, DeepSeek, etc.) |
| `ui` | React components and UI |
| `deps` | Dependency updates |
| `config` | Configuration files |
| `docs` | Documentation |

---

## Breaking Changes

Prefix the footer with `BREAKING CHANGE:`:

```
feat(api): change message protocol to v2

BREAKING CHANGE: Message format changed. Update all consumers to use new typed protocol.
```

---

## Examples

```bash
# Feature
feat(emergency): add occult shock detection algorithm

# Fix with issue reference
fix(filler): resolve race condition in resep auto-fill

Closes #42

# Chore
chore(deps): upgrade typescript to 5.8.3

# Breaking change
feat(messaging): redesign typed message contracts

BREAKING CHANGE: All message handlers must be updated to new v2 protocol.
```

_Architected and built by the one and only Claudesy._
