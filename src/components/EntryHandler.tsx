import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import SearchForm from "./SearchForm";
import Title from "./Title";
import { useSearchContext } from "../contexts/SearchContextProvider";
import axiosClient from "../helpers/axiosClient";
import { loadingDisable, loadingEnable } from "../helpers/loadingEffects";
import swapiEntry from "../helpers/swapiEntry";
import swapiSearch from "../helpers/swapiSearch";
import { SwapiCats, SwapiTypes } from "../models";

interface Props {}

const EntryHandler: React.FC<Props> = () => {
  const {
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
  } = useSearchContext();
  // setLoading(true); causes big troubles here!

  const capitalize = (s: any): any => s && s[0].toUpperCase() + s.slice(1);
  const [entry, setEntry] = useState<SwapiTypes>();

  const navigate = useNavigate();
  const location = useLocation();

  const cats: string[] = [];
  for (const key in SwapiCats) cats.push(key);

  const { cat, id } = useParams<string>();

  useEffect(() => {
    try {
      (async () => {
        const res = await swapiEntry(cat!, id!);
        console.log(res);

        const entryId = `${res.category}-${(res.title ?? res.name)
          .replace(/ /g, "-")
          .toLowerCase()}`;
        if (selSrchEntry !== entryId) setSelSrchEntry(entryId);

        setEntry(res);
      })();
    } catch (error) {
      console.error(error);
    }
  }, [location]);

  useEffect(() => {
    if (!cats.includes(cat!)) {
      setSelSrchEntry("");
      setIsNewSession(true);
      setSearched("");
      setSearchResults([]);
      setLoading(true);
      navigate("/search");
    }

    if (!searchResults.length) {
      try {
        setLoading(true);
        (async () => {
          const results = await swapiSearch([cat!], "[show all]");
          setSearchResults(results);
        })();
      } catch (error) {
        setLoading(false);
        console.error(error);
      }
    }
  }, []);

  return (
    <div>
      <h2 className="text-4xl text-mlt-yellow-primary mb-2">
        {capitalize(entry?.category)}
      </h2>
      <div className="text-2xl"> {capitalize(entry?.title ?? entry?.name)}</div>
    </div>
  );
};

export default EntryHandler;
