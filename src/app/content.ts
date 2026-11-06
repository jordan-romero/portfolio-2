export const site = {
  name: "Jordan Romero",
  role: "Senior Software Engineer",
  company: "Luster",
  location: "Austin, TX",
  email: "jordan.t.romero@gmail.com",
  url: "https://portfolio-jordan-romeros-projects.vercel.app",
  links: {
    github: "https://github.com/jordan-romero",
    githubWork: "https://github.com/jordan-luster",
    linkedin: "https://www.linkedin.com/in/jordan-t-romero/",
    medium: "https://jordan-t-romero.medium.com/",
    resume: "/Jordan-Romero-Resume.pdf",
  },
};

export const stats = [
  { value: "5+", label: "years shipping product at startups" },
  { value: "3", label: "startups: Luster, Resilia, Knock" },
  { value: "Full stack", label: "web, API, AI core and AWS infra" },
  { value: "Eng × GTM", label: "I own release notes, docs and CS + Sales training" },
];

export type Highlight = {
  title: string;
  kicker: string;
  body: string;
  tags: string[];
  span?: "wide" | "tall";
  flow?: string[];
};

export const highlights: Highlight[] = [
  {
    kicker: "Realtime",
    title: "AI voice practice",
    body: "The live call and skill-drill experience: device checks, speech-to-text that survives bad networks, screen sharing with an AI buyer, recording and multi-language voices.",
    tags: ["WebSockets", "Deepgram", "ElevenLabs", "React"],
    span: "wide",
  },
  {
    kicker: "Pipeline",
    title: "Weekly Insights",
    body: "Step Functions and Lambdas that write AI individual, team and executive summaries every week, log every LLM call, and send personalized emails.",
    tags: ["Step Functions", "EventBridge", "LLMs", "SendGrid"],
    span: "tall",
    flow: ["EventBridge schedule", "Step Functions fan-out", "Individual · Team · Exec", "LLM summary + recs", "Personalized email"],
  },
  {
    kicker: "Platform",
    title: "Integrations Center",
    body: "Zoom, Gong, Salesforce, Google Calendar, Outlook and Close CRM, plus the package and entitlement system behind them.",
    tags: ["Paragon", "Lambda", "Terraform"],
  },
  {
    kicker: "Product",
    title: "Practice design",
    body: "Post-session challenges, custom call types, AI-assisted skill authoring, Certification mode and Dress Rehearsals.",
    tags: ["Prisma", "Postgres", "Node"],
  },
  {
    kicker: "AI",
    title: "Scoring + coaching",
    body: "Live-call scoring V2, evidence citations down to the transcript line, Adaptive Difficulty V2, Fact Sheets and the context graph.",
    tags: ["Python", "Prompting", "Evals"],
  },
  {
    kicker: "Craft",
    title: "AI-native engineering",
    body: "The agents my team uses to plan epics, review PRs and keep a shared knowledge base current, so a small team ships like a big one.",
    tags: ["Claude", "MCP", "Agents"],
    span: "wide",
  },
];

export const projects = [
  {
    name: "Hearth",
    blurb:
      "A Discord bot and web app that gives a D&D campaign a memory you can talk to, filtered so every player only learns what their character knows.",
    tags: ["TypeScript", "Turborepo", "Supabase + pgvector", "Claude agents", "Live transcription"],
    href: "https://hearth-nine-woad.vercel.app",
    cta: "Open Hearth",
    featured: true,
  },
  {
    name: "ActingAccents.com",
    blurb:
      "Founding engineer on a dialect-training platform for actors: a launch site and an online course built on the International Phonetic Alphabet.",
    tags: ["Next.js", "Supabase", "Prisma", "Vercel"],
    href: "https://www.actingaccents.com",
    cta: "Visit site",
    featured: false,
  },
];

export const skills = [
  "TypeScript", "React", "Next.js", "Node.js", "Python", "PostgreSQL", "Prisma",
  "GraphQL", "AWS Lambda", "Step Functions", "Terraform", "DynamoDB", "LLMs",
  "Agents", "MCP", "WebSockets", "React Native", "Playwright", "Datadog",
  "LaunchDarkly", "TanStack Query", "Storybook", "Figma",
];
