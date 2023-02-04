import DOMPurify from "dompurify";
import { SwapiSearchResult } from "../models";
import axiosClient from "./axiosClient";

const swapiSearch = async (categories: string[], searched: string): Promise<SwapiSearchResult[]> => {
  const searchDataArray: SwapiSearchResult[] = [];
  const word: string = DOMPurify.sanitize(searched).replace(/["?]/g, "");
  const uri = (cat: string): string => `${cat}/?search=${word}`;

  for (const category of categories) {
    try {
      const resp = await axiosClient.get(uri(category));
      searchDataArray.push({ ...resp.data, category });
    } catch (error) {
      console.error(error);
    }
    /**
    setLoading(true);
    axiosClient.get(url)
      .then(({ data }) => {
        setSearchResults([...dataArray, data]);
        setTimeout(() => { setLoading(false); }, 50);
      })
      .catch(() => { setLoading(false); });
    */
  }

  return searchDataArray.sort((a, b) => b.count - a.count);
};

export default swapiSearch;