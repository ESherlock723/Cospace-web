import Link from "next/link";
import styles from "../page.module.css";

export default function ProfilePage() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Profile</h1>
        <nav className={styles.navigation} aria-label="Main navigation">
          <Link className={styles.navigationLink} href="/">Back to bookings</Link>
        </nav>
      </main>
    </div>
  );
}