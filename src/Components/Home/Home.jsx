import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Products from "../Products/Products";
import "./Home.css";
import Cart from "../Cart/Cart";
import { addTodb, getShoppingCart } from "../Utilities/fakebd";
import toast, { Toaster } from "react-hot-toast";

const Home = () => {
    const loadedProducts = useLoaderData();

    const [cart, setCart] = useState([]);

    const handleAddToCart = (product) => {
        const existItem = cart.find((item) => item._id === product._id);
        if (existItem) {
            toast.error("Aleadry Added");
            return;
        } else {
            let newCart = [...cart, product];
            setCart(newCart);
        }

        // console.log();
    };
    const handleRemoveItem = (id) => {
        const remainingItem = cart.filter((item) => item._id !== id);
        setCart(remainingItem);
        console.log(remainingItem);
    };
    return (
        <div className="shop-container">
            <div className="products-container">
                {loadedProducts.map((product) => (
                    <Products
                        product={product}
                        key={product._id}
                        handleAddToCart={handleAddToCart}
                    ></Products>
                ))}
            </div>
            <div className="cart-container">
                <h2 style={{ textAlign: "center" }}>Cart Review</h2>
                <Cart cart={cart} handleRemoveItem={handleRemoveItem}></Cart>
            </div>
        </div>
    );
};

export default Home;
