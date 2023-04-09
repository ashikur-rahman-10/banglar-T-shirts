import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Main from "./Components/Layout/Main";
import Home from "./Components/Home/Home";
import NotFound from "./Components/NotFound/NotFound";
import Order from "./Components/Order/Order";
import About from "./Components/About/About";
import Login from "./Components/Login/Login";
import Grandpa from "./Components/Grandpa/Grandpa";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch("products.json"),
            },
            {
                path: "/order",
                element: <Order></Order>,
            },
            {
                path: "/about",
                element: <About></About>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/grandpa",
                element: <Grandpa></Grandpa>,
            },
            {
                path: "/*",
                element: <NotFound></NotFound>,
            },
        ],
    },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
