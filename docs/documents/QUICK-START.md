# 📚 Documentation Quick Start

## 🚀 One-Click Documentation

### Method 1: Command Palette (Recommended)

1. Press `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (Mac)
2. Type: **"Tasks: Run Task"**
3. Select: **"Document: Generate All"**
4. Done! ✨

### Method 2: Terminal

```bash
npm run docs:all
```

### Method 3: Keyboard Shortcut

Press `Ctrl+Shift+B` → Select **"Document: Generate All"**

---

## 📖 What It Does

The one-click command runs:

1. ✅ **Auto-generates** missing documentation
2. ✅ **Generates** HTML documentation
3. ✅ **Opens** documentation in browser

---

## 🎯 Available Commands

### Via Command Palette (`Ctrl+Shift+P` → "Tasks: Run Task")

| Task                                | Description                                 |
| ----------------------------------- | ------------------------------------------- |
| **Document: Generate All**          | Complete workflow (auto + generate + serve) |
| **Document: Auto-Generate Missing** | Only auto-generate missing docs             |
| **Document: Generate HTML**         | Only generate HTML docs                     |
| **Document: Open in Browser**       | Only open docs in browser                   |

### Via Terminal

```bash
# Complete workflow
npm run docs:all

# Individual commands
npm run docs:auto        # Auto-generate
npm run docs:generate    # Generate HTML
npm run docs:serve       # Open in browser

# Specific directories
npm run docs:auto:lib
npm run docs:auto:utils
npm run docs:auto:components
```

---

## ✍️ TSDoc Snippets

Type these in TypeScript files and press `Tab`:

| Snippet           | Description             |
| ----------------- | ----------------------- |
| `tsdoc`           | Function documentation  |
| `tsdoc-class`     | Class documentation     |
| `tsdoc-method`    | Method documentation    |
| `tsdoc-interface` | Interface documentation |

**Example:**

````typescript
// Type "tsdoc" + Tab
/**
 * Brief description
 *
 * @param paramName - Parameter description
 * @returns Return value description
 *
 * @example
 * ```typescript
 * // Example usage
 * ```
 */
````

---

## 🤖 AI-Assisted Documentation (Mintlify)

1. Place cursor in function/class
2. Press `Ctrl+Shift+.`
3. AI generates detailed docs
4. Review and refine

---

## 📁 Output Location

Documentation is generated at:

```
docs/api/index.html
```

Open in browser at: `http://localhost:8080`

---

## 🔄 Daily Workflow

**Before committing:**

```bash
npm run docs:all
git add .
git commit -m "feat: add feature with documentation"
```

---

## 🆘 Troubleshooting

### Port 8080 in use?

```bash
npx http-server ./docs/api -p 8081 -o
```

### Docs not updating?

```bash
rm -rf docs/api
npm run docs:generate
```

---

## 📚 More Info

- Full guide: [`DOCUMENTATION-AUTOMATION.md`](./DOCUMENTATION-AUTOMATION.md)
- Example file: [`utils/example-documented.ts`](../utils/example-documented.ts)
