import React, { useEffect, useRef } from "react";
import { SwapiEndPoints as SwapiCats } from "../models";
import { useSearchContext } from "../contexts/ContextProvider";
import swapiSearch from "../helpers/swapiSearch";
import SearchRadioCats from "./SearchRadioCats";
import SearchField from "./SearchField";

interface Props {}

const SearchForm: React.FC<Props> = () => {
  const { searched, searchResults, setSearchResults, searchCategory } =
    useSearchContext();

  useEffect(() => {
    console.log(searchResults);
  }, [searchResults]);

  const handleSearch = async (ev: React.FormEvent): Promise<void> => {
    ev.preventDefault();
    if (!searched) return;

    const cats: string[] = [];

    if (searchCategory === "all") for (const key in SwapiCats) cats.push(key);
    else cats.push(searchCategory);

    try {
      // setLoading(true)
      const results = await swapiSearch(cats, searched);
      setSearchResults(results);
      // setLoading(false)
    } catch (error) {
      // setLoading(false)
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSearch} className="search-form my-4 sm:my-8 md:my-8 w-full">
      <SearchField />
      <SearchRadioCats />
    </form>
  );
};

export default SearchForm;
