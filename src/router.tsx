import React from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import SearchResults from "./components/SearchResults";
import Centered from "./layouts/Centered";
import Master from "./layouts/Master";
import EntryDispatcher from "./components/EntryDispatcher";
import { entryLoader } from "./loaders/entryLoader";

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
    element: <Master />,
    children: [
      {
        path: "/",
        element: <Navigate to="/search" />
      },
      {
        path: "/:cat/:id",
        element: <EntryDispatcher />,
        loader: entryLoader
      }
    ]
  },
  {
    path: "*", // Handle HTTP 404
    element: <Navigate to="/search" />
  }
]);

export default router;
