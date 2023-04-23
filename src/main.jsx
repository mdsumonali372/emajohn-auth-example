import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Inventory from "./components/Inventory/Inventory";
import Home from "./components/Layout/Home";
import cartProductLoader from "./components/loaders/cartProductLoader";
import Login from "./components/Login/Login";
import Orders from "./components/Orders/Orders";
import ProccessedCheckout from "./components/ProccessedCheckout/ProccessedCheckout";
import AuthProviders from "./components/providers/AuthProviders";
import Shop from "./components/Shop/Shop";
import SignUp from "./components/SignUp/SignUp";
import "./index.css";
import PrivateRoute from "./routes/PrivateRoute";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <Shop></Shop>,
      },
      {
        path: "/orders",
        element: <Orders></Orders>,
        loader: cartProductLoader,
      },
      {
        path: "/proccessedcheckout",
        element: (
          <PrivateRoute>
            {" "}
            <ProccessedCheckout></ProccessedCheckout>
          </PrivateRoute>
        ),
      },
      {
        path: "/inventory",
        element: (
          <PrivateRoute>
            <Inventory></Inventory>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>
);
