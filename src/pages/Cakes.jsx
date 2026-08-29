import React, { useState } from "react";
import { Link } from "react-router-dom";
import cakes from "../data/cakes.js";
import "./Cakes.css";

function Cakes() {
  const [selectedCake, setSelectedCake] = useState(null);
  const [size, setSize] = useState("1/2 kg");
  const [tier, setTier] = useState("1 Tier");
  const [toppings, setToppings] = useState([]);

  const toppingOptions = [
    { name: "Chocolate Ganache", price: 40 },
    { name: "Fresh Strawberries", price: 50 },
    { name: "Oreo Crumbs", price: 40 },
    { name: "Chocolate Chips", price: 30 },
    { name: "Almonds", price: 40 },
    { name: "Cashews", price: 40 },
    { name: "Rainbow Sprinkles", price: 25 },
    { name: "Extra Whipped Cream", price: 30 }
  ];

  const sizePrices = {
    "1 Piece": 90,
    "1/2 kg": 250,
    "1 kg": 500
  };

  const tierPrices = {
    "1 Tier": 0,
    "2 Tier": 300
  };

  const openCustomization = (cake) => {
    setSelectedCake(cake);
    setSize("1/2 kg");
    setTier("1 Tier");
    setToppings([]);
  };

  const closeCustomization = () => {
    setSelectedCake(null);
  };

  const toggleTopping = (topping) => {
    const alreadySelected = toppings.some(
      (item) => item.name === topping.name
    );

    if (alreadySelected) {
      setToppings(
        toppings.filter(
          (item) => item.name !== topping.name
        )
      );
    } else {
      setToppings([...toppings, topping]);
    }
  };

  const toppingTotal = toppings.reduce(
    (total, topping) => total + topping.price,
    0
  );

  const totalPrice = selectedCake
    ? sizePrices[size] + tierPrices[tier] + toppingTotal
    : 0;

  const addToCart = () => {
    if (!selectedCake) return;

    alert(
      `${selectedCake.name} added to cart!\n\n` +
        `Size: ${size}\n` +
        `Tier: ${tier}\n` +
        `Toppings: ${
          toppings.length
            ? toppings.map((item) => item.name).join(", ")
            : "None"
        }\n\n` +
        `Total: ₹${totalPrice}`
    );

    closeCustomization();
  };

  return (
    <div className="cakes-page">

      {/* HOME BUTTON */}

      <Link to="/" className="back-home">
        ← Home
      </Link>

      {/* HERO */}

      <section className="cakes-hero">
        <div className="cakes-hero-content">

          <span className="cakes-label">
            SWEETSPOT CAKE COLLECTION
          </span>

          <h1>
            Cakes Made for
            <br />
            <em>Sweet Moments</em>
          </h1>

          <p>
            Discover beautifully crafted cakes made with
            premium ingredients for birthdays, celebrations
            and every special moment.
          </p>

        </div>
      </section>

      {/* COLLECTION */}

      <section className="cakes-section">

        <div className="cakes-section-header">

          <span>
            OUR SIGNATURE COLLECTION
          </span>

          <h2>
            Choose Your Favourite
          </h2>

          <p>
            Explore delicious flavours and create a cake
            that is uniquely yours.
          </p>

        </div>

        {/* CAKE GRID */}

        <div className="cakes-grid">

          {cakes.map((cake) => (

            <article
              className="cake-card"
              key={cake.id}
            >

              <div className="cake-card-image">

                <img
                  src={cake.image}
                  alt={cake.name}
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                  }}
                />

                <button
                  className="cake-heart"
                  aria-label={`Add ${cake.name} to wishlist`}
                >
                  ♡
                </button>

                <span className="cake-category">
                  {cake.category || "Cake"}
                </span>

              </div>

              <div className="cake-card-content">

                <div className="cake-rating">
                  ★★★★★
                  <small>5.0</small>
                </div>

                <h3>
                  {cake.name}
                </h3>

                <p>
                  {cake.description}
                </p>

                <div className="cake-card-bottom">

                  <div>

                    <small>
                      Starting from
                    </small>

                    <strong>
                      ₹90
                    </strong>

                  </div>

                  <button
                    onClick={() =>
                      openCustomization(cake)
                    }
                  >
                    Customize →
                  </button>

                </div>

              </div>

            </article>

          ))}

        </div>

      </section>

      {/* CUSTOMIZATION MODAL */}

      {selectedCake && (

        <div
          className="cake-modal-overlay"
          onClick={closeCustomization}
        >

          <div
            className="cake-modal"
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            <button
              className="cake-modal-close"
              onClick={closeCustomization}
              aria-label="Close"
            >
              ×
            </button>

            <div className="cake-modal-image">

              <img
                src={selectedCake.image}
                alt={selectedCake.name}
              />

            </div>

            <div className="cake-modal-content">

              <span className="cake-modal-label">
                CUSTOMIZE YOUR CAKE
              </span>

              <h2>
                {selectedCake.name}
              </h2>

              <p>
                {selectedCake.description}
              </p>

              {/* SIZE */}

              <div className="cake-option">

                <h3>
                  Choose Size
                </h3>

                <div className="cake-option-grid">

                  {Object.keys(sizePrices).map(
                    (option) => (

                      <button
                        key={option}
                        className={
                          size === option
                            ? "selected"
                            : ""
                        }
                        onClick={() =>
                          setSize(option)
                        }
                      >

                        <span>
                          {option}
                        </span>

                        <strong>
                          ₹{sizePrices[option]}
                        </strong>

                      </button>

                    )
                  )}

                </div>

              </div>

              {/* TIER */}

              <div className="cake-option">

                <h3>
                  Choose Tier
                </h3>

                <div className="cake-option-grid">

                  {Object.keys(tierPrices).map(
                    (option) => (

                      <button
                        key={option}
                        className={
                          tier === option
                            ? "selected"
                            : ""
                        }
                        onClick={() =>
                          setTier(option)
                        }
                      >

                        <span>
                          {option}
                        </span>

                        <strong>
                          {tierPrices[option] === 0
                            ? "Included"
                            : `+₹${tierPrices[option]}`}
                        </strong>

                      </button>

                    )
                  )}

                </div>

              </div>

              {/* TOPPINGS */}

              <div className="cake-option">

                <h3>
                  Choose Your Toppings
                </h3>

                <div className="cake-toppings">

                  {toppingOptions.map(
                    (topping) => {

                      const selected =
                        toppings.some(
                          (item) =>
                            item.name ===
                            topping.name
                        );

                      return (

                        <button
                          key={topping.name}
                          className={
                            selected
                              ? "selected"
                              : ""
                          }
                          onClick={() =>
                            toggleTopping(topping)
                          }
                        >

                          <span>
                            {selected
                              ? "✓ "
                              : "+ "}

                            {topping.name}
                          </span>

                          <small>
                            +₹{topping.price}
                          </small>

                        </button>

                      );
                    }
                  )}

                </div>

              </div>

              {/* TOTAL */}

              <div className="cake-total">

                <div>

                  <small>
                    Total Price
                  </small>

                  <strong>
                    ₹{totalPrice}
                  </strong>

                </div>

                <button
                  onClick={addToCart}
                >
                  Add to Cart →
                </button>

              </div>

            </div>

          </div>

        </div>

      )}

    </div>
  );
}

export default Cakes;