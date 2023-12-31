import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Agenda from "./pages/Agenda";
import { SolidProvider } from "./hooks/SolidProvider";
import { PodAgendaProvider } from "./hooks/PodAgendaProvider";
import { PodFriendsProvider } from "./hooks/PodFriendsProvider";
import PerfilPage from "./pages/Perfil";
import { PodCompromissosProvider } from "./hooks/PodCompromissos";

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
    path: "/agenda",
    element: <Agenda />,
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
      <PodFriendsProvider>
        <PodCompromissosProvider>
          <PodAgendaProvider>
            <RouterProvider router={router} />
          </PodAgendaProvider>
        </PodCompromissosProvider>
      </PodFriendsProvider>
    </SolidProvider>
  </React.StrictMode>
);
