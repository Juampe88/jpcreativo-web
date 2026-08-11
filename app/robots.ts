import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://jpcreativo.com.ar/sitemap.xml",
    host: "https://jpcreativo.com.ar",
  };
}
