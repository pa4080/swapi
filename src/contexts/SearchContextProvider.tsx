/**
 * References:
 * > https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/context/
 * > https://blog.logrocket.com/how-to-use-react-context-typescript/
 * > https://felixgerschau.com/react-typescript-context/
 * > https://github.com/metalevel-tech/exc-laravel-react-v1/blob/master/react-app/src/main.jsx
 */
import React, { createContext, useContext, useEffect, useState } from "react";
import { SwapiSearchResult } from "../models";
import {
  getLocalStorage,
  setLocalStorage,
  getSessionStorage,
  setSessionStorage
} from "../helpers/browserStorage";

interface SearchContextType {
  searched: string;
  setSearched: React.Dispatch<React.SetStateAction<string>>;
  searchResults: SwapiSearchResult[];
  setSearchResults: React.Dispatch<React.SetStateAction<SwapiSearchResult[]>>;
  searchCategory: string;
  setSearchCategory: React.Dispatch<React.SetStateAction<string>>;
  isNewSession: boolean;
  setIsNewSession: React.Dispatch<React.SetStateAction<boolean>>;
  selSrchEntry: string;
  setSelSrchEntry: React.Dispatch<React.SetStateAction<string>>;
  beMeticulous: boolean;
  setBeMeticulous: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearchContext = createContext<SearchContextType>({
  ...({} as SearchContextType),
  // Actually we don't need to set any explicit values here,
  // because they will be changed almost immediately by the user.
  // What I didn't manage to understand is
  // how to set default values for the methods?
  searched: "",
  searchResults: [],
  searchCategory: "all",
  isNewSession: true,
  selSrchEntry: "",
  beMeticulous: false
});

interface Props {
  children: JSX.Element;
}

export const SearchContextProvider: React.FC<Props> = ({ children }) => {
  const [searched, setSearched] = useState<string>(
    getSessionStorage("SS_SEARCHED", "")
  );
  useEffect(() => {
    setSessionStorage("SS_SEARCHED", searched);
  }, [searched]);

  const [searchResults, setSearchResults] = useState<SwapiSearchResult[]>(
    (() => {
      if (!searched) return [];
      return getSessionStorage("SS_RESULTS", []);
    })()
  );
  useEffect(() => {
    setSessionStorage("SS_RESULTS", searchResults);
  }, [searchResults]);

  const [isNewSession, setIsNewSession] = useState<boolean>(true);
  useEffect(() => {
    console.log(searchResults);
    if (isNewSession && searchResults.length) setIsNewSession(false);
  }, [searchResults]);

  const [searchCategory, setSearchCategory] = useState<string>(
    getLocalStorage("SS_CATS", "all")
  );
  useEffect(() => {
    setLocalStorage("SS_CATS", searchCategory);
  }, [searchCategory]);

  const [selSrchEntry, setSelSrchEntry] = useState<string>(
    getSessionStorage("SS_SEL_SEARCH_ENTRY", "")
  );
  useEffect(() => {
    setSessionStorage("SS_SEL_SEARCH_ENTRY", selSrchEntry);
  }, [selSrchEntry]);

  const [beMeticulous, setBeMeticulous] = useState<boolean>(
    getLocalStorage("SS_API_METICULOUS", false)
  );
  useEffect(() => {
    setLocalStorage("SS_API_METICULOUS", beMeticulous);
  }, [beMeticulous]);

  return (
    <SearchContext.Provider
      value={{
        searched,
        setSearched,
        searchResults,
        setSearchResults,
        searchCategory,
        setSearchCategory,
        isNewSession,
        setIsNewSession,
        selSrchEntry,
        setSelSrchEntry,
        beMeticulous,
        setBeMeticulous
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = () => useContext(SearchContext);
