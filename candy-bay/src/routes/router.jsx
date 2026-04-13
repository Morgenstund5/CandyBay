import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "../features/Home/Home";
import Shop from "../features/Shop/Shop";
import { StrictMode } from "react";
import App from "../App";
import Product from "../features/Shop/Product";


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
            }
        ]
    }
];

export default routes;
