import type { MetadataRoute } from "next";

const routes = [
  "",
  "/proyectos/sr-pancho-gourmet",
  "/proyectos/la-angelica",
  "/proyectos/colonia-ayui",
  "/proyectos/antartida",
  "/proyectos/pablito-viajero",
  "/proyectos/carteleria-espacios",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return routes.map((route, index) => ({
    url: `https://jpcreativo.com.ar${route}`,
    lastModified: now,
    changeFrequency: index === 0 ? "monthly" : "yearly",
    priority: index === 0 ? 1 : 0.8,
  }));
}
