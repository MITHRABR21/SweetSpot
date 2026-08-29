import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? "active" : "";
  };

  return (
    <header className="navbar">
      <div className="navbar-inner">

        {/* LOGO */}
        <Link to="/" className="navbar-logo">
          <span className="logo-main">Sweet</span>
          <span className="logo-accent">Spot</span>
        </Link>

        {/* NAVIGATION */}
        <nav className="navbar-links">

          <Link
            to="/"
            className={isActive("/")}
          >
            HOME
          </Link>

          <a href="/#about">
            ABOUT US
          </a>

          <Link
            to="/cakes"
            className={isActive("/cakes")}
          >
            CAKES
          </Link>

          <Link
            to="/icecreams"
            className={isActive("/icecreams")}
          >
            ICE CREAMS
          </Link>

          <a href="/#offers">
            OFFERS
          </a>

          <a href="/#cart">
            MY CART
          </a>

          <a href="/#orders">
            ORDERS
          </a>

          <a href="/#contact">
            CONTACT US
          </a>

        </nav>

        {/* MOBILE HOME BUTTON */}
        <Link to="/" className="navbar-home-button">
          HOME
        </Link>

      </div>
    </header>
  );
}

export default Navbar;