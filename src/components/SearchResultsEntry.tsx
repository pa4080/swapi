import React from "react";
import { useNavigate } from "react-router-dom";
import { useSearchContext } from "../contexts/SearchContextProvider";
import { SwapiTypes } from "../models";

interface Props {
  entry: SwapiTypes;
  catName: string;
}

const SearchResultsEntry: React.FC<Props> = ({ entry, catName }) => {
  const { title, name, episode_id, url, films } = entry;
  const { selSrchEntry, setSelSrchEntry } = useSearchContext();
  const entryId = `${catName}-${(title ?? name).replace(/ /g, "-").toLowerCase()}`;

  const navigate = useNavigate();

  const handleOnClick = (ev: React.MouseEvent, url: string): void => {
    if (ev.currentTarget.tagName === "SPAN") ev.stopPropagation();
    const targetPage: string = url.replace(/^https?:.*?api\//, "/");
    // console.log("SearchResultsEntry.tsx", targetPage, entryId);
    setSelSrchEntry(entryId);
    navigate(targetPage);
  };

  const filmId = (url: string): number => {
    return parseInt(url.replace(/^.*\/(\d+)\/?$/, "$1"));
  };

  return (
    <div
      id={entryId}
      onClick={(ev) => handleOnClick(ev, url)}
      className={`category-entry mt-2 py-2 px-3 rounded-lg 
      cursor-pointer text-mlt-gray-3 hover:text-mlt-dark-2
      hover:bg-mlt-gray-4 hover:border-mlt-gray-4 border ${
        selSrchEntry === entryId ? "border-mlt-gray-3" : "border-transparent"
      }`}
    >
      {catName === "films" ? (
        <>
          <span className="text-lg font-md inline-block mr-2">
            {`Episode ${episode_id} [film ${filmId(url)}]:`}
          </span>
          <span className="text-xl font-bold inline-block">{title}</span>
        </>
      ) : (
        <>
          <span className="text-xl font-bold inline-block mr-2">{name}</span>
          <span className="text-lg font-md inline-block mr-2">
            [Appears in film:{" "}
            {films.length
              ? films.map((url, i, arr) => (
                  <span key={i}>
                    <span
                      onClick={(ev) => handleOnClick(ev, url)}
                      className="relative hover:underline"
                    >{`${filmId(url)}`}</span>
                    {`${i === arr.length - 1 ? "" : ", "}`}
                  </span>
                ))
              : "Series..."}
            ]
          </span>
        </>
      )}
    </div>
  );
};

export default SearchResultsEntry;
