import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "../features/Home/Home";
import Shop from "../features/Shop/Shop";
import { StrictMode } from "react";
import App from "../App";


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
                element: <Shop />
            },
        ]
    }
];

export default routes;
