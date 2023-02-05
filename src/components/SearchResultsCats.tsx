import React from "react";
import { SwapiSearchResult } from "../models";

interface Props {
  cat: SwapiSearchResult;
}

const SearchResultsCats: React.FC<Props> = ({ cat }) => {
  const { category, results, count, next, previous } = cat;

  return (
    <div className="category-single mt-3 px-3 py-3">
      <h2 className="mb-2">
        <span className="capitalize text-2xl">{category}</span>&nbsp;&nbsp;
        <span className="text-lg font-normal opacity-75">
          {count} {count === 1 ? "result" : "results"}
        </span>
      </h2>
      <div>
        {results.map((result, i) => (
          <div key={i}>{result?.title ?? result?.name}</div>
        ))}
      </div>
    </div>
  );
};

export default SearchResultsCats;
