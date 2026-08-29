import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://spinwheel.to", lastModified: new Date(), priority: 1.0 },
    { url: "https://spinwheel.to/yes-or-no", lastModified: new Date(), priority: 0.9 },
    { url: "https://spinwheel.to/what-to-eat", lastModified: new Date(), priority: 0.8 },
    { url: "https://spinwheel.to/random-number", lastModified: new Date(), priority: 0.8 },
  ];
}
