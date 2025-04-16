import React from 'react';

import './sidebar.css';

const Sidebar = () => {

  return (
      <div className={`sidebar ${isExpanded ? 'expanded' : 'collapsed'}`}>
        {isExpanded ?
          <>
            <nav className='scroll-container'>
              <div className='nav-content'>
                {categories.map((category, index) => (
                  <>
                    <p
                      className='category-label'
                      key={index}
                    >
                      {category.name}
                    </p>
                    <ul>
                      <li>Home</li>
                      <li>Home</li>
                      <li>Home</li>
                    </ul>
                  </>
                ))}
              </div>
            </nav>
          </>
          :
          <></>}

      </div>
  );
};

export default Sidebar;
