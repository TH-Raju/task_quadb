import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import EachUser from "../components/shared/EachUser";
import Order from "../components/Order";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>
    }, {
        path: '/movie/:id',
        element: <EachUser></EachUser>,
        loader: ({ params }) => fetch(`https://api.tvmaze.com/shows/${params.id}`)
    }, {
        path: '/order',
        element: <Order></Order>
    }
])