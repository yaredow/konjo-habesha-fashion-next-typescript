export const publicRoutes = [
  "/",
  "/contact",
  "/cart",
  "/shop",
  "/search",
  "/product*",
  "/auth/new-verification",
  "/admin",
  "/admin/dashboard",
  "/admin/dashboard/product",
  "/admin/dashboard/user",
  "/admin/dashboard/order",
  "/api/stripe/webhook",
  "/",
];

export const authRoutes = [
  "/auth/signin",
  "/auth/register",
  "/auth/error",
  "/auth/forget-password",
  "/auth/reset-password",
];

export const apiAuthPrefix = ["/api/auth", "/api/product"];

export const DEFAULT_LOGIN_REDIRECT = "/profile/dashboard";
