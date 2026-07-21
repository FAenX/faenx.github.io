import { experiences, info, projects, domains, type DomainId } from "./data";

export type SearchPage = {
  slug: string;
  title: string;
  navLabel: string;
  description: string;
  headline: string;
  intro: string;
  sections: Array<{
    title: string;
    body: string;
    bullets?: string[];
  }>;
  relatedProjectIds: string[];
  keywords: string[];
  /** Canonical domain this expertise page documents. Drives the page title, headline, and the Tools subsection. */
  domainId: DomainId;
};

export const expertisePages: SearchPage[] = [
  {
    slug: "platform-systems",
    domainId: "platform-engineering",
    title: `Platform Systems | ${info.name}`,
    navLabel: "Platform Systems",
    description:
      "Platform systems work by Emmanuel K. Davidson across GitOps, Kubernetes delivery, multi-tenant deployment platforms, contracts, integrations, and production operations.",
    headline: "Infrastructure that makes delivery repeatable",
    intro:
      "I build platform systems that make software easier to ship and safer to run. The work covers service boundaries, release workflows, deployment standards, environment controls, and the operational guardrails that keep production change manageable.",
    sections: [
      {
        title: "What the work covers",
        body:
          "The platform layer turns delivery discipline into a reusable capability. It covers architecture, build pipelines, deployment controls, integration boundaries, and operating standards that teams can inherit instead of rebuilding from scratch.",
        bullets: [
          "GitOps-driven deployment workflows and release controls",
          "Kubernetes multi-tenancy, namespace boundaries, and secret handling",
          "Reusable templates and guardrails for build and deploy paths",
          "Operational visibility into logs, events, and rollout health",
        ],
      },
      {
        title: "Where I’ve built this",
        body:
          "Rusha shows this approach clearly: a platform for designing, validating, deploying, and operating software on Kubernetes, with reusable delivery paths, environment isolation, and shared visibility into change.",
      },
    ],
    relatedProjectIds: ["rusha"],
    keywords: [
      "platform systems",
      "platform engineer",
      "cloud architect",
      "gitops",
      "kubernetes platform",
      "deployment platform",
    ],
  },
  {
    slug: "data-platforms",
    domainId: "data-platform-engineering",
    title: `Data Platforms | ${info.name}`,
    navLabel: "Data Platforms",
    description:
      "Big data platform work by Emmanuel K. Davidson across AWS, EKS, Spark, Dremio, Airflow, metadata services, analytics infrastructure, and reporting systems.",
    headline: "Data platforms that turn raw inputs into usable intelligence",
    intro:
      "I work on data platforms as the layer that carries analytics from ingestion to delivery. That means orchestration, compute, metadata, warehouse layers, observability, and scaling controls working together as one production system.",
    sections: [
      {
        title: "What the work covers",
        body:
          "The work spans ingest, transform, model, serve, observe, and scale. It connects orchestration, compute, metadata, and serving into one operating layer for analytical workloads.",
        bullets: [
          "Spark on Kubernetes and EKS-based compute orchestration",
          "Dremio, dbt, Delta Lake, metadata, and warehouse layers",
          "GitOps-managed infrastructure on AWS",
          "Cost, performance, and reliability tuning for analytics systems",
        ],
      },
      {
        title: "Where I’ve built this",
        body:
          "TierraViva AI spans ingestion and mining pipelines, GitOps-managed AWS and Kubernetes infrastructure, analytical processing systems, serving layers such as APIs and web interfaces, and agent-ready biodiversity workflows.",
      },
    ],
    relatedProjectIds: ["tierraviva"],
    keywords: [
      "data platform engineer",
      "big data platform",
      "spark on kubernetes",
      "dremio",
      "airflow on eks",
      "analytics infrastructure",
    ],
  },
  {
    slug: "agent-systems",
    domainId: "agent-systems",
    title: `Agent Systems | ${info.name}`,
    navLabel: "Agent Systems",
    description:
      "Agent systems work by Emmanuel K. Davidson across agentic frameworks, Kubernetes-based delivery, approval workflows, observability, operational automation, and AI-assisted execution.",
    headline: "Agent systems built for real operations",
    intro:
      "I build agent systems as production infrastructure that can be deployed, observed, governed, and improved over time. The work spans multi-agent orchestration, model gateways, runtime packaging, control surfaces, approval paths, observability, and domain-specific workflows.",
    sections: [
      {
        title: "What the work covers",
        body:
          "Agent systems need orchestration, runtime control, approvals, tool access, and observability around behavior in production. The work covers the stack needed to make automation safe, visible, portable, and useful in real operations.",
        bullets: [
          "Agent workflows deployed on Kubernetes and other production infrastructure environments",
          "Multi-agent orchestration, specialist routing, and domain-specific research agents",
          "OpenAI-compatible and Ollama-facing gateway layers, plus runtime control surfaces",
          "Observability, approval loops, health checks, and outcome tracking",
        ],
      },
      {
        title: "Where I’ve built this",
        body:
          "Rusha-Corp and TierraViva work includes self-registering multi-agent systems, GitOps-backed agent configuration, proxy and gateway infrastructure, biodiversity navigation profiles, deep research agents, and analytical assistants grounded in live data products.",
      },
    ],
    relatedProjectIds: ["hermes"],
    keywords: [
      "agent systems",
      "ai agents",
      "agentic frameworks",
      "kubernetes",
      "operational ai",
      "llm workflows",
    ],
  },
  {
    slug: "applied-analytics",
    domainId: "applied-analytics",
    title: `Applied Analytics | ${info.name}`,
    navLabel: "Applied Analytics",
    description:
      "Applied analytics work by Emmanuel K. Davidson across dashboards, text-to-SQL assistants, reporting systems, biodiversity data products, and decision support surfaces.",
    headline: "Analytics surfaces built for real decisions",
    intro:
      "The last mile matters. I build interfaces and product surfaces that turn reliable infrastructure, data, and AI capability into reporting, exploration, charting, and decision support for real users.",
    sections: [
      {
        title: "What the work covers",
        body:
          "Applied analytics sits where product delivery meets operational data. It covers dashboards, APIs, AI-assisted analytical interfaces, and domain-specific products that make complex systems usable.",
        bullets: [
          "Dashboard and reporting systems for operational use",
          "Text-to-SQL and chart-generation assistants",
          "Biodiversity and research-oriented data products",
          "APIs and product surfaces that expose analytical capability safely",
        ],
      },
      {
        title: "Where I’ve built this",
        body:
          "TierraViva AI and AMBAND work includes analytics dashboards, biodiversity interfaces, reporting surfaces, and assistant-driven exploratory workflows tied to actual research and decision-support needs.",
      },
    ],
    relatedProjectIds: ["tierraviva"],
    keywords: [
      "applied analytics",
      "analytics dashboard",
      "text to sql",
      "data products",
      "biodiversity analytics",
      "reporting systems",
    ],
  },
];

