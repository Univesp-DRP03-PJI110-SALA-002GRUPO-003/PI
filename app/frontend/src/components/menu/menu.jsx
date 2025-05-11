import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./menu.scss";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const user = { name: "usuario" };

  const items = [
    { id: 1, text: "Home", onClick: () => navigate("/admin_home") },
    { id: 2, text: "Sobre", onClick: () => navigate("/admin_about") },
    { id: 3, text: "Produtos", onClick: () => navigate("/admin_products") },
    { id: 4, text: "Perfil", onClick: () => navigate(`/admin_profile`) },
    { id: 5, text: "Sair", onClick: () => navigate("/") },
  ];

  const toggleProfile = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (itemOnClick) => {
    itemOnClick();
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="btn dropdown" ref={dropdownRef}>
      <button className="dropdown-toggle" onClick={toggleProfile}>
        <div className="dropdown-text-container">
          <p className="dropdown-title">{user?.name || "Usuário"}</p>
        </div>
        {/* <i className={`icon-chevron-down chevron ${isOpen ? "expanded" : ""}`}></i> */}
      </button>

      {isOpen && (
        <div className="dropdown-menu">
          {items.map((item) => (
            <div
              key={item.id}
              className="dropdown-item"
              onClick={() => handleItemClick(item.onClick)}
            >
              {item.text}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Menu;
