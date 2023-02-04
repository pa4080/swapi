import React from "react";
import { useSearchContext } from "../contexts/SearchContextProvider";
import { SwapiEndPoints as SwapiCats } from "../models";

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
    <div className="mt-4 text-md px-3 select-none">
      {cats.map((cat, i) => (
        <label key={i} className="inline-flex items-center scale-95">
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
