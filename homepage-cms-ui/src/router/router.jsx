import { createBrowserRouter } from "react-router-dom";
import IndexPage from "../pages";
import Skills from "../pages/professional/Skills";
import RouterLayout from "./routerLayout";
import React from "react";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RouterLayout />,
        children: [
            {
                path: "/",
                element: <IndexPage />
            },
            {
                path: "/Skills",
                element: <Skills />,
            },
        ]
    }
]);


export default router;