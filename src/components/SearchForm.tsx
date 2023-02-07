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
      id="SearchForm"
      ref={formRef}
      onSubmit={handleSearch}
      className="w-full mt-6 sm:mt-8 "
    >
      <SearchField />
      <SearchRadioCats />
    </form>
  );
};

export default SearchForm;
