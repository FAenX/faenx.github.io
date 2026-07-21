import { experiences, info, projects } from "./data";

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
};

export const expertisePages: SearchPage[] = [
  {
    slug: "platform-systems",
    title: `Platform Systems | ${info.name}`,
    navLabel: "Platform Systems",
    description:
      "Platform systems work by Emmanuel K. Davidson across GitOps, Kubernetes delivery, multi-tenant deployment platforms, contracts, integrations, and production operations.",
    headline: "Infrastructure that makes delivery repeatable",
    intro:
      "I build platform systems that make software easier to ship and safer to run. The work spans GitOps delivery, deployment templates, namespace isolation, event-driven boundaries, infrastructure guardrails, and integrations that support production operations.",
    sections: [
      {
        title: "What this includes",
        body:
          "The platform layer turns delivery discipline into a reusable capability. It covers deployment architecture, environment isolation, build pipelines, integration boundaries, and operating standards that teams can inherit instead of rebuilding.",
        bullets: [
          "GitOps-driven deployment workflows and release controls",
          "Kubernetes multi-tenancy, namespace boundaries, and secret handling",
          "Build and deploy systems with reusable templates and guardrails",
          "Operational interfaces for logs, events, and rollout visibility",
        ],
      },
      {
        title: "Current evidence",
        body:
          "Rusha shows this approach clearly: a platform for building, validating, deploying, and operating software on Kubernetes, not just another app surface.",
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
    title: `Data Platforms | ${info.name}`,
    navLabel: "Data Platforms",
    description:
      "Big data platform work by Emmanuel K. Davidson across AWS, EKS, Spark, Dremio, Airflow, metadata services, analytics infrastructure, and reporting systems.",
    headline: "Data platforms that turn raw inputs into usable intelligence",
    intro:
      "I work on data platforms as the operating layer behind analytics. That means orchestration, compute, metadata, warehouse layers, cost controls, observability, and delivery paths working together as one production system.",
    sections: [
      {
        title: "What this includes",
        body:
          "The focus is not a single tool such as Airflow. It is the full platform needed to ingest, transform, model, serve, and observe analytical workloads in production.",
        bullets: [
          "Spark on Kubernetes and EKS-based compute orchestration",
          "Dremio, dbt, Delta Lake, metadata, and warehouse layers",
          "GitOps-managed infrastructure on AWS",
          "Cost, performance, and reliability tuning for analytics systems",
        ],
      },
      {
        title: "Current evidence",
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
    title: `Agent Systems | ${info.name}`,
    navLabel: "Agent Systems",
    description:
      "Agent systems work by Emmanuel K. Davidson across Hermes-based agents, K3s, approval workflows, observability, operational automation, and AI-assisted execution.",
    headline: "Agent systems built for real operations",
    intro:
      "I build agent systems as production infrastructure, not demos. The work spans multi-agent orchestration, model gateways, runtime packaging, control surfaces, approval paths, observability, and domain-specific workflows.",
    sections: [
      {
        title: "What this includes",
        body:
          "Agent systems need infrastructure, safety, and measurable outcomes. That means orchestrators, specialist routing, model gateways, RBAC, human approval loops, runtime packaging, tool surfaces, and monitoring around model behavior.",
        bullets: [
          "Hermes-powered agent workflows on Kubernetes, K3s, and VPS deployments",
          "Multi-agent orchestration, specialist routing, and domain-specific research agents",
          "OpenAI-compatible and Ollama-facing gateway layers, plus branded web interfaces",
          "Observability, approval loops, health checks, and outcome tracking",
        ],
      },
      {
        title: "Current evidence",
        body:
          "Rusha-Corp and TierraViva work includes self-registering multi-agent systems, GitOps-backed agent config repositories, Ollama proxy infrastructure, biodiversity navigation profiles, deep research agents, branded Hermes deployments, and analytical assistants grounded in live data products.",
      },
    ],
    relatedProjectIds: ["hermes"],
    keywords: [
      "agent systems",
      "ai agents",
      "hermes runtime",
      "k3s",
      "operational ai",
      "llm workflows",
    ],
  },
  {
    slug: "applied-analytics",
    title: `Applied Analytics | ${info.name}`,
    navLabel: "Applied Analytics",
    description:
      "Applied analytics work by Emmanuel K. Davidson across dashboards, text-to-SQL assistants, reporting systems, biodiversity data products, and decision support surfaces.",
    headline: "Analytics surfaces built for decisions, not demos",
    intro:
      "The last mile matters. I build interfaces and product surfaces that turn infrastructure and data capability into reporting, exploration, charting, and decision support for real users.",
    sections: [
      {
        title: "What this includes",
        body:
          "Applied analytics sits where product delivery meets data systems. It covers dashboards, APIs, AI-assisted analytical interfaces, and domain-specific products that make data operational.",
        bullets: [
          "Dashboard and reporting systems for operational use",
          "Text-to-SQL and chart-generation assistants",
          "Biodiversity and research-oriented data products",
          "APIs and product surfaces that expose analytical capability safely",
        ],
      },
      {
        title: "Current evidence",
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
  title: `${info.name} | Platform Systems, Data Platforms, Agent Systems`,
  navLabel: "Emmanuel",
  description:
    "Emmanuel K. Davidson builds platform infrastructure, biodiversity intelligence platforms, agent systems, and applied analytics products across architecture, engineering, DevOps, DevSecOps, FinOps, and AIOps.",
  headline: `${info.name}`,
  intro:
      "Platform Engineering Leader and Cloud Architect focused on production systems across platform infrastructure, biodiversity and research data platforms, analytics delivery, and agent operations.",
  sections: [
    {
      title: "What I build now",
      body:
        "My current work spans Rusha platform systems, TierraViva AI as a biodiversity intelligence platform, agent systems with orchestration and gateway infrastructure, and applied analytics products that put live data in front of operators and decision-makers.",
    },
    {
      title: "What teams hire me for",
      body:
        "The portfolio maps cleanly to the capabilities employers screen for when they hire senior technical leaders.",
      bullets: [
        "Architecture: platform, data, and agent system design",
        "Engineering: shipping APIs, services, UIs, pipelines, and operational tooling",
        "DevOps: GitOps, CI/CD, Kubernetes, and observability",
        "DevSecOps: RBAC, secret handling, identity boundaries, and verified operations",
        "FinOps: cost reduction, scaling policy, and infrastructure efficiency",
        "AIOps: production agents, model gateways, approval loops, and controlled execution",
      ],
    },
    {
      title: "What the work delivers",
      body:
        "The work delivers lower infrastructure cost, elastic analytics capacity, production-grade delivery systems, and AI-assisted workflows backed by approval and observability layers.",
        bullets: [
          "60–80% networking cost reduction on OWA infrastructure",
          "Elastic Dremio executor scaling with query performance preserved",
          "Production agent systems running on K3s with approval controls",
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
    "architecture",
    "engineering",
    "platform engineer",
    "cloud architect",
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

export const staticRoutePaths = [
  "/",
  `/${personPage.slug}/`,
  ...expertisePages.map((page) => `/${page.slug}/`),
  "/contact/",
  "/projects/",
  ...crawlProjects.map((project) => `/projects/${project.id}/`),
];
