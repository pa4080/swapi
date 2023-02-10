import { SwapiTypes } from "../models";
import swapiAxiosClient from "./swapiAxiosClient";

const swapiEntry =
  async (category: string, id: string): Promise<SwapiTypes> => {
    let data: any;  // let data: SwapiTypes; causes error data is used before being assigned?!?

    try {
      const response = await swapiAxiosClient.get(`${category}/${id}`);
      data = { ...response.data, category };
    } catch (error) {
      console.error(error);
    }

    return data;
  };

export default swapiEntry;
