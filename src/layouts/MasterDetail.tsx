import React, { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";
import Title from "../components/Title";
import Footer from "../components/Footer";
import { useSearchContext } from "../contexts/SearchContextProvider";

interface Props {}

const MasterDetail: React.FC<Props> = (props) => {
  const { selSrchEntry } = useSearchContext();

  useEffect(() => {
    /* See also the relevant CSS for .category-entry class */
    document.getElementById(selSrchEntry)?.scrollIntoView();
  }, []);

  return (
    <div id="Main" className="">
      <div className="mlt-grid-md">
        <div className="mlt-grid-md-left">
          <div className="mlt-grid-md-left-header pt-4 pb-4 px-2">
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
          <div className="mlt-grid-md-left-content">
            <SearchResults />
          </div>
        </div>

        <div className="mlt-grid-md-right px-8 py-6">
          <Outlet />
        </div>

        <div className="mlt-grid-md-footer ">
          <div className="mlt-footer-inner">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MasterDetail;
