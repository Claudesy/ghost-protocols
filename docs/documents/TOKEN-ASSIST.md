# TOKEN-ASSIST — Sentra Assist Design Token Registry

> **Authority:** Single Source of Truth for ALL Page 1 visual properties
> **Version:** 1.0.0 | **Date:** 2026-02-09
> **Theme:** Dark Carbon Neumorphism
> **Status:** ENFORCED — Any visual change MUST reference and update this document

---

## 1. GLOBAL FOUNDATION

### 1.1 Body / Root Canvas

| Token | Value | Notes |
|---|---|---|
| `body.background` | `#1e1e21` | Base canvas color |
| `#root.background` | `linear-gradient(180deg, #1e1e24 0%, #16161a 100%)` | Vertical gradient overlay |
| `#root.radial-glow` | `radial-gradient(ellipse 80% 50% at 50% 0%, rgba(255,69,0,0.03) 0%, transparent 60%)` | Subtle top-center warm glow |
| `body.font-family` | `'Geist', -apple-system, BlinkMacSystemFont, sans-serif` | Primary UI font |
| `body.font-size` | `13px` | Base size |
| `body.font-weight` | `400` | Base weight |
| `body.line-height` | `1.5` | Base leading |
| `body.color` | `#e6e1d6` | Base text (warm cream) |
| `body.font-smoothing` | `antialiased` (webkit), `grayscale` (moz) | Sharp rendering |
| `body.text-rendering` | `geometricPrecision` | Subpixel accuracy |

### 1.2 Scrollbar

| Token | Value |
|---|---|
| `scrollbar.width` | `4px` |
| `scrollbar-track.bg` | `#101012` |
| `scrollbar-thumb.bg` | `#202226` |
| `scrollbar-thumb.radius` | `2px` |

---

## 2. CSS VARIABLES (`:root`)

### 2.1 Surface Palette

| Variable | Value | Usage |
|---|---|---|
| `--surface-primary` | `#1a1b1c` | Input fields, deep inset areas |
| `--surface-secondary` | `#22222a` | Secondary surfaces |
| `--surface-tertiary` | `#2a2a32` | Tertiary surfaces |
| `--surface-elevated` | `#2e2e38` | Elevated cards |
| `--surface-hover` | `#34343e` | Hover state |

### 2.2 Text Palette

| Variable | Value | Usage |
|---|---|---|
| `--text-primary` | `#f8f4e8` | Primary text (warm cream) |
| `--text-secondary` | `#b8b8be` | Secondary text |
| `--text-tertiary` | `#9a9aa2` | Labels, tertiary text |
| `--text-muted` | `#5a5a62` | Muted / disabled text |
| `--platinum` | `#f4efe6` | Legacy bright cream |
| `--cream` | `#dcd7cc` | Legacy cream |
| `--muted` | `#c0bbb2` | Legacy muted |

### 2.3 Border Palette

| Variable | Value | Usage |
|---|---|---|
| `--border-subtle` | `rgba(255,255,255, 0.08)` | Default borders |
| `--border-medium` | `rgba(255,255,255, 0.12)` | Hover borders |
| `--border-strong` | `rgba(255,255,255, 0.18)` | Focus / strong emphasis |

### 2.4 Accent Colors

| Variable | Value | Usage |
|---|---|---|
| `--accent-primary` | `#FF4500` | Primary action (OrangeRed) |
| `--accent-secondary` | `#4a9eff` | Secondary action (Blue) |
| `--accent-hover` | `#FF5722` | Hover accent |
| `--accent-bg` | `rgba(255,69,0, 0.08)` | Accent background tint |
| `--pulse-500` | `#FF4500` | Status pulse dot |
| Neon Green | `#39ff14` | AutoSen, uplink, connected status |
| Cyan | `#00FFFF` | Vital sign input values |

### 2.5 Glassmorphism Tokens

