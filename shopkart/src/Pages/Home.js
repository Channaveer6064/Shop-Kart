import React from "react";
import "./Home.css";
import { ProductCard } from ".././Components/ProductCard/ProductCard";
import { Banner } from "../Components/Banner/Banner";
import NewsLetter from "../Components/NewsLetter/NewsLetter";
import { useData } from "../Contexts/DataContext/DataContext";
export const Home = () => {
  const {
    state: { ProductData, CategoryData, toggleCategory },
    dispatch,
  } = useData();
  console.log("toggle", toggleCategory);
  return (
    <div className="home-container">
      <Banner />
      <section className="product-listing">
        <div className="product-listing-title">
          <h1>new products </h1>
          <span id="arrow-container">
            <img src="/img/arrow-1.png" />
            <img src="/img/arrow-2.png" />
          </span>
        </div>
        <img src="/img/star-4.svg" className="star-4" />
        <div className="product-listing-content">
          <nav className="sidebar">
            {CategoryData.map((i, index) => (
              <button
                key={index}
                onClick={() =>
                  dispatch({ type: "TOGGLE_CATEGORY", payload: i })
                }
                style={{ fontWeight: toggleCategory == i ? "600" : "400" }}
              >
                {i}
              </button>
            ))}
          </nav>
          <div className="product-cards-container">
            {ProductData.slice(0, 10).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
      <NewsLetter />
    </div>
  );
};
