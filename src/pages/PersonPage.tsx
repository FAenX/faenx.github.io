import { Link } from "react-router";
import SiteNav from "../components/SiteNav";
import { crawlProjects, personPage } from "../data/searchPages";
import { info } from "../data/data";
import JsonLd from "../seo/JsonLd";
import PageMeta from "../seo/PageMeta";
import styles from "./SearchPages.module.css";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  name: personPage.title,
  description: personPage.description,
  url: `https://faenx.github.io/${personPage.slug}/`,
  mainEntity: {
    "@type": "Person",
    name: info.name,
    alternateName: "Emmanuel Davidson",
    email: info.email,
    jobTitle: info.title,
    sameAs: info.links.map((link) => link.href),
    knowsAbout: personPage.keywords,
  },
};

export default function PersonPage() {
  return (
    <div className={styles.page}>
      <PageMeta
        title={personPage.title}
        description={personPage.description}
        path={`/${personPage.slug}/`}
        keywords={personPage.keywords}
      />
      <JsonLd data={personSchema} />
      <SiteNav />

      <main>
        <section className={styles.hero}>
          <p className={styles.eyebrow}>Emmanuel Davidson</p>
          <h1 className={styles.title}>{personPage.headline}</h1>
          <p className={styles.intro}>{personPage.intro}</p>
          <div className={styles.cta}>
            <a
              className={`${styles.button} ${styles.buttonPrimary}`}
              href={info.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              Connect on LinkedIn
            </a>
            <Link className={`${styles.button} ${styles.buttonSecondary}`} to="/projects/">
              View projects
            </Link>
          </div>
        </section>

        <section className={`${styles.section} ${styles.grid}`}>
          {personPage.sections.map((section) => (
            <article key={section.title} className={styles.card}>
              <h2 className={styles.sectionTitle}>{section.title}</h2>
              <p className={styles.body}>{section.body}</p>
              {section.bullets ? (
                <ul className={styles.list}>
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              ) : null}
            </article>
          ))}
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Project evidence</h2>
        </section>

        <section className={styles.projectsGrid}>
          {crawlProjects
            .filter((project) => personPage.relatedProjectIds.includes(project.id))
            .map((project) => (
              <Link key={project.id} className={styles.projectLink} to={`/projects/${project.id}/`}>
                <article className={styles.card}>
                  <p className={styles.projectMeta}>{project.category}</p>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <p className={styles.projectBody}>{project.description}</p>
                </article>
              </Link>
            ))}
        </section>
      </main>
    </div>
  );
}