| Variable | Value |
|---|---|
| `--glass-bg` | `rgba(255,255,255, 0.03)` |
| `--glass-bg-hover` | `rgba(255,255,255, 0.05)` |
| `--glass-border` | `rgba(255,255,255, 0.12)` |
| `--glass-blur` | `12px` |
| `--glass-shadow` | `0 8px 32px 0 rgba(0,0,0, 0.37)` |

### 2.6 Motion Tokens

| Variable | Value | Usage |
|---|---|---|
| `--motion-fast` | `180ms` | Quick micro-interactions |
| `--motion-medium` | `260ms` | Standard transitions |
| `--motion-slow` | `420ms` | Emphasis animations |
| `--motion-ease` | `cubic-bezier(0.22, 1, 0.36, 1)` | Smooth decel |
| `--motion-overshoot` | `cubic-bezier(0.18, 0.89, 0.32, 1.28)` | Bounce spring |

---

## 3. TYPOGRAPHY SCALE

### 3.1 Type Classes

| Class | Size | Weight | Leading | Tracking | Transform | Notes |
|---|---|---|---|---|---|---|
| `.text-title` | `12px` | `600` | `1.3` | `0.8px` | `uppercase` | Section headers |
| `.text-subtitle` | `11px` | `600` | `1.4` | — | — | Subsection headers |
| `.text-body` | `13px` | `500` | `1.4` | — | — | Body text |
| `.text-caption` | `11px` | `600` | — | `0.5px` | `uppercase` | Labels |
| `.text-small` | `11px` | `400` | — | — | — | Metadata |
| `.text-mono` | — | — | — | — | — | `'Geist Mono', monospace` |

### 3.2 Header Emboss (Raleway)

| Class | Font | Weight | Size | Tracking | Color | Text-Shadow | Opacity |
|---|---|---|---|---|---|---|---|
| `.header-title-emboss` | Raleway | `200` | `18px` | `1px` | `#f8f4e8` | `0 2px 4px rgba(0,0,0,0.7), 0 -1px 0 rgba(255,255,255,0.08), 0 1px 0 rgba(0,0,0,0.9)` | `1` |
| `.header-subtitle-emboss` | Raleway | `300` | inherit | `0.5px` | `#f8f4e8` | same as above | `0.8` |

### 3.3 Data Fonts

| Context | Font | Size | Weight | Color |
|---|---|---|---|---|
| Vital sign values | `JetBrains Mono` | `13px` | `600` | `#00FFFF` |
| Section subtitles | `JetBrains Mono` | `10px` | `400` | `var(--text-tertiary)` |
| Confidence value | `Geist Mono` | `11px` | `700` | `var(--accent-primary)` |
| Guidelines label | `JetBrains Mono` | — | `600` | `#39ff14` |
| MOVI label | `JetBrains Mono` | `10px` | `700` | `#00FFFF` |
| SENTRATYPE label | `JetBrains Mono` | `10px` | `700` | `#39ff14` |

---

## 4. NEUMORPHIC COMPONENT TOKENS

### 4.1 `.neu-card` — Elevated Surface

| Property | Value |
|---|---|
| `background` | `linear-gradient(155deg, #24242a 0%, #202026 100%)` |
| `border-radius` | `14px` |
| `border` | `1px solid var(--border-subtle)` |
| `box-shadow` | `0 1px 3px rgba(0,0,0,0.3), 0 4px 8px rgba(0,0,0,0.2), 0 8px 16px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.03)` |
| `transition` | `all 0.2s cubic-bezier(0.4, 0, 0.2, 1)` |
| `:hover border` | `var(--border-medium)` |

### 4.2 `.neu-card-inset` — Recessed Surface

| Property | Value |
|---|---|
| `background` | `linear-gradient(145deg, #16161a 0%, #1a1b1c 100%)` |
| `border-radius` | `12px` |
| `border` | `1px solid rgba(0,0,0, 0.4)` |
| `box-shadow` | `inset 0 2px 4px rgba(0,0,0,0.4), inset 0 1px 2px rgba(0,0,0,0.3), 0 1px 0 rgba(255,255,255,0.02)` |

