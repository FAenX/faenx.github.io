import { useEffect, useState } from "react";
import type { CSSProperties } from "react";
import { experiences, info, projects } from "../../data/data";
import styles from "./BigNumberSections.module.css";

type Section = {
  id: string;
  eyebrow: string;
  headline: string;
  subhead: string;
  body: string;
  accent: string;
  accentGlow: string;
  sectionBg: string;
};

const SECTIONS: Section[] = [
  {
    id: "intro",
    eyebrow: "Who I am",
    headline: info.name,
    subhead: "Architecture, delivery, observability, reliability, scaling, and operational AI in production",
    body:
      "I design and ship production systems that connect platform infrastructure, data, and operational AI. The work covers how software is built, deployed, observed, kept reliable, and scaled without losing control of cost or change.",
    accent: "#64ffda",
    accentGlow: "rgba(100, 255, 218, 0.25)",
    sectionBg: "#0a192f",
  },
  {
    id: "rusha",
    eyebrow: "Rusha",
    headline: "Platform Systems",
    subhead: "System design, release workflows, environment boundaries, and operational guardrails",
    body:
      "Rusha turns platform architecture into a repeatable delivery system, with GitOps workflows, starter templates, base images, event-driven boundaries, VCS integration, and shared controls that make changes easier to ship and safer to operate.",
    accent: "#64ffda",
    accentGlow: "rgba(100, 255, 218, 0.24)",
    sectionBg: "#0d1f33",
  },
  {
    id: "tierraviva",
    eyebrow: "TierraViva AI",
    headline: "Big Data Platforms",
    subhead: "Ingest, transform, serve, observe, and scale on AWS and Kubernetes",
    body:
      "TierraViva AI treats data infrastructure as a production operating layer, connecting ingestion, orchestration, compute, metadata, analytics engines, and serving paths so research and reporting systems stay visible, reliable, and cost-aware as workloads grow.",
    accent: "#c084fc",
    accentGlow: "rgba(192, 132, 252, 0.25)",
    sectionBg: "#11102a",
  },
  {
    id: "agents",
    eyebrow: "AI operations",
    headline: "Agent Systems",
    subhead: "Orchestration, gateways, approvals, monitoring, and safe execution",
    body:
      "I build agent systems as operating software, with agentic frameworks, gateways, approval paths, tool integrations, and monitoring around live workflows. The goal is safe execution, clear visibility, and deployment patterns that travel well across production environments.",
    accent: "#54a0ff",
    accentGlow: "rgba(84, 160, 255, 0.25)",
    sectionBg: "#0a1a2e",
  },
  {
    id: "analytics",
    eyebrow: "Decision surfaces",
    headline: "Applied Analytics",
    subhead: "Dashboards, assistants, APIs, and reporting surfaces tied to live systems",
    body:
      "This is where the underlying platform becomes usable: dashboards for operators, APIs for products, assistants for exploration, and reporting surfaces that turn reliable data and AI systems into decisions people can act on.",
    accent: "#ffcb6b",
    accentGlow: "rgba(255, 203, 107, 0.25)",
    sectionBg: "#161018",
  },
  {
    id: "outcomes",
    eyebrow: "In production",
    headline: "What holds up",
    subhead: `${info.period} building systems that ship safely, stay visible, and scale`,
    body: [
      "60–80% networking cost reduction on OWA infrastructure",
      "Elastic Dremio executor scaling without giving up query performance",
      "Production agent systems running behind approval and observability layers",
      `${projects.length} portfolio systems spanning platform, analytics, and AI`,
      ...experiences.map((e) => `${e.label}: ${e.title}`),
    ].join(" · "),
    accent: "#8fd3f4",
    accentGlow: "rgba(143, 211, 244, 0.25)",
    sectionBg: "#0a192f",
  },
];

export default function BigNumberSections() {
  const [activeSection, setActiveSection] = useState(SECTIONS[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          setActiveSection(visible.target.id);
        }
      },
      {
        threshold: [0.35, 0.6, 0.8],
        rootMargin: "-10% 0px -10% 0px",
      },
    );

    const nodes = Array.from(document.querySelectorAll("section[data-big-number='true']"));
    nodes.forEach((node) => observer.observe(node));

    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.wrapper}>
      {SECTIONS.map((s) => (
        <section
          key={s.id}
          id={s.id}
          data-big-number="true"
          className={`${styles.bigNumber} ${
            activeSection === s.id ? styles.active : styles.inactive
          }`}
          style={
            {
              "--accent": s.accent,
              "--accent-glow": s.accentGlow,
              "--section-bg": s.sectionBg,
            } as CSSProperties
          }
        >
          <p className={styles.eyebrow}>{s.eyebrow}</p>
          <h2 className={styles.number}>{s.headline}</h2>
          <p className={styles.label}>{s.subhead}</p>
          <div className={styles.accentLine} />
          <p className={styles.body}>{s.body}</p>
        </section>
      ))}
    </div>
  );
}
