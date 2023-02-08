import React from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import SearchResults from "./components/SearchResults";
import Centered from "./layouts/Centered";
import LeftRight from "./layouts/Main";
import EntryHandler from "./components/EntryHandler";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Centered />,
    children: [
      {
        path: "/",
        element: <Navigate to="/search" />
      },
      {
        path: "/search",
        element: <SearchResults />
      }
    ]
  },
  {
    path: "/",
    element: <LeftRight />,
    children: [
      {
        path: "/",
        element: <Navigate to="/search" />
      },
      {
        path: "/:cat/:id",
        element: <EntryHandler />
      }
    ]
  },
  {
    path: "*", // Handle HTTP 404
    element: <Navigate to="/search" />
  }
]);

export default router;
