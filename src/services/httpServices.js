import axios from "axios";

const appApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  withCredentials: true,
});

const http = {
  get: appApi.get,
  post: appApi.post,
  put: appApi.put,
  patch: appApi.patch,
  delete: appApi.delete,
};

export default http;