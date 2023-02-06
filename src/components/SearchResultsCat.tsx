import React from "react";
import { SwapiSearchResult } from "../models";
import SearchResultsEntry from "./SearchResultsEntry";

interface Props {
  cat: SwapiSearchResult;
}

const SearchResultsCat: React.FC<Props> = ({ cat }) => {
  const { category, results, count, next, previous } = cat;

  return (
    <div className="category-single mx-5 px-6 py-4 rounded-3xl border border-mlt-dark-3">
      <h2 className="mb-2">
        <span className="capitalize text-2xl">{category}</span>&nbsp;&nbsp;
        <span className="text-lg font-normal opacity-75">
          {count} {count === 1 ? "result" : "results"}
        </span>
      </h2>
      <div>
        {results.map((entry, i) => (
          <SearchResultsEntry key={i} entry={entry} catName={category} />
          // <div key={i}>{result?.title ?? result?.name}</div>
        ))}
      </div>
    </div>
  );
};

export default SearchResultsCat;
