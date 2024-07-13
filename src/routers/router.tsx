import App from "@/App";
import CategoryManage from "@/components/layout/plantManage/CategoryManage";
import PlantProduct from "@/components/layout/plantManage/PlantProduct";
import PlantsCard from "@/components/layout/plants/PlantsCard";
import Checkout from "@/Pages/Checkout";
import HomePage from "@/Pages/HomePage";
import PaymentCard from "@/Pages/Payments";
import PlantManage from "@/Pages/PlantManage";
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
    {
      path: "/manage",
      element: <PlantManage></PlantManage>,
      children:[
        {
          path: "product",
          element:<PlantProduct></PlantProduct>
        },
        {
          path: "category",
          element:<CategoryManage></CategoryManage>
        },
      ]
    },
  ]
    
  },
  {
    path: "/product",
    element: <Plants></Plants>,
    children: [
      {
        path: "",
        element: <PlantsCard></PlantsCard>
      },
      { path: "plants/:id", element: <ProductDetails></ProductDetails> },
    ],
  },
]);
