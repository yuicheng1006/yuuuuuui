import { cn } from '@/lib/utils';
import { Nav } from './nav';
import { Logo } from './logo';
import { HamMenuBtn } from '../header/ham/ham-menu-btn';

const Header = async () => {
  return (
    <header
      className={cn(
        'sticky top-0 z-50',
        'flex justify-between items-center',
        'md:p-4 px-4 py-0 bg-white border-b-2',
      )}
    >
      <Logo />
      <div className="md:block hidden">
        <Nav />
      </div>
      <div className="md:hidden block">
        <HamMenuBtn />
      </div>
    </header>
  );
};

export default Header;
