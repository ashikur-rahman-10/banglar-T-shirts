import React from "react";
import "./Products.css";
const Products = ({ product, handleAddToCart }) => {
    // console.log(product);
    return (
        <div className="product">
            <img
                style={{ width: "250px", height: "200px", borderRadius: "8px" }}
                src={product.picture}
                alt=""
            />
            <div>
                <p>{product.name}</p>
                <p>Price:${product.price}</p>
                <p>Gender:{product.gender}</p>
            </div>
            <button
                onClick={() => handleAddToCart(product)}
                className="add-cart-btn"
            >
                Add to cart
            </button>
        </div>
    );
};

export default Products;
