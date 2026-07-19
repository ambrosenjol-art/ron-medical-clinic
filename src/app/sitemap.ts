import { services } from "@/data/content";
import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

const pages = [
  "",
  "/about",
  "/services",
  "/doctors",
  "/laboratory",
  "/pharmacy",
  "/appointments",
  "/health-blog",
  "/faq",
  "/contact",
  "/patient-portal/login",
  "/staff-login",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const servicePages = services.map((service) => `/services/${service.slug}`);

  return [...pages, ...servicePages].map((path) => ({
    url: `${siteConfig.url}${path}`,
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.8,
    lastModified: new Date(),
  }));
}
