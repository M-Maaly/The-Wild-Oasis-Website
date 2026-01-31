"use server";

import { revalidatePath } from "next/cache";
import { auth, signIn, signOut } from "./auth";
import { deleteBooking, getBookings, updateGuest } from "./data-service";
import { th } from "date-fns/locale";

export async function updateGuestAction(formData) {
  // console.log(formData)
  const session = await auth();
  if (!session)
    throw new Error("Not authenticated, you must be logged in to update");

  const guestId = session.user.guestId;
  const nationalID = formData.get("nationalID");
  const [nationality, countryFlag] = formData.get("nationality").split("%");

  if (!/^[a-zA-Z0-9]{6,12}/.test(nationalID))
    throw new Error("Please provide a valid National ID");

  const updateData = { nationality, countryFlag, nationalID };

  await updateGuest(guestId, updateData);

  revalidatePath("/account/profile");
}

export async function deleteReservation(bookingId) {
  const session = await auth();
  if (!session)
    throw new Error("You must be logged in to delete a reservation");

  const guestId = session.user.guestId;
  const guestBookingsIds = (await getBookings(guestId)).map(
    (booking) => booking.id,
  );
  if (!guestBookingsIds.includes(bookingId))
    throw new Error("You are not allowed to delete this reservation");

  await deleteBooking(bookingId);
  revalidatePath("/account/reservations");
}

export async function signInAction() {
  await signIn("google", { redirectTo: "/account" });
}

export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}
