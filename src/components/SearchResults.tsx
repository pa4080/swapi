import React from "react";
import { useSearchContext } from "../contexts/SearchContextProvider";
import SearchResultsCats from "./SearchResultsCats";

interface Props {}

const SearchResults: React.FC<Props> = () => {
  const { searchResults, isNewSession } = useSearchContext();

  return (
    <>
      {searchResults.length ? (
        <div id="SearchResults" className="mlt-content-inner pl-2">
          {searchResults.map((cat, i) => (
            <SearchResultsCats key={i} cat={cat} />
          ))}
        </div>
      ) : isNewSession ? (
        ""
      ) : (
        <div id="SearchResults" className="mlt-content-inner pl-2">
          <h2 className="mt-5 text-2xl text-center text-mlt-gray-3 opacity-80">
            Sorry your request lead us to a black hole!
          </h2>
        </div>
      )}
    </>
  );
};

export default SearchResults;
