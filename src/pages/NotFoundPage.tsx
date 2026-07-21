import { Link } from "react-router";
import SiteNav from "../components/SiteNav";
import PageMeta from "../seo/PageMeta";
import styles from "./SearchPages.module.css";

export default function NotFoundPage() {
  return (
    <div className={styles.page}>
      <PageMeta
        title="Page not found | Emmanuel K. Davidson"
        description="The page you requested could not be found."
        path="/404.html"
      />
      <SiteNav />
      <main>
        <section className={styles.hero}>
          <p className={styles.eyebrow}>404</p>
          <h1 className={styles.title}>Page not found</h1>
          <p className={styles.intro}>
            The requested page does not exist. Use the links below to continue exploring the
            portfolio.
          </p>
          <div className={styles.cta}>
            <Link className={`${styles.button} ${styles.buttonPrimary}`} to="/">
              Back home
            </Link>
            <Link className={`${styles.button} ${styles.buttonSecondary}`} to="/projects/">
              Browse projects
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
