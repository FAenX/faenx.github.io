/**
 * Portfolio content for Emmanuel K. Davidson.
 *
 * Single source of truth for identity, experience, projects, skills,
 * education, certifications, and publications. Consumed by the MUI
 * content sections (Tier 1) and mirrored into SeoShell + JSON-LD.
 *
 * All content is grounded in:
 *   - /home/node/.factory/resume.pdf.json (resume)
 *   - real repos on dev@194.163.182.114 and GitHub orgs including Rusha,
 *     Humming Mind, TierraViva platform and data-engineering repos, and
 *     Hermes-based agent systems
 *
 * The technology graph itself (nodes/edges/proficiency) lives in
 * `./techDna.ts` and is the source of truth for the 3D hero network
 * and the Skills ability tree.
 */

// Brand mark images are still used by the legacy Skills chips section.
// Kept until T1.8 replaces chips with the Tech DNA ability tree.
import python from "../assets/images/brands/python.png";
import node from "../assets/images/brands/node.svg";
import react from "../assets/images/brands/react.svg";
import Linux from "../assets/images/brands/ubuntu.png";
import Docker from "../assets/images/brands/docker.svg";
import Git from "../assets/images/brands/git.png";
import JS from "../assets/images/brands/js-svgrepo-com.svg";
import TS from "../assets/images/brands/typescript-svgrepo-com.svg";
import SQL from "../assets/images/brands/sql-svgrepo-com.svg";
import pgsql from "../assets/images/brands/pgsql-svgrepo-com.svg";
import aws from "../assets/images/brands/aws-svgrepo-com.svg";
import gcp from "../assets/images/brands/gcp-opened-svgrepo-com.svg";
import azure from "../assets/images/brands/azure-svgrepo-com.svg";
import spark from "../assets/images/brands/apache-spark-logo.png";
import k8s from "../assets/images/brands/k8s1.webp";

export const info = {
  name: "Emmanuel K. Davidson",
  about:
    "Platform Engineering Leader and Cloud Architect focused on production systems across platform infrastructure, data platforms, and agent operations. I build cloud-native systems that connect delivery, analytics, observability, and operational AI, with a focus on reliability, cost control, and business outcomes.",
  title: "Platform Engineering Leader · Cloud Architect",
  location: "Global",
  image: "https://avatars.githubusercontent.com/u/1015040?v=4",
  email: "kipronofb@gmail.com",
  period: "7+ years",
  linkedin: "https://www.linkedin.com/in/emmanuel-davidson/",
  medium: "https://medium.com/@emmanueldavidson",
  links: [
    {
      href: "https://github.com/FAenX",
      name: "GitHub",
    },
    {
      href: "https://www.linkedin.com/in/emmanuel-davidson/",
      name: "LinkedIn",
    },
    {
      href: "https://medium.com/@emmanueldavidson",
      name: "Medium",
    },
  ],
};

export interface ExperienceEntry {
  label: string;
  title: string;
  date: string;
  id: string;
  description: string[];
}

export const experiences: ExperienceEntry[] = [
  {
    label: "One World Analytics",
    title: "Senior Software Engineer & Platform Architect",
    date: "August 2023 – Present",
    id: "one-world-analytics",
    description: [
      "Rusha Platform Architecture — Lead architect for Rusha, a production-grade deployment platform: designed NestJS API, React UI, and three microservices (API, build-service, deploy-service) with GitOps-driven deployments via ArgoCD and real-time gRPC/WebSocket log streaming.",
      "Multi-Tenant Kubernetes Infrastructure — Implemented multi-tenant namespace isolation with project-level shared stateful services, Sealed Secrets for secret management, Cognito auth with automatic token refresh, and HMAC-verified webhook pipelines for GitHub App integration.",
      "TierraViva AI Platform — Built a biodiversity intelligence platform that ingests and mines policy, biodiversity, patent, and research data, processes it on cloud-native analytics infrastructure, and serves the results through reporting interfaces and agent-ready workflows.",
      "Dremio Elastic Auto-Scaling — Designed and implemented two-tier executor auto-scaling (small/large) using KEDA, Kubernetes StatefulSets, and a custom metrics exporter with graceful scale-down, reducing infrastructure costs while maintaining query performance.",
      "LLM Automation Platform (Hermes) — Built production agent systems on the Hermes runtime, combining LLM reasoning with live data pipelines, Kubernetes-native scheduling, Slack approval flows, and RBAC-gated operations.",
      "MLOps Enablement — Partnered with data scientists to productionize ML models, supporting training, deployment, monitoring, and lifecycle management on Databricks and custom AI platforms.",
      "Full DevOps Ownership — Implemented CI/CD pipelines (GitHub Actions), infrastructure automation (Terraform, Ansible), container registry management (GHCR), production observability (Grafana, Prometheus, Jaeger, OpenTelemetry), and zero-downtime GitOps deployments.",
      "Business Intelligence & Stakeholder Reporting — Delivered executive dashboards and data visualizations supporting strategic decision-making across engineering and business leadership.",
    ],
  },
  {
    label: "The Jitu",
    title: "Software Engineer III (Architecture Ownership & DevOps)",
    date: "June 2021 – June 2023",
    id: "the-jitu",
    description: [
      "Enterprise Data Reliability Platform — Architected and operationalized data quality pipelines using AWS Glue and Great Expectations, improving reliability across Chick-fil-A MLOps workflows and reducing data incidents by standardizing validation frameworks.",
      "Architecture Ownership — Led design and implementation of data platforms and backend services, owning system architecture, technical direction, and cross-team alignment.",
      "DevOps & Operational Excellence — Built CI/CD pipelines, automated deployments, and production monitoring while operationalizing data quality pipelines for enterprise-grade reliability.",
      "Cloud-Native Systems — Developed and maintained Azure-based customer feedback platforms with Power BI integration for real-time analytics and executive reporting.",
      "Digital Transformation — Enabled data-driven decision-making across organizations through automated reporting, dashboard delivery, and BI integration with stakeholder-facing tools.",
    ],
  },
  {
    label: "Touch Inspiration",
    title: "Backend Developer",
    date: "March 2019 – May 2021",
    id: "touch-inspiration",
    description: [
      "Fintech Loan Processing Platform — Built a backend loan application and processing engine for SME financing, handling multi-stage approval workflows, risk scoring integration, and regulatory compliance.",
      "Legal Tech Platform — Developed backend systems for a patent management platform streamlining application workflows, document generation, and status tracking.",
      "DevOps Automation — Improved CI/CD workflows, release automation, and infrastructure monitoring for production systems using Ansible, Terraform, and cloud platforms.",
    ],
  },
];

