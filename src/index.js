import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import { SolidProvider } from "./hooks/SolidProvider";
import { PodMealsProvider } from "./hooks/PodMealsProvider";
import { PodFriendsProvider } from "./hooks/PodFriendsProvider";
import PerfilPage from "./pages/Perfil";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/sobre",
    element: <Sobre />,
  },
  {
    path: "/perfil",
    element: <PerfilPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SolidProvider>
      <PodMealsProvider>
        <PodFriendsProvider>
          <RouterProvider router={router} />
        </PodFriendsProvider>
      </PodMealsProvider>
    </SolidProvider>
  </React.StrictMode>
);
