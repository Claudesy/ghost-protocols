# Auto-Commit System

Automatic git commit system for solo development workflow.

## 🚀 Quick Start

### Manual Commit (One-time)

```bash
npm run commit
```

Commits all current changes with a smart auto-generated message.

### Commit + Push

```bash
npm run commit:push
```

Commits and automatically pushes to remote.

### Watch Mode (Auto-commit every X minutes)

```bash
npm run commit:watch 5
```

Auto-commits every 5 minutes. Replace `5` with your preferred interval.

## 📝 Features

### Smart Commit Messages

The script automatically categorizes your changes and generates descriptive commit messages:

```
🔄 Auto-commit: Updated 2 component(s) • Modified 1 lib file(s) • Updated docs
```

### Categories Detected:

- **Components** - Files in `components/` or `entrypoints/`
- **Libraries** - Files in `lib/`
- **Utils** - Files in `utils/`
- **Docs** - Markdown files and `docs/documents/` folder
- **Styles** - CSS/SCSS files
- **Config** - JSON and config files
- **Scripts** - Files in `scripts/`

### File Detection

Shows you exactly what's being committed:

```
📝 Found 3 changed file(s):
   - entrypoints/sidepanel/main.tsx
   - package.json
   - scripts/auto-commit.js
```

## 🎯 Recommended Workflows

### For Active Development

```bash
# Terminal 1: Run dev server
npm run dev

# Terminal 2: Watch mode (auto-commit every 10 minutes)
npm run commit:watch 10
```

### Before Taking a Break

```bash
npm run commit:push
```

### End of Day

```bash
npm run commit:push
```

## ⚙️ Configuration

Edit `scripts/auto-commit.js` to customize:

```javascript
const CONFIG = {
  // Commit message prefix
  prefix: '🔄 Auto-commit:',

  // Additional ignore patterns
  ignorePatterns: ['node_modules/', '.wxt/', '.output/'],
};
```

## 🔒 Safety

- Respects `.gitignore` automatically
- Shows all changes before committing
- Never force-pushes
- Safe for solo development

## 💡 Tips

1. **Use watch mode during active coding sessions**

   ```bash
   npm run commit:watch 15
   ```

2. **Manual commit when you want control**

   ```bash
   npm run commit
   ```

3. **Quick save and push**
   ```bash
   npm run commit:push
   ```

## 🎨 Customization

### Change Commit Message Style

Edit the `generateCommitMessage()` function in `scripts/auto-commit.js`.

### Add Custom Categories

Add new categories in the `categories` object:

```javascript
const categories = {
  docs: [],
  components: [],
  // Add your custom category
  tests: [],
};
```

---

**Created for solo developers who want to focus on coding, not git commits! 🚀**

