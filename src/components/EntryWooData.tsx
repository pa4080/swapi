import { Link } from "react-router-dom";
import WookieepediaLogo from "../assets/images/wookieepedia-logo.webp";
import { useSearchContext } from "../contexts/SearchContextProvider";
import defaultImage from "../assets/images/r2d2-3po-crop.webp";

interface Props {
  data: {
    article: string;
    image: string;
  };
}

const EntryWooData: React.FC<Props> = ({
  data = { article: "#", image: defaultImage }
}) => {
  const { showWooData } = useSearchContext();

  return (
    <>
      {showWooData ? (
        <div
          className="entry-image-container mt-14 mb-6 w-fit h-fit relative
         min-[1780px]:absolute min-[1780px]:-right-0 min-[1780px]:bottom-0 min-[1780px]:-my-2 min-[1780px]:translate-x-full min-[1780px]:pl-10"
        >
          <Link to={data.article} target="_blank">
            <div className="rounded-3xl overflow-hidden inline-block border border-mlt-dark-3 ">
              <img
                src={data.image}
                alt="wookieepedia-logo"
                width={288}
                height={288}
                className="bg-mlt-dark-2 w-auto h-inherit"
              />
            </div>
            <img
              src={WookieepediaLogo}
              alt="wookieepedia-logo"
              width={100}
              height={100}
              className="absolute -top-12 -right-12"
            />
          </Link>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default EntryWooData;
