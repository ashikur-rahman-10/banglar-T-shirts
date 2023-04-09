import React from "react";
import Cart from "../Cart/Cart";
const Order = ({cart}) => {
    return (
        <div className="shop-container">
            <div className="order-preview-container">
                
            </div>
            <div className="cart-container">
                <h2 style={{ textAlign: "center" }}>Cart Review</h2>
            </div>
        </div>
    );
};

export default Order;
