"use client";

import {useState} from "react";
import AddBookingForm from "./AddBookingForm";
import SearchBookings from "./SearchBookings";
import type {Booking} from "./booking";

export default function DeskBookings() {
  const [bookings, setBookings] = useState<Booking[]>([
    { desk: "A1", floor: 1, date: new Date("2026-10-02"), active: true },
    { desk: "B2", floor: 2, date: new Date("2026-10-03"), active: false },
    { desk: "C3", floor: 3, date: new Date("2026-10-04"), active: true },
  ]);
  function addBooking(booking: Booking) {
    setBookings((currentBookings) => [...currentBookings, booking]);
  }

  return (
    <div>
      <AddBookingForm onAdd={addBooking} />
      <SearchBookings bookings={bookings} />
    </div>
  );
}