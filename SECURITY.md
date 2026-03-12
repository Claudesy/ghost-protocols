<!-- Blueprinted & built by Claudesy. -->
# Security Policy

## Supported Versions

| Version | Supported |
|---------|-----------|
| 1.0.x   | ✅ Active |
| < 1.0   | ❌ End of Life |

## Security Model

Sentra Assist is a Chrome Extension that operates entirely client-side. Understanding the security model:

### Data Handling

- **No remote transmission of patient data** — all clinical data stays on-device in `chrome.storage.local`
- **Extension-private storage** — `chrome.storage.local` is isolated per extension
- **No backend required** — zero server-side processing of patient information
- **24-hour TTL** — encounter data is automatically cleared after 24 hours

### Permissions

The extension requests the following Chrome permissions:

| Permission | Justification |
|-----------|---------------|
| `activeTab` | Read ePuskesmas page content for data extraction |
| `storage` | Persist encounter state across pages |
| `sidePanel` | Display the clinical decision support panel |
| `identity` | OAuth2 for Vertex AI (Gemini) API access |
| `scripting` | Inject auto-fill scripts into ePuskesmas pages |
| `host_permissions` (ePuskesmas) | Limit content script to target domain only |
| `host_permissions` (googleapis) | Gemini AI API calls |

### Content Security Policy

Extension pages use a strict CSP:
```
script-src 'self'; object-src 'self'; font-src 'self' https://*.vscode-cdn.net data:;
```

### CSRF Protection

The extension **never** modifies CSRF token fields. All form interactions preserve existing CSRF tokens.

---

## Reporting a Vulnerability

We take security vulnerabilities seriously. If you discover a security vulnerability in Sentra Assist, please follow responsible disclosure:

### How to Report

**Do NOT** open a public GitHub issue for security vulnerabilities.

Instead, report vulnerabilities by contacting the principal engineer directly:

1. **Email**: Contact dr. Ferdi Iskandar (principal engineer) via the internal Sentra Infrastructure channel
2. **Include**:
   - Description of the vulnerability
   - Steps to reproduce
   - Potential impact assessment
   - Suggested remediation (optional)

### Response Timeline

| Stage | Target Time |
|-------|------------|
| Acknowledgment | 48 hours |
| Initial assessment | 5 business days |
| Remediation plan | 10 business days |
| Patch release | 30 days (critical: 7 days) |

### Severity Classification

| Severity | Description | Examples |
|----------|-------------|---------|
| **Critical** | Patient safety risk or PII exposure | Remote code execution, data exfiltration |
| **High** | Significant security impact | Authentication bypass, privilege escalation |
| **Medium** | Moderate security concern | XSS, CSRF bypass |
| **Low** | Minimal impact | Information disclosure |

---

## Security Checklist for Contributors

When contributing code, ensure:

- [ ] No hardcoded API keys, passwords, or secrets
- [ ] No patient PII in `console.log` or logging
- [ ] No `eval()` or `new Function()` usage
- [ ] No unsafe `innerHTML` assignments
- [ ] Input from DOM is validated before use
- [ ] External API calls use HTTPS only
- [ ] No secrets in environment variables bundled into extension

---

## Known Security Exceptions

| Finding | Justification | Mitigation |
|---------|--------------|------------|
| OAuth2 client_id in manifest | Chrome extension requirement; client_id is not a secret | Scoped to cloud-platform only; requires user OAuth consent |
| Vertex AI API calls to Google | Required for Gemini AI features | OIDC-based; no long-lived credentials |

---

## Dependency Audit

Run dependency security audits:

```bash
# Check for known vulnerabilities
pnpm audit

# Check with moderate threshold
pnpm audit --audit-level=moderate
```

All HIGH and CRITICAL CVEs must be resolved before release.

_Masterplan and masterpiece by Claudesy._
