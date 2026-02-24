---
name: frontend-dev-tools
description: A workflow for interacting with frontend projects using Playwright/Chrome DevTools and querying library documentation via Context7.
metadata:
  author: IceyWu
  homepage: https://github.com/IceyWu
  version: "0.1.0"
  source: https://github.com/IceyWu/skills
---

# Frontend Development Tools & Workflow

This skill defines the standard operating procedure for interacting with frontend projects and querying library documentation.

## 1. Browser Interaction for Frontend Projects

Whenever the user mentions running, opening, previewing, or debugging a frontend project/application:

- **Action**: You MUST use browser automation tools such as **Playwright** (`mcp_microsoft_pla_browser_*`) or **Chrome DevTools** (`mcp_chrome-devtoo_*`) to open the local server URL.
- **Purpose**: This allows you to visually inspect the page, check console logs, analyze network requests, and interact with the UI directly to assist the user more effectively.

## 2. Library and Package Documentation

Whenever the user asks about the usage, API, or best practices of a specific package, library, or framework (e.g., React, Vue, Vite, Tailwind, etc.), or if you need to write code using an unfamiliar library:

- **Action**: You MUST use the **Context7** MCP tools.
- **Workflow**:
  1. First, call `mcp_io_github_ups_resolve-library-id` to find the correct Context7-compatible library ID.
  2. Then, call `mcp_io_github_ups_get-library-docs` using the resolved ID to fetch up-to-date documentation, API references, or code examples.
- **Purpose**: Ensures that the code and advice provided are based on the latest official documentation rather than potentially outdated training data.
