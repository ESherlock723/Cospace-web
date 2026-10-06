type BookingCardProps = {
  desk: string;
  floor: number;
  date: Date;
  active: boolean;
};

export default function BookingCard({ desk, floor, date, active }: BookingCardProps) {
  return (
    <div>
      <h2>Desk: {desk}</h2>
      <p>Floor: {floor}</p>
      <p>Date: {date.toISOString().slice(0, 10)}</p>
      <p>Status: {active ? "Active" : "Inactive"}</p>
    </div>
  );
}