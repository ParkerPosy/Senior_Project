import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <nav className='navigation'>
      <NavLink to='/search'  className='title-link'>
        FunNearby
      </NavLink>
      <div className={isNavExpanded ? 'navigation-menu expanded' : 'navigation-menu'}>
        <div className='nav-container'>
          <NavLink to='/search' className='nav-link' onClick={() => setIsNavExpanded(prev => !prev)}>
            <svg viewBox='0 0 32 32' width='20' height='20'>
              <g>
                <path d='M20,0.005c-6.627,0-12,5.373-12,12c0,2.026,0.507,3.933,1.395,5.608l-8.344,8.342l0.007,0.006   C0.406,26.602,0,27.49,0,28.477c0,1.949,1.58,3.529,3.529,3.529c0.985,0,1.874-0.406,2.515-1.059l-0.002-0.002l8.341-8.34   c1.676,0.891,3.586,1.4,5.617,1.4c6.627,0,12-5.373,12-12C32,5.378,26.627,0.005,20,0.005z M4.795,29.697   c-0.322,0.334-0.768,0.543-1.266,0.543c-0.975,0-1.765-0.789-1.765-1.764c0-0.498,0.21-0.943,0.543-1.266l-0.009-0.008l8.066-8.066   c0.705,0.951,1.545,1.791,2.494,2.498L4.795,29.697z M20,22.006c-5.522,0-10-4.479-10-10c0-5.522,4.478-10,10-10   c5.521,0,10,4.478,10,10C30,17.527,25.521,22.006,20,22.006z' />
                <path d='M20,5.005c-3.867,0-7,3.134-7,7c0,0.276,0.224,0.5,0.5,0.5s0.5-0.224,0.5-0.5c0-3.313,2.686-6,6-6   c0.275,0,0.5-0.224,0.5-0.5S20.275,5.005,20,5.005z' />
              </g>
            </svg>
            <div>Search</div>
          </NavLink>
          <NavLink to='/settings' className='nav-link' onClick={() => setIsNavExpanded(prev => !prev)}>
            <svg viewBox='0 0 32 32' width='20' height='20'>
              <g>
                <path d='M8 6.021V3c0-1.654-1.346-3-3-3S2 1.346 2 3v3.021C.792 6.936 0 8.369 0 10s.792 3.064 2 3.977V29c0 1.654 1.346 3 3 3s3-1.346 3-3V13.977c1.208-.912 2-2.346 2-3.977s-.792-3.064-2-3.979zM4 3a1 1 0 1 1 2 0v2.1a5.062 5.062 0 0 0-2 0V3zm2 26a1 1 0 1 1-2 0V14.898a4.916 4.916 0 0 0 2 0V29zm1.865-18.16c-.016.053-.03.105-.049.158a2.944 2.944 0 0 1-.378.736l-.014.016a3.026 3.026 0 0 1-.616.627l-.01.008c-.241.182-.51.328-.799.43-.313.113-.646.185-.999.185s-.686-.072-1-.186a2.962 2.962 0 0 1-.799-.43l-.01-.008a3.026 3.026 0 0 1-.616-.627l-.014-.016a2.979 2.979 0 0 1-.378-.736c-.019-.053-.033-.105-.049-.158A2.945 2.945 0 0 1 2 10c0-.295.055-.574.135-.842.016-.053.03-.105.049-.156.094-.264.216-.514.378-.738l.014-.016c.174-.236.381-.449.616-.627l.01-.008c.24-.179.509-.326.798-.429C4.314 7.072 4.647 7 5 7s.686.072 1 .184c.289.104.558.25.799.43l.01.008c.235.178.442.391.616.627l.014.016a2.931 2.931 0 0 1 .426.893c.08.268.135.547.135.842 0 .293-.055.572-.135.84zM30 6.021V3c0-1.654-1.346-3-3-3s-3 1.346-3 3v3.021c-1.209.915-2 2.348-2 3.979s.791 3.064 2 3.977V29c0 1.654 1.346 3 3 3s3-1.346 3-3V13.977c1.207-.912 2-2.346 2-3.977s-.793-3.064-2-3.979zM26 3a1 1 0 1 1 2 0v2.1a5.077 5.077 0 0 0-2 0V3zm2 26a1 1 0 1 1-2 0V14.898a4.902 4.902 0 0 0 2 0V29zm1.865-18.16c-.016.053-.031.105-.049.158a2.947 2.947 0 0 1-.379.736l-.014.016a3.046 3.046 0 0 1-.615.627l-.01.008c-.242.182-.51.328-.799.43A2.932 2.932 0 0 1 27 13a2.91 2.91 0 0 1-1-.186 2.947 2.947 0 0 1-.809-.438 3.006 3.006 0 0 1-.617-.627l-.014-.016a2.975 2.975 0 0 1-.377-.736c-.02-.053-.033-.105-.049-.158A2.945 2.945 0 0 1 24 10c0-.295.055-.574.135-.842.016-.053.029-.105.049-.156.094-.264.217-.514.377-.738l.014-.016c.174-.236.381-.449.617-.627l.01-.008c.24-.18.51-.326.799-.43A2.97 2.97 0 0 1 27 7c.352 0 .686.072 1 .184a3.093 3.093 0 0 1 .809.438c.234.178.441.391.615.627l.014.016c.162.225.283.475.379.738.018.051.033.104.049.156.079.267.134.546.134.841 0 .293-.055.572-.135.84zM19 18.021V3c0-1.654-1.346-3-3-3s-3 1.346-3 3v15.021c-1.208.914-2 2.348-2 3.979s.792 3.064 2 3.977V29c0 1.654 1.346 3 3 3s3-1.346 3-3v-3.023c1.207-.912 2-2.346 2-3.977s-.793-3.064-2-3.979zM15 3a1 1 0 1 1 2 0v14.1a5.062 5.062 0 0 0-2 0V3zm2 26a1 1 0 1 1-2 0v-2.102a4.916 4.916 0 0 0 2 0V29zm1.865-6.16c-.016.053-.031.105-.049.158a2.947 2.947 0 0 1-.379.736l-.014.016a3.046 3.046 0 0 1-.615.627l-.01.008c-.242.182-.51.328-.799.43A2.932 2.932 0 0 1 16 25c-.353 0-.686-.072-1-.186a2.962 2.962 0 0 1-.799-.43l-.01-.008a3.026 3.026 0 0 1-.616-.627l-.014-.016a2.979 2.979 0 0 1-.378-.736c-.019-.053-.033-.105-.049-.158A2.945 2.945 0 0 1 13 22c0-.295.055-.574.135-.842.016-.053.03-.105.049-.156.095-.264.217-.514.378-.738l.014-.016c.174-.236.381-.449.616-.627l.01-.008c.241-.18.51-.326.799-.43.313-.111.646-.183.999-.183.352 0 .686.072 1 .184a3.093 3.093 0 0 1 .809.438c.234.178.441.391.615.627l.014.016c.162.225.283.475.379.738.018.051.033.104.049.156.079.267.134.546.134.841 0 .293-.055.572-.135.84z' />
              </g>
            </svg>
            <div>Settings</div>
          </NavLink>
          <NavLink to='/about' className='nav-link' onClick={() => setIsNavExpanded(prev => !prev)}>
            <svg viewBox='0 0 32 32' width='20' height='20'>
              <g>
                <path d='M31.414,7.585l-6-6C25.039,1.21,24.529,1,24,1H3   C1.346,1,0,2.345,0,4v24c0,1.654,1.346,3,3,3h26c1.654,0,3-1.346,3-3V9C32,8.469,31.789,7.96,31.414,7.585z M30,28   c0,0.553-0.447,1-1,1H3c-0.553,0-1-0.447-1-1V4c0-0.553,0.447-1,1-1h20v4h-0.002c0,1.657,1.344,3,3,3h1H30V28z M26.998,9h-1   c-1.102,0-2-0.897-2-2H24V3l6,6H26.998z' />
                <path d='M15.5,8h5C20.775,8,21,7.776,21,7.5S20.775,7,20.5,7h-5   C15.224,7,15,7.223,15,7.5S15.224,8,15.5,8z' />
                <path d='M15.5,11h5c0.275,0,0.5-0.224,0.5-0.5S20.775,10,20.5,10h-5   c-0.276,0-0.5,0.224-0.5,0.5S15.224,11,15.5,11z' />
                <path d='M15,13.5c0,0.276,0.224,0.5,0.5,0.5h12c0.275,0,0.5-0.224,0.5-0.5   S27.775,13,27.5,13h-12C15.224,13,15,13.223,15,13.5z' />
                <path d='M27.5,19h-23C4.224,19,4,19.223,4,19.5C4,19.775,4.224,20,4.5,20   h23c0.275,0,0.5-0.225,0.5-0.5C28,19.223,27.775,19,27.5,19z' />
                <path d='M27.5,22h-23C4.224,22,4,22.223,4,22.5C4,22.775,4.224,23,4.5,23   h23c0.275,0,0.5-0.225,0.5-0.5C28,22.223,27.775,22,27.5,22z' />
                <path d='M27.5,25h-23C4.224,25,4,25.223,4,25.5C4,25.775,4.224,26,4.5,26   h23c0.275,0,0.5-0.225,0.5-0.5C28,25.223,27.775,25,27.5,25z' />
                <path d='M27.5,16h-23C4.224,16,4,16.223,4,16.5S4.224,17,4.5,17h23   c0.275,0,0.5-0.224,0.5-0.5S27.775,16,27.5,16z' />
                <path d='M5,14h7c0.553,0,1-0.447,1-1V7c0-0.553-0.447-1-1-1H5   C4.447,6,4,6.447,4,7v6C4,13.552,4.447,14,5,14z M6,8h5v4H6V8z' />
              </g>
            </svg>
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