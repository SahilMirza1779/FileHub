import axios from "axios";

const api = axios.create({
  // .env file se base URL automatically utha lega
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request Interceptor (API call hone se pehle Token attach karne ke liye)
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // Agar user logged in hai
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// Response Interceptor (Errors handle karne ke liye)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // Agar token expire ho gaya toh user ko logout kar do
      localStorage.removeItem("token");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  },
);

export default api;
