import Image from "next/image";
import bg from '@/public/bg.png'
import Link from "next/link";
export default function Home() {
  return (
    <>
      
      <main className="mt-40 md:mt-24 flex items-center justify-center ">
      {/* Full-page background image that covers everything including header */}
      <Image 
        src={bg} 
        quality={80} 
        placeholder="blur" 
        className="object-cover object-top" 
        fill 
        alt="Mountains and forests with two cabins" 
      />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-3xl sm:text-6xl md:text-6xl lg:text-8xl text-primary-50 mb-6 md:mb-10 tracking-tight font-normal">
            Welcome to paradise.
          </h1>
          <Link
            href="/cabins"
            className="bg-accent-500 px-6 py-4 md:px-8 md:py-6 text-primary-800 text-base md:text-lg font-semibold hover:bg-accent-600 transition-all"
          >
            Explore luxury cabins
          </Link>
        </div>
      </main>
    </>
  );
}

