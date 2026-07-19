import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "RON Medical Center",
    short_name: "RON Center",
    description: "Trusted family-centered healthcare and diagnostics.",
    start_url: "/",
    display: "standalone",
    background_color: "#f8fafc",
    theme_color: "#0077B6",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "48x48",
        type: "image/x-icon",
      },
    ],
  };
}
