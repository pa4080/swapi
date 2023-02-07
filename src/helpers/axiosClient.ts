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

const axiosClient: AxiosInstance = axios.create({
	baseURL: `${apiInUse}/api/`,
	headers
});

axiosClient.interceptors.request.use(
	(config) => {
		config.baseURL = `${getLocalStorage("SS_API", import.meta.env.VITE_API_DEFAULT)}/api/`;
		console.log(`Axios fetch: ${config.baseURL}`);
		return config;
	},
	(error) => Promise.reject(error)
);

axiosClient.interceptors.response.use(
	(response) => { return response; },
	(error) => { throw error; }
);

export default axiosClient;
