"use client";

import { useFormStatus } from "react-dom";
import SpinnerMini from "./SpinnerMini";
import SubmitButton from "./SubmitButton";

function ReservationEdit({ params, maxCapacity, updateReservationAction, numGuests, observations }) {
  function handleUpdateReservation(e) {
    if (!confirm("Are you sure you want to update this reservation?")) {
      e.preventDefault();
    }
  }
  return (
    <div>
      <h2 className="font-semibold text-xl md:text-2xl text-accent-400 mb-5 md:mb-7">
        Edit Reservation #{params.reservationId}
      </h2>

      <form
        action={updateReservationAction}
        onSubmit={handleUpdateReservation}
        className="bg-primary-900 py-4 md:py-8 px-3 md:px-12 text-sm md:text-lg flex gap-3 md:gap-6 flex-col"
      >
        <input type="hidden" name="reservationId" value={params.reservationId} />

        <div className="space-y-2">
          <label htmlFor="numGuests">How many guests?</label>
          <select
            name="numGuests"
            id="numGuests"
            defaultValue={numGuests}
            className="px-3 py-2 md:px-5 md:py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm text-sm md:text-base"
            required
          >
            <option value="" key="">
              Select number of guests...
            </option>
            {Array.from({ length: maxCapacity }, (_, i) => i + 1).map((x) => (
              <option value={x} key={x}>
                {x} {x === 1 ? "guest" : "guests"}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="observations">
            Anything we should know about your stay?
          </label>
          <textarea
            name="observations"
            defaultValue={observations}
            className="px-3 py-2 md:px-5 md:py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm text-sm md:text-base"
          />
        </div>

        <div className="flex justify-end items-center gap-6">
          <SubmitButton labelPending={"Updating..."} >Update reservation</SubmitButton>
        </div>
      </form>
    </div>
  );
}

export default ReservationEdit;
