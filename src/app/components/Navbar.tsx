import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link className={styles.brand} href="/">
          CoSpace
        </Link>
        <nav className={styles.navigation} aria-label="Main navigation">
          <Link className={styles.navigationLink} href="/">
            Dashboard
          </Link>
          <Link className={styles.navigationLink} href="/profile">
            Profile
          </Link>
        </nav>
      </div>
    </header>
  );
}