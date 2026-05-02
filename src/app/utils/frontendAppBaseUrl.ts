/**
 * Base URL of the main app that serves /auth/* (separate from this landing site when deployed).
 * Set NEXT_PUBLIC_FRONTEND_APP_BASE_URL in .env.local (no trailing slash), e.g. http://localhost:3000
 * When unset, auth links are same-origin relative paths (/auth/login).
 */
export const frontendAppBaseUrl = (
  process.env.NEXT_PUBLIC_FRONTEND_APP_BASE_URL ?? ""
).replace(/\/$/, "");
