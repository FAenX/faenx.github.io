import { Link } from "react-router";
import SiteNav from "../components/SiteNav";
import { crawlProjects } from "../data/searchPages";
import JsonLd from "../seo/JsonLd";
import PageMeta from "../seo/PageMeta";
import styles from "./SearchPages.module.css";

const schema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Projects | Emmanuel K. Davidson",
  description:
    "Selected projects by Emmanuel K. Davidson across four domains of expertise: Platform Engineering, Data Platform Engineering, Agent Systems, and Applied Analytics.",
  url: "https://faenx.github.io/projects/",
  hasPart: crawlProjects.map((project) => ({
    "@type": "SoftwareApplication",
    name: project.title,
    url: `https://faenx.github.io/projects/${project.id}/`,
  })),
};

export default function ProjectsPage() {
  return (
    <div className={styles.page}>
      <PageMeta
        title="Projects | Emmanuel K. Davidson"
        description="Projects by Emmanuel K. Davidson across Platform Engineering, Data Platform Engineering, Agent Systems, and Applied Analytics, showing architecture, engineering, and fullstack application delivery in production."
        path="/projects/"
        keywords={[
          "projects",
          "Platform Engineering",
          "Data Platform Engineering",
          "Agent Systems",
          "Applied Analytics",
          "fullstack application engineering",
          "platform infrastructure",
          "biodiversity intelligence",
          "agent systems",
          "applied analytics",
        ]}
      />
      <JsonLd data={schema} />
      <SiteNav />

      <main>
        <section className={styles.hero}>
          <p className={styles.eyebrow}>Projects</p>
          <h1 className={styles.title}>Work that shows how the systems actually operate</h1>
          <p className={styles.intro}>
            These projects show how complex systems are designed, built, deployed, observed, and
            scaled in practice across Platform Engineering, Data Platform Engineering, Agent
            Systems, and Applied Analytics, with fullstack application engineering as the delivery
            vehicle for the UIs, dashboards, and APIs in each domain.
          </p>
        </section>

        <section className={styles.projectsGrid}>
          {crawlProjects.map((project) => (
            <Link key={project.id} className={styles.projectLink} to={`/projects/${project.id}/`}>
              <article className={styles.card}>
                <p className={styles.projectMeta}>
                  {project.category}
                  {project.year ? ` · ${project.year}` : ""}
                </p>
                <h2 className={styles.projectTitle}>{project.title}</h2>
                <p className={styles.projectBody}>{project.description}</p>
              </article>
            </Link>
          ))}
        </section>
      </main>
    </div>
  );
}