### 4.3 `.neu-tab` — Flat Tab (Inactive)

| Property | Value |
|---|---|
| `background` | `transparent` |
| `border-radius` | `8px` |
| `font-size` | `13px` |
| `cursor` | `pointer` |

### 4.4 `.neu-tab-active` — Inset Tab (Active)

| Property | Value |
|---|---|
| `background` | `linear-gradient(145deg, #1a1b1c 0%, #16161a 100%)` |
| `box-shadow` | `inset 0 2px 3px rgba(0,0,0,0.35), inset 0 1px 2px rgba(0,0,0,0.25), 0 0 0 1px rgba(255,69,0,0.15)` |
| `::after` | `width: 40%, height: 2px, bg: var(--accent-primary), shadow: 0 0 8px rgba(255,69,0,0.4)` |

### 4.5 `.neu-action-btn` — Primary Action

| Property | Value |
|---|---|
| `background` | `linear-gradient(135deg, #FF4500 0%, #D32F2F 100%)` |
| `border-radius` | `14px` |
| `box-shadow` | `0 4px 12px rgba(255,69,0,0.35), 0 8px 22px rgba(255,69,0,0.2), inset 0 1px 0 rgba(255,255,255,0.15)` |

### 4.6 `.neu-logo` — Logo Container

| Property | Value |
|---|---|
| `background` | `linear-gradient(155deg, #242428 0%, #262628 100%)` |
| `border-radius` | `12px` |
| `border` | `1px solid rgba(255,255,255,0.03)` |
| `box-shadow` | `0 1px 2px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.02)` |

---

## 5. SECTION COMPONENTS

### 5.1 `.ttv-section` — Vital Signs / Medical History Container

| Property | Value |
|---|---|
| `background` | `#21222a` |
| `border-radius` | `12px` |
| `padding` | `18px` |
| `border` | `1px solid rgba(255,255,255,0.06)` |
| `box-shadow` | `0 2px 6px rgba(0,0,0,0.3)` |

### 5.2 `.glass-card` — Medical History Container

| Property | Value |
|---|---|
| `background` | `#21222a` |
| `border-radius` | `12px` |
| `border` | `1px solid rgba(255,255,255,0.06)` |
| `box-shadow` | `0 2px 6px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.02)` |
| `:hover border` | `rgba(255,255,255,0.08)` |

### 5.3 `.ttv-section-title`

| Property | Value |
|---|---|
| `font-size` | `12px` |
| `font-weight` | `700` |
| `color` | `var(--text-primary)` |
| `text-transform` | `uppercase` |
| `letter-spacing` | `0.8px` |

### 5.4 `.ttv-section-subtitle`

| Property | Value |
|---|---|
| `font-size` | `10px` |
| `font-weight` | `400` |
| `font-family` | `JetBrains Mono` |
| `color` | `var(--text-tertiary)` |
| `letter-spacing` | `0.3px` |

---

## 6. INPUT FIELD TOKENS

### 6.1 `.ttv-input-with-unit` / `.ttv-bp-input` — Input Container

| Property | Value |
|---|---|
| `background` | `linear-gradient(145deg, #1a1b1c 0%, #16161a 100%)` |
| `border` | `1px solid rgba(255,255,255,0.08)` |
| `border-radius` | `10px` |
| `padding` | `0 14px` |
| `box-shadow` | `inset 0 2px 4px rgba(0,0,0,0.35), inset 0 1px 2px rgba(0,0,0,0.25)` |
| `:focus-within border` | `rgba(255,255,255,0.12)` |
| `:focus-within shadow+` | `0 0 0 1px rgba(255,69,0,0.2)` |

### 6.2 `.ttv-input` — Numeric Input

| Property | Value |
|---|---|
| `font-size` | `13px` |
| `font-weight` | `600` |
| `font-family` | `JetBrains Mono` |
| `color` | `#00FFFF` |
| `padding` | `12px 0` |

