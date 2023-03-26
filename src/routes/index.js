import { createBrowserRouter } from "react-router-dom";

import App from "../App";

import MainPage from "./route/MainPage";
import ErrorPage from "./route/ErrorPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <MainPage />,
            }
        ]
    },
]);