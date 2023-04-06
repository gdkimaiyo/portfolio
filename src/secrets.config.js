const API =
  process.env.NODE_ENV === "production"
    ? process.env.VUE_APP_BACKEND_API
    : "http://localhost:4000";

export const BACKEND_API = API;