### 6.3 `.ttv-textarea` — Textarea

| Property | Value |
|---|---|
| `background` | `linear-gradient(145deg, #1a1b1c 0%, #16161a 100%)` |
| `border` | `1px solid rgba(255,255,255,0.08)` |
| `border-radius` | `10px` |
| `padding` | `12px 14px` |
| `font-size` | `13px` |
| `font-weight` | `400` |
| `font-family` | `Inter, -apple-system, sans-serif` |
| `color` | `var(--text-primary)` |
| `min-height` | `80px` |
| `line-height` | `1.6` |
| `::placeholder` | `rgba(255,255,255,0.4)`, `12px`, italic |

### 6.4 `.ttv-label` — Field Label

| Property | Value |
|---|---|
| `font-size` | `9px` |
| `font-weight` | `700` |
| `color` | `var(--text-tertiary)` |
| `text-transform` | `uppercase` |
| `letter-spacing` | `0.5px` |

### 6.5 `.ttv-unit` — Unit Suffix

| Property | Value |
|---|---|
| `font-size` | `11px` |
| `color` | `var(--text-tertiary)` |
| `font-weight` | `600` |
| `letter-spacing` | `0.3px` |

---

## 7. BUTTON TOKENS

### 7.1 AutoSen Button (`.ttv-autosen-btn`)

| Property | Value |
|---|---|
| `background` | `linear-gradient(145deg, #202022 0%, #1e1e20 100%)` |
| `color` | `#39ff14` |
| `border` | `1px solid rgba(57,255,20,0.25)` |
| `padding` | `6px 12px` |
| `border-radius` | `8px` |
| `font-size` | `11px` |
| `font-weight` | `700` |
| `box-shadow` | `inset 0 1px 3px rgba(0,0,0,0.3), 0 1px 0 rgba(255,255,255,0.02)` |
| `text-shadow` | `0 0 8px rgba(57,255,20,0.3)` |
| `:hover color` | `#4aff29` |
| `:hover border` | `rgba(57,255,20,0.4)` |

### 7.2 Pregnancy Button States

| State | Color | Border | Text-Shadow |
|---|---|---|---|
| `.ttv-pregnancy-inactive` | `var(--text-tertiary)` | `rgba(255,255,255,0.06)` | none |
| `.ttv-pregnancy-inactive:hover` | `#39ff14` | `rgba(57,255,20,0.25)` | `0 0 8px rgba(57,255,20,0.3)` |
| `.ttv-pregnancy-active` | `#39ff14` | `rgba(57,255,20,0.25)` | `0 0 8px rgba(57,255,20,0.3)` |

All share: `background: linear-gradient(145deg, #202022 0%, #1e1e20 100%)`, `box-shadow: inset 0 1px 3px rgba(0,0,0,0.3), 0 1px 0 rgba(255,255,255,0.02)`

### 7.3 Preset Select (`.ttv-preset-select`)

Same base as pregnancy inactive + dropdown chevron SVG, `:hover` → green neon.

### 7.4 Mode Button (`.ttv-mode-btn`)

| Property | Value |
|---|---|
| `background` | `linear-gradient(145deg, #1c1c1e 0%, #202022 100%)` |
| `border` | `1px solid rgba(255,255,255,0.04)` |
| `padding` | `6px 14px` |
| `border-radius` | `6px` |
| `font-size` | `11px` |
| `font-weight` | `600` |
| `min-width` | `65px` |
| HT state bg | `linear-gradient(145deg, #2a1515 0%, #321a1a 100%)` |
| HT state color | `#f87171` |
| HT animation | `htGlow 2s ease-in-out infinite` |

### 7.5 Uplink Button (`.ttv-btn-uplink`)

| Property | Value |
|---|---|
| `width` | `100%` |
| `text-transform` | `uppercase` |
| `letter-spacing` | `0.5px` |
| `font-size` | `12px` |
| `color` | `#39ff14` |
| `border-color` | `rgba(57,255,20,0.25)` |
| `text-shadow` | `0 0 12px rgba(57,255,20,0.4)` |
| Success color | `#10b981` |
| Error color | `#ef4444` |

