/**
 * References:
 * > https://www.bezkoder.com/react-typescript-axios/
 * > https://bobbyhadz.com/blog/typescript-http-request-axios
 * > https://altrim.io/posts/axios-http-client-using-typescript
 * > https://github.com/metalevel-tech/exc-laravel-react-v1/blob/master/react-app/src/axios-client.js
 */
import axios, { AxiosInstance } from "axios";

const headers: Readonly<Record<string, string | boolean>> = {
	"Accept": "application/json",
	"Content-Type": "application/json; charset=utf-8",
	"X-Requested-With": "XMLHttpRequest",
	// "Access-Control-Allow-Credentials": true,
};

const axiosClient: AxiosInstance = axios.create({
	baseURL: `${import.meta.env.VITE_API_BASE_URL}/api/`,
	headers
});

axiosClient.interceptors.request.use(
	(config) => {
		// console.log(config);
		return config;
	},
	(error) => Promise.reject(error)
);

axiosClient.interceptors.response.use(
	(response) => { return response; },
	(error) => { throw error; }
);

export default axiosClient;
