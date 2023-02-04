import React, { useEffect, useRef, useState } from "react";
import { BsSearch as SearchIco, BsX } from "react-icons/bs";
import { swapiEndPoints } from "../models";
import { getLocalStorage, setLocalStorage } from "../helpers/local-storage";

interface Props {}

const SearchForm: React.FC<Props> = ({}) => {
  const [searched, setSearched] = useState<string>("");
  const [category, setCategory] = useState<string>(
    getLocalStorage("STAR_CATEGORY", "all")
  );

  useEffect(() => {
    setLocalStorage("STAR_CATEGORY", category);
  }, [category]);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleClearSearch = (): void => {
    setSearched("");
    inputRef.current?.focus();
  };

  const handleSearch = (ev: React.FormEvent): void => {
    ev.preventDefault();
    if (!searched) return;

    console.log(searched, category);
  };

  const handleRadioChange = (ev: React.ChangeEvent<HTMLInputElement>): void => {
    setCategory(ev.target.value);
  };

  const renderRadioButtons: JSX.Element = ((): JSX.Element => {
    const items: string[] = ["all"];

    for (const key in swapiEndPoints) {
      items.push(key);
    }

    return (
      <div className="mt-4 text-md pr-3 select-none">
        {items.map((item, i) => (
          <label key={i} className="inline-flex items-center scale-95">
            <input
              type="radio"
              name={item}
              id={item}
              value={item}
              checked={category === item}
              onChange={handleRadioChange}
            />
            <span>{item} </span>
          </label>
        ))}
      </div>
    );
  })();

  return (
    <form
      onSubmit={handleSearch}
      className="search-form my-4 sm:my-8 md:my-8 w-full"
    >
      <div className="search-field relative drop-shadow-lg shadow-mlt-dark-1">
        <div className="pr-20 relative flex items-center">
          <input
            ref={inputRef}
            type="input"
            value={searched}
            onChange={(ev) => setSearched(ev.target.value)}
            className="outline-none bg-mlt-dark-1 w-full py-3 px-10 rounded-l-full text-xl 
            border-solid border border-mlt-dark-6 active:border-yellow-400 focus:border-yellow-400"
          />
          {searched ? (
            <div
              className="absolute right-20 px-2 py-2 mr-1 text-3xl rounded-full 
            hover:bg-mlt-dark-6 opacity-50"
              onClick={handleClearSearch}
            >
              <BsX />
            </div>
          ) : (
            ""
          )}
        </div>
        <button
          type="submit"
          className="absolute right-0 top-0 h-full rounded-r-full w-20 text-xl
          bg-mlt-dark-4 text-yellow-400 border-solid border border-mlt-dark-6 border-l-0"
        >
          <SearchIco className="mx-auto" />
        </button>
      </div>

      {renderRadioButtons}
    </form>
  );
};

export default SearchForm;