### 7.6 Primary / Secondary Buttons

| Class | Background | Shadow |
|---|---|---|
| `.ttv-btn-primary` | `linear-gradient(135deg, var(--accent-primary) 0%, #e85a2f 100%)` | `0 2px 6px rgba(255,69,0,0.25), 0 4px 12px rgba(255,69,0,0.15), inset 0 1px 0 rgba(255,255,255,0.15)` |
| `.ttv-btn-secondary` | `linear-gradient(145deg, #262628 0%, #2b2b2e 100%)` | `inset 0 2px 4px rgba(0,0,0,0.35), inset 0 1px 2px rgba(0,0,0,0.2), 0 1px 0 rgba(255,255,255,0.03)` |

---

## 8. PATIENT HEADER (Redesigned)

### 8.1 Container — `neu-card-inset p-1.5 mb-4`

Uses `.neu-card-inset` tokens (see 4.2).

### 8.2 Patient Name Tab

| Property | Value |
|---|---|
| Class | `neu-tab flex-1 py-2 px-2 rounded-lg` |
| Font | `.text-body .text-platinum .font-medium` |
| `font-size` | `13px` |
| `white-space` | `nowrap` |
| `overflow` | `hidden` |
| `text-overflow` | `ellipsis` |

### 8.3 Age / Refresh / Disease Badge Tabs

| Property | Value |
|---|---|
| Class | `neu-tab py-2 px-2 rounded-lg` |
| Font | `.text-body .text-muted .font-medium` |
| Disease color | `#EF4444` |

---

## 9. TAB NAVIGATION (Top Bar)

### 9.1 Container — `neu-card-inset p-1.5 mb-7`

Uses `.neu-card-inset` tokens (see 4.2).

### 9.2 Tab Items

| State | Class | Font Properties |
|---|---|---|
| Inactive | `neu-tab flex-1 py-2.5 px-3 rounded-lg text-center text-small font-medium text-muted` | 11px, 400w |
| Active | `neu-tab-active flex-1 py-2.5 px-3 rounded-lg text-center text-small font-semibold text-platinum` | 11px, 600w |

---

## 10. BOTTOM ACTION TABS (Satellite Processing)

### 10.1 Container — `neu-card-inset p-1.5 mt-6`

Uses `.neu-card-inset` tokens (see 4.2).

### 10.2 Tab Overrides (`.ttv-action-tabs`)

| Property | Value |
|---|---|
| `.neu-tab` border | `1px solid rgba(255,255,255,0.06)` |
| `.neu-tab-active` bg | `rgba(255,255,255,0.03)` |
| `.neu-tab-active` border | `1px solid rgba(255,255,255,0.08)` |
| `::after` | `display: none` (disabled for action tabs) |

### 10.3 Text Scramble Effect

| Property | Value |
|---|---|
| `font-family` | `JetBrains Mono` |
| `letter-spacing` | `0` |
| `font-size` | `12px` |
| `white-space` | `nowrap` |
| Target text | `'Satellite Processing'` (20 chars max) |

---

## 11. STATUS BARS

### 11.1 MOVI Status Bar

| Property | Value |
|---|---|
| `background` | `linear-gradient(145deg, #1a1b1c 0%, #1e1e22 100%)` |
| `border` | `1px solid rgba(0,255,255,0.4)` |
| `border-radius` | `10px` |
| `padding` | `10px 16px` |
| Label color | `#00FFFF` |

### 11.2 SENTRATYPE Status Bar

| Property | Value |
|---|---|
| `background` | `linear-gradient(145deg, #1a1b1c 0%, #1e1e22 100%)` |
| `border` | `1px solid rgba(57,255,20,0.4)` |
| `border-radius` | `10px` |
| `padding` | `10px 16px` |
| Label color | `#39ff14` |

---

## 12. SCREENING FLAGS (Allergy | Mental Health | Nicotine Use)

