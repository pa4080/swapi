import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import WookieepediaLogo from "../assets/images/wookieepedia-logo.webp";

// interface ArticleData {
//   article: string;
//   image: string;
// }

interface Props {
  data: {
    article: string;
    image: string;
  };
}

const EntryWooData: React.FC<Props> = ({ data }) => {
  return (
    <div className="entry-image-container mt-14 mb-6 w-fit h-fit relative">
      <Link to={data.article} target="_blank">
        <div className="rounded-3xl overflow-hidden inline-block border border-mlt-dark-3 ">
          <img
            src={data.image}
            alt="wookieepedia-logo"
            width={288}
            height={288}
            className="bg-mlt-dark-2"
          />
        </div>
        <img
          src={WookieepediaLogo}
          alt="wookieepedia-logo"
          width={120}
          height={130}
          className="absolute -top-12 -right-12"
        />
      </Link>
    </div>
  );
};

export default EntryWooData;
