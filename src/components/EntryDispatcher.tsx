import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { useSearchContext } from "../contexts/SearchContextProvider";
import swapiEntry from "../helpers/swapiEntry";
import swapiSearch from "../helpers/swapiSearch";
import { SwapiCats, SwapiTypes } from "../models";
import EntryFactory, { defaultStyles } from "./EntryFactory";

const urlToPrettyInternalLink = async (url: string): Promise<JSX.Element> => {
  const uri = String(url).replace(/^https?:.*?api\//, "/");
  const [cat, id] = uri.replace(/^\/(.*)\/$/, "$1").split("/");
  const hwData = await swapiEntry(cat, id);
  return <Link to={uri}>{hwData["name"] ?? hwData["title"]}</Link>;
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
    loading,
    setLoading,
    isNewSession,
    setIsNewSession,
    selSrchEntry,
    setSelSrchEntry
  } = useSearchContext();
  // setLoading(true); causes big troubles here!

  const [entry, setEntry] = useState<SwapiTypes>({} as SwapiTypes);

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

        if (res.homeworld) {
          res.homeworld = await urlToPrettyInternalLink(String(res.homeworld));
        }

        if (res.films) {
          const films: JSX.Element[] = [];
          for (const film of res.films) {
            const getFilmPretty = await urlToPrettyInternalLink(String(film));
            films.push(getFilmPretty);
          }
          res.films = films;
        }

        /**
         * The expanding of some properties is disabled:
         * > makes everything much slow... 
         * > setLoading(true) not woks here...
         * > Is not presented for every planet... ?? Unknown
          if (res.residents) {
            console.log(res.residents);
            const residents: JSX.Element[] = [];
            for (const film of res.residents) {
              const getFilmPretty = await urlToPrettyInternalLink(String(film));
              residents.push(getFilmPretty);
            }
            res.residents = residents;
          }
         */

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

  const people: string[] = [
    "name",
    "height",
    "mass",
    "hair_color",
    "skin_color",
    "eye_color",
    "birth_year",
    "gender",
    "homeworld",
    "films"
  ];

  const films: string[] = [
    "title",
    "episode_id",
    "release_date",
    "director",
    "producer",
    "opening_crawl"
  ];

  const planets: string[] = [
    "name",
    "diameter",
    "climate",
    "gravity",
    "terrain",
    "population",
    "surface_water",
    "rotation_period",
    "orbital_period",
    "films"
  ];
  // "residents",

  const starships: string[] = [
    "name",
    "model",
    "manufacturer",
    "cost_in_credits",
    "length",
    "max_atmosphering_speed",
    "crew",
    "passengers",
    "cargo_capacity",
    "consumables",
    "hyperdrive_rating",
    "MGLT",
    "starship_class",
    "films"
  ];
  // "pilots",

  const species: string[] = [
    "name",
    "classification",
    "designation",
    "average_height",
    "skin_colors",
    "hair_colors",
    "eye_colors",
    "average_lifespan",
    "homeworld",
    "language",
    "films"
  ];
  // "people",

  const vehicles: string[] = [
    "name",
    "model",
    "manufacturer",
    "cost_in_credits",
    "length",
    "max_atmosphering_speed",
    "crew",
    "passengers",
    "cargo_capacity",
    "consumables",
    "vehicle_class",
    "films"
  ];
  // "pilots"

  const entryTypeSwitch = (): JSX.Element => {
    switch (entry?.category) {
      case "people":
        return <EntryFactory data={entry} fields={people} />;
      case "planets":
        return <EntryFactory data={entry} fields={planets} />;
      case "starships":
        return <EntryFactory data={entry} fields={starships} />;
      case "species":
        return <EntryFactory data={entry} fields={species} />;
      case "vehicles":
        return <EntryFactory data={entry} fields={vehicles} />;
      case "films":
        return (
          <EntryFactory
            data={entry}
            fields={films}
            // styles={{ ...defaultStyles, Label: "inline-block w-32" }}
          />
        );
      default:
        return <EntryFactory data={entry} fields={people} />;
    }
  };

  return entryTypeSwitch();
};

export default EntryDispatcher;
