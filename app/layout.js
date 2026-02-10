import Header from "./_components/Header";
import Logo from "./_components/Logo";
import Navigation from "./_components/Navigation";
import "@/app/_styles/globals.css";
import { Josefin_Sans } from "next/font/google";
import "react-day-picker/style.css";
import { ReservationProvider } from "./_components/ReservationContext";

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});
export const metadata = {
  title: {
    template: "%s | The Wild Oasis",
    default: "Welcome | The Wild Oasis",
  },
  description:
    "Luxurious cabin hotel, located in the heart of the Italian Dolomites, surrounded by beautiful mountains and dark forests.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefinSans.className} bg-primary-950 text-primary-100 antialiased flex flex-col relative min-h-screen scrollbar-hide`}
      >
        <Header />
        <div className="px-4 py-6 md:px-8 md:py-12 flex-1 grid">
          <main className=" max-w-7xl mx-auto w-full">
            <ReservationProvider>{children}</ReservationProvider >
          </main>
        </div>
      </body>
    </html>
  );
}
