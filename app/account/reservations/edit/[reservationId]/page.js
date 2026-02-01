import ReservationEdit from "@/app/_components/ReservationEdit";
import { updateReservationAction } from "@/app/_lib/actions";
import { getBooking, getCabin } from "@/app/_lib/data-service";

export default async function Page({ params }) {
  // CHANGE

  const { cabinId } = await getBooking(params.reservationId);
  const { maxCapacity } = await getCabin(cabinId);

  return (
    <ReservationEdit params={params} maxCapacity={maxCapacity} updateReservationAction={updateReservationAction} />
  );
}
