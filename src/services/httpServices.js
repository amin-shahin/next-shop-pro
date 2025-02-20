import axios from "axios";

const appApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  withCredentials: true,
});

appApi.interceptors.request.use(
  (res) => res,
  (err) => Promise.reject(err)
);

appApi.interceptors.response.use(
  (res) => res,
  async (err) => {
    const originalConfig = err.config;
    try {
      if (err.response.status === "401" && !originalConfig._retry) {
        originalConfig._retry = true;
      }
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/user/refresh-token`,
        { withCredentials: true }
      );
      if (data) {
        return appApi(originalConfig);
      }
    } catch (error) {
      return Promise.reject(error);
    }
    return Promise.reject(err)
  }
);

const http = {
  get: appApi.get,
  post: appApi.post,
  put: appApi.put,
  patch: appApi.patch,
  delete: appApi.delete,
};

export default http;
