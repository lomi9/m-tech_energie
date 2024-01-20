import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.scss";
import "./styles.scss";
import Home from "./pages/Home.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import Plomberie from "./pages/plomberie/Plomberie.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <ScrollToTop />
        <Home />
      </>
    ),
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/plomberie",
    element: (
      <>
        <ScrollToTop />
        <Plomberie />
      </>
    ),
  },
]);

const routerInstance = createBrowserRouter(router, {
  basename: process.env.PUBLIC_URL,
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={routerInstance} />
  </React.StrictMode>
);
