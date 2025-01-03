import React, { useState, useEffect } from 'react';
// importar header data
import { headerData } from '../data';
// importar components
import Nav from './Nav';
import Socials from './Socials';
import NavMobile from './NavMobile';
// importar icons
import { TiThMenuOutline } from 'react-icons/ti';

const Header = () => {
  // destructure header data
  const { logo } = headerData;
  // header state
  const [isActive, setIsActive] = useState(false);
  // nav mobile state
  const [isNavMobileOpen, setIsNavMobileOpen] = useState(false);
  // scroll event
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setIsActive(true) : setIsActive(false);
    });
  }, []);

  return (
    <header
      className={`${
        isActive 
        ? 'h-[100px] lg:h-[110px] shadow-lg' 
        : 'h-[120px] lg:h-[150px]'
      } fixed bg-white left-0 right-0 z-10 max-w-[1920px]
      w-full mx-auto transition-all duration-300`}
    >
      <div className='flex justify-between items-center h-full pl-[50px] pr-[60px] '>
        {/*logo*/}
        <a href='/'>
          <img className='w-[188px] h-[90px]' src={logo} alt='' />
        </a>
        {/* nav - inicial */}
        <div className='hidden xl:flex'>
          <Nav />
        </div>
        {/* botao menu de navegação */}
        <div 
          className='xl:hidden absolute right-[5%] bg-dark text-white p-2 rounded-md cursor-pointer'
          onClick={() => setIsNavMobileOpen(!isNavMobileOpen)}
        >
          <TiThMenuOutline className='text-3xl' />
        </div>
        {/* navegação mobile */}
        <div 
          className={`${
            isNavMobileOpen ? 'max-h-full' : 'max-h-0'
          } ${isActive ? 'top-[100px] lg:top-[110px]' : 'top-[120px] lg:top-[150px]' } fixed bg-white w-full h-full left-0 top-0 -z-10 transition-all duration-300`}
        >
          <NavMobile />
        </div>
        {/*social icones*/}
        <div className='hidden xl:flex '>
          <Socials/>
        </div>
      </div>
    </header>
  );
};

export default Header;
