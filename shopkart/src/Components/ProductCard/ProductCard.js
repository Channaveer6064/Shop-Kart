import { NavLink } from "react-router-dom";
import "./ProductCard.css";
export const ProductCard = ({ product }) => {
  return (
    <div className="product-card-container">
      <img src={product.image} />
      <button className="product-card-btn">
        <img src="/img/vector-2.png" />
      </button>
      <h1>{product.title.slice(0, 18)}</h1>
      <p>{product.description.slice(0, 100)}</p>
      <strong>$ {product.price}</strong>
    </div>
  );
};
