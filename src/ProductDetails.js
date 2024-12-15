import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './ProductDetails.css';

const ProductDetails = () => {
  const { state: product } = useLocation();
  const navigate = useNavigate();

  if (!product) return <div>Product not found</div>;

  return (
    <>
      <div className="product-details-header">
        <button onClick={() => navigate(-2)}>←</button>
        <h1>Details</h1>
        <div className="spacer"></div>
        <img
            src="Images/action3.png"
            alt="Heart"
            className="heart-icon"
        />
      </div>
      <div className="product-details">
        <h1 className="product-name">{product.name}</h1>
        <img src={product.image} alt={product.name} className="product-image" />
        <p className="product-description">{product.description}</p>
        <div className="divider"></div>
        <h3 className="size-selection">Size Selection</h3>
            <div class="size-options">
                <button class="size-button">XS</button>
                <button class="size-button">S</button>
                <button class="size-button">M</button>
                <button class="size-button">L</button>
                <button class="size-button">XL</button>
            </div>

        <div className="color-selection-wrapper">
            <h3 className="section-title">Color Selection</h3>
            <div className="color-selection">
                <div className="color-option">
                    <div className="color-circle" style={{ backgroundColor: '#b53865' }}></div>
                    <span className="color-name">Magenta</span>
                </div>
            </div>
        </div>
        <div className="rating-section">
        <h3>Rating</h3>
        <div className="rating-stars">
            {Array.from({ length: 5 }, (_, index) => (
            <span
                key={index}
                className={`star ${index < Math.floor(product.rating) ? '' : 'empty'}`}
            >
                ★
            </span>
            ))}
        </div>
        </div>
        <button className="add-to-cart-button">
          Add To Cart • ${product.price.toFixed(2)}
        </button>
      </div>
    </>
  );
};

export default ProductDetails;
