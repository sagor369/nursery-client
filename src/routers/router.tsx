import App from "@/App";
import HomePage from "@/Pages/HomePage";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element:<App></App>,
    children:[
        {path: "/",
        element: <HomePage></HomePage>
        }
    ]
  },
]);
