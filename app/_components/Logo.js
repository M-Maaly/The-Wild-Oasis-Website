import Image from "next/image";
import Link from "next/link";
import logo from '@/public/logo.png'

function Logo() {

  return (
    <Link href="/" className="flex items-center gap-2 md:gap-4 z-10">
      {/* <Image src="/logo.png" height="60" width="60" alt="The Wild Oasis logo" /> */}
      <Image src={logo} height="60" width="60" alt="The Wild Oasis logo" quality={100} className="h-10 w-10 md:h-[60px] md:w-[60px]" />
      <span className="text-base sm:text-lg  md:text-xl font-semibold text-primary-100">
        The Wild Oasis
      </span>
    </Link>
  );
}

export default Logo;
