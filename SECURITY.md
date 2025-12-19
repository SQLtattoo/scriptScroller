# Security Considerations

## For Users

This app is safe to use for its intended purpose (reading teleprompter scripts locally). However:

- ⚠️ **Only load trusted scripts** - Don't paste scripts from untrusted sources
- ✅ The app only runs locally and doesn't connect to the internet
- ✅ No data is collected or transmitted

## For Developers

### Electron Security Settings

This app uses `nodeIntegration: true` and `contextIsolation: false` for simplicity. These settings are generally considered insecure for apps that:
- Load remote content
- Browse external websites
- Handle untrusted user input

**Why it's acceptable here:**
- The app only loads local, static HTML files
- No remote content is ever loaded
- User input is limited to text display only

### Recommendations for Production Use

If you plan to extend this app with features like:
- Loading external content
- Web browsing capabilities
- Network requests

You should:
1. Enable `contextIsolation: true`
2. Disable `nodeIntegration`
3. Use `preload` scripts with IPC for secure communication
4. Implement Content Security Policy (CSP)

### Dependency Updates

Run `npm audit` regularly to check for vulnerabilities in dependencies.

## Reporting Security Issues

If you discover a security vulnerability, please report it privately using one of these methods:

1. **GitHub Security Advisories** (Recommended): Go to the [Security tab](https://github.com/SQLtattoo/scriptScroller/security) and click "Report a vulnerability"
2. **GitHub Issues**: Open an issue and mention `@SQLtattoo` - I'll get notified directly

Please do **not** report security vulnerabilities through public GitHub issues without marking them as security advisories first.
