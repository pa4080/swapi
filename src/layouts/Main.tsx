import React from "react";
import { Link, Outlet } from "react-router-dom";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";
import Title from "../components/Title";
import Footer from "../components/Footer";

interface Props {}

const Main: React.FC<Props> = (props) => {
  return (
    <div id="Main" className="">
      <div className="mlt-grid-main">
        <div className="mlt-grid-main-left">
          <div className="mlt-grid-main-left-header pt-4 pb-4 px-2">
            <div className="search-input-box">
              <Link to="/search">
                <Title titleStyle={"text-mlt-4xl-plus"} />
              </Link>
              <SearchForm
                formStyle={"pl-2 pr-1 mt-4"}
                inputStyle={"text-md"}
                radioStyle={""}
              />
            </div>
          </div>
          <div className="mlt-grid-main-left-content">
            <SearchResults />
          </div>
        </div>

        <div className="mlt-grid-main-right px-8 py-6">
          <Outlet />
        </div>

        <div className="mlt-grid-main-footer ">
          {/* <h1 className="text-9xl">3</h1> */}
          <div className="mlt-footer-inner">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
