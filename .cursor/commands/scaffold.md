Scaffold a new component or feature for Sentra Assist following the design system:

## Input Required
Ask for: component name, component type (UI | Page | Hook | Util | CDSS), and brief description.

## Scaffold Steps

1. **Determine location** based on type:
   - UI component → `src/components/{name}/`
   - Page → `src/entrypoints/sidepanel/pages/{name}/`
   - Hook → `src/hooks/use{Name}.ts`
   - Util → `src/lib/{name}.ts`
   - CDSS → `src/lib/cdss/{name}/` (flag for Gate 5 review)

2. **Generate files** using Sentra conventions:
   - Component: `{Name}.tsx` + `{Name}.test.tsx` + `index.ts` barrel export
   - Use `import { tokens } from '@/lib/tokens'` for all design values
   - Apply dark-mode-first: background `tokens.colors.surface`, text `tokens.colors.textPrimary`
   - Use Geist font for UI text, JetBrains Mono for data display
   - Include `aria-label` on all interactive elements

3. **Apply TypeScript strict mode:**
   - No `any` types — define explicit interfaces
   - Export types alongside components
   - Use `React.FC<Props>` pattern with named export (no default export)

4. **Generate test stub:**
   - Import from vitest: `describe`, `it`, `expect`
   - Include at minimum: renders without crash, accessibility check, props validation

5. **If CDSS type:** add header comment block:
   ```
   // CLINICAL MODULE — Gate 5 + Gate 6 Required
   // Evidence: [citation needed]
   // Last reviewed: YYYY-MM-DD
   // Reviewer: Chief
   ```

6. **Output:** display created file paths and next steps
