import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Create a route matcher for all public routes
const isPublicRoute = createRouteMatcher([
  "/",
  "/contact",
  "/about",
  "/privacy",
  "/terms",
  "/services/personal-training",
  "/services/yoga",
  "/services/cycling",
  "/services/nutrition",
  "/services/strength-training",
  "/services/zumba",
  "/api/contact",
  "/sign-in(.*)", // The sign-in page and all its sub-routes are public
  "/sign-up(.*)", // The sign-up page and all its sub-routes are public
]);

export default clerkMiddleware((auth, req) => {
  // If the route is not public, then it is protected
  if (!isPublicRoute(req)) {
    auth().protect();
  }
});

export const config = {
  // The following matcher runs middleware on all routes
  // except static assets.
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};