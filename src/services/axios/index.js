import axios from "axios";
import queryString from "query-string";

const apiClient = axios.create({
  baseURL: "",
  headers: {
    "content-type": "application/json",
  },
  //paramsSerializer: (params) => queryString.stringify(params),
});

apiClient.interceptors.request.use(async (config) => {
  return config;
});

apiClient.interceptors.response.use(
  (response) => {
    if (response && response.data) return response.data;
    return response;
  },
  (error) => { 
    throw error;
  }
);

export default apiClient;
