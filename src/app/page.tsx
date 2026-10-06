import styles from "./page.module.css";
import DeskBookings from "./components/deskBookings";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
       <h1>Booking Cards</h1>
      <DeskBookings />
     
      </main>
      <aside className={styles.aside}>
        <h1>Desk Bookings</h1>
        <search>Desk Bookings</search>
      </aside>
    </div>
  );
}
