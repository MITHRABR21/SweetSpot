
import React from "react";
import { Link } from "react-router-dom";
import sundaes from "../data/sundaeData.js";
import "./Sundaes.css";

function Sundaes() {
  return (
    <div className="sundaes-page">

      {/* HOME BUTTON */}
      <Link to="/" className="back-home">
        ← Home
      </Link>

      {/* HERO */}
      <section className="sundaes-hero">

        <div className="sundaes-hero-content">

          <span>
            SWEETSPOT SUNDAE COLLECTION
          </span>

          <h1>
            Scoops,
            <br />
            <em>Sauces & Toppings</em>
          </h1>

          <p>
            Indulgent ice cream sundaes layered with
            delicious sauces, toppings and whipped cream.
          </p>

          <div className="sundae-navigation">

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

      </section>

      {/* SUNDAE COLLECTION */}
      <section className="sundaes-section">

        <div className="sundaes-header">

          <span>
            OUR SUNDAES
          </span>

          <h2>
            Indulge in Something Special
          </h2>

          <p>
            Every sundae is made with creamy ice cream,
            delicious sauces and irresistible toppings.
          </p>

        </div>

        {/* SUNDAE GRID */}
        <div className="sundaes-grid">

          {sundaes.map((sundae) => (

            <article
              className="sundae-card"
              key={sundae.id}
            >

              {/* IMAGE */}
              <div className="sundae-image">

                <img
                  src={sundae.image}
                  alt={sundae.name}
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                  }}
                />

                <span>
                  {sundae.category || "Sundae"}
                </span>

              </div>

              {/* CONTENT */}
              <div className="sundae-content">

                <div className="sundae-rating">
                  ★★★★★
                  <small>
                    5.0
                  </small>
                </div>

                <h3>
                  {sundae.name}
                </h3>

                <p>
                  {sundae.description}
                </p>

                <div className="sundae-bottom">

                  <strong>
                    ₹{sundae.price}
                  </strong>

                  <button
                    onClick={() =>
                      alert(
                        `${sundae.name} added to cart!`
                      )
                    }
                  >
                    Add to Cart →
                  </button>

                </div>

              </div>

            </article>

          ))}

        </div>

      </section>

    </div>
  );
}

export default Sundaes;

