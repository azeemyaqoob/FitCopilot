import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware({
  // These routes are publicly accessible and do not require authentication.
  // Clerk's middleware will still run on them, allowing you to access auth state.
  publicRoutes: [
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
  ],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};