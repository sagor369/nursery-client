import App from "@/App";
import PlantsCard from "@/components/layout/plants/PlantsCard";
import Checkout from "@/Pages/Checkout";
import HomePage from "@/Pages/HomePage";
import PaymentCard from "@/Pages/Payments";
import Plants from "@/Pages/Plants";
import ProductDetails from "@/Pages/ProductDetails";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[{
      path: "/",
      element: <HomePage></HomePage>
    },
    {
      path: "/payment",
      element: <PaymentCard></PaymentCard>
    },
    {
      path: "/checkout",
      element: <Checkout></Checkout>
    },
  ]
    
  },
  {
    path: "/plants",
    element: <Plants></Plants>,
    children: [
      {
        path: "/plants",
        element: <PlantsCard></PlantsCard>
      },
      { path: "/plants/:id", element: <ProductDetails></ProductDetails> },
    ],
  },
]);
