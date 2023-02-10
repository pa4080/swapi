import React, { useRef } from "react";
import { useSearchContext } from "../contexts/SearchContextProvider";
import { BsSearch as IcoSearch, BsX as IcoX } from "react-icons/bs";
import { RxEnter as IcoEnter } from "react-icons/rx";

interface Props {
  inputStyle?: string;
}

const SearchInput: React.FC<Props> = ({ inputStyle = "text-md sm:text-xl" }) => {
  const { searched, setSearched } = useSearchContext();

  const inputRef = useRef<HTMLInputElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  const handleClearSearch = (): void => {
    setSearched("");
    inputRef.current?.focus();
  };

  const handleEnterSuggestion = (): void => {
    setSearched("[show all]");
    btnRef.current?.focus();
  };

  return (
    <div
      id="SearchInput"
      className="search-input-field relative drop-shadow-lg shadow-mlt-dark-1"
    >
      <div className="pr-20 relative flex items-center">
        <input
          id="input-field"
          tabIndex={1}
          ref={inputRef}
          type="input"
          value={searched}
          onChange={(ev) => setSearched(ev.target.value)}
          className={`outline-none bg-mlt-dark-1 w-full 
              py-3 px-10 rounded-l-full border-solid border border-mlt-dark-6
               active:border-yellow-100 focus:border-yellow-400
               transition-colors duration-300
               ${inputStyle}`}
        />

        {searched ? (
          <div
            tabIndex={3}
            className="absolute right-20 px-2 py-2 mr-1 text-3xl rounded-full hover:bg-mlt-dark-6 opacity-50 cursor-pointer focus-visible:outline-none outline-transparent outline-none"
            onClick={handleClearSearch}
          >
            <IcoX />
          </div>
        ) : (
          <div
            tabIndex={3}
            className="absolute right-20 px-2 py-2 mr-1 text-3xl rounded-full hover:bg-mlt-dark-6 opacity-50 cursor-pointer focus-visible:outline-none outline-transparent outline-none"
            onClick={handleEnterSuggestion}
          >
            <IcoEnter />
          </div>
        )}
      </div>

      <button
        id="input-btn"
        ref={btnRef}
        type="submit"
        tabIndex={2}
        className="absolute right-0 top-0 h-full w-20 rounded-r-full text-xl
            border border-solid border-l-transparent bg-mlt-dark-4 text-yellow-400 border-mlt-dark-6 
            focus-visible:outline-none outline-transparent outline-none 
            focus-visible:border-yellow-400
            focus:border-yellow-400 focus:border-l-yellow-400
            active:border-yellow-400 active:border-l
            transition-colors duration-300"
      >
        <IcoSearch className="mx-auto" />
      </button>
    </div>
  );
};

export default SearchInput;
