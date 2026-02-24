#!/usr/bin/env node
import { existsSync, readdirSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const skillsDir = join(root, "skills");

function listSkills() {
  if (!existsSync(skillsDir)) {
    console.log("No skills directory found");
    process.exit(1);
  }

  const skillNames = readdirSync(skillsDir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name);

  if (skillNames.length === 0) {
    console.log("No skills found");
    return;
  }

  console.log("Skills:");
  for (const name of skillNames) {
    console.log(`- ${name}`);
  }
}

function checkSkills() {
  if (!existsSync(skillsDir)) {
    console.log("No skills directory found");
    process.exit(1);
  }

  const skillNames = readdirSync(skillsDir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name);

  let hasError = false;

  for (const name of skillNames) {
    const skillPath = join(skillsDir, name, "SKILL.md");
    if (!existsSync(skillPath)) {
      hasError = true;
      console.log(`Missing SKILL.md: skills/${name}/SKILL.md`);
    }
  }

  if (hasError) {
    process.exit(1);
  }

  console.log("All skills have SKILL.md");
}

const command = process.argv[2] || "list";

if (command === "list") {
  listSkills();
} else if (command === "check") {
  checkSkills();
} else {
  console.log("Usage: node scripts/cli.js [list|check]");
}
