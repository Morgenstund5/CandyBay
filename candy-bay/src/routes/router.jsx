import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "../features/Home/Home";
import Shop from "../features/Shop/Shop";
import { StrictMode } from "react";
import App from "../App";
import Product from "../features/Shop/Product";
import Cart from "../features/Cart/Cart";
import Checkout from "../features/Checkout/Checkout";


const routes = [
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "shop",
                element: <Shop />,
            },
            {
                path: "product/:productId",
                element: <Product />
            },
            {
                path: "cart",
                element: <Cart />,
            },
            {
                path: "checkout",
                element: <Checkout />
            }
        ]
    }
];

export default routes;
