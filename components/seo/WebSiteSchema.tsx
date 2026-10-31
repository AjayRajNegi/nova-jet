"use client";

import Script from "next/script";

interface WebSiteSchemaProps {
	url: string;
	name: string;
	description: string;
}

export default function WebSiteSchema({
	url,
	name,
	description,
}: WebSiteSchemaProps) {
	const schema = {
		"@context": "https://schema.org",
		"@type": "WebSite",
		url,
		name,
		description,
		potentialAction: {
			"@type": "SearchAction",
			target: {
				"@type": "EntryPoint",
				urlTemplate: `${url}/search?q={search_term_string}`,
			},
			"query-input": "required name=search_term_string",
		},
	};

	return (
		<Script
			id="website-schema"
			type="application/ld+json"
			// biome-ignore lint/security/noDangerouslySetInnerHtml: suppress
			dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
		/>
	);
}
