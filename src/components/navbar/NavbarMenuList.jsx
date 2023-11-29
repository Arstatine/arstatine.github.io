import { listItem, listItemActive } from '../../styles/navbar';
import { useNavigate } from 'react-router-dom';
import { signal } from '@preact/signals-react';

export const count = signal(2);

const NavbarMenuList = ({ isActive, setIsActive }) => {
  const navigate = useNavigate();
  const handlePath = (path) => {
    navigate(path);
    setTimeout(() => {
      setIsActive(!isActive);
    }, 100);
  };

  return (
    <ul className={isActive ? listItemActive : 'hidden'}>
      <div onClick={() => handlePath('/')} className='cursor-pointer'>
        <li className={listItem}>home</li>
      </div>
      <div onClick={() => handlePath('/projects')} className='cursor-pointer'>
        <li className={listItem}>projects</li>
      </div>
      <div onClick={() => handlePath('/skills')} className='cursor-pointer'>
        <li className={listItem}>skills</li>
      </div>
      <div onClick={() => handlePath('/about')} className='cursor-pointer'>
        <li className={listItem}>about</li>
      </div>
    </ul>
  );
};

export default NavbarMenuList;
