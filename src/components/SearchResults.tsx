import React from "react";
import { useSearchContext } from "../contexts/SearchContextProvider";
import SearchResultsCat from "./SearchResultsCat";

interface Props {}

const SearchResults: React.FC<Props> = () => {
  const { searchResults, isNewSession } = useSearchContext();

  return (
    <>
      {searchResults.length ? (
        <div id="SearchResults" className="mlt-content-inner py-5">
          {searchResults.map((cat, i) => (
            <SearchResultsCat key={i} cat={cat} />
          ))}
        </div>
      ) : isNewSession ? (
        ""
      ) : (
        <div id="SearchResults" className="mlt-content-inner pl-2 py-4">
          <h2 className="mt-5 text-2xl text-center text-mlt-gray-3 opacity-80">
            Sorry your request lead us to a black hole!
          </h2>
        </div>
      )}
    </>
  );
};

export default SearchResults;
