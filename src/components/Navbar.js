import React from "react";
import logo from "../assets/logo.png";
import "./styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <a href="#home" className="brand" aria-label="Marketing Pro">
        <img src={logo} alt="Dinev Marketing Pro logo" className="brand-logo-image" />
        <span className="brand-title">Dinev Marketing Pro</span>
      </a>

      <div className="nav-links">
        <a href="#services">Услуги</a>
        <a href="#requests">Заявки</a>
        <a href="#contacts">Контакти</a>
      </div>
    </nav>
  );
}

export default Navbar;
