import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

import Sidebar from '../sidebar/sidebar';

import './navbar.css';

const Navbar = () => {

  const navigate = useNavigate();

  const [isExpanded, setIsExpanded] = useState(false);

  const onLogout = () => {
    localStorage.removeItem('Token');
    localStorage.removeItem('User');
  };

  const userDropdownOptions = [
    { id: 2, text: 'Perfil', onClick: () => navigate(`/profile`) },
    { id: 3, text: 'Sair', onClick: onLogout },
  ];


  return (
    <>
      <div className={`navbar-container ${isExpanded ? 'expanded' : 'collapsed'}`}>
        <div className={`navbar-toggler-container ${isExpanded ? 'expanded' : 'collapsed'}`}>
          Menu
        </div>

        <nav className={`main-navbar ${isExpanded ? 'expanded-navbar' : ''}`}>
          <div className="search-container">
            <input
              className="search-input"
              type="text"
              placeholder="Digite sua busca"
            />
            <i className="icon-search-lg search-icon"></i>
          </div>

          <div className='nav-items'>
              {/* <ProfileButton
                items={userDropdownOptions}
                buttonText={user.name}
              /> */}
          </div>

          <Sidebar />
        </nav>
      </div>
    </>
  );
};

export default Navbar;