import React, { useState } from "react";
import {
  FaGithub as Github,
  FaJedi,
  FaGalacticRepublic,
  FaEmpire
} from "react-icons/fa";
import { GiDeathStar } from "react-icons/gi";
import { useSearchContext } from "../contexts/SearchContextProvider";
import { getLocalStorage, setLocalStorage } from "../helpers/browserStorage";

interface Props {}

const Footer: React.FC<Props> = (props) => {
  const { beMeticulous, setBeMeticulous, showWooData, setShowWooData } =
    useSearchContext();

  const defaultApi = import.meta.env.VITE_API_DEFAULT;
  const alternativeApi = import.meta.env.VITE_API_ALT;

  const [apiInUse, _setApiInUse] = useState<string>(
    getLocalStorage("SS_API", defaultApi)
  );

  const setApiInUse = (): void => {
    if (apiInUse === defaultApi) {
      setLocalStorage("SS_API", alternativeApi);
      _setApiInUse(alternativeApi);
    } else {
      setLocalStorage("SS_API", defaultApi);
      _setApiInUse(defaultApi);
    }
  };

  return (
    <>
      {/* Link to home page of the project*/}
      <span className="view-source-closure text-mlt-gray-3 ">
        <a
          href={import.meta.env.VITE_GITHUB_PAGE}
          className="view-source-button hover:scale-125 px-3 py-3 transition-transform duration-300 block"
        >
          <Github className="text-3xl" />
        </a>
        <div className="view-source-hint">View the source</div>
      </span>

      {/* Show/Hide Wookieepedia data */}
      <span
        onClick={() => {
          setShowWooData((prev) => !prev);
        }}
        className="switch-api-closure text-mlt-gray-3 "
      >
        <div className="switch-api-button hover:scale-125 px-3 py-3 transition-transform duration-300 cursor-pointer">
          <GiDeathStar className={`text-3xl ${showWooData ? "" : "scale-x-flip"}`} />
        </div>
        <div className="switch-api-hint">
          {showWooData ? "Hide Wookieepedia" : "Show Wookieepedia"}
        </div>
      </span>

      {/* Switch between swapi.py4e.com and swapi.dev */}
      <span onClick={setApiInUse} className="switch-api-closure text-mlt-gray-3 ">
        <div className="switch-api-button hover:scale-125 px-3 py-3 transition-transform duration-300 cursor-pointer">
          {apiInUse === defaultApi ? (
            <FaGalacticRepublic className="text-3xl" />
          ) : (
            <FaEmpire className="text-3xl" />
          )}
        </div>
        <div className="switch-api-hint">
          Switch the API {apiInUse === defaultApi ? "[1]" : "[2]"}
        </div>
      </span>

      {/* Change the numbed of fetched data per request */}
      <span
        onClick={() => {
          setBeMeticulous((prev) => !prev);
        }}
        className="switch-api-closure text-mlt-gray-3 "
      >
        <div className="switch-api-button hover:scale-125 px-3 py-3 transition-transform duration-300 cursor-pointer">
          <FaJedi
            className={`text-3xl transition-transform duration-300 ${
              beMeticulous ? "rotate-90" : "rotate-0"
            }`}
          />
        </div>
        <div className="switch-api-hint">
          Show {beMeticulous ? "less" : "more"} data
        </div>
        <div id="api-hits-counter" className="absolute top-0 -right-12">
          <span>0</span> <div className="counter-api-hint">Total # API Req</div>
        </div>
      </span>
    </>
  );
};

export default Footer;
