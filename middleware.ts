import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

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
  "/sign-up(.*)", 
])

export default clerkMiddleware((auth, request) => {
  if (isPublicRoute(request)) {
    // This is a public route, so we do nothing.
    return
  }

  // For all other routes, protect them.
  // If the user is not signed in, they will be redirected to the sign-in page.
  auth.protect()
})

export const config = {
  matcher: [
    '/((?!.*\\..*|_next).*)',
    '/',
    '/(api|trpc)(.*)',
  ],
}