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
    "Selected projects by Emmanuel K. Davidson across platform infrastructure, biodiversity intelligence, agent systems, model gateways, and applied analytics.",
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
        description="Selected platform infrastructure, biodiversity intelligence, agent systems, model-gateway, and applied analytics projects by Emmanuel K. Davidson."
        path="/projects/"
        keywords={["projects", "platform infrastructure", "biodiversity intelligence", "agent systems", "model gateways", "applied analytics"]}
      />
      <JsonLd data={schema} />
      <SiteNav />

      <main>
        <section className={styles.hero}>
          <p className={styles.eyebrow}>Projects</p>
          <h1 className={styles.title}>Selected systems and products</h1>
          <p className={styles.intro}>
            These projects show the mix of platform infrastructure, biodiversity intelligence,
            multi-agent systems, model-gateway operations, and analytical product work behind the
            portfolio.
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
