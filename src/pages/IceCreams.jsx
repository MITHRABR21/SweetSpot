import React, { useState } from "react";
import { Link } from "react-router-dom";
import icecreams from "../data/iceCreamData.js";
import "./IceCreams.css";

function IceCreams() {
  const [selectedIceCream, setSelectedIceCream] = useState(null);

  return (
    <div className="icecream-page">

      <Link to="/" className="back-home">
        ← Home
      </Link>

      <section className="icecream-hero">

        <div className="icecream-hero-content">

          <span>
            SWEETSPOT ICE CREAM COLLECTION
          </span>

          <h1>
            Scoops of
            <br />
            <em>Happiness</em>
          </h1>

          <p>
            Discover creamy, delicious flavours crafted
            to make every moment a little sweeter.
          </p>

          <div className="icecream-category-links">

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

      <section className="icecream-section">

        <div className="icecream-section-header">

          <span>
            OUR FLAVOURS
          </span>

          <h2>
            Choose Your Favourite
          </h2>

          <p>
            From classic favourites to premium creations.
          </p>

        </div>

        <div className="icecream-grid">

          {icecreams.map((icecream) => (

            <article
              className="icecream-card"
              key={icecream.id}
            >

              <div className="icecream-image">

                <img
                  src={icecream.image}
                  alt={icecream.name}
                />

                <span>
                  {icecream.category}
                </span>

              </div>

              <div className="icecream-content">

                <div className="icecream-rating">
                  ★★★★★
                  <small>5.0</small>
                </div>

                <h3>
                  {icecream.name}
                </h3>

                <p>
                  {icecream.description}
                </p>

                <div className="icecream-bottom">

                  <strong>
                    ₹{icecream.price}
                  </strong>

                  <button
                    onClick={() =>
                      setSelectedIceCream(icecream)
                    }
                  >
                    Order →
                  </button>

                </div>

              </div>

            </article>

          ))}

        </div>

      </section>

      {selectedIceCream && (

        <div
          className="icecream-modal"
          onClick={() =>
            setSelectedIceCream(null)
          }
        >

          <div
            className="icecream-modal-box"
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            <button
              onClick={() =>
                setSelectedIceCream(null)
              }
            >
              ×
            </button>

            <img
              src={selectedIceCream.image}
              alt={selectedIceCream.name}
            />

            <div>

              <span>
                SWEETSPOT
              </span>

              <h2>
                {selectedIceCream.name}
              </h2>

              <p>
                {selectedIceCream.description}
              </p>

              <h3>
                ₹{selectedIceCream.price}
              </h3>

              <button
                className="icecream-add-button"
                onClick={() => {
                  alert(
                    `${selectedIceCream.name} added to cart!`
                  );

                  setSelectedIceCream(null);
                }}
              >
                Add to Cart →
              </button>

            </div>

          </div>

        </div>

      )}

    </div>
  );
}

export default IceCreams;