
import React from "react";
import { Link, Routes, Route } from "react-router-dom";

import Cakes from "./pages/Cakes.jsx";
import IceCreams from "./pages/IceCreams.jsx";
import Sundaes from "./pages/Sundaes.jsx";
import Falooda from "./pages/Falooda.jsx";

import "./App.css";


/* =========================
   HOME PAGE
========================= */

function Home() {
  return (
    <div>

      {/* =========================
          NAVBAR
      ========================= */}

      <header className="navbar">

        {/* LOGO */}

        <Link to="/" className="logo">
          Sweet<span>Spot</span>
        </Link>


        {/* NAVIGATION */}

        <nav>

          <Link to="/">
            Home
          </Link>

          <Link to="/cakes">
            Cakes
          </Link>


          {/* ICE CREAM DROPDOWN */}

          <div className="ice-menu">

            <Link to="/icecreams">
              Ice Creams
            </Link>

            <div className="dropdown">

              <Link to="/icecreams">
                All Ice Creams
              </Link>

              <Link to="/sundaes">
                Sundaes
              </Link>

              <Link to="/falooda">
                Falooda
              </Link>

            </div>

          </div>


          {/* ABOUT */}

          <a href="#about">
            About Us
          </a>


          {/* OFFERS */}

          <a href="#offers">
            Offers
          </a>

        </nav>


        {/* CART */}

        <button
          className="cart-button"
          onClick={() =>
            alert("Your cart is currently empty.")
          }
        >
          🛒 Cart
        </button>

      </header>


      {/* =========================
          HERO
      ========================= */}

      <section className="home-hero">

        <div className="hero-content">

          <p className="hero-small">
            WELCOME TO SWEETSPOT
          </p>

          <h1>
            Happiness
            <br />
            <em>Made Delicious.</em>
          </h1>

          <p>
            Discover handcrafted cakes, creamy ice creams,
            indulgent sundaes and refreshing faloodas,
            made specially to sweeten your moments.
          </p>


          <div className="hero-buttons">

            <Link
              to="/cakes"
              className="primary-button"
            >
              Explore Cakes
            </Link>

            <Link
              to="/icecreams"
              className="secondary-button"
            >
              Explore Ice Creams
            </Link>

          </div>

        </div>

      </section>


      {/* =========================
          CATEGORIES
      ========================= */}

      <section className="home-categories">

        <p>
          EXPLORE OUR COLLECTION
        </p>

        <h2>
          Something Sweet for Everyone
        </h2>


        <div className="category-grid">


          {/* CAKES */}

          <Link
            to="/cakes"
            className="category-card"
          >

            <span>
              🎂
            </span>

            <h3>
              Cakes
            </h3>

            <p>
              Beautifully crafted cakes for
              birthdays, celebrations and every
              special moment.
            </p>

          </Link>


          {/* ICE CREAMS */}

          <Link
            to="/icecreams"
            className="category-card"
          >

            <span>
              🍦
            </span>

            <h3>
              Ice Creams
            </h3>

            <p>
              Creamy and delicious flavours
              made for every ice cream lover.
            </p>

          </Link>


          {/* SUNDAES */}

          <Link
            to="/sundaes"
            className="category-card"
          >

            <span>
              🍨
            </span>

            <h3>
              Sundaes
            </h3>

            <p>
              Scoops of happiness topped with
              sauces, fruits and delicious toppings.
            </p>

          </Link>


          {/* FALOODA */}

          <Link
            to="/falooda"
            className="category-card"
          >

            <span>
              🥤
            </span>

            <h3>
              Falooda
            </h3>

            <p>
              Rich layered dessert drinks with
              ice cream, vermicelli and toppings.
            </p>

          </Link>

        </div>

      </section>


      {/* =========================
          ABOUT US
      ========================= */}

      <section
        id="about"
        className="home-categories"
      >

        <p>
          ABOUT SWEETSPOT
        </p>

        <h2>
          Made With Love
        </h2>

        <p>
          At SweetSpot, we believe every celebration
          deserves something delicious. From handcrafted
          cakes to creamy ice creams, every dessert is
          prepared to make your special moments sweeter.
        </p>

      </section>


      {/* =========================
          OFFERS
      ========================= */}

      <section
        id="offers"
        className="home-categories"
      >

        <p>
          SWEETSPOT SPECIAL
        </p>

        <h2>
          Special Offers
        </h2>

        <p>
          Keep an eye out for our seasonal treats,
          special discounts and delicious dessert offers.
        </p>

      </section>

    </div>
  );
}


/* =========================
   MAIN APP
========================= */

function App() {

  return (

    <Routes>

      {/* HOME */}

      <Route
        path="/"
        element={<Home />}
      />


      {/* CAKES */}

      <Route
        path="/cakes"
        element={<Cakes />}
      />


      {/* ICE CREAMS */}

      <Route
        path="/icecreams"
        element={<IceCreams />}
      />


      {/* SUNDAES */}

      <Route
        path="/sundaes"
        element={<Sundaes />}
      />


      {/* FALOODA */}

      <Route
        path="/falooda"
        element={<Falooda />}
      />

    </Routes>

  );
}


export default App;

