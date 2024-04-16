import axios from "axios";
import { useNavigate } from "react-router-dom";

export const isAuthenticated = () => {
  return localStorage.getItem("token") !== null;
};

const api = axios.create({
  baseURL: "https://mockapi.com",
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      // Redirect user to login page if 401 error is received
      const navigate = useNavigate();
      navigate("/login");
    }
    return Promise.reject(error);
  }
);

export default api;