import React, { useRef } from "react";
import { useSearchContext } from "../contexts/SearchContextProvider";
import { BsSearch as SearchIco, BsX } from "react-icons/bs";

interface Props {}

const SearchField: React.FC<Props> = () => {
  const { searched, setSearched } = useSearchContext();

  const inputRef = useRef<HTMLInputElement>(null);

  const handleClearSearch = (): void => {
    setSearched("");
    inputRef.current?.focus();
  };

  return (
    <div className="search-field relative drop-shadow-lg shadow-mlt-dark-1">
      <div className="pr-20 relative flex items-center">
        <input
          ref={inputRef}
          type="input"
          value={searched}
          onChange={(ev) => setSearched(ev.target.value)}
          className="outline-none bg-mlt-dark-1 w-full 
              py-3 px-10 rounded-l-full text-xl border-solid border 
              border-mlt-dark-6 active:border-yellow-400 focus:border-yellow-400"
        />
        {searched ? (
          <div
            onClick={handleClearSearch}
            className="absolute right-20 px-2 py-2 mr-1 text-3xl 
                rounded-full hover:bg-mlt-dark-6 opacity-50"
          >
            <BsX />
          </div>
        ) : (
          ""
        )}
      </div>

      <button
        type="submit"
        className="absolute right-0 top-0 h-full w-20 rounded-r-full text-xl
            border border-solid border-l-0 bg-mlt-dark-4 text-yellow-400 border-mlt-dark-6 
            focus-visible:outline outline-yellow-400"
      >
        <SearchIco className="mx-auto" />
      </button>
    </div>
  );
};

export default SearchField;
