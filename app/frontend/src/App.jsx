import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import './App.css';
import './components/navbar/navbar.css';
import './components/sidebar/sidebar.css';

function App() {
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

  const categories = [
    { name: 'menu' },
  ];

  return (
    <>
      {/* NAVBAR */}
      <div className={`navbar-container ${isExpanded ? 'expanded' : 'collapsed'}`}>
        <div
          className={`navbar-toggler-container ${isExpanded ? 'expanded' : 'collapsed'}`}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          Menu
        </div>

        <nav className={`main-navbar ${isExpanded ? 'expanded-navbar' : ''}`}>

          <div className="nav-items">
            {/* <ProfileButton
              items={userDropdownOptions}
              buttonText={user.name}
            /> */}
          </div>
        </nav>
      </div>

      {/* SIDEBAR */}
      <div className={`sidebar ${isExpanded ? 'expanded' : 'collapsed'}`}>
        {isExpanded && (
          <nav className="scroll-container">
            <div className="nav-content">
              {categories.map((category, index) => (
                <div key={index}>
                  <p className="category-label">{category.name}</p>
                  <ul>
                    <li>Home</li>
                    <li>Sobre</li>
                    <li>Contato</li>
                  </ul>
                </div>
              ))}
            </div>
          </nav>
        )}
      </div>

      {/* CONTEÚDO PRINCIPAL */}
      <div className="App">
        <div className={`content ${isExpanded ? 'shifted' : ''}`}>
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default App;
