import styles from './ProjectDetail.module.css';
import { useParams, useNavigate } from "react-router";
import { ArrowBackIcon, GitHubIcon, LaunchIcon } from "../components/icons";
import { projects } from "../data/data";
import PageMeta from "../seo/PageMeta";
import JsonLd from "../seo/JsonLd";
import SiteNav from "../components/SiteNav";

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <>
        <PageMeta
          title="Project not found | Emmanuel K. Davidson"
          description="The requested project page could not be found."
          path="/projects/"
        />
        <SiteNav />
        <main className={styles.main}>
          <div className={styles.container}>
            <div className={styles.notFound}>
              <h1 className={styles.notFoundTitle}>Project not found</h1>
              <button
                className={`${styles.button} ${styles.buttonPrimary}`}
                onClick={() => navigate("/projects/")}
              >
                <ArrowBackIcon size={18} /> Back to Projects
              </button>
            </div>
          </div>
        </main>
      </>
    );
  }

  const projectPath = `/projects/${project.id}/`;
  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: project.title,
    description: project.description,
    applicationCategory: project.category,
    keywords: project.technologies.join(", "),
    url: `https://faenx.github.io${projectPath}`,
    ...(project.githubUrl ? { codeRepository: project.githubUrl } : {}),
    ...(project.liveUrl ? { sameAs: [project.liveUrl] } : {}),
  };

  return (
    <>
      <PageMeta
        title={`${project.title} | Emmanuel K. Davidson`}
        description={project.description}
        path={projectPath}
        keywords={[project.category, ...project.technologies]}
      />
      <JsonLd data={projectSchema} />
      <SiteNav />
      <main className={styles.main}>
        <div className={styles.container}>
          <button
            className={styles.backButton}
            onClick={() => {
              navigate("/projects/");
            }}
          >
            <ArrowBackIcon size={18} /> Back to Projects
          </button>

          <div className={styles.card}>
            <p className={styles.category}>{project.category}</p>
            <h1 className={styles.title}>{project.title}</h1>
            <p className={styles.description}>{project.description}</p>

            <h2 className={styles.sectionTitle}>Technologies</h2>
            <div className={styles.chips}>
              {project.technologies.map((tech) => (
                <span key={tech} className={styles.chip}>{tech}</span>
              ))}
            </div>

            <div className={styles.actions}>
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.button} ${styles.buttonOutline}`}
                >
                  <GitHubIcon size={18} /> View Code
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.button} ${styles.buttonPrimary}`}
                >
                  <LaunchIcon size={18} /> Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
