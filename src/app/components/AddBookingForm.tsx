"use client";

import {useState} from "react";
import type {Booking} from "./booking";

type AddBookingFormProps = {
  onAdd: (booking: Booking) => void;
};

export default function AddBookingForm({onAdd}: AddBookingFormProps) {
  const [desk, setDesk] = useState("");
  const [floor, setFloor] = useState("1");
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [active, setActive] = useState(true);

  function addBooking(formData: FormData) {
    const bookingDate = String(formData.get("date"));
    onAdd({
      desk: String(formData.get("desk")),
      floor: Number(formData.get("floor")),
      date: new Date(bookingDate),
      active: formData.get("active") === "on",
    });
    setDesk("");
    setFloor("1");
    setDate(new Date().toISOString().slice(0, 10));
    setActive(true);
  }

  return (
    <form action={addBooking}>
      <label>
        Desk
        <input
          type="text"
          name="desk"
          value={desk}
          onChange={(event) => setDesk(event.target.value)}
          required
        />
      </label>
      <label>
        Floor
        <input
          type="number"
          name="floor"
          min="1"
          value={floor}
          onChange={(event) => setFloor(event.target.value)}
          required
        />
      </label>
      <label>
        Date
        <input
          type="date"
          name="date"
          value={date}
          onChange={(event) => setDate(event.target.value)}
          required
        />
      </label>
      <label>
        <input
          type="checkbox"
          name="active"
          checked={active}
          onChange={(event) => setActive(event.target.checked)}
        />
        Active
      </label>
      <button type="submit">Add desk</button>
    </form>
  );
}