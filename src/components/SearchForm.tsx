import React, { useRef } from "react";
import { SwapiCats } from "../models";
import { useSearchContext } from "../contexts/SearchContextProvider";
import swapiSearch from "../helpers/swapiSearch";
import SearchRadioCats from "./SearchRadioCats";
import SearchField from "./SearchInput";

interface Props {}

const SearchForm: React.FC<Props> = () => {
  const { searched, setSearchResults, searchCategory, setLoading } = useSearchContext();

  const formRef = useRef<HTMLFormElement>(null);

  const handleSearch = async (ev: React.FormEvent): Promise<void> => {
    ev.preventDefault();
    if (!searched) return;

    const cats: string[] = [];

    if (searchCategory === "all") for (const key in SwapiCats) cats.push(key);
    else cats.push(searchCategory);

    formRef.current?.querySelector("input")?.blur();

    try {
      setLoading(true);

      setTimeout(async () => {
        const results = await swapiSearch(cats, searched);
        setSearchResults(results);
        setLoading(false);
      }, 800);
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSearch}
      className="search-form mt-4 mb-4 sm:mt-8 sm:mb-4 w-full px-6 md:px-2"
    >
      <SearchField />
      <SearchRadioCats />
    </form>
  );
};

export default SearchForm;
