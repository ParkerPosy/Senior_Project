import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <nav className='navigation'>
      <NavLink to='/fun-finder'  className='title-link'>
        FunNearby
      </NavLink>
      <div className={isNavExpanded ? 'navigation-menu expanded' : 'navigation-menu'}>
        <div className='nav-container'>
          <NavLink to='/fun-finder' className='nav-link'>
            <div>Fun Finder</div>
          </NavLink>
          <NavLink to='/settings' className='nav-link'>
            <div>Settings</div>
          </NavLink>
          <NavLink to='/about' className='nav-link'>
            <div>About</div>
          </NavLink>
        </div>
      </div>
      <div onClick={() => setIsNavExpanded(prev => !prev)} className={isNavExpanded ? 'hamburger open' : 'hamburger'}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;