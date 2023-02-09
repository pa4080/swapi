import React, { useRef } from "react";
import { SwapiCats } from "../models";
import { useSearchContext } from "../contexts/SearchContextProvider";
import swapiSearch from "../helpers/swapiSearch";
import SearchRadioCats from "./SearchRadioCats";
import SearchInput from "./SearchInput";
import { loadingDisable, loadingEnable } from "../helpers/loadingEffects";

interface Props {
  formStyle?: string;
  inputStyle?: string;
  radioStyle?: string;
}

const SearchForm: React.FC<Props> = ({
  formStyle = " mt-6 sm:mt-8",
  inputStyle,
  radioStyle
}) => {
  const { searched, setSearchResults, searchCategory } = useSearchContext();

  const formRef = useRef<HTMLFormElement>(null);

  const handleSearch = async (ev: React.FormEvent): Promise<void> => {
    ev.preventDefault();
    if (!searched) return;

    sessionStorage.setItem("SS_LOADING", "true");
    loadingEnable();

    const cats: string[] = [];

    if (searchCategory === "all") for (const key in SwapiCats) cats.push(key);
    else cats.push(searchCategory);

    formRef.current?.querySelector("input")?.blur();

    try {
      const results = await swapiSearch(cats, searched);
      sessionStorage.setItem("SS_LOADING", "false");
      setTimeout(() => {
        loadingDisable();
      }, 800);
      setSearchResults(results);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form
      id="SearchForm"
      ref={formRef}
      onSubmit={handleSearch}
      className={`w-full ${formStyle}`}
    >
      <SearchInput inputStyle={inputStyle} />
      <SearchRadioCats radioStyle={radioStyle} />
    </form>
  );
};

export default SearchForm;
