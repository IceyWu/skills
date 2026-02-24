export interface VendorSkillMeta {
  official?: boolean;
  skills: Record<string, string>;
  source: string;
}

export const submodules = {
  utils: "https://github.com/IceyWu/utils",
  vue: "https://github.com/vuejs/docs",
  vite: "https://github.com/vitejs/vite",
  pnpm: "https://github.com/pnpm/pnpm.io",
};

export const vendors: Record<string, VendorSkillMeta> = {
  "vuejs-ai": {
    source: "https://github.com/vuejs-ai/skills",
    skills: {
      "vue-best-practices": "vue-best-practices",
      "vue-router-best-practices": "vue-router-best-practices",
      "vue-testing-best-practices": "vue-testing-best-practices",
    },
  },
  "web-design-guidelines": {
    source: "https://github.com/vercel-labs/agent-skills",
    skills: {
      "web-design-guidelines": "web-design-guidelines",
    },
  },
};

export const manual = ["iceywu-dev-workflow"];
