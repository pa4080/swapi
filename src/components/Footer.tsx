import React from "react";
import { FaGithub as Github } from "react-icons/fa";

interface Props {}

const Footer: React.FC<Props> = () => {
  return (
    // Previously was Search_Footer
    <div id="Footer" className="mlt-footer text-mlt-gray-3 py-2">
      <div className="mlt-footer-inner">
        <a
          href={import.meta.env.VITE_GITHUB_PAGE}
          className="hover:scale-125 px-1 py-1 transition-transform duration-300"
        >
          <Github className="text-3xl" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
