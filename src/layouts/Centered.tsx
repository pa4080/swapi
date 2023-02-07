import React from "react";
import { Outlet } from "react-router-dom";
import SearchForm from "../components/SearchForm";
import Title from "../components/Title";
import Footer from "../components/Footer";

interface Props {}

const Centered: React.FC<Props> = (props) => {
  return (
    <div id="Centered" className="mlt-flex-centered h-full w-fit mx-auto max-w-mlt-1xl">
      <div className="mlt-flex-centered-header py-4 sm:py-6 px-6 sm:px-2">
        <div className="search-input-box">
          <Title />
          <SearchForm />
        </div>
      </div>

      <div className="mlt-flex-centered-content w-full">
        <Outlet />
      </div>

      <div className="mlt-flex-centered-footer">
        <div className="mlt-footer-inner">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Centered;
