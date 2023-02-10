import { SwapiTypes } from "../models";
import swapiAxiosClient from "./swapiAxiosClient";

const swapiByUri =
  async (category: string, uri: string): Promise<SwapiTypes> => {
    let data: any;  // let data: SwapiTypes; causes error data is used before being assigned?!?

    try {
      const response = await swapiAxiosClient.get(`${uri}`);
      data = { ...response.data, category };
    } catch (error) {
      console.error(error);
    }

    return data;
  };

export default swapiByUri;
