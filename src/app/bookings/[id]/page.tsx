import Link from "next/link";
import styles from "../../page.module.css";

type BookingDetails = {
  id: string;
  desk: string;
  floor: number;
  date: string;
  active: boolean;
};

const mockBookings: BookingDetails[] = [
  { id: "1", desk: "Desk A1", floor: 1, date: "2026-09-22", active: true },
  { id: "2", desk: "Desk B4", floor: 2, date: "2026-09-23", active: true },
  { id: "3", desk: "Desk C2", floor: 3, date: "2026-09-24", active: false },
];

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function BookingPage({ params }: PageProps) {
  const { id } = await params;
  const booking = mockBookings.find((mockBooking) => mockBooking.id === id);

  if (!booking) {
    return (
      <div className={styles.page}>
        <main className={styles.main}>
          <h1>Booking not found</h1>
          <p>This desk booking does not exist or has been removed.</p>
          <Link className={styles.navigationLink} href="/">Back to bookings</Link>
        </main>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>{booking.desk}</h1>
        <p>Booking ID: {booking.id}</p>
        <p>Floor: {booking.floor}</p>
        <p>Date: {booking.date}</p>
        <p>Status: {booking.active ? "Active" : "Inactive"}</p>
        <Link className={styles.navigationLink} href="/">Back to bookings</Link>
      </main>
    </div>
  );
}
