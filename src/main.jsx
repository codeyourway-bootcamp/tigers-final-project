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
            path: "/tigers-final-project",
            element: <LandingPage />,
          },
          {
            path: "/tigers-final-project/login",
            element: <Login />,
          },
          {
            path: "/tigers-final-project/register",
            element: <Register />,
          },
          {
            path: "/tigers-final-project/dashboard",
            element: <Dashboard />,
          },
          {
            path: "/tigers-final-project/charts",
            element: <Charts />,
          },
          {
            path: "/tigers-final-project/historic",
            element: <Historic />,
          },
          {
            path: "/tigers-final-project/profile",
            element: <Profile />,
          },
        ])}
      />
    </React.StrictMode>
  </ChakraProvider>
);
