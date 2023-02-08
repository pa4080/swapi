import React from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import SearchResults from "./components/SearchResults";
import Centered from "./layouts/Centered";
import LeftRight from "./layouts/Main";
import EntryHandler from "./components/EntryHandler";

/**
 * This is a hack for GitHub pages:
 * > ${import.meta.env.BASE_URL} replaces the slash "/"
 * > See the "build" and "predeploy" commands in package.json
 * > https://vitejs.dev/guide/build.html#public-base-path
 */

const router = createBrowserRouter([
  {
    path: `${import.meta.env.BASE_URL}`,
    element: <Centered />,
    children: [
      {
        path: `${import.meta.env.BASE_URL}`,
        element: <Navigate to={`${import.meta.env.BASE_URL}search`} />
      },
      {
        path: `${import.meta.env.BASE_URL}search`,
        element: <SearchResults />
      }
    ]
  },
  {
    path: `${import.meta.env.BASE_URL}`,
    element: <LeftRight />,
    children: [
      {
        path: `${import.meta.env.BASE_URL}`,
        element: <Navigate to={`${import.meta.env.BASE_URL}search`} />
      },
      {
        path: `${import.meta.env.BASE_URL}:cat/:id`,
        element: <EntryHandler />
      }
    ]
  },
  {
    path: "*", // Handle HTTP 404
    element: <Navigate to={`${import.meta.env.BASE_URL}search`} />
  }
]);

export default router;
