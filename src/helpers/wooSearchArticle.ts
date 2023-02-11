/**
 * https://www.mediawiki.org/wiki/API:Opensearch#JavaScript
 */
import wooAxiosClient from "./wooAxiosClient";

const defaultUrl = (searched: string) =>
    `https://starwars.fandom.com/wiki/Special:Search` +
    `?query=${searched.replace(/\s/g, "+")}&scope=internal`;

const wooSearchArticle =
    async (titleName: string): Promise<string> => {

        interface Params {
            [key: string]: string;
        }

        const params: Params = {
            action: "opensearch",
            search: titleName.replace(/\s/g, "_"),
            limit: "1",
            namespace: "0",
            format: "json"
        };

        let query = "?origin=*";

        Object.keys(params)
            .forEach((key) => query += "&" + key + "=" + params[key]);

        let result: string = "";

        try {
            const response = await wooAxiosClient.get(`${query}`);
            result = response.data[3][0];
        } catch (error) {
            console.error(error);
        }

        return result ?? defaultUrl(titleName);
    };

export default wooSearchArticle;
