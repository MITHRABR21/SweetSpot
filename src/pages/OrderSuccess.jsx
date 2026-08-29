import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./OrderSuccess.css";

function OrderSuccess() {
  const location = useLocation();

  const orderData = location.state || {};

  const orderId =
    orderData.orderId ||
    "SS-20260829-EVR4";

  const items =
    orderData.items && orderData.items.length > 0
      ? orderData.items
      : [
          {
            id: 1,
            name: "Belgian Chocolate Cake",
            quantity: 1,
            price: 500,
            image:
              "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=85",
            choices: "1 kg • 1 Tier",
          },
          {
            id: 2,
            name: "Belgian Chocolate",
            quantity: 2,
            price: 90,
            image:
              "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=600&q=85",
            choices: "Premium Ice Cream",
          },
        ];

  const total =
    orderData.total ||
    items.reduce(
      (sum, item) =>
        sum + Number(item.price || 0) * Number(item.quantity || 1),
      0
    );

  return (
    <main className="order-success-page">

      {/* =========================================
          SUCCESS HERO
      ========================================= */}

      <section className="success-hero">

        <div className="success-decoration success-decoration-one">
          ✦
        </div>

        <div className="success-decoration success-decoration-two">
          ✧
        </div>

        <div className="success-card">

          {/* ANIMATED CHECK */}

          <div className="success-icon">

            <div className="check-circle">

              <svg
                viewBox="0 0 52 52"
                className="check-svg"
              >
                <circle
                  className="check-circle-path"
                  cx="26"
                  cy="26"
                  r="24"
                />

                <path
                  className="check-mark"
                  d="M14 27 L22 35 L39 17"
                />
              </svg>

            </div>

          </div>


          <span className="success-label">
            SWEETSPOT ORDERS
          </span>

          <h1>
            Order Placed
            <br />
            <em>Successfully!</em>
          </h1>

          <p>
            Thank you for choosing SweetSpot.
            <br />
            Your delicious treats are now being prepared with love.
          </p>


          {/* ORDER ID */}

          <div className="order-id-box">

            <span>
              ORDER ID
            </span>

            <strong>
              {orderId}
            </strong>

            <button
              type="button"
              onClick={() =>
                navigator.clipboard?.writeText(orderId)
              }
              aria-label="Copy order ID"
            >
              Copy
            </button>

          </div>

        </div>

      </section>


      {/* =========================================
          ORDER DETAILS
      ========================================= */}

      <section className="order-details-section">

        <div className="order-details-container">

          <div className="order-details-heading">

            <div>
              <span>
                YOUR ORDER
              </span>

              <h2>
                Sweet Treats
              </h2>
            </div>

            <div className="order-status">
              <span className="status-dot"></span>
              Order Confirmed
            </div>

          </div>


          {/* =====================================
              ITEMS
          ===================================== */}

          <div className="order-items-card">

            <div className="items-header">

              <span>
                ITEM DETAILS
              </span>

              <span>
                PRICE
              </span>

            </div>


            {items.map((item) => (

              <div
                className="order-item"
                key={item.id}
              >

                <div className="order-item-main">

                  <div className="order-item-image">

                    <img
                      src={item.image}
                      alt={item.name}
                    />

                  </div>


                  <div className="order-item-info">

                    <h3>
                      {item.name}
                    </h3>

                    <p>
                      {item.choices || "SweetSpot Special"}
                    </p>

                    <span className="item-quantity">
                      Qty: {item.quantity || 1}
                    </span>

                  </div>

                </div>


                <strong className="order-item-price">
                  ₹
                  {Number(item.price || 0) *
                    Number(item.quantity || 1)}
                </strong>

              </div>

            ))}


            {/* =================================
                TOTAL
            ================================= */}

            <div className="order-total">

              <div>

                <span>
                  TOTAL AMOUNT
                </span>

                <strong>
                  ₹{total}
                </strong>

              </div>

              <div className="paid-status">
                ✓ Payment Confirmed
              </div>

            </div>

          </div>


          {/* =====================================
              DELIVERY MESSAGE
          ===================================== */}

          <div className="delivery-note">

            <div className="delivery-icon">
              ♡
            </div>

            <div>

              <h3>
                Your order is on its sweet way!
              </h3>

              <p>
                Our team is carefully preparing your
                order. We'll make sure every dessert
                reaches you fresh and delicious.
              </p>

            </div>

          </div>


          {/* =====================================
              ACTION BUTTONS
          ===================================== */}

          <div className="order-actions">

            <Link
              to="/orders"
              className="orders-button"
            >
              View All Orders
              <span>→</span>
            </Link>

            <Link
              to="/"
              className="shopping-button"
            >
              Continue Shopping
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}

export default OrderSuccess;