### 12.1 Container — `neu-card-inset p-1.5`

Uses `.neu-card-inset` tokens (see 4.2).

### 12.2 Flag Tabs

| State | Class | Notes |
|---|---|---|
| Inactive | `neu-tab py-1.5 px-3 rounded-lg text-small text-muted cursor-pointer` | Same as top nav |
| Active | `neu-tab-active py-1.5 px-3 rounded-lg text-small font-semibold text-platinum cursor-pointer` | Inset + accent underline |

---

## 13. FOOTER

### 13.1 Container

| Property | Value |
|---|---|
| `margin-top` | `mt-10` (40px) |
| `padding-top` | `pt-6` (24px) |
| `border-top` | `1px solid rgba(255,255,255,0.04)` |
| `pointer-events` | `none` |
| Layout | `flex flex-col items-center gap-3` |

### 13.2 Institution Label

| Property | Value |
|---|---|
| Class | `.header-subtitle-emboss` |
| `font-size` | `12px` |
| `letter-spacing` | `1px` |

### 13.3 Connected Status

| Property | Value |
|---|---|
| Dot size | `w-1.5 h-1.5` (6px) |
| Dot color | `#39ff14` |
| Dot glow | `0 0 6px rgba(57,255,20,0.4)` |
| Text size | `10px` |
| Text color | `var(--text-tertiary)` |
| Text weight | `500` |

### 13.4 Divider

| Property | Value |
|---|---|
| `width` | `40px` |
| `height` | `1px` |
| `background` | `rgba(255,255,255,0.06)` |

### 13.5 Legal Notice

| Property | Value |
|---|---|
| `font-size` | `10.5px` |
| `font-weight` | `400` |
| `color` | `var(--text-muted)` |
| `line-height` | `1.6` |
| `letter-spacing` | `0.2px` |
| `text-align` | `center` |
| `max-width` | `280px` |
| "LEGAL NOTICE" weight | `600` |
| "LEGAL NOTICE" color | `rgba(245,158,11,0.6)` |
| Dot separator color | `rgba(255,255,255,0.15)` |

### 13.6 SID (Ghost Code)

| Property | Value |
|---|---|
| `font-size` | `6px` |
| `color` | `rgba(255,255,255,0.04)` |
| `letter-spacing` | `0.5px` |
| `user-select` | `none` |

---

## 14. HEADER (App Title)

### 14.1 Logo Container

| Property | Value |
|---|---|
| Class | `neu-logo w-14 h-14 rounded-xl` |
| Image | `sentra.png`, `w-12 h-12 object-contain` |

### 14.2 Title Stack

| Element | Class/Style | Size |
|---|---|---|
| App name | `.header-title-emboss` | 18px, Raleway 200 |
| Subtitle (IAR) | `.text-small .header-subtitle-emboss` | 11px, Raleway 300 |
| Author | `.text-small .header-subtitle-emboss mt-1` | 11px, Raleway 300 |

---

## 15. AI NARRATIVE CARD

| Property | Value |
|---|---|
| `background` | `linear-gradient(155deg, #2b2b2e 0%, #1d1d21 100%)` |
| `border` | `1px solid rgba(255,255,255,0.04)` |
| `border-radius` | `12px` |
| `padding` | `14px` |
| `box-shadow` | `0 3px 8px rgba(0,0,0,0.45), 0 6px 16px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.04)` |
| AI Badge | `linear-gradient(135deg, #FF5722 0%, #E53935 100%)`, 9px, 700w, `0 0 4px rgba(255,87,34,0.5)` |

---

## 16. ANIMATION TOKENS

