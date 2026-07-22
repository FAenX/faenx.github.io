import { useEffect, useState } from "react";
import { experiences, info, projects, domains } from "../../data/data";
import styles from "./BigNumberSections.module.css";

type Section = {
  id: string;
  eyebrow: string;
  headline: string;
  subhead: string;
  body: string;
};

/**
 * Per-domain presentation copy. Accent/glow/section-bg now live as CSS tokens
 * (see variables.css --dom-*) and are applied via [data-domain] selectors, so
 * the hero visual identity adapts to light/dark automatically. Only the
 * eyebrow and subhead text remain here as presentation copy.
 */
const domainVisual: Record<string, { eyebrow: string; subhead: string }> = {
  "platform-engineering": {
    eyebrow: "Rusha",
    subhead: "System design, release workflows, environment boundaries, and operational guardrails",
  },
  "data-platform-engineering": {
    eyebrow: "TierraViva AI",
    subhead: "Ingest, transform, serve, observe, and scale on AWS and Kubernetes",
  },
  "agent-systems": {
    eyebrow: "Agent Systems",
    subhead: "Orchestration, gateways, approvals, monitoring, and safe execution",
  },
  "applied-analytics": {
    eyebrow: "Decision surfaces",
    subhead: "Dashboards, assistants, APIs, and reporting surfaces tied to live systems",
  },
};

/**
 * Domain hero body text. Kept here as presentation copy so the hero can stay
 * prose-only (no tool chips) while `domains[].summary` feeds the expertise
 * and Person pages where the full tool inventories live.
 */
const domainBody: Record<string, string> = {
  "platform-engineering":
    "Rusha turns platform architecture into a repeatable delivery system, with GitOps workflows, starter templates, base images, event-driven boundaries, VCS integration, and shared controls that make changes easier to ship and safer to operate.",
  "data-platform-engineering":
    "TierraViva AI treats data infrastructure as a production operating layer, connecting ingestion, orchestration, compute, metadata, analytics engines, and serving paths so research and reporting systems stay visible, reliable, and cost-aware as workloads grow.",
  "agent-systems":
    "I build agent systems as operating software, with agentic frameworks, gateways, approval paths, tool integrations, and monitoring around live workflows. The goal is safe execution, clear visibility, and deployment patterns that travel well across production environments.",
  "applied-analytics":
    "This is where the underlying platform becomes usable: dashboards for operators, APIs for products, assistants for exploration, and reporting surfaces that turn reliable data and AI systems into decisions people can act on.",
};

const domainSections: Section[] = domains.map((domain) => {
  const visual = domainVisual[domain.id];
  return {
    id: domain.slug,
    eyebrow: visual.eyebrow,
    headline: domain.label,
    subhead: visual.subhead,
    body: domainBody[domain.id] ?? domain.summary,
  };
});

const introSection: Section = {
  id: "intro",
  eyebrow: "Who I am",
  headline: info.name,
  subhead:
    "Architecture, delivery, observability, reliability, scaling, and operational AI in production",
  body:
    "I design and ship production systems that connect platform infrastructure, data, and operational AI. The work covers how software is built, deployed, observed, kept reliable, and scaled without losing control of cost or change.",
};

const outcomesSection: Section = {
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
};

const SECTIONS: Section[] = [introSection, ...domainSections, outcomesSection];

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
          data-domain={s.id}
          className={`${styles.bigNumber} ${
            activeSection === s.id ? styles.active : styles.inactive
          }`}
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
