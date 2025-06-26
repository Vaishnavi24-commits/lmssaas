import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
  matcher: [
    "/((?!_next|.*\\..*).*)", // skip all static assets like .css, .js, images
    "/(api|trpc)(.*)",        // protect all API routes
  ],
};
