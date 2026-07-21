import { Link } from "react-router";
import { expertisePages, personPage } from "../data/searchPages";
import styles from "./SiteNav.module.css";

const navLinks = [
  { to: "/", label: "Home" },
  { to: `/${personPage.slug}/`, label: personPage.navLabel },
  ...expertisePages.map((page) => ({ to: `/${page.slug}/`, label: page.navLabel })),
  { to: "/projects/", label: "Projects" },
  { to: "/contact/", label: "Contact" },
];

export default function SiteNav() {
  return (
    <nav className={styles.nav} aria-label="Primary">
      <div className={styles.inner}>
        {navLinks.map((link) => (
          <Link key={link.to} className={styles.link} to={link.to}>
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
