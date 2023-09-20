import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Dashboard from "./Pages/Dashboard/";
import Charts from "./Pages/Charts";
import Historic from "./Pages/Historic";
import Profile from "./Pages/Profile";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider>
    <React.StrictMode>
      <RouterProvider
        router={createBrowserRouter([
          {
            path: "/",
            element: <LandingPage />,
          },
          {
            path: "/login",
            element: <Login />,
          },
          {
            path: "/register",
            element: <Register />,
          },
          {
            path: "/dashboard",
            element: <Dashboard />,
          },
          {
            path: "/charts",
            element: <Charts />,
          },
          {
            path: "/historic",
            element: <Historic />,
          },
          {
            path: "/profile",
            element: <Profile />,
          },
        ])}
      />
    </React.StrictMode>
  </ChakraProvider>
);
