# Skills Generator (Single Skill Edition)

This repository follows the structure of `IceyWu/skills`, but keeps only one manual skill.

## Repository Structure

```text
.
├── meta.ts
├── instructions/
├── sources/
├── vendor/
├── scripts/
├── skills/
│   └── iceywu-dev-workflow/
│       └── SKILL.md
└── README.md
```

## Notes

- `skills/` contains installable skills
- `sources/` includes external source repositories (`utils`, `vue`, `vite`, `pnpm`)
- `vendor/` stores synced external skills (`vuejs-ai`, `web-design-guidelines`)
- `scripts/cli.js` provides local helper commands

## Local Commands

```bash
pnpm start list
pnpm start check
pnpm lint
pnpm format
```
