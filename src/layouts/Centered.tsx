import React, { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import SearchForm from "../components/SearchForm";
import Title from "../components/Title";
import Footer from "../components/Footer";
import { useSearchContext } from "../contexts/SearchContextProvider";

interface Props {}

const Centered: React.FC<Props> = (props) => {
  const { selSrchEntry } = useSearchContext();

  useEffect(() => {
    /* See also the relevant CSS for .category-entry class */
    document.getElementById(selSrchEntry)?.scrollIntoView();
  }, []);

  return (
    <div id="Centered" className="mlt-flex-centered h-full w-fit mx-auto max-w-mlt-1xl">
      <div className="mlt-flex-centered-header py-4 sm:py-6 px-6 sm:px-2">
        <div className="search-input-box">
          <Link to="/search">
            <Title />
          </Link>
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
