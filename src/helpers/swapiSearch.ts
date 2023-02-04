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
  }

  return searchDataArray
    .filter(cat => cat.count > 0)
    .sort((a, b) => b.count - a.count);
};

export default swapiSearch;