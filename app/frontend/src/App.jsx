import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import './App.scss';
import './components/navbar/navbar.css';
import Navbar from './components/navbar/navbar';

function App() {
  const navigate = useNavigate();

  return (
    <div className="all">

      <Navbar />

      <div className="App">
        <Outlet />
      </div>

      <footer>
        <span> footer</span>
      </footer>
    </div>
  );
}

export default App;
