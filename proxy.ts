// Next.js 16 renamed the `middleware` convention to `proxy`. next-intl's request
// handler slots straight in as the default export.
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Skip API, Next internals, and anything with a file extension
  // (sitemap.xml, robots.txt, images, etc.).
  matcher: "/((?!api|_next|_vercel|.*\\..*).*)",
};
