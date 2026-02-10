import { auth } from "../_lib/auth";
import { getBookings } from "@/app/_lib/data-service";
import Link from "next/link";
import { format, differenceInCalendarDays, isAfter, isBefore, parseISO } from "date-fns";
import { CalendarDaysIcon, HomeIcon, UserIcon } from "@heroicons/react/24/outline";

export const metadata = {
  title: 'Guest Area',
}

export default async function Page() {
  const session = await auth();
  const firstName = session?.user?.name?.split(" ")[0] || "Guest";
  
  const bookings = await getBookings(session?.user.guestId);
  
  // Calculate stats
  const today = new Date();
  const futureBookings = bookings.filter(booking => isAfter(parseISO(booking.startDate), today));
  const pastBookings = bookings.filter(booking => isBefore(parseISO(booking.startDate), today));
  
  const totalBookings = bookings.length;
  const upcomingStays = futureBookings.length;
  const nightsEnjoyed = pastBookings.reduce((acc, cur) => acc + cur.numNights, 0);

  // Find next booking
  // bookings are already sorted by startDate in getBookings
  const nextBooking = futureBookings[0];

  return (
    <div>
      <h2 className="font-semibold text-xl md:text-2xl text-accent-400 mb-5 md:mb-7">
        Welcome, {firstName}!
      </h2>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 min-[380px]:grid-cols-3 gap-4 mb-8">
        <StatCard 
          label="Total Bookings" 
          value={totalBookings} 
          icon={<CalendarDaysIcon className="h-5 w-5 md:h-8 md:w-8 text-accent-500" />} 
        />
        <StatCard 
          label="Upcoming Stays" 
          value={upcomingStays} 
          icon={<HomeIcon className="h-5 w-5 md:h-8 md:w-8 text-accent-500" />} 
        />
        <StatCard 
          label="Nights Enjoyed" 
          value={nightsEnjoyed} 
          icon={<UserIcon className="h-5 w-5 md:h-8 md:w-8 text-accent-500" />} 
        />
      </div>

      {/* Next Adventure Card */}
      {nextBooking ? (
        <div className="bg-primary-900 border border-primary-800 rounded-lg overflow-hidden mb-8 relative">
          <div className="absolute top-0 right-0 bg-accent-500 text-primary-900 text-xs font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider">
            Next Adventure
          </div>
          
          <div className="p-6 md:p-8 flex flex-col md:flex-row gap-6 items-center">
            {/* Countdown Circle */}
            <div className="flex-shrink-0">
               <div className="rounded-full border-4 border-accent-500 h-24 w-24 flex flex-col items-center justify-center text-accent-500">
                  <span className="text-3xl font-bold text-primary-50">
                    {differenceInCalendarDays(parseISO(nextBooking.startDate), today)}
                  </span>
                  <span className="text-xs uppercase font-semibold">Days</span>
               </div>
            </div>

            <div className="flex-grow text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-semibold mb-2 text-primary-50">
                Pack your bags for {nextBooking.cabins.name}!
              </h3>
              <p className="text-base md:text-lg text-primary-200 mb-4">
                {format(parseISO(nextBooking.startDate), "EEE, MMM dd yyyy")} &mdash; {format(parseISO(nextBooking.endDate), "EEE, MMM dd yyyy")}
              </p>
              <Link 
                href="/account/reservations" 
                className="inline-block bg-accent-500 text-primary-900 px-6 py-2.5 font-semibold hover:bg-accent-600 transition-colors rounded-sm"
              >
                View Details
              </Link>
            </div>

            {/* Image overlay or side image could go here, keeping it clean for now */}
          </div>
        </div>
      ) : (
         <div className="bg-primary-900 border border-primary-800 rounded-lg p-8 mb-8 text-center">
            <h3 className="text-xl font-semibold mb-4 text-primary-50">No upcoming trips</h3>
            <p className="text-primary-200 mb-6">You have no upcoming bookings. Why not plan your next escape?</p>
            <Link 
              href="/cabins" 
              className="inline-block bg-accent-500 text-primary-900 px-6 py-2.5 font-semibold hover:bg-accent-600 transition-colors rounded-sm"
            >
              Explore Cabins
            </Link>
         </div>
      )}

      {/* Quick Links */}
      <h3 className="text-lg font-semibold text-primary-200 mb-4">Quick Actions</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <QuickLink 
          href="/account/reservations" 
          title="Manage Reservations" 
          desc="View past and upcoming bookings" 
        />
        <QuickLink 
          href="/account/profile" 
          title="Update Profile" 
          desc="Change your personal details" 
        />
      </div>
    </div>
  );
}

function StatCard({ label, value, icon }) {
  return (
    <div className="bg-primary-900 p-2 md:p-4 border border-primary-800 rounded-lg flex flex-col md:flex-row items-center justify-center md:justify-start gap-1 md:gap-4 text-center md:text-left">
      <div className="p-2 md:p-3 bg-primary-800 rounded-full flex items-center justify-center">
        {icon}
      </div>
      <div>
        <div className="text-lg md:text-2xl font-bold text-primary-50">{value}</div>
        <div className="text-xs md:text-sm text-primary-300 uppercase tracking-wide">{label}</div>
      </div>
    </div>
  )
}

function QuickLink({ href, title, desc }) {
  return (
    <Link href={href} className="group bg-primary-900 p-5 border border-primary-800 rounded-lg hover:border-accent-500 transition-colors flex justify-between items-center">
       <div>
         <h4 className="text-lg font-semibold text-primary-50 group-hover:text-accent-400 transition-colors">{title}</h4>
         <p className="text-primary-300 text-sm">{desc}</p>
       </div>
       <div className="text-accent-500 opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1">
         &rarr;
       </div>
    </Link>
  )
}
