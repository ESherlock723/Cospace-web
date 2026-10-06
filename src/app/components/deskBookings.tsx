"use client";

import Link from "next/link";
import { useState } from "react";
import AddBookingForm from "./AddBookingForm";
import BaseModal from "./BaseModal";
import BookingsTable, { mockBookings } from "./BookingsTable";
import styles from "./Dashboard.module.css";
import type { Booking } from "./booking";

export default function DeskBookings() {
  const [bookings, setBookings] = useState<Booking[]>(mockBookings);
  const [isModalOpen, setIsModalOpen] = useState(false);

  function addBooking(booking: Booking) {
    setBookings((currentBookings) => [
      ...currentBookings,
      { ...booking, id: crypto.randomUUID() },
    ]);
    setIsModalOpen(false);
  }

  return (
    <div className={styles.dashboard}>
      <aside className={styles.sidebar} aria-label="Dashboard sidebar">
        <p className={styles.sidebarTitle}>Workspace</p>
        <nav className={styles.sideNav} aria-label="Dashboard navigation">
          <Link className={`${styles.sideLink} ${styles.sideLinkActive}`} href="/">
            Bookings
          </Link>
          <Link className={styles.sideLink} href="/profile">
            Profile
          </Link>
        </nav>
      </aside>

      <main className={styles.content}>
        <div className={styles.contentInner}>
          <header className={styles.pageHeader}>
            <div>
              <p className={styles.eyebrow}>Workspace overview</p>
              <h1>Desk bookings</h1>
            </div>
            <button
              className={styles.createButton}
              type="button"
              onClick={() => setIsModalOpen(true)}
            >
              Create booking
            </button>
          </header>

          <section className={styles.tableSection} aria-labelledby="bookings-heading">
            <h2 id="bookings-heading">All bookings</h2>
            <BookingsTable bookings={bookings} />
          </section>
        </div>
      </main>

      <BaseModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Create a desk booking"
      >
        <AddBookingForm onAdd={addBooking} />
      </BaseModal>
    </div>
  );
}