import React from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import SearchResults from "./components/SearchResults";
import Centered from "./layouts/Centered";
import LeftRight from "./layouts/MasterDetail";
import EntryDispatcher from "./components/EntryDispatcher";

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
        element: <EntryDispatcher />
      }
    ]
  },
  {
    path: "*", // Handle HTTP 404
    element: <Navigate to="/search" />
  }
]);

export default router;
