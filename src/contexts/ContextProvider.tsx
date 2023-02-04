/**
 * References:
 * > https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/context/
 * > https://blog.logrocket.com/how-to-use-react-context-typescript/
 * > https://felixgerschau.com/react-typescript-context/
 * > https://github.com/metalevel-tech/exc-laravel-react-v1/blob/master/react-app/src/main.jsx
 */
import React, { createContext, useContext, useEffect, useState } from "react";
import {
  getLocalStorage,
  setLocalStorage,
  getSessionStorage,
  setSessionStorage
} from "../helpers/browserStorage";
import { SwapiSearchResult } from "../models";

interface SearchContextType {
  searched: string;
  setSearched: React.Dispatch<React.SetStateAction<string>>;
  searchResults: SwapiSearchResult[];
  setSearchResults: React.Dispatch<React.SetStateAction<SwapiSearchResult[]>>;
  searchCategory: string;
  setSearchCategory: React.Dispatch<React.SetStateAction<string>>;
}

const SearchContext = createContext<SearchContextType>(null!);

interface Props {
  children: JSX.Element;
}

export const SearchContextProvider: React.FC<Props> = ({ children }) => {
  const [searched, setSearched] = useState<string>(
    getSessionStorage("SS_SEARCHED", "")
  );
  useEffect(setSessionStorage.bind(this, "SS_SEARCHED", searched), [searched]);

  const [searchResults, setSearchResults] = useState<SwapiSearchResult[]>(
    getSessionStorage("SS_RESULTS", [])
  );
  useEffect(setSessionStorage.bind(this, "SS_RESULTS", searchResults), [searchResults]);

  const [searchCategory, setSearchCategory] = useState<string>(
    getLocalStorage("SS_CATS", "all")
  );
  useEffect(setLocalStorage.bind(this, "SS_CATS", searchCategory), [searchCategory]);

  useEffect(() => {
    if (!searched) setSearchResults([]);
  }, []);

  return (
    <SearchContext.Provider
      value={{
        searched,
        setSearched,
        searchResults,
        setSearchResults,
        searchCategory,
        setSearchCategory
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = () => useContext(SearchContext);
