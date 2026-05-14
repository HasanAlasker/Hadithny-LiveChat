export const BASE_URL =
  import.meta.env.MODE === "development"
    ? "http://localhost:4000/api"
    : "https://.onrender.com/api"; // add this when deployed
