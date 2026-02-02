"use client"

import { useOptimistic } from "react"
import ReservationCard from "./ReservationCard"

function ReservationList({bookings}) {
    const [optimisticState, setOptimisticDelete] = useOptimistic(bookings)
    return (
        <ul className="space-y-6">      
          {optimisticState.map((booking) => (
            <ReservationCard booking={booking} key={booking.id} />
          ))}
        </ul>
    )
}

export default ReservationList
