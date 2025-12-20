# Contributing

Thanks for your interest in improving this portfolio.

## Development setup

### Requirements

- Node.js **20+**
- npm **9+** (npm 11 is fine)

### Install

```bash
npm install
```

### Run quality checks

```bash
npm test
npm run build
```

### Formatting

```bash
npm run format
```

## Conventional Commits

This repo follows **Conventional Commits**.

Examples:

- `feat: add new certificate section`
- `fix: correct broken relative links`
- `docs: update README`
- `chore: update lint config`

Scopes are optional: `feat(ui): ...`

## Git hooks (pre-commit / commit-msg)

This repo uses Husky + lint-staged + commitlint:

- **pre-commit:** formats staged files (Prettier)
- **commit-msg:** enforces Conventional Commits

Hooks are installed automatically on `npm install` (via `npm run prepare`).

## Pull Requests

- Keep PRs focused and small when possible.
- Add validation steps in the PR template.
- Ensure `npm test` passes.
