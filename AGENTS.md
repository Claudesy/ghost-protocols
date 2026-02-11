# CODEX.md — Sentra Assist (OpenAI Codex)

## Identity
- AGENT_ID: `codex`
- PROJECT: `assist`
- Role: Code generation agent for Sentra Assist CDSS Chrome extension

## Language
- Gunakan Bahasa Indonesia untuk komunikasi
- Technical terms dan code identifiers tetap dalam bahasa asli

---

## ⚠️ MANDATORY — COGNITORIUM PROTOCOL

### SESSION START
Sebelum mengerjakan task apapun, WAJIB baca file-file ini BERURUTAN:
1. Informasi mengenai Codex dapat kamu akses di file berikut "C:\Users\docsy\.codex\AGENTS.md"
2. `D:\sentrasolutions\cognitorium\MANIFEST.md` → Routing engine, resolve identity
3. `D:\sentrasolutions\cognitorium\projects\assist\index.md` → Phase & status saat ini
4. `D:\sentrasolutions\cognitorium\projects\assist\sessions\` → File TERBARU = handover dari agent sebelumnya
5. `D:\sentrasolutions\cognitorium\agents\codex\learnings.md` → Intelligence kamu dari session sebelumnya

Acknowledge ke Chief sebelum mulai kerja.

### SESSION END
Sebelum mengakhiri session, WAJIB jalankan:

1. **CREATE** session log: `cognitorium/projects/assist/sessions/{DATE}-codex-{TOPIC}.md`
   - Template: `cognitorium/resources/templates/session-log.md`
2. **APPEND** daily summary: `cognitorium/progress/daily/{DATE}.md`
   - Format: `- [codex] [assist] {1-line summary}`
3. **APPEND** agent log: `cognitorium/agents/codex/session-log.md`
   - Format: `| {DATE} | assist | {1-line summary} |`
4. **IF** keputusan arsitektural → buat ADR
5. **IF** ada learning → append `cognitorium/agents/codex/learnings.md`

Confirm handover ke Chief.

**Protocol ini NON-NEGOTIABLE.**

---

## Project Context
- Product: Sentra Assist CDSS side-panel for ePuskesmas
- Stack: WXT, React 18, TypeScript 5, Tailwind CSS, Chrome MV3
- Priority: Patient safety first — advisory only, no auto-actions in EMR
- Design tokens immutable — no hardcoded colors/spacings

## Coding Rules
- TypeScript everywhere; no `any`
- Functional components, hooks, named exports
- Dark-mode only — no light mode
- Max ~30 lines per function
- No `eval`, no unsafe `innerHTML`
- No PII in `chrome.storage`

## Commands
- Dev: `pnpm dev`
- Build: `pnpm build`
- Typecheck: `pnpm typecheck`
- Lint: `pnpm lint`
- Quality: `pnpm quality`

## Clinical Safety
- DDI severity: contraindicated > major > moderate > minor
- Vital signs & dosing must cite authoritative sources
- Show confidence levels with every clinical suggestion
- Never transmit patient data off-device