export const personPage = {
  slug: "emmanuel-davidson",
  title: `${info.name} | Platform Engineering, Data Platform Engineering, Agent Systems, Applied Analytics`,
  navLabel: "Emmanuel",
  description:
    "Emmanuel K. Davidson builds platform infrastructure, biodiversity intelligence platforms, agent systems, and applied analytics products across architecture, engineering, DevOps, DevSecOps, FinOps, and AIOps.",
  headline: `${info.name}`,
  intro:
      "Platform Engineering Leader and Cloud & Data Architect working across four domains: Platform Engineering, Data Platform Engineering, Agent Systems, and Applied Analytics. Fullstack application engineering is the delivery vehicle across all four — the UIs, dashboards, and APIs each domain depends on.",
  sections: [
    {
      title: "What I build now",
      body:
        "My current work spans Rusha platform systems, TierraViva AI as a biodiversity intelligence platform, agent systems with orchestration and gateway infrastructure, and applied analytics products that put live data in front of operators and decision-makers.",
    },
    {
      title: "What I bring to a team",
      body:
        "I bring platform thinking, delivery discipline, operational visibility, and cost-aware AI experience to teams building complex systems.",
      bullets: [
        "System design, platform boundaries, and operating models",
        "Build and release workflows for services, pipelines, UIs, and tooling",
        "Deployment controls, GitOps delivery, and environment safety",
        "Observability for runtime health, change visibility, and faster response",
        "Reliability guardrails, approval paths, and secure execution",
        "Scaling policy, infrastructure efficiency, and cost-aware growth",
      ],
    },
    {
      title: "What the work delivers",
      body:
        "The work delivers lower operating cost, elastic analytics capacity, safer delivery systems, and AI-assisted workflows with approval and observability built in.",
        bullets: [
          "60–80% networking cost reduction on OWA infrastructure",
          "Elastic Dremio executor scaling with query performance preserved",
          "Production agent systems running on Kubernetes with approval controls",
          `${info.period} experience across platform, data, and software systems`,
        ],
    },
    {
      title: "Where it has been built",
      body: experiences.map((exp) => `${exp.label}: ${exp.title} (${exp.date})`).join(" · "),
    },
  ],
  relatedProjectIds: ["rusha", "tierraviva", "hermes"],
  keywords: [
    "Emmanuel Davidson",
    "Emmanuel K. Davidson",
    "Platform Engineering",
    "Data Platform Engineering",
    "Agent Systems",
    "Applied Analytics",
    "Cloud & Data Architect",
    "platform engineer",
    "cloud architect",
    "KCNA",
    "Kubernetes and Cloud Native Associate",
    "AWS Certified Solutions Architect Associate",
    "architecture",
    "engineering",
    "devops",
    "devsecops",
    "finops",
    "aiops",
    "data platform engineer",
    "agent systems",
  ],
};

export const crawlProjects = projects.map((project) => ({
  id: project.id,
  title: project.title,
  category: project.category,
  description: project.description,
  technologies: project.technologies,
  metric: project.metric,
  year: project.year,
  githubUrl: project.githubUrl,
  liveUrl: project.liveUrl,
}));

/**
 * Consolidated "Domains & Tools" card data for the Person page. Lists all 4
 * canonical domains with a one-line summary and the enriched tool chips
 * ("Tool — role"), and links out to each expertise page. Built from the
 * canonical `domains[]` source of truth so it never drifts from the
 * expertise pages or SeoShell.
 */
export const domainsAndToolsCard = {
  title: "Domains & Tools",
  intro:
    "My work breaks down into four domains of expertise. Each domain has a curated set of tools, and each tool has a specific role inside that domain. Fullstack application engineering shows up inside every domain as the delivery vehicle for the UIs, dashboards, and APIs that domain depends on.",
  entries: domains.map((domain) => ({
    domainId: domain.id,
    domainLabel: domain.label,
    domainSummary: domain.summary,
    expertiseSlug: domain.slug,
    tools: domain.tools,
  })),
};

export const staticRoutePaths = [
  "/",
  `/${personPage.slug}/`,
  ...expertisePages.map((page) => `/${page.slug}/`),
  "/contact/",
  "/projects/",
  ...crawlProjects.map((project) => `/projects/${project.id}/`),
];
