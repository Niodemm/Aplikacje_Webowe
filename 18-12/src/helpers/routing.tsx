import React from "react";
import Homepage from "../pages/Homepage";
import About from "../pages/About";

interface RouteItem {
    path:string
    element: React.JSX.Element
    label: string
}
export const routes: Array<RouteItem> = [
    {
        path: "/",
        element: <Homepage />,
        label: "Hompeage",
    },
    {
        path: "/about",
        element: <About />,
        label: "about us",
    },
]