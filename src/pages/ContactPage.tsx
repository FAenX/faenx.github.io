import SiteNav from "../components/SiteNav";
import { info } from "../data/data";
import JsonLd from "../seo/JsonLd";
import PageMeta from "../seo/PageMeta";
import styles from "./SearchPages.module.css";

const schema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: `Contact | ${info.name}`,
  description: `Connect with ${info.name} on LinkedIn for platform infrastructure, agent systems, data platforms, and applied analytics work.`,
  url: "https://faenx.github.io/contact/",
};

export default function ContactPage() {
  return (
    <div className={styles.page}>
      <PageMeta
        title={`Contact | ${info.name}`}
        description={`Connect with ${info.name} on LinkedIn for platform infrastructure, agent systems, data platforms, and applied analytics work.`}
        path="/contact/"
        keywords={["contact emmanuel davidson", "linkedin", "platform infrastructure", "agent systems"]}
      />
      <JsonLd data={schema} />
      <SiteNav />

      <main>
        <section className={styles.hero}>
          <p className={styles.eyebrow}>Contact</p>
          <h1 className={styles.title}>The best way to reach Emmanuel is LinkedIn</h1>
          <p className={styles.intro}>
            If you want to talk about platform infrastructure, biodiversity intelligence,
            agent systems, or applied analytics, connect on LinkedIn.
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
