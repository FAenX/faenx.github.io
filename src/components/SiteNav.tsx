import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";
import { expertisePages, personPage } from "../data/searchPages";
import { CloseIcon, MenuIcon } from "./icons";
import styles from "./SiteNav.module.css";

const navLinks = [
  { to: "/", label: "Home" },
  { to: `/${personPage.slug}/`, label: personPage.navLabel },
  ...expertisePages.map((page) => ({ to: `/${page.slug}/`, label: page.navLabel })),
  { to: "/projects/", label: "Projects" },
  { to: "/contact/", label: "Contact" },
];

export default function SiteNav() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const isActive = (to: string) => {
    if (to === "/") return location.pathname === "/";
    return location.pathname === to;
  };

  return (
    <nav className={styles.nav} aria-label="Primary">
      <div className={styles.bar}>
        <button
          type="button"
          className={styles.toggle}
          aria-expanded={open}
          aria-controls="nav-links"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <CloseIcon size={22} /> : <MenuIcon size={22} />}
        </button>
      </div>
      <div
        id="nav-links"
        className={`${styles.inner} ${open ? styles.open : ""}`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.to}
            className={`${styles.link} ${isActive(link.to) ? styles.active : ""}`}
            to={link.to}
            aria-current={isActive(link.to) ? "page" : undefined}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
