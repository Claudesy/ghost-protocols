# ⌨️ Documentation Keyboard Shortcuts

## 🚀 Quick Access

After reloading VS Code, these shortcuts will be available:

| Shortcut           | Command                             | Description                                |
| ------------------ | ----------------------------------- | ------------------------------------------ |
| `Ctrl+Shift+D`     | **Document: Generate All**          | Complete workflow (auto + generate + open) |
| `Ctrl+Alt+D`       | **Document: Auto-Generate Missing** | Only auto-generate missing docs            |
| `Ctrl+Alt+Shift+D` | **Document: Open in Browser**       | Only open docs in browser                  |

---

## 🎯 Most Used Shortcut

### `Ctrl+Shift+D` - Generate All Documentation

**What it does:**

1. ✅ Auto-generates missing documentation
2. ✅ Generates HTML documentation
3. ✅ Opens documentation in browser

**When to use:**

- Before committing code
- After adding new functions/classes
- When you want to review documentation

---

## 📝 TSDoc Snippets

Type these in TypeScript files and press `Tab`:

| Snippet           | Shortcut                |
| ----------------- | ----------------------- |
| `tsdoc`           | Function documentation  |
| `tsdoc-class`     | Class documentation     |
| `tsdoc-method`    | Method documentation    |
| `tsdoc-interface` | Interface documentation |

---

## 🤖 Mintlify AI Documentation

| Shortcut       | Description                                                  |
| -------------- | ------------------------------------------------------------ |
| `Ctrl+Shift+.` | Generate AI-powered documentation for current function/class |

---

## 🔄 How to Enable

**You need to reload VS Code window first:**

1. Press `Ctrl+Shift+P`
2. Type: "reload window"
3. Select: "Developer: Reload Window"

After reload, all shortcuts will work! ✨

---

## 💡 Pro Tips

### Daily Workflow

```
1. Write code
2. Press Ctrl+Shift+D (generate docs)
3. Review in browser
4. Commit
```

### Quick Documentation Check

```
Ctrl+Alt+D → Check if any docs missing
```

### View Existing Docs

```
Ctrl+Alt+Shift+D → Open docs in browser
```

---

## 🆘 Troubleshooting

### Shortcuts not working?

1. Reload VS Code window (`Ctrl+Shift+P` → "reload window")
2. Check if `.vscode/keybindings.json` exists
3. Try running from Command Palette first

### Conflict with existing shortcuts?

Edit `.vscode/keybindings.json` and change the `key` values to your preference.

---

## 📚 Alternative Access Methods

If shortcuts don't work, you can always use:

1. **Command Palette**: `Ctrl+Shift+P` → "Tasks: Run Task"
2. **Terminal**: `npm run docs:all`
3. **Terminal Menu**: Click "Terminal" → "Run Task..."

---

**Happy documenting, Chief!** 🚀
