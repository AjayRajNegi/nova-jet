import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const fontSans = Geist({
	subsets: ["latin"],
	variable: "--font-sans",
	display: "swap",
});

const fontMono = Geist_Mono({
	subsets: ["latin"],
	variable: "--font-mono",
	display: "swap",
});

export const metadata: Metadata = {
	metadataBase: new URL("https://novajetlogistics.com"),
	title: {
		default: "NovaJet Global Logistics | End-to-End Freight & Supply Chain Solutions",
		template: "%s | NovaJet Global Logistics",
	},
	description:
		"NovaJet Global Logistics is a New Delhi-based freight and supply-chain company offering air, ocean, road, rail, customs clearance, warehousing, and last-mile delivery. One partner from origin to door.",
	keywords: [
		"freight forwarding",
		"supply chain management",
		"air freight",
		"ocean freight",
		"road transport",
		"rail freight",
		"customs clearance",
		"warehousing",
		"last mile delivery",
		"logistics India",
		"NovaJet Global Logistics",
		"freight forwarder New Delhi",
		"door to door logistics",
		"project cargo",
		"e-commerce logistics",
	],
	authors: [{ name: "NovaJet Global Logistics" }],
	creator: "NovaJet Global Logistics",
	publisher: "NovaJet Global Logistics",
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	openGraph: {
		type: "website",
		locale: "en_IN",
		url: "https://novajetlogistics.com",
		siteName: "NovaJet Global Logistics",
		title: "NovaJet Global Logistics | End-to-End Freight & Supply Chain Solutions",
		description:
			"NovaJet Global Logistics is a New Delhi-based freight and supply-chain company offering air, ocean, road, rail, customs clearance, warehousing, and last-mile delivery. One partner from origin to door.",
		images: [
			{
				url: "/og-image.png",
				width: 1200,
				height: 630,
				alt: "NovaJet Global Logistics - Cargo That Doesn't Stall",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "NovaJet Global Logistics | End-to-End Freight & Supply Chain Solutions",
		description:
			"NovaJet Global Logistics is a New Delhi-based freight and supply-chain company offering air, ocean, road, rail, customs clearance, warehousing, and last-mile delivery.",
		images: ["/og-image.png"],
		creator: "@novajetlogistics",
	},
	verification: {
		google: "google-site-verification-code",
	},
	alternates: {
		canonical: "https://novajetlogistics.com",
		languages: {
			"en-IN": "https://novajetlogistics.com",
			"en": "https://novajetlogistics.com",
		},
	},
	icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon-16x16.png",
		apple: "/apple-touch-icon.png",
	},
	manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "#0a1f44" },
		{ media: "(prefers-color-scheme: dark)", color: "#0a1f44" },
	],
	width: "device-width",
	initialScale: 1,
	maximumScale: 5,
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en-IN" className={`${fontSans.variable} ${fontMono.variable} h-full antialiased`}>
			<head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
				<link
					rel="dns-prefetch"
					href="https://www.google-analytics.com"
				/>
			</head>
			<body className="min-h-full flex flex-col bg-background text-foreground">
				{children}
			</body>
		</html>
	);
}