interface Education {
  label: string;
  description: string;
  link: string;
  date: string;
  highlights?: string[];
}

export const education: Education[] = [
  {
    label: "University of Nairobi",
    description: "Post Graduate Diploma in Project Planning & Management",
    link: "",
    date: "2018 – 2019",
    highlights: [
      "Specialized in agile project management methodologies",
    ],
  },
  {
    label: "University of Eldoret",
    description: "BSc in Biochemistry",
    link: "",
    date: "2013 – 2016",
    highlights: [
      "Graduated with honors",
    ],
  },
];

/**
 * Skills used by the legacy chip-based Skills section (T1.8 will
 * replace this with the Tech DNA ability tree sourced from techDna.ts).
 * Brand images are kept for visual continuity; the grouped categories
 * below match the 8 Tech DNA categories so the migration is lossless.
 */
export interface Skill {
  name: string;
  image: string;
}

export const skills: Skill[] = [
  // Platform
  { name: "Kubernetes", image: k8s },
  { name: "Docker", image: Docker },
  { name: "Git", image: Git },
  // Cloud
  { name: "AWS", image: aws },
  { name: "GCP", image: gcp },
  { name: "Azure", image: azure },
  // Data
  { name: "Apache Spark", image: spark },
  { name: "PostgreSQL", image: pgsql },
  { name: "SQL", image: SQL },
  // Backend
  { name: "Python", image: python },
  { name: "NodeJs", image: node },
  { name: "Typescript", image: TS },
  { name: "Javascript", image: JS },
  { name: "React", image: react },
  { name: "Linux", image: Linux },
];

export const professionalSummary = {
  title: "Professional Summary",
  description:
    "Platform Engineering Leader and Cloud Architect focused on platform systems, big data infrastructure, and agent-enabled operations. I build and run production systems across Kubernetes, AWS, analytics stacks, GitOps delivery, observability, and applied AI, turning infrastructure and data capability into reliable products and measurable outcomes.",
};

export const certifications = [
  {
    title: "AWS Certified Solutions Architect (Associate)",
    issuer: "Amazon Web Services",
    date: "2022",
    description:
      "Professional certification for designing distributed systems and cloud-native architectures on AWS.",
  },
  {
    title: "Google Data Analytics Professional Certificate",
    issuer: "Google",
    date: "2022",
    description:
      "Professional certificate covering the full data analysis lifecycle — from data cleaning and visualization to stakeholder reporting.",
  },
];

export interface Publication {
  title: string;
  description: string;
  url: string;
}

