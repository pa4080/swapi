/**
 * References:
 * > https://www.bezkoder.com/react-typescript-axios/
 * > https://bobbyhadz.com/blog/typescript-http-request-axios
 * > https://altrim.io/posts/axios-http-client-using-typescript
 * > https://github.com/metalevel-tech/exc-laravel-react-v1/blob/master/react-app/src/axios-client.js
 */
import axios, { AxiosInstance } from "axios";
import { getLocalStorage } from "./browserStorage";

const headers: Readonly<Record<string, string | boolean>> = {
	"Accept": "application/json",
	"Content-Type": "application/json; charset=utf-8",
	"X-Requested-With": "XMLHttpRequest",
	// "Access-Control-Allow-Credentials": true,
};

// Note the value is override below to change it on fly 
// by the button in the footer,otherwise we need to reload the page
const apiInUse = getLocalStorage("SS_API", import.meta.env.VITE_API_DEFAULT);

const swapiAxiosClient: AxiosInstance = axios.create({
	baseURL: `${apiInUse}/api/`,
	headers
});

swapiAxiosClient.interceptors.request.use(
	(config) => {
		// console.log(`Axios fetch: ${config.baseURL}`);
		const counter = document.getElementById("api-hits-counter")?.querySelector("span");
		if (counter) {
			counter.innerHTML = (parseInt(counter.innerHTML) + 1).toString();
		}
		config.baseURL = `${getLocalStorage("SS_API", import.meta.env.VITE_API_DEFAULT)}/api/`;
		return config;
	},
	(error) => Promise.reject(error)
);

swapiAxiosClient.interceptors.response.use(
	(response) => {
		return response;
	},
	(error) => { throw error; }
);

export default swapiAxiosClient;
