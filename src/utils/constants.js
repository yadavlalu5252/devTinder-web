// export const BASE_URL = "http://localhost:7777" // development
// export const BASE_URL = "/api" // Production

export const BASE_URL = location.hostname === "localhost" ? "http://localhost:7777" : "/api"