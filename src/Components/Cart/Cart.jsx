import React from "react";
import "./Cart.css";
const Cart = ({ cart, handleRemoveItem }) => {
    // console.log(cart);
    let messege;
    if (cart.length === 0) {
        messege = <p>Add some Products</p>;
    } else {
        messege = <p>Thanks For shopping!</p>;
    }
    return (
        <div>
            <h2>Order summary:{cart.length}</h2>
            {messege}
            {cart.length > 1 ? (
                <span>Use coupun code:buy101</span>
            ) : (
                <span>Buy more than item to get 10% off</span>
            )}
            {cart.map((product) => (
                <div key={product._id}>
                    <p>
                        {" "}
                        <button onClick={() => handleRemoveItem(product._id)}>
                            X
                        </button>{" "}
                        Name:{product.name}
                    </p>
                </div>
            ))}
            {cart.length === 4 && <p>You will get 25% off</p>}
            {cart.length === 4 || <p>buy 4 item to get 25% off</p>}
        </div>
    );
};

export default Cart;
