import React, { useState } from "react";
import { FaGithub as Github, FaYinYang, FaJedi } from "react-icons/fa";
import { getLocalStorage, setLocalStorage } from "../helpers/browserStorage";

interface Props {}

const Footer: React.FC<Props> = (props) => {
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
      <span className="view-source-closure text-mlt-gray-3 ">
        <a
          href={import.meta.env.VITE_GITHUB_PAGE}
          className="view-source-button hover:scale-125 px-3 py-3 transition-transform duration-300 block"
        >
          <Github className="text-3xl" />
        </a>
        <div className="view-source-hint">View the source</div>
      </span>

      <span onClick={setApiInUse} className="switch-api-closure text-mlt-gray-3 ">
        <div className="switch-api-button hover:scale-125 px-3 py-3 transition-transform duration-300 cursor-pointer">
          <FaJedi
            className={`text-3xl transition-transform duration-300 ${
              apiInUse === defaultApi ? "rotate-0" : "rotate-90"
            }`}
          />
        </div>
        <div className="switch-api-hint">Switch the API</div>
      </span>
    </>
  );
};

export default Footer;
