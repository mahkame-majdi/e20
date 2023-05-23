import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../pages/homePage";
import AboutUs from "../pages/aboutUs";
import ContactUs from "./contactUs";
import Movies from "../pages/movies";
import Counter from "../pages/counter";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage/>,
    },
    {
        path: "/about-us",
        element: <AboutUs/>,
    },
    {
        path: "contact-us",
        element: <ContactUs/>
    },
    {
        path: "movie",
        element: <Movies/>
    },
    {
        path: "counter",
        element: <Counter/>
    }
])

export default function SiteRouter(){
    return(
        <RouterProvider router={router}/>
    )
} 