import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
	const baseUrl = "https://novajetlogistics.com";

	return {
		rules: [
			{
				userAgent: "*",
				allow: "/",
				disallow: ["/api/", "/_next/", "/private/", "/*.json$"],
			},
			{
				userAgent: "GPTBot",
				disallow: "/",
			},
			{
				userAgent: "ChatGPT-User",
				disallow: "/",
			},
			{
				userAgent: "CCBot",
				disallow: "/",
			},
			{
				userAgent: "anthropic-ai",
				disallow: "/",
			},
		],
		sitemap: `${baseUrl}/sitemap.xml`,
		host: baseUrl,
	};
}
