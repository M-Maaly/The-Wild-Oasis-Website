"use client";

import { XMarkIcon } from "@heroicons/react/24/solid";
import { format } from "date-fns";
import { useReservation } from "./ReservationContext";

function ReservationReminder() {
  // CHANGE
  const { range, resetRange } = useReservation();

  if (!range.from || !range.to) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 py-5 px-4 md:px-8 rounded-full bg-accent-500 text-primary-800 text-sm md:text-base font-semibold shadow-xl shadow-slate-900 flex gap-4 md:gap-8 items-center w-[90vw] md:w-auto md:max-w-max justify-between">
      <p className="flex-1">
        <span>👋</span> Don&apos;t forget to reserve your dates <br className="hidden md:block" /> from{" "}
        {format(new Date(range.from), "MMM dd")} to{" "}
        {format(new Date(range.to), "MMM dd")}
      </p>
      <button
        className="rounded-full p-1 hover:bg-accent-600 transition-all flex-shrink-0"
        onClick={resetRange}
      >
        <XMarkIcon className="h-5 w-5" />
      </button>
    </div>
  );
}

export default ReservationReminder;
