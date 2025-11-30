import Cabin from "@/app/_components/Cabin";
import Reservation from "@/app/_components/Reservation";
import Spinner from "@/app/_components/Spinner";
import {
  getBookedDatesByCabinId,
  getCabin,
  getCabins,
  getSettings,
} from "@/app/_lib/data-service";
import { Suspense } from "react";

export async function generateMetadata({ params }) {
  const { name, description } = await getCabin(params.cabinId);
  return {
    title: `Cabin ${name}`,
    description: description,
  };
}

export async function generateStaticParams({ params }) {
  const cabins = await getCabins();

  const paths = cabins.map((cabin) => ({ cabinId: String(cabin.id) }));

  return paths;
}

export default async function Page({ params }) {
  const cabin = await getCabin(params.cabinId);
  const settings = await getSettings();
  const bookedDates = await getBookedDatesByCabinId(params.cabinId);
  const { id, name, maxCapacity, regularPrice, discount, image, description } =
    cabin;

  return (
    <div className="max-w-6xl mx-auto mt-8">
      <Cabin cabin={cabin} />

      <>
        <h2 className="text-5xl font-semibold text-center mb-10 text-accent-400">
          Reserve {name} today. Pay on arrival.
        </h2>

        <Suspense fallback={<Spinner />}>
          <Reservation cabin={cabin} />
        </Suspense>
      </>
    </div>
  );
}
