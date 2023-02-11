/**
 * https://www.mediawiki.org/wiki/API:Opensearch#JavaScript
 * ?action=parse&format=json&page=Obi-Wan_Kenobi
 * 
 * https://stackoverflow.com/a/58238067/6543935
 */
import wooAxiosClient from "./wooAxiosClient";
import defaultImage from "../assets/images/www.starwars.com-cover.webp";

const wooSearchArticle =
    async (url: string): Promise<string> => {

        interface Params {
            [key: string]: string;
        }

        const getQuery = (titleOrUrl: string): string => {
            const title: string = titleOrUrl.split("/").pop() || "Star Wars";

            const params: Params = {
                action: "parse",
                page: title.replace(/\s/g, "_"),
                format: "json"
            };

            let query: string = "?origin=*";

            Object.keys(params)
                .forEach((key, i) => query += "&" + key + "=" + params[key]);

            return query;
        };

        let result: string | null | undefined = "";

        try {
            const response = await wooAxiosClient.get(getQuery(url));
            let responseText = response.data.parse.text["*"];
            let responseHtml = new DOMParser().parseFromString(responseText, "text/html");

            const isRedirect = responseHtml.querySelector(".redirectMsg .redirectText li a")?.getAttribute("title");
            if (isRedirect) {
                const secondRep = await wooAxiosClient.get(getQuery(isRedirect));
                responseText = secondRep.data.parse.text["*"];
                responseHtml = new DOMParser().parseFromString(responseText, "text/html");
            }

            /**
             * With this approach we need to make a new fetch to get the resultant url from the redirection.
             *
            const fileNAme = responseHtml
                .querySelector("aside.portable-infobox img.pi-image-thumbnail")?.getAttribute("data-image-key");
            const result1 = `https://starwars.fandom.com/wiki/Special:Filepath/${fileNAme}`;
            const result2 = `https://starwars.fandom.com/wiki/Special:Redirect/file/${fileNAme}`;
            */

            result = responseHtml
                .querySelector("aside.portable-infobox figure a.image img")?.getAttribute("src")
                ?.replace(/\/revision.*\?.*$/, "");
        } catch (error) {
            console.error(error);
        }

        return result ?? defaultImage;
    };

export default wooSearchArticle;;
