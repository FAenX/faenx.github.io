import { Link, useParams } from "react-router";
import SiteNav from "../components/SiteNav";
import { crawlProjects, expertisePages } from "../data/searchPages";
import JsonLd from "../seo/JsonLd";
import PageMeta from "../seo/PageMeta";
import styles from "./SearchPages.module.css";

type ExpertisePageProps = {
  slug?: string;
};

export default function ExpertisePage({ slug: slugProp }: ExpertisePageProps) {
  const { slug } = useParams<{ slug: string }>();
  const page = expertisePages.find((entry) => entry.slug === (slugProp ?? slug));

  if (!page) {
    return null;
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: page.title,
    description: page.description,
    url: `https://faenx.github.io/${page.slug}/`,
    about: page.keywords,
  };

  return (
    <div className={styles.page}>
      <PageMeta
        title={page.title}
        description={page.description}
        path={`/${page.slug}/`}
        keywords={page.keywords}
      />
      <JsonLd data={schema} />
      <SiteNav />

      <main>
        <section className={styles.hero}>
          <p className={styles.eyebrow}>Expertise</p>
          <h1 className={styles.title}>{page.headline}</h1>
          <p className={styles.intro}>{page.intro}</p>
          <div className={styles.cta}>
            <Link className={`${styles.button} ${styles.buttonSecondary}`} to="/emmanuel-davidson/">
              About Emmanuel
            </Link>
            <Link className={`${styles.button} ${styles.buttonPrimary}`} to="/projects/">
              View related projects
            </Link>
          </div>
        </section>

        <section className={`${styles.section} ${styles.grid}`}>
          {page.sections.map((section) => (
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
          <h2 className={styles.sectionTitle}>Related projects</h2>
          <div className={styles.chipRow}>
            {page.keywords.map((keyword) => (
              <span key={keyword} className={styles.chip}>
                {keyword}
              </span>
            ))}
          </div>
        </section>

        <section className={styles.projectsGrid}>
          {crawlProjects
            .filter((project) => page.relatedProjectIds.includes(project.id))
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
