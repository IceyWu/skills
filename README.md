# IceyWu's Skills

A curated Agent Skills repository for [IceyWu](https://github.com/IceyWu)

## Installation

Install all skills from this repository:

```bash
npx skills add IceyWu/skills --skill='*'
```

Install a specific skill:

```bash
npx skills add IceyWu/skills --skill iceywu-dev-workflow
```

## Skills

| Skill | Description |
|-------|-------------|
| [iceywu-dev-workflow](skills/iceywu-dev-workflow) | Workflow for developing and integrating `@iceywu/utils` in real projects. |

## Source Repositories

- `sources/utils` → [IceyWu/utils](https://github.com/IceyWu/utils)

## Repository Structure

```text
.
├── AGENTS.md
├── meta.ts
├── instructions/
├── sources/
├── vendor/
├── scripts/
└── skills/
 └── iceywu-dev-workflow/
  └── SKILL.md
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
git submodule add https://github.com/IceyWu/utils sources/utils
git submodule update --init --recursive
```

## License

MIT
