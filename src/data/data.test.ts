import { describe, expect, it } from "vitest";
import {
  info,
  experiences,
  projects,
  certifications,
  education,
  publications,
  skills,
  type Project,
} from "./data";

describe("portfolio data (T1.1)", () => {
  it("identity is Emmanuel K. Davidson, Platform Engineering Leader", () => {
    expect(info.name).toBe("Emmanuel K. Davidson");
    expect(info.title).toContain("Platform Engineering Leader");
    expect(info.title).toContain("Cloud Architect");
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

  it("certifications list AWS SAA + Google Data Analytics", () => {
    expect(certifications.length).toBe(2);
    expect(
      certifications.some((c) => c.title.includes("AWS Certified Solutions Architect"))
    ).toBe(true);
    expect(
      certifications.some((c) => c.title.includes("Google Data Analytics"))
    ).toBe(true);
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
});
