import React from "react";
import { SwapiSearchResult } from "../models";

interface Props {
  cat: SwapiSearchResult;
}

const SearchResultsCats: React.FC<Props> = ({ cat }) => {
  const { category, results, count, next, previous } = cat;

  return (
    <div className="category-single mb-6 px-3 py-3">
      <h2 className="capitalize text-2xl">{category}</h2>
      {count} {count === 1 ? "result" : "results"}
      <div>
        {results.map((result, i) => (
          <div key={i}>{result?.title ?? result?.name}</div>
        ))}
      </div>
    </div>
  );
};

export default SearchResultsCats;
