import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  const categories = [
    {
      title: "Cakes",
      description: "Beautifully crafted cakes for every celebration.",
      image:
        "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1200&q=85",
      link: "/cakes",
    },
    {
      title: "Ice Creams",
      description: "Creamy, delicious flavours made for sweet moments.",
      image:
        "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=1200&q=85",
      link: "/icecreams",
    },
    {
      title: "Sundaes",
      description: "Scoops, sauces and toppings in irresistible combinations.",
      image:
        "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?auto=format&fit=crop&w=1200&q=85",
      link: "/sundaes",
    },
    {
      title: "Falooda",
      description: "Rich Indian dessert drinks layered with delicious toppings.",
      image:
        "https://images.unsplash.com/photo-1629385701021-fcd568a743e8?auto=format&fit=crop&w=1200&q=85",
      link: "/falooda",
    },
  ];

  const featured = [
    {
      name: "Belgian Chocolate Cake",
      category: "Signature Cake",
      price: "₹500",
      rating: "5.0",
      image:
        "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1000&q=85",
      link: "/cakes",
    },
    {
      name: "Red Velvet Cake",
      category: "Premium Cake",
      price: "₹550",
      rating: "5.0",
      image:
        "https://images.unsplash.com/photo-1586788680434-30d324b2d46f?auto=format&fit=crop&w=1000&q=85",
      link: "/cakes",
    },
    {
      name: "Belgian Chocolate",
      category: "Premium Ice Cream",
      price: "₹90",
      rating: "5.0",
      image:
        "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=1000&q=85",
      link: "/icecreams",
    },
    {
      name: "Pistachio",
      category: "Premium Ice Cream",
      price: "₹110",
      rating: "5.0",
      image:
        "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=1000&q=85",
      link: "/icecreams",
    },
  ];

  return (
    <main className="home-page">

      {/* =========================================
          HERO
      ========================================= */}

      <section className="home-hero">

        <div className="hero-overlay"></div>

        <div className="hero-content">

          <span className="hero-label">
            WELCOME TO SWEETSPOT
          </span>

          <h1>
            Sweetness
            <br />
            <em>Made Beautiful</em>
          </h1>

          <p>
            Discover handcrafted cakes, creamy ice creams,
            indulgent sundaes and refreshing faloodas,
            created to make every celebration unforgettable.
          </p>

          <div className="hero-buttons">

            <Link
              to="/cakes"
              className="hero-primary"
            >
              Explore Cakes →
            </Link>

            <Link
              to="/icecreams"
              className="hero-secondary"
            >
              Explore Ice Creams →
            </Link>

          </div>

        </div>

        <div className="hero-scroll">
          <span></span>
          SCROLL TO EXPLORE
        </div>

      </section>


      {/* =========================================
          CATEGORIES
      ========================================= */}

      <section
        className="category-section"
        id="about"
      >

        <div className="section-heading">

          <span>
            DISCOVER SWEETSPOT
          </span>

          <h2>
            Something Sweet
            <br />
            For Everyone
          </h2>

          <p>
            From celebration cakes to refreshing dessert drinks,
            discover something delicious for every mood and
            every special occasion.
          </p>

        </div>


        <div className="category-grid">

          {categories.map((category) => (

            <Link
              to={category.link}
              className="category-card"
              key={category.title}
            >

              <div className="category-image">

                <img
                  src={category.image}
                  alt={category.title}
                  loading="lazy"
                />

                <div className="category-image-overlay"></div>

                <div className="category-arrow">
                  ↗
                </div>

              </div>

              <div className="category-info">

                <h3>
                  {category.title}
                </h3>

                <p>
                  {category.description}
                </p>

                <span className="category-link">
                  Explore Collection →
                </span>

              </div>

            </Link>

          ))}

        </div>

      </section>


      {/* =========================================
          FEATURED PRODUCTS
      ========================================= */}

      <section
        className="featured-section"
        id="offers"
      >

        <div className="featured-heading">

          <div>

            <span>
              CUSTOMER FAVOURITES
            </span>

            <h2>
              Bestselling
              <br />
              Treats
            </h2>

          </div>

          <Link
            to="/cakes"
            className="view-all"
          >
            View All Products →
          </Link>

        </div>


        <div className="featured-grid">

          {featured.map((product) => (

            <article
              className="featured-card"
              key={product.name}
            >

              <div className="featured-image">

                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                />

                <span className="featured-badge">
                  Bestseller
                </span>

                <button
                  className="featured-heart"
                  aria-label={`Add ${product.name} to wishlist`}
                  type="button"
                >
                  ♡
                </button>

              </div>


              <div className="featured-info">

                <span className="featured-category">
                  {product.category}
                </span>

                <h3>
                  {product.name}
                </h3>

                <div className="featured-rating">

                  <span>
                    ★★★★★
                  </span>

                  <small>
                    {product.rating}
                  </small>

                </div>


                <div className="featured-bottom">

                  <div>

                    <small>
                      Starting from
                    </small>

                    <strong>
                      {product.price}
                    </strong>

                  </div>

                  <Link
                    to={product.link}
                    className="featured-button"
                  >
                    Order Now
                  </Link>

                </div>

              </div>

            </article>

          ))}

        </div>

      </section>


      {/* =========================================
          PREMIUM PROMO
      ========================================= */}

      <section
        className="home-promo"
        id="contact"
      >

        <div className="promo-content">

          <span>
            MADE WITH LOVE
          </span>

          <h2>
            Every Moment
            <br />
            Deserves Something Sweet
          </h2>

          <p>
            Whether it's a birthday, anniversary, celebration
            or simply a day that needs a little sweetness,
            SweetSpot is here for you.
          </p>

          <Link
            to="/cakes"
            className="promo-button"
          >
            Start Exploring →
          </Link>

        </div>

      </section>

    </main>
  );
}

export default Home;