<!-- Claudesy's vision, brought to life. -->
# CLAUDE.md — Sentra Assist

## ⚠️ MANDATORY SOP — ALL AGENTS MUST FOLLOW

---

## 📖 START-OF-SESSION PROTOCOL

**BEFORE doing ANY coding task, Claude Code MUST execute these steps IN ORDER:**

### Step 1: Online Research (Best Practice)
```
WebSearch: "[task topic] best practice 2025/2026"
```
- Find current best practices for the task at hand
- Note relevant patterns, libraries, or approaches
- Create mental checklist of quality criteria

### Step 2: Create Working Checklist
Document in response:
```
## Pre-Coding Checklist
- [ ] Best practice reviewed: [source]
- [ ] COGNITORIUM read
- [ ] Previous agent report checked
- [ ] Approach validated
```

### Step 3: Access COGNITORIUM
**Location:** `D:\sentrasolutions\cognitorium`

**Baca MANIFEST.md dan ikuti bootstrap protocol:**
```
1. Read D:\sentrasolutions\cognitorium\MANIFEST.md
   → Resolve {AGENT_ID} dari Identity Table
   → Resolve {PROJECT} dari task/working directory
   → Ikuti READ Protocol (5 langkah berurutan)
```
MANIFEST.md berisi routing lengkap: file apa yang harus dibaca, di mana menulis session log, kapan membuat ADR/CON/PAT, dan bagaimana handover.

### Step 4: Cross-Check & Validate
- Compare task requirements with previous agent's work
- Identify dependencies or conflicts
- Validate approach against best practices found in Step 1

### Step 5: Acknowledge to Chief
```
"Chief, saya sudah:
✓ Research best practice: [source]
✓ Baca COGNITORIUM: [status summary]
✓ Laporan agent sebelumnya: [previous agent findings]
✓ Checklist ready

Siap mulai coding."
```

### Step 6: Begin Coding
Only NOW may you start implementation.

---

## 📝 END-OF-SESSION PROTOCOL

**BEFORE ending session, Claude Code MUST:**

### Step 1: Jalankan WRITE Routing dari MANIFEST.md

```
1. Read D:\sentrasolutions\cognitorium\MANIFEST.md section "WRITE Routing"
2. Jalankan decision tree:
   WAJIB:
   a. CREATE session log → projects/{PROJECT}/sessions/{DATE}-{AGENT_ID}-{TOPIC}.md
      Template: resources/templates/session-log.md
   b. APPEND daily summary → progress/daily/{DATE}.md
   c. APPEND agent session-log → agents/{AGENT_ID}/session-log.md
   KONDISIONAL:
   d. IF keputusan arsitektural → buat ADR
   e. IF pattern reusable → buat PAT
   f. IF konvensi baru → buat CON
   g. IF phase berubah → buat MIG + update index.md
   h. IF ada learning → append learnings.md
```

### Step 2: Isi Write Checklist di session log
Session log template punya checklist di bagian bawah. Isi semua checkbox.

### Step 3: Confirm Handover to Chief
```
"Chief, session selesai.
✓ Session log: cognitorium/projects/{PROJECT}/sessions/{DATE}-{AGENT_ID}-{TOPIC}.md
✓ Daily summary updated
✓ [Optional: ADR/CON/PAT/MIG created]
✓ Handover ready untuk agent berikutnya."
```

---

## 🎯 AGENT INSTRUCTIONS

See **@AGENTS.md** for:
- Project overview & tech stack
- Directory structure
- Coding standards (NON-NEGOTIABLE)
- Design system tokens (IMMUTABLE)
- Commands reference

---

## 📋 QUICK REFERENCE

| Action | Command |
|--------|---------|
| Dev server | `pnpm dev` |
| Type check | `pnpm typecheck` |
| Lint | `pnpm lint` |
| Full quality | `pnpm quality` |
| Build | `pnpm build` |

---

## 🚨 ESCALATION MATRIX

| Topic | Escalate To |
|-------|-------------|
| UI/UX decisions | Antigravity (Jen) |
| Architecture decisions | Chief |
| Clinical safety logic | Chief (requires evidence-based validation) |
| Design token changes | Chief approval required |

---

## 🗂️ COGNITORIUM PATHS

```
D:\sentrasolutions\cognitorium\
├── MANIFEST.md               ← START HERE — Routing engine untuk semua agent
├── registry\
│   ├── decisions\            ← Architecture Decision Records (ADR)
│   ├── conventions\          ← Coding standards & conventions (CON)
│   └── patterns\             ← Reusable patterns (PAT)
├── agents\
│   └── {AGENT_ID}\           ← Per-agent state (profile, session-log, learnings)
├── projects\assist\
│   ├── index.md              ← Project status & phases
│   ├── architecture.md       ← Technical architecture
│   ├── sessions\             ← Per-session handover logs
│   ├── decisions\            ← Project-scoped ADRs
│   └── migrations\           ← Phase transition logs
├── progress\daily\           ← Chief's daily summary view
└── resources\templates\      ← Templates untuk semua file types
```

---

**This SOP is NON-NEGOTIABLE. Failure to follow results in incomplete handover.**
