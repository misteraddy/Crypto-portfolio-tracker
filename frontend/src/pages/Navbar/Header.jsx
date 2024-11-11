import { Link, useNavigate } from 'react-router-dom';
import MainNav from './MainNav';
import MobileNav from './MobileNav';
import { ModeToggle } from '../DarkMode/ModeToggle';
import { Button } from '@/components/ui/button';

export default function Header() {

  const navigate = useNavigate();

  return (
    <header className='sticky top-0 w-full border-b shadow-2xl'>
      <div className='h-14 container flex items-center'>
        {/* Desktop */}
        <MainNav />

        {/* Mobile */}
        <MobileNav />

        {/* Desktop & mobile */}
        <div className='flex items-center justify-end flex-1 mr-4'>
          <ModeToggle/>
          <Button className={"m-3"} onClick={() => navigate("/")}>Logout</Button>
        </div>
      </div>
    </header>
  );
}
