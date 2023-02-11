import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import WookieepediaLogo from "../assets/images/wookieepedia-logo.webp";
import wooSearchArticle from "../helpers/wooSearchArticle";
import wooParseArticleImage from "../helpers/wooParseArticleImage";

interface ArticleData {
  article: string;
  image: string;
}

interface Props {
  titleName: string;
}

const EntryWooData: React.FC<Props> = ({ titleName }) => {
  const [articleData, setArticleData] = useState<ArticleData>({
    article: "#",
    image: "#"
  });

  useEffect(() => {
    (async () => {
      const article = await wooSearchArticle(titleName);
      const image = await wooParseArticleImage(article);

      setArticleData({ article, image });
    })();
  }, [titleName]);

  return (
    <div className="entry-image-container mt-14 mb-6 w-fit h-fit relative">
      <Link to={articleData.article} target="_blank">
        <div className="rounded-3xl overflow-hidden inline-block border border-mlt-dark-3 ">
          <img
            src={articleData.image}
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
