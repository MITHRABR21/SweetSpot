import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>

      {/* ================= NAVBAR ================= */}

      <header className="navbar">

        <Link to="/" className="logo">
          Sweet<span>Spot</span>
        </Link>

        <nav>

          <Link to="/">
            Home
          </Link>

          <a href="#about">
            About Us
          </a>

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
                Ice Creams
              </Link>

              <Link to="/sundaes">
                Sundaes
              </Link>

              <Link to="/falooda">
                Falooda
              </Link>

            </div>

          </div>

          <a href="#offers">
            Offers
          </a>

          <a href="#cart">
            My Cart
          </a>

          <a href="#orders">
            Orders
          </a>

          <a href="#contact">
            Contact Us
          </a>

        </nav>

        <Link
          to="/cakes"
          className="cart-button"
        >
          Order Now
        </Link>

      </header>


      {/* ================= HERO ================= */}

      <section className="home-hero">

        <div className="hero-content">

          <span className="hero-small">
            WELCOME TO SWEETSPOT
          </span>

          <h1>
            Life is short.
            <br />
            Eat something
            <br />
            <em>sweet.</em>
          </h1>

          <p>
            Discover beautifully crafted cakes, creamy
            ice creams and delicious desserts made with
            premium ingredients for your sweetest moments.
          </p>

          <div className="hero-buttons">

            <Link
              to="/cakes"
              className="primary-button"
            >
              Explore Cakes →
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


      {/* ================= CATEGORIES ================= */}

      <section
        className="home-categories"
        id="about"
      >

        <p>
          OUR SWEET COLLECTION
        </p>

        <h2>
          Something for Every Sweet Craving
        </h2>

        <div className="category-grid">

          {/* CAKES */}

          <Link
            to="/cakes"
            className="category-card"
          >

            <span>🍰</span>

            <h3>
              Cakes
            </h3>

            <p>
              Beautifully crafted cakes for birthdays,
              celebrations and special moments.
            </p>

          </Link>


          {/* ICE CREAM */}

          <Link
            to="/icecreams"
            className="category-card"
          >

            <span>🍨</span>

            <h3>
              Ice Creams
            </h3>

            <p>
              Creamy and delicious flavours made
              for every sweet craving.
            </p>

          </Link>


          {/* SUNDAES */}

          <Link
            to="/sundaes"
            className="category-card"
          >

            <span>🍧</span>

            <h3>
              Sundaes
            </h3>

            <p>
              Scoops of ice cream loaded with
              delicious sauces and toppings.
            </p>

          </Link>


          {/* FALOODA */}

          <Link
            to="/falooda"
            className="category-card"
          >

            <span>🥤</span>

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


      {/* ================= OFFERS ================= */}

      <section
        id="offers"
        style={{
          padding: "90px 7%",
          textAlign: "center",
          background: "#fff0f4"
        }}
      >

        <p
          style={{
            color: "#a3274e",
            letterSpacing: "3px",
            fontSize: "12px",
            fontWeight: "bold"
          }}
        >
          SWEET DEALS
        </p>

        <h2
          style={{
            color: "#451020",
            fontFamily: "Georgia, serif",
            fontSize: "48px",
            margin: "15px 0"
          }}
        >
          Sweetness Made
          <br />
          <em>Even Better</em>
        </h2>

        <p
          style={{
            color: "#765764",
            fontSize: "17px"
          }}
        >
          Discover our delicious desserts and
          special offers.
        </p>

        <Link
          to="/cakes"
          className="primary-button"
          style={{
            display: "inline-block",
            marginTop: "25px"
          }}
        >
          Shop Now →
        </Link>

      </section>


      {/* ================= CART ================= */}

      <section
        id="cart"
        style={{
          padding: "90px 7%",
          textAlign: "center",
          background: "#fff8fa"
        }}
      >

        <p
          style={{
            color: "#a3274e",
            letterSpacing: "3px",
            fontSize: "12px",
            fontWeight: "bold"
          }}
        >
          YOUR SWEET BASKET
        </p>

        <h2
          style={{
            color: "#451020",
            fontFamily: "Georgia, serif",
            fontSize: "45px"
          }}
        >
          My Cart
        </h2>

        <p
          style={{
            color: "#765764"
          }}
        >
          Your selected desserts will appear here.
        </p>

        <Link
          to="/cakes"
          className="primary-button"
          style={{
            display: "inline-block",
            marginTop: "20px"
          }}
        >
          Start Shopping →
        </Link>

      </section>


      {/* ================= ORDERS ================= */}

      <section
        id="orders"
        style={{
          padding: "90px 7%",
          textAlign: "center",
          background: "#4b071c",
          color: "white"
        }}
      >

        <p
          style={{
            color: "#f3aec1",
            letterSpacing: "3px",
            fontSize: "12px",
            fontWeight: "bold"
          }}
        >
          SWEETSPOT ORDERS
        </p>

        <h2
          style={{
            fontFamily: "Georgia, serif",
            fontSize: "45px"
          }}
        >
          Your Orders
        </h2>

        <p
          style={{
            color: "#f9dfe7"
          }}
        >
          Your order history will appear here.
        </p>

      </section>


      {/* ================= CONTACT ================= */}

      <section
        id="contact"
        style={{
          padding: "90px 7%",
          textAlign: "center",
          background: "#fff8fa"
        }}
      >

        <p
          style={{
            color: "#a3274e",
            letterSpacing: "3px",
            fontSize: "12px",
            fontWeight: "bold"
          }}
        >
          CONTACT US
        </p>

        <h2
          style={{
            color: "#451020",
            fontFamily: "Georgia, serif",
            fontSize: "45px"
          }}
        >
          Let's Make Your
          <br />
          <em>Moment Sweeter</em>
        </h2>

        <p
          style={{
            color: "#765764",
            fontSize: "17px"
          }}
        >
          Have a question or a special request?
          We'd love to hear from you.
        </p>

        <p
          style={{
            color: "#58132a",
            fontWeight: "bold"
          }}
        >
          📞 +91 98765 43210
        </p>

        <p
          style={{
            color: "#58132a",
            fontWeight: "bold"
          }}
        >
          ✉ hello@sweetspot.com
        </p>

      </section>


      {/* ================= FOOTER ================= */}

      <footer
        style={{
          background: "#2d0411",
          color: "white",
          padding: "45px 7%",
          textAlign: "center"
        }}
      >

        <h2
          style={{
            fontFamily: "Georgia, serif",
            fontSize: "30px",
            margin: "0 0 10px"
          }}
        >
          SweetSpot
        </h2>

        <p
          style={{
            color: "#f3aec1"
          }}
        >
          Every bite tells a sweet story.
        </p>

        <p
          style={{
            marginTop: "25px",
            fontSize: "13px",
            color: "#d9a8b7"
          }}
        >
          © 2026 SweetSpot. All rights reserved.
        </p>

      </footer>

    </div>
  );
}

export default App;