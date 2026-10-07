import Link from "next/link";
import styles from "./BookingCard.module.css";

type BookingCardProps = {
  id?: string;
  desk: string;
  floor: number;
  date: Date;
  active: boolean;
};

export default function BookingCard({ id, desk, floor, date, active }: BookingCardProps) {
  const cardContent = (
    <>
      <h2>Desk: {desk}</h2>
      <p>Floor: {floor}</p>
      <p>Date: {date.toISOString().slice(0, 10)}</p>
      <p>Status: {active ? "Active" : "Inactive"}</p>
      {id && <span className={styles.cardAction}>View booking</span>}
    </>
  );

  if (!id) {
    return <article className={styles.card}>{cardContent}</article>;
  }

  return (
    <Link className={`${styles.card} ${styles.cardLink}`} href={`/bookings/${encodeURIComponent(id)}`}>
      {cardContent}
    </Link>
  );
}