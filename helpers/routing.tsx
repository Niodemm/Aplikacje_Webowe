import React from 'react'
import Home from '../pages/home'
import About from '../pages/about'
import Contact from '../pages/contact'

interface RouteItem{
    path: string, 
    element: React.JSX.Element,
    label: string,
}
export const routes: Array<RouteItem> = [
    {
        path: "/about",
        element: <About/>,
        label: "About"
    },
    {
        path: "/contact",
        element: <Contact/>,
        label: "Contact"
    },
    {
        path: "/",
        element: <Home/>,
        label: "Home",
    }
]