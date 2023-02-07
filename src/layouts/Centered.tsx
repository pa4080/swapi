import React from "react";
import { Outlet } from "react-router-dom";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";
import Title from "../components/Title";
import TitleSearchBox from "../components/TitleSearchBox";
import Footer from "../views/Footer";

interface Props {}

const Centered: React.FC<Props> = (props) => {
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

export default Centered;
