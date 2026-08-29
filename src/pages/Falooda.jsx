import React from "react";
import { Link } from "react-router-dom";
import faloodas from "../data/faloodaData.js";
import "./Falooda.css";

function Falooda() {
  return (
    <div className="falooda-page">

      <Link to="/" className="back-home">
        ← Home
      </Link>

      <section className="falooda-hero">

        <div className="falooda-hero-content">

          <span>
            SWEETSPOT FALOODA COLLECTION
          </span>

          <h1>
            Layers of
            <br />
            <em>Pure Delight</em>
          </h1>

          <p>
            Rich and refreshing falooda made with
            creamy ice cream, vermicelli, basil seeds,
            milk, jelly and delicious toppings.
          </p>

          <div className="falooda-navigation">

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

      <section className="falooda-section">

        <div className="falooda-header">

          <span>
            OUR FALOODA COLLECTION
          </span>

          <h2>
            Discover Your Favourite
          </h2>

          <p>
            Traditional flavours layered with creamy
            ice cream and delicious toppings.
          </p>

        </div>

        <div className="falooda-grid">

          {faloodas.map((falooda) => (

            <article
              className="falooda-card"
              key={falooda.id}
            >

              <div className="falooda-image">

                <img
                  src={falooda.image}
                  alt={falooda.name}
                />

                <span>
                  {falooda.category || "Falooda"}
                </span>

              </div>

              <div className="falooda-content">

                <div className="falooda-rating">
                  ★★★★★
                  <small>5.0</small>
                </div>

                <h3>
                  {falooda.name}
                </h3>

                <p>
                  {falooda.description}
                </p>

                <div className="falooda-bottom">

                  <strong>
                    ₹{falooda.price}
                  </strong>

                  <button
                    onClick={() =>
                      alert(
                        `${falooda.name} added to cart!`
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

export default Falooda;