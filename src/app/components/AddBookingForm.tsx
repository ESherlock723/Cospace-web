"use client";

import {useState} from "react";
import type {Booking} from "./booking";
import styles from "./AddBookingForm.module.css";

type AddBookingFormProps = {
  onAdd: (booking: Booking) => void;
};

export default function AddBookingForm({onAdd}: AddBookingFormProps) {
  const [desk, setDesk] = useState("");
  const [floor, setFloor] = useState("1");
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [active, setActive] = useState(true);
  const [errors, setErrors] = useState<{ desk?: string; floor?: string; date?: string }>({});

  function addBooking(formData: FormData) {
    const deskValue = String(formData.get("desk") ?? "").trim();
    const floorValue = Number(formData.get("floor"));
    const bookingDate = String(formData.get("date"));

    const validationErrors: typeof errors = {};
    if (deskValue.length < 3) validationErrors.desk = "Enter a desk name with at least 3 characters.";
    if (!Number.isFinite(floorValue) || floorValue < 1) validationErrors.floor = "Enter a floor number of 1 or higher.";
    if (!bookingDate || Number.isNaN(new Date(bookingDate).getTime())) {
      validationErrors.date = "Choose a valid booking date.";
    }

    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    onAdd({
      desk: deskValue,
      floor: floorValue,
      date: new Date(bookingDate),
      active: formData.get("active") === "on",
    });
    setDesk("");
    setFloor("1");
    setDate(new Date().toISOString().slice(0, 10));
    setActive(true);
    setErrors({});
  }

  return (
    <form className={styles.form} action={addBooking} noValidate>
      {Object.keys(errors).length > 0 && (
        <p className={styles.errorSummary} role="alert">
          Check the highlighted fields and try again.
        </p>
      )}
      <label>
        Desk
        <input
          className={styles.input}
          type="text"
          name="desk"
          value={desk}
          onChange={(event) => setDesk(event.target.value)}
          aria-invalid={Boolean(errors.desk)}
          aria-describedby={errors.desk ? "desk-error" : undefined}
        />
        {errors.desk && <span className={styles.fieldError} id="desk-error">{errors.desk}</span>}
      </label>
      <label>
        Floor
        <input
          className={styles.input}
          type="number"
          name="floor"
          min="1"
          value={floor}
          onChange={(event) => setFloor(event.target.value)}
          aria-invalid={Boolean(errors.floor)}
          aria-describedby={errors.floor ? "floor-error" : undefined}
        />
        {errors.floor && <span className={styles.fieldError} id="floor-error">{errors.floor}</span>}
      </label>
      <label>
        Date
        <input
          className={styles.input}
          type="date"
          name="date"
          value={date}
          onChange={(event) => setDate(event.target.value)}
          aria-invalid={Boolean(errors.date)}
          aria-describedby={errors.date ? "date-error" : undefined}
        />
        {errors.date && <span className={styles.fieldError} id="date-error">{errors.date}</span>}
      </label>
      <label>
        <input
          className={styles.checkbox}
          type="checkbox"
          name="active"
          checked={active}
          onChange={(event) => setActive(event.target.checked)}
        />
        Active
      </label>
      <button className={styles.submitButton} type="submit">Add booking</button>
    </form>
  );
}