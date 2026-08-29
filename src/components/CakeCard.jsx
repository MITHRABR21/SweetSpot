import { useState } from "react";

function CakeCard({ cake }) {
  const [selectedSize, setSelectedSize] = useState("oneKg");

  const prices = {
    single: cake.pricing.single,
    halfKg: cake.pricing.halfKg,
    oneKg: cake.pricing.oneKg,
  };

  return (
    <div className="cake-card">

      <div className="cake-image-container">

        <img
          src={cake.image}
          alt={cake.name}
          className="cake-image"
        />

        <button className="wishlist-button">
          ♡
        </button>

      </div>

      <div className="cake-card-content">

        <span className="cake-category">
          {cake.category}
        </span>

        <h3>{cake.name}</h3>

        <p>
          {cake.description}
        </p>

        <div className="size-buttons">

          <button
            className={selectedSize === "single" ? "active" : ""}
            onClick={() => setSelectedSize("single")}
          >
            Piece
          </button>

          <button
            className={selectedSize === "halfKg" ? "active" : ""}
            onClick={() => setSelectedSize("halfKg")}
          >
            ½ kg
          </button>

          <button
            className={selectedSize === "oneKg" ? "active" : ""}
            onClick={() => setSelectedSize("oneKg")}
          >
            1 kg
          </button>

        </div>

        <div className="cake-card-bottom">

          <div className="cake-price">
            ₹{prices[selectedSize]}
          </div>

          <button className="add-cart-button">
            + Add
          </button>

        </div>

      </div>

    </div>
  );
}

export default CakeCard;