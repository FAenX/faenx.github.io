import { info, experiences, education, professionalSummary, certifications, projects, publications, domains } from "../data";

/**
 * SeoShell - a visually-hidden semantic HTML layer that mirrors the
 * visible portfolio content for crawlers, AI search engines, and screen
 * readers.
 *
 * Visibility: uses `sr-only` styling (clip + off-screen) so the content is
 * invisible to sighted users but fully available to assistive tech and bots.
 */
export default function SeoShell() {
  const orgName = "Emmanuel K. Davidson";

  return (
    <main aria-hidden="false" style={srOnlyStyle}>
      <h1>{orgName} — Platform Systems, Data Platforms, and Agent Systems</h1>

      {/* Person identity block */}
      <section id="seo-about">
        <h2>About</h2>
        <p>
          <strong>{info.name}</strong> — {info.about}. Based in {info.location}.
          Contact: <a href={`mailto:${info.email}`}>{info.email}</a>.
        </p>
        <p>{professionalSummary.description}</p>
        <nav aria-label="Social profiles">
          <ul>
            {info.links.map((l) => (
              <li key={l.href}>
                <a href={l.href} rel="me noopener">
                  {l.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </section>

      {/* Experience timeline */}
      <section id="seo-experience">
        <h2>Work Experience</h2>
        {experiences.map((exp) => (
          <article key={exp.id} id={`seo-${exp.id}`}>
            <h3>{exp.label}</h3>
            <p>
              <strong>{exp.title}</strong>
              <br />
              <time>{exp.date}</time>
            </p>
            <ul>
              {exp.description.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      {/* Projects */}
      <section id="seo-projects">
        <h2>Projects</h2>
        {projects.map((p) => (
          <article key={p.id} id={`seo-${p.id}`}>
            <h3>{p.title}</h3>
            <p>
              <strong>Category:</strong> {p.category}
            </p>
            <p>{p.description}</p>
            <p>
              <strong>Technologies:</strong> {p.technologies.join(", ")}
            </p>
            {p.githubUrl && (
              <p>
                <a href={p.githubUrl} rel="noopener">
                  Source code
                </a>
                {p.liveUrl ? (
                  <>
                    {" "}
                    &middot;{" "}
                    <a href={p.liveUrl} rel="noopener">
                      Live demo
                    </a>
                  </>
                ) : null}
              </p>
            )}
          </article>
        ))}
      </section>

      {/* Skills — grouped by canonical domain, with each tool's role */}
      <section id="seo-skills">
        <h2>Domains of Expertise &amp; Tools</h2>
        <p>
          My work breaks down into four domains of expertise. Each domain has a curated set of
          tools, and each tool has a specific role inside that domain. Fullstack application
          engineering shows up inside every domain as the delivery vehicle for the UIs, dashboards,
          and APIs that domain depends on.
        </p>
        {domains.map((domain) => (
          <article key={domain.id} id={`seo-domain-${domain.id}`}>
            <h3>{domain.label}</h3>
            <p>{domain.summary}</p>
            <ul>
              {domain.tools.map((tool) => (
                <li key={tool.name}>
                  <strong>{tool.name}</strong>: {tool.role}
                  {tool.fullstack ? " (fullstack delivery)" : ""}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      {/* Certifications */}
      <section id="seo-certifications">
        <h2>Certifications</h2>
        <ul>
          {certifications.map((c) => (
            <li key={c.title}>
              <strong>{c.title}</strong> — {c.issuer} (<time>{c.date}</time>).
              {c.description}
              {c.certificateId ? ` Certificate ID: ${c.certificateId}.` : null}
              {c.expires ? ` Expires: ${c.expires}.` : null}
              {c.credlyBadgeId ? (
                <>
                  {" "}
                  <a
                    href={`https://www.credly.com/badges/${c.credlyBadgeId}`}
                    rel="noopener"
                  >
                    Verify on Credly
                  </a>
                  .
                </>
              ) : null}
            </li>
          ))}
        </ul>
      </section>

      {/* Education */}
      <section id="seo-education">
        <h2>Education</h2>
        {education.map((e) => (
          <article key={e.label}>
            <h3>{e.label}</h3>
            <p>
              {e.description}
              <br />
              <time>{e.date}</time>
            </p>
            {e.highlights && e.highlights.length > 0 && (
              <ul>
                {e.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </section>

      {/* Publications */}
      <section id="seo-publications">
        <h2>Publications &amp; Thought Leadership</h2>
        <ul>
          {publications.map((pub) => (
            <li key={pub.title}>
              <a href={pub.url} rel="noopener">
                <strong>{pub.title}</strong>
              </a>
              {" — "}
              {pub.description}
            </li>
          ))}
        </ul>
      </section>

      {/* Contact */}
      <section id="seo-contact">
        <h2>Contact</h2>
        <p>
          Email: <a href={`mailto:${info.email}`}>{info.email}</a>
        </p>
        <ul>
          {info.links.map((l) => (
            <li key={l.href}>
              <a href={l.href} rel="me noopener">
                {l.name}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

const srOnlyStyle: React.CSSProperties = {
  position: "absolute",
  width: 1,
  height: 1,
  padding: 0,
  margin: -1,
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  border: 0,
};
