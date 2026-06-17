import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://api.team-sync.space/api",
  withCredentials: true,
});

axiosInstance.interceptors.request.use(
  (response) => response,
  async (error) => {
    let originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
    }

    try {
      await axiosInstance.get("/auth/get-accessToken");
      return axiosInstance(originalRequest);
    } catch (error) {
      window.location.href = "/";
      return Promise.reject(error);
    }
  },
);
