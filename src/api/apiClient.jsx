// frontend/src/api/apiClient.js
import axios from "axios";

const apiUrl = import.meta.env.VITE_API_BASE_URL;

if (!apiUrl) {
  console.error("API URL is not set");
  throw new Error("API URL is not set");
}

const apiClient = axios.create({
  baseURL: apiUrl, // Base URL for user endpoints
  headers: {
    "Content-Type": "application/json",
    authorization: `Bearer ${sessionStorage.getItem("jwt") || ""}`,
  },
});

export default apiClient;
