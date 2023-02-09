import React from "react";
import { SwapiSearchResult, SwapiTypes } from "../models";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import SearchResultsEntry from "./SearchResultsEntry";
import { useSearchContext } from "../contexts/SearchContextProvider";
import swapiSearch from "../helpers/swapiSearch";
import { loadingDisable, loadingEnable } from "../helpers/loadingEffects";

interface Props {
  cat: SwapiSearchResult;
}

const SearchResultsCat: React.FC<Props> = ({ cat }) => {
  const { category, results, count, next, previous: prev } = cat;
  const { searchResults, setSearchResults } = useSearchContext();

  const nextApiUri: string = String(next).replace(/^https?:.*?api\//, "/");
  const prevApiUri: string = String(prev).replace(/^https?:.*?api\//, "/");

  const nextNumber: number =
    parseInt(nextApiUri.replace(/^.*page=(\d)$/, "$1")) ?? null;
  const prevNumber: number =
    parseInt(prevApiUri.replace(/^.*page=(\d)$/, "$1")) ?? null;

  const currPage: number = nextNumber
    ? nextNumber - 1
    : prevNumber
    ? prevNumber + 1
    : 1;

  const handlePagination = async (page: string): Promise<void> => {
    if (!page) return;
    sessionStorage.setItem("SS_LOADING", "true");
    loadingEnable();

    const newCatState = await swapiSearch([category], page, "page");

    setSearchResults((prevState) => {
      const indexOfCat = prevState.findIndex((obj) => obj.category === category);
      const newSearchResults = [...prevState];
      newSearchResults.splice(indexOfCat, 1, ...newCatState);

      sessionStorage.setItem("SS_LOADING", "false");
      setTimeout(() => {
        loadingDisable();
      }, 800);
      return newSearchResults;
    });
  };

  return (
    <div className="category-single mx-5 px-6 py-4 rounded-3xl border border-mlt-dark-3">
      <h2 className="mb-2 relative">
        <span className="capitalize text-2xl">{category}</span>&nbsp;&nbsp;
        <span className="text-lg font-normal opacity-75">
          {count} {count === 1 ? "result" : "results"}
        </span>
        <div
          className="category-pagination-nav absolute -right-mlt-1-plus top-0
          flex flex-row items-center space space-x-4"
        >
          <span
            onClick={() => handlePagination(String(prevNumber))}
            className={`inline-block h-full p-mlt-1-plus ${
              prevNumber
                ? "text-mlt-gray-5 active:text-mlt-yellow-primary cursor-pointer"
                : "text-mlt-gray-1"
            }`}
          >
            <FaChevronLeft />
          </span>
          <span className="text-lg text-mlt-gray-5">
            <span>{currPage}</span>&#8201;/&#8201;
            <span>{Math.ceil(count / 10)}</span>
          </span>
          <span
            onClick={() => handlePagination(String(nextNumber))}
            className={`inline-block h-full p-mlt-1-plus ${
              nextNumber
                ? "text-mlt-gray-5 active:text-mlt-yellow-primary cursor-pointer"
                : "text-mlt-gray-1"
            }`}
          >
            <FaChevronRight />
          </span>
        </div>
      </h2>
      <div>
        {results.map((entry, i) => (
          <SearchResultsEntry key={i} entry={entry} catName={category} />
        ))}
      </div>
    </div>
  );
};

export default SearchResultsCat;
