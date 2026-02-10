import Navigation from '@/app/_components/Navigation';
import MobileNav from '@/app/_components/MobileNav';
import Logo from '@/app/_components/Logo';
import { auth } from '@/app/_lib/auth';

async function Header() {
  const session = await auth();

  return (
    <header className='border-b border-primary-900 px-4 md:px-8 py-5'>
      <div className='flex justify-between items-center max-w-7xl mx-auto'>
        <Logo />
        
        <Navigation />
        
        <MobileNav session={session} />
      </div>
    </header>
  );
}

export default Header;

