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
    eyebrow: "Identity",
    headline: info.name,
    subhead: "Platform Systems · Data Platforms · Agent Systems",
    body:
      "I design and operate production systems that move from platform infrastructure to analytics and AI, using GitOps, observability, automation, and delivery patterns that hold up in production.",
    accent: "#64ffda",
    accentGlow: "rgba(100, 255, 218, 0.25)",
    sectionBg: "#0a192f",
  },
  {
    id: "rusha",
    eyebrow: "Rusha",
    headline: "Platform Systems",
    subhead: "GitOps delivery, contracts, integrations, and deployment templates",
    body:
      "Rusha is not a narrow app surface. It is a platform system for building, validating, deploying, and operating software through GitOps workflows, starter templates, base images, event-driven architecture, VCS integration, and shared operational guardrails.",
    accent: "#64ffda",
    accentGlow: "rgba(100, 255, 218, 0.24)",
    sectionBg: "#0d1f33",
  },
  {
    id: "tierraviva",
    eyebrow: "OWA + TierraViva",
    headline: "Big Data Platforms",
    subhead: "AWS, EKS, orchestration, metadata, and analytics engines working as one system",
    body:
      "The work goes far beyond a single orchestration tool. It is a GitOps-managed data engineering platform on AWS, spanning CloudFormation, Argo CD, EKS, k3s, Spark, Dremio, Hive metadata, and the delivery paths that turn raw data into usable analytics and reporting systems.",
    accent: "#c084fc",
    accentGlow: "rgba(192, 132, 252, 0.25)",
    sectionBg: "#11102a",
  },
  {
    id: "agents",
    eyebrow: "AI systems",
    headline: "Agent Systems",
    subhead: "Hermes-powered workflows, multi-agent runtime patterns, and operational control surfaces",
    body:
      "I build production agent systems on top of runtimes like Hermes, turning LLM capability into operational workflows, assistants, and multi-agent services across K3s, APIs, Slack, and analytics tools. The focus is not model hype, it is reliable execution, approval paths, and measurable outcomes.",
    accent: "#54a0ff",
    accentGlow: "rgba(84, 160, 255, 0.25)",
    sectionBg: "#0a1a2e",
  },
  {
    id: "analytics",
    eyebrow: "AMBAND + product delivery",
    headline: "Applied Analytics",
    subhead: "Dashboards, assistants, APIs, and data products built for real use",
    body:
      "The delivery layer turns platform capability into decisions people can use: analytics dashboards, biodiversity data products, text-to-SQL assistants, charting systems, and reporting interfaces that connect live data with operational and executive workflows.",
    accent: "#ffcb6b",
    accentGlow: "rgba(255, 203, 107, 0.25)",
    sectionBg: "#161018",
  },
  {
    id: "outcomes",
    eyebrow: "Impact",
    headline: "Outcomes",
    subhead: `${info.period} shaping production systems across platform, data, and AI`,
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
