import type { Booking } from "./booking";
import styles from "./BookingsTable.module.css";

export const mockBookings: Booking[] = [
  { id: "1", desk: "Desk A1", floor: 1, date: new Date("2026-09-22"), active: true },
  { id: "2", desk: "Desk B4", floor: 2, date: new Date("2026-09-23"), active: true },
  { id: "3", desk: "Desk C2", floor: 3, date: new Date("2026-09-24"), active: false },
];

type BookingsTableProps = {
  bookings?: Booking[];
};

export default function BookingsTable({ bookings = mockBookings }: BookingsTableProps) {
  return (
    <div className={styles.tableWrapper}>
      <table className={styles.table}>
        <caption className={styles.caption}>Desk booking schedule</caption>
        <thead>
          <tr>
            <th scope="col">Desk</th>
            <th scope="col">Floor</th>
            <th scope="col">Date</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking.id ?? `${booking.desk}-${booking.date.toISOString()}`}>
              <td>{booking.desk}</td>
              <td>{booking.floor}</td>
              <td>{booking.date.toISOString().slice(0, 10)}</td>
              <td>
                <span className={booking.active ? styles.active : styles.inactive}>
                  {booking.active ? "Active" : "Inactive"}
                </span>
              </td>
            </tr>
          ))}
          {bookings.length === 0 && (
            <tr>
              <td className={styles.empty} colSpan={4}>No bookings yet</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}