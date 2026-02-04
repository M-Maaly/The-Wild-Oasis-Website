"use client"

import { createContext, useContext, useState } from "react";

const ReservationContext = createContext();

const initialState = { form: undefined, to: undefined };

function ReservationProvider({ children }) {
  const [range, setRange] = useState(initialState);
  const [hasBreakfast, setHasBreakfast] = useState(false);
  const [numGuests, setNumGuests] = useState(1);

  const resetRange = () => setRange(initialState)
  return (
    <ReservationContext.Provider value={{ range, setRange, resetRange, hasBreakfast, setHasBreakfast, numGuests, setNumGuests }}>
      {children}
    </ReservationContext.Provider>
  );
}

function useReservation() {
  const context = useContext(ReservationContext);
  if (context === undefined) {
    throw new Error(
      "ReservationContext must be used within a ReservationProvider"
    );
  }
  return context;
}
export { ReservationProvider, useReservation };
