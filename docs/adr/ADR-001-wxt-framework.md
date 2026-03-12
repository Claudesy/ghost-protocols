<!-- Claudesy's vision, brought to life. -->
# ADR-001: Use WXT as Chrome Extension Framework

**Status**: Accepted
**Date**: 2026-01-15
**Authors**: dr. Ferdi Iskandar

---

## Context

Building a Chrome Extension (MV3) with React + TypeScript requires a build system that:
- Supports HMR (Hot Module Replacement) for fast development
- Auto-generates the manifest from config
- Handles multiple entrypoints (background, content, sidepanel)
- Integrates with Vite's build ecosystem

## Decision

Use [WXT](https://wxt.dev) (v0.20+) as the Chrome Extension framework.

## Rationale

| Factor | WXT | Raw Vite | CRX |
|--------|-----|----------|-----|
| HMR support | ✅ Full | ⚠️ Manual | ❌ None |
| Manifest generation | ✅ Auto | ❌ Manual | ⚠️ Partial |
| TypeScript | ✅ First-class | ✅ | ✅ |
| React support | ✅ Module | ✅ | ❌ |
| Firefox support | ✅ Built-in | ❌ Manual | ❌ |
| Active maintenance | ✅ | ✅ | ⚠️ |

## Consequences

- **Positive**: Fast iteration cycles with < 2s HMR reloads
- **Positive**: Single config file (`wxt.config.ts`) manages all manifest settings
- **Positive**: Firefox build support at no extra cost
- **Negative**: Framework-specific patterns; learning curve for new contributors
- **Negative**: WXT version upgrades may introduce breaking changes

---

_Architected and built by Claudesy._
