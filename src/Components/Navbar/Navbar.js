import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../Images/w-logo.png';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className='navbar'>
      <div className='dFlexWithRowDirection'>
        <img src={logo} alt='logo' className='logoStyle' />
        <h2>WebGuard</h2>
      </div>

      {window.innerWidth <= 1110 ? (
        <div className='mobile-menu'>
          <div className={`menu-icon ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <div className='bar'></div>
            <div className='bar'></div>
            <div className='bar'></div>
          </div>
          <div className={`menu-links ${isMenuOpen ? 'open' : ''}`}>
            <ul className='dFlexWithColumnDirection'>
              <li>Pricing</li>
              <li>Resources</li>
              <li>Support</li>
              <li>Partners</li>
            </ul>
            <p>Login</p>
            <button className='signInBut'>Sign Up</button>
          </div>
        </div>
      ) : null}

      <div className='dFlexWithRowDirection desktopList'>
        <ul className='dFlexWithRowDirection'>
          <li>Pricing</li>
          <li>Resources</li>
          <li>Support</li>
          <li>Partners</li>
        </ul>
      </div>
      <div className='dFlexWithRowDirection desktopList'>
        <p>Login</p>
        <button className='signInBut'>Sign Up</button>
      </div>
    </div>
  );
};

export default Navbar;
