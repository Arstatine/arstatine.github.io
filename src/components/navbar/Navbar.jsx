import NavbarMenuList from './NavbarMenuList';
import HamburgerMenu from './HamburgerMenu';
import { menuList, menuListActive } from '../../styles/navbar';
import { Link } from 'react-router-dom';

const Navbar = ({ isActive, setIsActive }) => {
  return (
    <div className='bg-white'>
      <div className='flex overflow-hidden px-6 py-4'>
        <div className='grow flex justify-start items-center px-2'>
          <Link
            to='/'
            className='flex justify-center items-center h-[60px] w-[60px] hover:bg-slate-100  rounded-full pe-2  transition-all hover:rotate-45'
          >
            <div className='text-4xl font-bold pt-3 font-["Sacramento"]'>X</div>
          </Link>
        </div>
        <HamburgerMenu isActive={isActive} setIsActive={setIsActive} />
      </div>
      <div className={isActive ? menuListActive : menuList}>
        <NavbarMenuList isActive={isActive} setIsActive={setIsActive} />
      </div>
    </div>
  );
};

export default Navbar;
