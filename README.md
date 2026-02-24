# IceyWu's Skills

A curated Agent Skills repository for [IceyWu](https://github.com/IceyWu)

## Installation

Install all skills from this repository:

```bash
npx skills add IceyWu/skills --skill='*'
```

Install a specific skill:

```bash
npx skills add IceyWu/skills --skill frontend-docs-context7
```

## Skills

| Skill | Description |
|-------|-------------|
| [iceywu-dev-workflow](skills/iceywu-dev-workflow) | Practical workflow for using and contributing to `@iceywu/utils`. |
| [frontend-dev-tools](skills/frontend-dev-tools) | Standardized frontend run/open/preview/debug workflow (MCP browser tools first). |
| [frontend-docs-context7](skills/frontend-docs-context7) | Fetch up-to-date frontend framework/library docs via Context7 before answering. |
| [pnpm](skills/pnpm) | pnpm 10.x commands, workspaces, config, and best practices. |
| [vite](skills/vite) | Vite 8 config, plugin API, build/SSR, and Rolldown migration guidance. |
| [vue](skills/vue) | Vue 3.5 Composition API and `<script setup>` macros guidance. |
| [web-design-guidelines](skills/web-design-guidelines) | UI/UX and accessibility review guidance synced from Vercel guidelines. |

## Source Repositories

- `sources/utils` → [IceyWu/utils](https://github.com/IceyWu/utils)
- `sources/vue` → [vuejs/docs](https://github.com/vuejs/docs)
- `sources/vite` → [vitejs/vite](https://github.com/vitejs/vite)
- `sources/pnpm` → [pnpm/pnpm.io](https://github.com/pnpm/pnpm.io)

## Vendor Repositories

- `vendor/vuejs-ai` → [vuejs-ai/skills](https://github.com/vuejs-ai/skills)
- `vendor/web-design-guidelines` → [vercel-labs/agent-skills](https://github.com/vercel-labs/agent-skills)

## Repository Structure

```text
.
├── AGENTS.md
├── meta.ts
├── instructions/
├── sources/
│   ├── utils/
│   ├── vue/
│   ├── vite/
│   └── pnpm/
├── vendor/
│   ├── vuejs-ai/
│   └── web-design-guidelines/
├── scripts/
│   └── cli.ts
└── skills/
    ├── iceywu-dev-workflow/
    ├── frontend-dev-tools/
    ├── frontend-docs-context7/
    ├── pnpm/
    ├── vite/
    ├── vue/
    └── web-design-guidelines/
```

## Development

```bash
pnpm install
pnpm lint
pnpm lint:fix
pnpm format
pnpm format:check
pnpm start list
pnpm start check
```

If you want to materialize the source repo locally as submodule, run:

```bash
pnpm start list
pnpm start check
```

## License

MIT