export const publications: Publication[] = [
  {
    title: "Understanding Kubernetes StatefulSets",
    description:
      "Practical guide to stateful workload patterns, pod identity, and storage semantics in production Kubernetes deployments.",
    url: "https://medium.com/@emmanueldavidson",
  },
  {
    title: "Building a Data Warehouse with Delta Lake",
    description:
      "End-to-end walkthrough of modern data warehousing using Delta Lake, dbt, and Spark on Kubernetes.",
    url: "https://medium.com/@emmanueldavidson",
  },
  {
    title: "Cloud Cost Optimization Strategies",
    description:
      "Techniques for reducing cloud spend through right-sizing, auto-scaling, and reserved instance planning across AWS and GCP.",
    url: "https://medium.com/@emmanueldavidson",
  },
  {
    title: "Structuring REST APIs for Hierarchical Data",
    description:
      "Design patterns for nested resource APIs, pagination, and filtering in complex domain models.",
    url: "https://medium.com/@emmanueldavidson",
  },
  {
    title: "Deploying AI-Powered Research Agents",
    description:
      "Architecture and deployment patterns for LLM-integrated automation systems on Kubernetes with RBAC and approval workflows.",
    url: "https://medium.com/@emmanueldavidson",
  },
];

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  metric?: string;
  year?: string;
}

/**
 * The 6 portfolio projects. Categories align with the 3D project-zone
 * themes in T2.4 (Platform / AI / Data / Product Systems).
 */
export const projects: Project[] = [
  {
    id: "rusha",
    title: "Rusha",
    category: "Platform",
    description:
      "Production platform system for building, validating, deploying, and operating software on Kubernetes. Combines GitOps-driven delivery, event-driven application architecture, multi-tenant namespace isolation, in-cluster builds, deployment templates, shared operational guardrails, and VCS integration across API, UI, and service layers.",
    technologies: [
      "NestJS",
      "React",
      "TypeScript",
      "gRPC",
      "WebSocket",
      "Kubernetes",
      "ArgoCD",
      "Kaniko",
      "Sealed Secrets",
      "Amazon Cognito",
    ],
    githubUrl: "https://github.com/FAenX",
    year: "2023 – Present",
  },
  {
    id: "hermes",
    title: "AI Agents on Hermes",
    category: "AI",
    description:
      "Production agent systems spanning multi-agent orchestration, domain-specific research agents, secure Hermes deployments, branded agent interfaces, profile distributions, and model-gateway infrastructure. The work includes Hermes-based agents on K3s, NATS-backed specialist routing, Ollama and OpenAI-compatible gateway layers, approval paths, observability, and domain workflows for biodiversity, policy, and analytical operations.",
    technologies: [
      "Python",
      "LLM (OpenAI, Ollama)",
      "NATS JetStream",
      "Kubernetes",
      "K3s",
      "KEDA",
      "Docker",
      "Slack API",
      "Traefik",
      "cert-manager",
    ],
    githubUrl: "https://github.com/FAenX",
    metric: "Multi-agent systems, agent distributions, and model-gateway infrastructure in production",
    year: "2024 – Present",
  },
  {
    id: "tierraviva",
    title: "TierraViva AI",
    category: "Data",
    description:
      "Biodiversity intelligence platform that ingests and mines policy, biodiversity, patent, and research data, processes it through GitOps-managed cloud data infrastructure, serves it through APIs and web interfaces, and makes it available to agents for analysis, navigation, reporting, and decision support. Its implementation spans document and research corpora, ETL and orchestration systems, Spark and analytics infrastructure, serving layers, and agent-consumable knowledge workflows.",
    technologies: [
      "Apache Airflow",
      "Apache Spark",
      "Amazon EKS",
      "dbt",
      "Delta Lake",
      "Dremio",
      "FastAPI",
      "React",
      "TypeScript",
      "WebSocket",
      "Hermes",
      "KEDA",
      "StatefulSets",
      "Grafana",
      "Prometheus",
      "Jaeger",
      "OpenTelemetry",
      "Databricks",
    ],
    liveUrl: "https://landing.rusha.tierravivaai.net/",
    metric: "From ingestion and mining to serving and agent consumption on one platform",
    year: "2023 – Present",
  },
  {
    id: "faenx",
    title: "faenx.github.io",
    category: "Portfolio System",
    description:
      "This portfolio — a shader-first cinematic 3D experience built with React Three Fiber, custom GLSL shaders, and CPU-driven physics. Features a Tech DNA neural-network hero derived from real project data, kinetic typography, and an immersive world of project zones. No GPU compute required: runs on any integrated-graphics device at 60fps desktop / 30fps mobile.",
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Three.js",
      "React Three Fiber",
      "drei",
      "@react-three/postprocessing",
      "@react-three/rapier",
      "GLSL",
      "gsap",
      "lenis",
      "Howler",
    ],
    githubUrl: "https://github.com/FAenX/faenx.github.io",
    liveUrl: "https://faenx.github.io/",
    year: "2025",
  },
];

/**
 * Convenience export: the 6 portfolio project ids, matching the
 * `projects` field on TechNode in techDna.ts. Used by the Skills
 * ability tree (T2.6) and the 3D project islands (T2.4) to keep
 * project references consistent across the data layer.
 */
export const portfolioProjectIds = projects.map((p) => p.id);
