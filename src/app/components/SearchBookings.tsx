"use client";

import {useState} from "react";
import BookingCard from "./BookingCard";
import type {Booking} from "./booking";

type SearchBookingsProps = {
  bookings: Booking[];
};

export default function SearchBookings({bookings}: SearchBookingsProps) {
  const [search, setSearch] = useState("");
  const filteredBookings = bookings.filter((booking) =>
    booking.desk.includes(search.trim())
  );

  return (
    <>
      <label>
        Search desks<input type="search"
         value={search}onChange={(event) => 
         setSearch(event.target.value)}/>
      </label>
      {filteredBookings.map((booking) => (
        <BookingCard key={booking.desk} {...booking} />
      ))}
    </>
  );
}