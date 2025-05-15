import React, { useState } from 'react';

import Menu from '../menu/menu';
import './navbar.css';

const Navbar = () => {

  return (
    <nav>
      <div className="navbar-container">

        <nav className="main-navbar">

          <div className='nav-items'>
            <Menu />
          </div>
        </nav>
      </div>
    </nav>
  );
};

export default Navbar;