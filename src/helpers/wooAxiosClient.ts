/**
 * References:
 * > https://www.mediawiki.org/wiki/API:Opensearch#JavaScript
 * > https://www.mediawiki.org/wiki/API:Client_code
 * > https://www.mediawiki.org/wiki/API:Client_code/All#JavaScript
 * > https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Api
 */
import axios, { AxiosInstance } from "axios";

const headers: Readonly<Record<string, string | boolean>> = {
	"Accept": "application/json",
	"Content-Type": "application/json; charset=utf-8"
	// "X-Requested-With": "XMLHttpRequest",
	// "Access-Control-Allow-Credentials": true,
};

const apiInUse = "https://starwars.fandom.com/api.php";
// ?action=parse&format=json&page=R2-D2
// ?action=parse&format=json&page=Obi-Wan_Kenobi

const wooAxiosClient: AxiosInstance = axios.create({
	baseURL: `${apiInUse}`,
	headers
});

wooAxiosClient.interceptors.request.use(
	(config) => {
		const counter = document.getElementById("api-hits-counter")?.querySelector("span");
		if (counter) {
			counter.innerHTML = (parseInt(counter.innerHTML) + 1).toString();
		}
		return config;
	},
	(error) => Promise.reject(error)
);

wooAxiosClient.interceptors.response.use(
	(response) => {
		return response;
	},
	(error) => { throw error; }
);

export default wooAxiosClient;
