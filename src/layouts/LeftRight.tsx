import React from "react";
import { Link, Navigate, Outlet } from "react-router-dom";
import TitleSearchBox from "../components/TitleSearchBox";
import { useSearchContext } from "../contexts/SearchContextProvider";
import Footer from "../views/Footer";

interface Props {}

const DefaultLayout: React.FC<Props> = (props) => {
  return (
    <div
      id="Centered"
      className="mlt-flex-container h-full w-fit mx-auto max-w-mlt-1xl"
    >
      <div className="mlt-header py-4 px-6 md:px-2">
        <TitleSearchBox />
      </div>

      <div className="mlt-content w-full">
        <Outlet />
      </div>

      <div className="mlt-footer">
        <div className="mlt-footer-inner">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default DefaultLayout;