| Name | Duration | Easing | Usage |
|---|---|---|---|
| `sentraViewIn` | `--motion-medium` | `--motion-ease` | Page entry |
| `sentraPanelIn` | `--motion-medium` | `--motion-ease` | Panel entry |
| `inputFlash` | `0.6s` | `ease-out` | AutoSen fill flash |
| `containerFlash` | `0.6s` | `ease-out` | Input container flash |
| `promptBlink` | `1s` | `ease-in-out infinite` | Red prompt `>` indicator |
| `htGlow` | `2s` | `ease-in-out infinite` | HT mode pulse |
| `emergencyTextBlink` | `1s` | `ease-in-out infinite` | Emergency tab blink |
| `emergencyDotPulse` | `1s` | `ease-in-out infinite` | Emergency dot pulse |
| `alertPulse` | `2.5s` | `ease-in-out infinite` | Alert card subtle pulse |
| `scrambleGlow` | `0.15s` | `ease-in-out infinite alternate` | Text scramble opacity |
| `spinIn` | `0.4s` | `cubic-bezier(0.4, 0, 0.2, 1)` | Mode text 3D spin |

---

## 17. SEVERITY COLOR MAP

| Level | Text | Background Tint | Border |
|---|---|---|---|
| Critical | `#ef4444` | `rgba(239,68,68, 0.12)` | `rgba(239,68,68, 0.3)` |
| High | `#f97316` | `rgba(249,115,22, 0.12)` | `rgba(249,115,22, 0.3)` |
| Warning | `#f59e0b` | `rgba(245,158,11, 0.12)` | `rgba(245,158,11, 0.3)` |
| Success | `#10b981` | `rgba(16,185,129, 0.15)` | `rgba(16,185,129, 0.4)` |

---

## 18. CLINICAL TRAJECTORY (PAGE 2) COMPONENTS

### 18.1 `.ct-neu-shell` — Page 2 Container

Scoping wrapper for Clinical Trajectory page. All CT-specific styles are scoped to this shell.

### 18.2 `.ct-neu-chip` — Data Chip

| Property | Value |
|---|---|
| `font-family` | `JetBrains Mono` |
| `font-size` | `9px` |
| `font-weight` | `700` |
| `text-transform` | `uppercase` |
| `letter-spacing` | `0.5px` |
| `padding` | `3px 8px` |
| `border-radius` | `6px` |
| `border` | `1px solid` (color varies) |
| `background` | `linear-gradient(145deg, #16161a 0%, #1a1b1c 100%)` |
| `box-shadow` | `inset 0 1px 3px rgba(0,0,0,0.35), 0 1px 0 rgba(255,255,255,0.02)` |

**Usage:** Status badges, trend labels, metric chips. Color applied via inline style.

### 18.3 `.ct-neu-cell` — Metric Tile

| Property | Value |
|---|---|
| `background` | `linear-gradient(145deg, #16161a 0%, #1a1b1c 100%)` |
| `border-radius` | `6px` |
| `border` | `1px solid rgba(0,0,0,0.4)` |
| `box-shadow` | `inset 0 2px 4px rgba(0,0,0,0.4), inset 0 1px 2px rgba(0,0,0,0.3), 0 1px 0 rgba(255,255,255,0.02)` |
| `padding` | `8px` |

**Usage:** Compact data display tiles for acute risk scores, breach counts, etc.

### 18.4 `.ct-neu-cell-label` — Cell Label

| Property | Value |
|---|---|
| `font-size` | `9px` |
| `font-weight` | `700` |
| `color` | `var(--text-tertiary)` |
| `text-transform` | `uppercase` |
| `letter-spacing` | `0.5px` |
| `font-family` | `JetBrains Mono` |

**Usage:** Labels inside metric tiles.

### 18.5 CTHeader Component

Located at: `components/clinical/CTHeader.tsx`

Matches Page 1 header pattern:
- `.neu-logo` container with Sentra logo
- `.header-title-emboss` for title
- `.header-subtitle-emboss` for subtitle

**Title:** "Clinical Trajectory"
**Subtitle:** "Analisis Perjalanan Klinis"

---

_Maintained by: Sentra Solutions — Architected by dr Ferdi Iskandar_
_TOKEN-ASSIST v1.1.0 | Dark Carbon Neumorphism | 2026-02-09_
