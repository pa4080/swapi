import React, { useEffect, useRef, useState } from "react";
import { BsSearch as SearchIco, BsX } from "react-icons/bs";
import { SwapiEndPoints as SwapiCats, SwapiSearchResult } from "../models";
import { getLocalStorage, setLocalStorage } from "../helpers/local-storage";
import DOMPurify from "dompurify";
import axiosClient from "../helpers/axios-client";

interface Props {}

const SearchForm: React.FC<Props> = ({}) => {
  const [searched, setSearched] = useState<string>("");
  const [searchResults, setSearchResults] = useState<SwapiSearchResult[]>([]);
  const [searchCategory, setSearchCategory] = useState<string>(
    getLocalStorage("STAR_CATEGORY", "all")
  );

  useEffect(() => {
    setLocalStorage("STAR_CATEGORY", searchCategory);
  }, [searchCategory]);

  useEffect(() => {
    console.log(searchResults);
  }, [searchResults]);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleClearSearch = (): void => {
    setSearched("");
    inputRef.current?.focus();
  };

  const fetchSwapi = async (categories: string[]): Promise<void> => {
    const searchDataArray: SwapiSearchResult[] = [];
    const word: string = DOMPurify.sanitize(searched).replace(/["?]/g, "");
    const uri = (cat: string): string => `${cat}/?search=${word}`;

    for (const category of categories) {
      try {
        const resp = await axiosClient.get(uri(category));
        searchDataArray.push({ ...resp.data, category });
      } catch (error) {
        console.error(error);
      }
      /**
      setLoading(true);
      axiosClient.get(url)
        .then(({ data }) => {
          setSearchResults([...dataArray, data]);
          setTimeout(() => { setLoading(false); }, 50);
        })
        .catch(() => { setLoading(false); });
      */
    }

    setSearchResults(searchDataArray.sort((a, b) => b.count - a.count));
  };

  const handleSearch = (ev: React.FormEvent): void => {
    ev.preventDefault();
    if (!searched) return;

    let categoryList: string[] = [];

    if (searchCategory === "all") for (const key in SwapiCats) categoryList.push(key);
    else categoryList.push(searchCategory);

    fetchSwapi(categoryList);
  };

  const handleRadioChange = (ev: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchCategory(ev.target.value);
  };

  const renderRadioButtons: JSX.Element = ((): JSX.Element => {
    const items: string[] = ["all"];

    for (const key in SwapiCats) {
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
              checked={searchCategory === item}
              onChange={handleRadioChange}
            />
            <span>{item} </span>
          </label>
        ))}
      </div>
    );
  })();

  return (
    <form onSubmit={handleSearch} className="search-form my-4 sm:my-8 md:my-8 w-full">
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
