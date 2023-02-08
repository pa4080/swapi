/**
 * References:
 * > https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/context/
 * > https://blog.logrocket.com/how-to-use-react-context-typescript/
 * > https://felixgerschau.com/react-typescript-context/
 * > https://github.com/metalevel-tech/exc-laravel-react-v1/blob/master/react-app/src/main.jsx
 *
 * Below I'm using fn.bind() instead ()=>{fn}because this syntax is much compact,
 * later the functions of browserStorage.ts could be transformed to a useStorage() hook.
 */
import React, { createContext, useContext, useEffect, useState } from "react";
import { SwapiSearchResult } from "../models";
import { loadingDisable, loadingEnable } from "../helpers/loadingEffects";
import {
  getLocalStorage,
  setLocalStorage,
  getSessionStorage,
  setSessionStorage
} from "../helpers/browserStorage";

/*
 * We may need to maintain state for each category
 * in order to handle the pagination?!?
 *
 * But actually we do not need to maintain these states here,
 * we can create and use them locally within SearchResultsCats.tsx
 */
interface SearchResults {
  all: SwapiSearchResult[];
  people: SwapiSearchResult;
  planets: SwapiSearchResult;
  films: SwapiSearchResult;
  species: SwapiSearchResult;
  vehicles: SwapiSearchResult;
  starships: SwapiSearchResult;
}

interface SearchContextType {
  searched: string;
  setSearched: React.Dispatch<React.SetStateAction<string>>;
  searchResults: SwapiSearchResult[];
  setSearchResults: React.Dispatch<React.SetStateAction<SwapiSearchResult[]>>;
  searchCategory: string;
  setSearchCategory: React.Dispatch<React.SetStateAction<string>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  isNewSession: boolean;
  setIsNewSession: React.Dispatch<React.SetStateAction<boolean>>;
  selSrchEntry: string;
  setSelSrchEntry: React.Dispatch<React.SetStateAction<string>>;
}

const SearchContext = createContext<SearchContextType>({
  ...({} as SearchContextType),
  // Actually we don't need to ass any explicit values here.
  // What I didn't manage to understand is
  // how to set default values for the methods?
  searched: "",
  searchResults: [],
  searchCategory: "all",
  loading: false,
  isNewSession: true,
  selSrchEntry: ""
});

interface Props {
  children: JSX.Element;
}

export const SearchContextProvider: React.FC<Props> = ({ children }) => {
  const [searched, setSearched] = useState<string>(
    getSessionStorage("SS_SEARCHED", "")
  );
  useEffect(setSessionStorage.bind(this, "SS_SEARCHED", searched), [searched]);

  const [searchResults, setSearchResults] = useState<SwapiSearchResult[]>(
    (() => {
      if (!searched) return [];
      return getSessionStorage("SS_RESULTS", []);
    })()
  );
  useEffect(setSessionStorage.bind(this, "SS_RESULTS", searchResults), [searchResults]);

  const [isNewSession, setIsNewSession] = useState<boolean>(true);

  useEffect(() => {
    console.log(searchResults);
    if (isNewSession && searchResults.length) setIsNewSession(false);
    setTimeout(loadingDisable, 800);
  }, [searchResults]);

  const [searchCategory, setSearchCategory] = useState<string>(
    getLocalStorage("SS_CATS", "all")
  );
  useEffect(setLocalStorage.bind(this, "SS_CATS", searchCategory), [searchCategory]);

  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (loading) loadingEnable();
    // else setTimeout(loadingDisable, 800);
    // The 'else' stat. is moved to useEffect(cb, [searchResults])
  }, [loading]);

  const [selSrchEntry, setSelSrchEntry] = useState<string>(
    getSessionStorage("SS_SELECTED_SEARCH_ENTRY", "")
  );
  useEffect(setSessionStorage.bind(this, "SS_SELECTED_SEARCH_ENTRY", selSrchEntry), [
    selSrchEntry
  ]);

  return (
    <SearchContext.Provider
      value={{
        searched,
        setSearched,
        searchResults,
        setSearchResults,
        searchCategory,
        setSearchCategory,
        loading,
        setLoading,
        isNewSession,
        setIsNewSession,
        selSrchEntry,
        setSelSrchEntry
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = () => useContext(SearchContext);
