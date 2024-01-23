/**
 * these routes do not need authentication
 * @type {string []} */
export const publicRoutes = ["/"];

/**
 * these routes are used for authentication
 * these routes will redirect logged in users to /settings
 * @type {string []} */
export const authRoutes = ["/login", "/register"];

/**
 * Routes that start with this prefix are used for API authentication
 * @type {string} */
export const apiAuthPrefix = "/api/auth";

/**
 * the default redirect after logging in
 * @type {string} */
export const DEFAULT_LOGIN_REDIRECT = "/settings";
