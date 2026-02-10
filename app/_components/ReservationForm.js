"use client";

import { differenceInDays } from "date-fns";
import { useReservation } from "./ReservationContext";
import { createReservationAction } from "../_lib/actions";
import SubmitButton from "./SubmitButton";

function ReservationForm({ cabin, user }) {
  const {
    range,
    resetRange,
    hasBreakfast,
    setHasBreakfast,
    numGuests,
    setNumGuests,
  } = useReservation();
  const { maxCapacity, discount, regularPrice, id: cabinId } = cabin;
  const startDate = range.from;
  const endDate = range.to;
  const numNights = differenceInDays(endDate, startDate);

  const cabinPrice = numNights * (regularPrice - discount);
  const extrasPrice = hasBreakfast ? numGuests * numNights * 10 : 0;
  const totalPrice = cabinPrice + extrasPrice;

  const bookingData = {
    startDate,
    endDate,
    numNights,
    cabinPrice,
    cabinId,
    extrasPrice,
    totalPrice,
  };

  const createReservationWithData = createReservationAction.bind(
    null,
    bookingData,
  );
  return (
    <div className="scale-[1.01]">
      <div className="bg-primary-800 text-primary-300 px-4 md:px-16 py-2 flex flex-wrap justify-between items-center gap-2">
        <p>Logged in as</p>

        <div className="flex gap-4 items-center">
          <img
            // Important to display google profile images
            referrerPolicy="no-referrer"
            className="h-8 rounded-full"
            src={user.image}
            alt={user.name}
          />
          <p>{user.name}</p>
        </div>
      </div>

      {/* <p>
        {String(range.from)} to {String(range.to)}
      </p> */}
      <form
        // action={createReservationWithData}
        action={async (formData) => {
          createReservationWithData(formData);
          resetRange();
        }}
        className="bg-primary-900 py-4 md:py-10 px-3 md:px-16 text-sm md:text-lg flex gap-3 md:gap-5 flex-col"
      >
        <div className="space-y-2">
          <label htmlFor="numGuests">How many guests?</label>
          <select
            name="numGuests"
            id="numGuests"
            className="px-3 py-2 md:px-5 md:py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm text-sm md:text-base"
            required
            value={numGuests}
            onChange={(e) => setNumGuests(parseInt(e.target.value))}
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
            id="observations"
            className="px-3 py-2 md:px-5 md:py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm text-sm md:text-base"
            placeholder="Any pets, allergies, special requirements, etc.?"
          />
        </div>
        <div className="space-y-2">
          <div className="flex gap-4 mt-2">
            <input
              className="w-6 accent-accent-600"
              type="checkbox"
              name="hasBreakfast"
              checked={hasBreakfast}
              onChange={(e) => setHasBreakfast(e.target.checked)}
            />
            <label>Add a breakfast</label>
          </div>
        </div>

        <div className="flex justify-end items-center gap-6">
          {!(startDate && endDate) ? (
            <p className="text-primary-300 text-base">
              Start by selecting dates
            </p>
          ) : (
            <SubmitButton labelPending="Reserving...">Reserve now</SubmitButton>
          )}
        </div>
      </form>
    </div>
  );
}

export default ReservationForm;
