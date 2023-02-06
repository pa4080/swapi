import React from "react";
import { useSearchContext } from "../contexts/SearchContextProvider";
import { SwapiCats } from "../models";

interface Props {}

const SearchRadioCats: React.FC<Props> = () => {
  const { searchCategory, setSearchCategory } = useSearchContext();

  const cats: string[] = ["all"];
  for (const key in SwapiCats) cats.push(key);

  const handleRadioChange = (ev: React.ChangeEvent<HTMLInputElement>): void => {
    // We could do trigger a new search on category change?
    setSearchCategory(ev.target.value);
  };

  return (
    <div
      id="SearchRadioCats"
      className="mt-4 select-none md:text-center text-md px-4 md:px-0"
    >
      {cats.map((cat, i) => (
        <label key={i} className="inline-flex items-center">
          <input
            type="radio"
            name={cat}
            id={cat}
            value={cat}
            checked={searchCategory === cat}
            onChange={handleRadioChange}
          />
          <span>{cat}</span>
        </label>
      ))}
    </div>
  );
};

export default SearchRadioCats;
