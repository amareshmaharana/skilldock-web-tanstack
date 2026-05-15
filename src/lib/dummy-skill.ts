const dummySkills: SkillRecord[] = [
  {
    id: "skill-001",
    title: "Write Code",
    slug: "write-code",
    description:
      "Generate clean starter code, refactors, and implementation sketches from plain-language prompts.",
    category: "Development",
    tags: ["typescript", "react", "snippets"],
    installCommand: "npx skilldock add write-code",
    createdAt: "2026-05-01T10:00:00.000Z",
    authorClerkId: "user_01",
    authorEmail: "alex@example.com",
  },
  {
    id: "skill-002",
    title: "Debug Trace",
    slug: "debug-trace",
    description:
      "Inspect logs, isolate failures, and suggest the fastest next check for runtime issues.",
    category: "Debugging",
    tags: ["logs", "errors", "troubleshooting"],
    installCommand: "npx skilldock add debug-trace",
    createdAt: "2026-05-02T11:15:00.000Z",
    authorClerkId: "user_02",
    authorEmail: "sam@example.com",
  },
  {
    id: "skill-003",
    title: "Test Planner",
    slug: "test-planner",
    description:
      "Turn feature requirements into a compact test plan with coverage notes and edge cases.",
    category: "Quality Assurance",
    tags: ["tests", "coverage", "qa"],
    installCommand: "npx skilldock add test-planner",
    createdAt: "2026-05-03T08:30:00.000Z",
    authorClerkId: "user_03",
    authorEmail: "maya@example.com",
  },
  {
    id: "skill-004",
    title: "API Scout",
    slug: "api-scout",
    description:
      "Summarize endpoints, request shapes, and integration notes from a backend surface.",
    category: "Integration",
    tags: ["api", "contracts", "fetch"],
    installCommand: "npx skilldock add api-scout",
    createdAt: "2026-05-04T14:45:00.000Z",
    authorClerkId: "user_04",
    authorEmail: "nina@example.com",
  },
  {
    id: "skill-005",
    title: "Docs Writer",
    slug: "docs-writer",
    description:
      "Draft concise documentation blocks, changelog notes, and onboarding summaries.",
    category: "Documentation",
    tags: ["docs", "markdown", "summary"],
    installCommand: "npx skilldock add docs-writer",
    createdAt: "2026-05-05T09:20:00.000Z",
    authorClerkId: "user_05",
    authorEmail: "eli@example.com",
  },
];

export default dummySkills;