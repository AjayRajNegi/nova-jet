"use client";

import Script from "next/script";

interface OrganizationSchemaProps {
	name: string;
	url: string;
	logo: string;
	description: string;
	address: {
		streetAddress: string;
		addressLocality: string;
		addressRegion: string;
		postalCode: string;
		addressCountry: string;
	};
	telephone: string;
	email: string;
	sameAs: string[];
	priceRange: string;
	areaServed: string[];
}

export default function OrganizationSchema({
	name,
	url,
	logo,
	description,
	address,
	telephone,
	email,
	sameAs,
	priceRange,
	areaServed,
}: OrganizationSchemaProps) {
	const schema = {
		"@context": "https://schema.org",
		"@type": "LogisticsService",
		name,
		url,
		logo,
		description,
		address: {
			"@type": "PostalAddress",
			streetAddress: address.streetAddress,
			addressLocality: address.addressLocality,
			addressRegion: address.addressRegion,
			postalCode: address.postalCode,
			addressCountry: address.addressCountry,
		},
		telephone,
		email,
		sameAs,
		priceRange,
		areaServed: areaServed.map((area) => ({
			"@type": "AdministrativeArea",
			name: area,
		})),
		serviceType: [
			"Air Freight",
			"Ocean Freight",
			"Road Transport",
			"Rail Freight",
			"Customs Clearance",
			"Warehousing & Distribution",
			"Project & Special Cargo",
			"E-commerce Logistics",
			"Supply Chain Advisory",
		],
		knowsAbout: [
			"Freight Forwarding",
			"Supply Chain Management",
			"Customs Brokerage",
			"Inventory Management",
			"Last Mile Delivery",
			"Project Cargo Handling",
		],
		hasOfferCatalog: {
			"@type": "OfferCatalog",
			name: "Logistics Services",
			itemListElement: [
				{
					"@type": "Offer",
					itemOffered: {
						"@type": "Service",
						name: "Air Freight",
						description:
							"Priority, consolidation and charter options for time-critical, high-value and perishable cargo on major trade lanes from India.",
					},
				},
				{
					"@type": "Offer",
					itemOffered: {
						"@type": "Service",
						name: "Ocean Freight",
						description:
							"FCL and LCL programmes with contracted space, origin handling and destination delivery across Asia, the Middle East, Europe, Africa and the Americas.",
					},
				},
				{
					"@type": "Offer",
					itemOffered: {
						"@type": "Service",
						name: "Road & Rail",
						description:
							"FTL, PTL/LTL and rail-linked movements across India, including first-mile pickup and last-mile delivery to factories, warehouses and retail nodes.",
					},
				},
				{
					"@type": "Offer",
					itemOffered: {
						"@type": "Service",
						name: "Customs Clearance",
						description:
							"Import and export documentation, classification support, duty planning and clearance at major Indian ports, airports and ICDs.",
					},
				},
				{
					"@type": "Offer",
					itemOffered: {
						"@type": "Service",
						name: "Warehousing & Distribution",
						description:
							"Secure storage, inventory control, kitting and outbound distribution, with tracking through to the consignee.",
					},
				},
				{
					"@type": "Offer",
					itemOffered: {
						"@type": "Service",
						name: "Project & Special Cargo",
						description:
							"OOG, heavy-lift, machinery and exhibition cargo with route surveys, permits and dedicated handling plans.",
					},
				},
				{
					"@type": "Offer",
					itemOffered: {
						"@type": "Service",
						name: "E-commerce Logistics",
						description:
							"Inbound stock, fulfilment support, reverse logistics and scaled last-mile for online and omnichannel brands.",
					},
				},
				{
					"@type": "Offer",
					itemOffered: {
						"@type": "Service",
						name: "Supply-Chain Advisory",
						description:
							"Mode selection, lane design, landed-cost reviews and process cleanup so logistics spend tracks business growth.",
					},
				},
			],
		},
	};

	return (
		<Script
			id="organization-schema"
			type="application/ld+json"
			// biome-ignore lint/security/noDangerouslySetInnerHtml: suppress
			dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
		/>
	);
}
