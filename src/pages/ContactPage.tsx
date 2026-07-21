import SiteNav from "../components/SiteNav";
import { info } from "../data/data";
import JsonLd from "../seo/JsonLd";
import PageMeta from "../seo/PageMeta";
import styles from "./SearchPages.module.css";

const schema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: `Contact | ${info.name}`,
  description: `Connect with ${info.name} on LinkedIn to talk about platform engineering, cloud infrastructure, data platforms, agentic systems, observability, reliability, and applied analytics.`,
  url: "https://faenx.github.io/contact/",
};

export default function ContactPage() {
  return (
    <div className={styles.page}>
      <PageMeta
        title={`Contact | ${info.name}`}
        description={`Connect with ${info.name} on LinkedIn to talk about platform engineering, cloud infrastructure, data platforms, agentic systems, observability, reliability, and applied analytics.`}
        path="/contact/"
        keywords={["contact emmanuel davidson", "linkedin", "platform engineering", "cloud infrastructure", "data platforms", "agentic systems", "observability", "reliability"]}
      />
      <JsonLd data={schema} />
      <SiteNav />

      <main>
        <section className={styles.hero}>
          <p className={styles.eyebrow}>Contact</p>
          <h1 className={styles.title}>The best way to reach Emmanuel is LinkedIn</h1>
          <p className={styles.intro}>
            If you want to talk about platform engineering, cloud infrastructure, data platforms,
            agentic systems, observability, reliability, or applied analytics, connect on
            LinkedIn.
          </p>
          <div className={styles.cta}>
            <a
              className={`${styles.button} ${styles.buttonPrimary}`}
              href={info.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              Open LinkedIn
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
