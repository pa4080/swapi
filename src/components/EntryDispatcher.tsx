import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { useSearchContext } from "../contexts/SearchContextProvider";
import { loadingDisable, loadingEnable } from "../helpers/loadingEffects";
import swapiEntry from "../helpers/swapiEntry";
import swapiSearch from "../helpers/swapiSearch";
import { SwapiCats, SwapiTypes } from "../models";
import dataToShow, { OutputData } from "./EntryDispatcherData";
import EntryFactory from "./EntryFactory";

const urlToPrettyInternalLink = async (url: string): Promise<JSX.Element> => {
  const uri = String(url).replace(/^https?:.*?api\//, "/");
  const [cat, id] = uri.replace(/^\/(.*)\/$/, "$1").split("/");
  const data = await swapiEntry(cat, id);

  // Handle the generic Homeworld 'unknown', see: /species/6/; /planets/28/
  if (data["name"] === "unknown") data["name"] = data["name"].toUpperCase();

  return <Link to={uri}>{data["name"] ?? data["title"]}</Link>;
};

interface Props {}

const EntryDispatcher: React.FC<Props> = (props) => {
  const {
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
  } = useSearchContext();
  // let dataToShowManipulated: OutputData = JSON.parse(JSON.stringify(dataToShow));

  const [entry, setEntry] = useState<SwapiTypes>({} as SwapiTypes);

  const navigate = useNavigate();
  const location = useLocation();

  const cats: string[] = [];
  for (const key in SwapiCats) cats.push(key);

  const { cat, id } = useParams<string>();

  useEffect(() => {
    sessionStorage.setItem("SS_LOADING", "true");
    loadingEnable();

    try {
      (async () => {
        const res = await swapiEntry(cat!, id!);
        console.log(res);

        const secondApiReq: string[] = ["homeworld", "films"];

        if (beMeticulous) {
          secondApiReq.push("species"); // people | films
          secondApiReq.push("vehicles"); // people | films
          secondApiReq.push("starships"); // people | films
          secondApiReq.push("residents"); // planets
          secondApiReq.push("pilots"); // starships | species
          secondApiReq.push("people"); // species
          secondApiReq.push("characters"); // films
          secondApiReq.push("planets"); // films
        }

        for (const item of secondApiReq) {
          if (res[item]) {
            if (Array.isArray(res[item])) {
              const newItems: JSX.Element[] = [];

              for (const fetchItem of res[item]) {
                const getPrettyLink = await urlToPrettyInternalLink(String(fetchItem));
                newItems.push(getPrettyLink);
              }

              if (newItems.length) {
                res[item] = newItems;
              } else {
                res[item] = "Unknown";
              }
            } else {
              res[item] = await urlToPrettyInternalLink(String(res[item]));
            }
          } else if (res.hasOwnProperty(item)) res[item] = "Unknown";
        }

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
      navigate("/search");
    }

    if (!searchResults.length) {
      try {
        (async () => {
          const results = await swapiSearch([cat!], "[show all]");
          setSearchResults(results);
        })();
      } catch (error) {
        console.error(error);
      }
    }
  }, []);

  const getDataArray = (): string[] => {
    const dataShowArray: string[] = [];
    const currentCategoryData = { ...dataToShow[entry?.category] };

    for (const key in currentCategoryData) {
      if (key === "category") continue;

      if (beMeticulous) {
        dataShowArray.push(key);
      } else {
        if (currentCategoryData[key]) dataShowArray.push(key);
      }
    }

    sessionStorage.setItem("SS_LOADING", "false");
    setTimeout(() => {
      loadingDisable();
    }, 800);
    return dataShowArray;
  };

  return <EntryFactory data={entry} fields={getDataArray()} />;
};

export default EntryDispatcher;
