import { describe, expect, it } from "vitest";
import {
  info,
  experiences,
  projects,
  certifications,
  education,
  publications,
  skills,
  domains,
  skillsByDomain,
  type Project,
} from "./data";

describe("portfolio data (T1.1)", () => {
  it("identity is Emmanuel K. Davidson, Platform Engineering Leader", () => {
    expect(info.name).toBe("Emmanuel K. Davidson");
    expect(info.title).toContain("Platform Engineering Leader");
    expect(info.title).toContain("Cloud & Data Architect");
    expect(info.email).toBe("kipronofb@gmail.com");
  });

  it("OWA role is Senior Software Engineer & Platform Architect, starts 2023", () => {
    const owa = experiences.find((e) => e.id === "one-world-analytics");
    expect(owa).toBeDefined();
    expect(owa!.title).toBe("Senior Software Engineer & Platform Architect");
    expect(owa!.date).toContain("2023");
    // No stale "2020 - Present"
    expect(owa!.date).not.toMatch(/2020.*Present/);
    // No stale "Lead Data Engineer"
    expect(owa!.title).not.toContain("Lead Data Engineer");
  });

  it("has 3 experiences with correct timeline", () => {
    expect(experiences.length).toBe(3);
    const jitu = experiences.find((e) => e.id === "the-jitu");
    expect(jitu?.date).toContain("2021");
    expect(jitu?.date).toContain("2023");
    const touch = experiences.find((e) => e.id === "touch-inspiration");
    expect(touch?.date).toContain("2019");
    expect(touch?.date).toContain("2021");
  });

  it("top-level portfolio projects are present with non-empty tech stacks", () => {
    const expectedIds = ["rusha", "hermes", "tierraviva", "faenx"];
    expect(projects.length).toBe(4);
    for (const id of expectedIds) {
      const p = projects.find((proj) => proj.id === id) as Project | undefined;
      expect(p, `project ${id} should exist`).toBeDefined();
      expect(p!.technologies.length).toBeGreaterThan(0);
      expect(p!.description.length).toBeGreaterThan(0);
    }
  });

  it("no stale Rusha Spark / Hive Metastore leftovers", () => {
    for (const p of projects) {
      expect(p.title).not.toContain("Rusha Spark");
      expect(p.title).not.toContain("Hive Metastore");
      expect(p.description).not.toContain("Hive Metastore");
    }
  });

  it("TierraViva is represented as one platform-level project", () => {
    const tierraviva = projects.find((p) => p.id === "tierraviva");
    expect(tierraviva?.description).toContain("ingests and mines");
    expect(tierraviva?.description).toContain("agents");
    expect(projects.find((p) => p.id === "owa-airflow")).toBeUndefined();
    expect(projects.find((p) => p.id === "humboldt")).toBeUndefined();
  });

  it("certifications list AWS SAA + Google Data Analytics + KCNA", () => {
    expect(certifications.length).toBe(3);
    expect(
      certifications.some((c) => c.title.includes("AWS Certified Solutions Architect"))
    ).toBe(true);
    expect(
      certifications.some((c) => c.title.includes("Google Data Analytics"))
    ).toBe(true);
    const kcna = certifications.find((c) => c.title.includes("KCNA"));
    expect(kcna).toBeDefined();
    expect(kcna!.issuer).toBe("The Linux Foundation");
    expect(kcna!.credlyBadgeId).toBe("8c88fa2d-8bb9-4a6b-861e-0851f62cf0d7");
    expect(kcna!.certificateId).toBe("LF-urra1y7iek");
  });

  it("education has correct dates", () => {
    expect(education.length).toBe(2);
    const uon = education.find((e) => e.label === "University of Nairobi");
    expect(uon?.date).toContain("2018");
    expect(uon?.date).toContain("2019");
    const uoe = education.find((e) => e.label === "University of Eldoret");
    expect(uoe?.date).toContain("2013");
    expect(uoe?.date).toContain("2016");
  });

  it("has 5 Medium publications", () => {
    expect(publications.length).toBe(5);
    for (const pub of publications) {
      expect(pub.title.length).toBeGreaterThan(0);
      expect(pub.description.length).toBeGreaterThan(0);
      expect(pub.url).toContain("medium.com");
    }
  });

  it("skills list is non-empty and uses brand images", () => {
    expect(skills.length).toBeGreaterThan(0);
    for (const s of skills) {
      expect(s.name.length).toBeGreaterThan(0);
      expect(s.image).toBeTruthy();
    }
  });

  it("defines the 4 canonical domains with tool inventories", () => {
    const expectedIds = [
      "platform-engineering",
      "data-platform-engineering",
      "agent-systems",
      "applied-analytics",
    ] as const;
    expect(domains.length).toBe(4);
    expect(domains.map((d) => d.id)).toEqual(expectedIds);
    expect(domains.map((d) => d.label)).toEqual([
      "Platform Engineering",
      "Data Platform Engineering",
      "Agent Systems",
      "Applied Analytics",
    ]);
    for (const domain of domains) {
      expect(domain.summary.length).toBeGreaterThan(0);
      expect(domain.tools.length).toBeGreaterThan(0);
      for (const tool of domain.tools) {
        expect(tool.name.length).toBeGreaterThan(0);
        expect(tool.role.length).toBeGreaterThan(0);
      }
    }
  });

  it("every domain has at least one fullstack delivery tool", () => {
    for (const domain of domains) {
      expect(
        domain.tools.some((t) => t.fullstack === true),
        `domain ${domain.id} should have a fullstack delivery tool`
      ).toBe(true);
    }
  });

  it("skillsByDomain groups tools under the 4 canonical domain labels", () => {
    expect(skillsByDomain.length).toBe(4);
    expect(skillsByDomain.map((g) => g.domainLabel)).toEqual([
      "Platform Engineering",
      "Data Platform Engineering",
      "Agent Systems",
      "Applied Analytics",
    ]);
    for (const group of skillsByDomain) {
      expect(group.tools.length).toBeGreaterThan(0);
    }
  });

  it("domain slugs form the canonical AI-SEO landing-page list", () => {
    // Mirrors the landing-page list ssg.mjs derives from domains[] for
    // build/llms.txt and build/ai.txt. If this assertion breaks, the
    // generated AI-SEO files are out of sync with the canonical model.
    const domainSlugs = domains.map((d) => d.slug);
    expect(domainSlugs).toEqual([
      "platform-systems",
      "data-platforms",
      "agent-systems",
      "applied-analytics",
    ]);
    const coreLandingPaths = [
      "/",
      "/emmanuel-davidson/",
      ...domainSlugs.map((s) => `/${s}/`),
      "/projects/",
      "/contact/",
    ];
    // Sanity: no duplicate routes, all are slash-delimited paths.
    expect(new Set(coreLandingPaths).size).toBe(coreLandingPaths.length);
    for (const p of coreLandingPaths) {
      expect(p.startsWith("/")).toBe(true);
      expect(p.endsWith("/")).toBe(true);
    }
  });

  it("domain-serving projects declare which domain(s) they serve", () => {
    const domainProjects = ["rusha", "hermes", "tierraviva"];
    for (const id of domainProjects) {
      const project = projects.find((p) => p.id === id) as Project | undefined;
      expect(project, `project ${id} should exist`).toBeDefined();
      expect(
        project!.description,
        `project ${id} should declare which domain(s) it serves`
      ).toMatch(/Serves the .* domain/);
    }
  });
});
