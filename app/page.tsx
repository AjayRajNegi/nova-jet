"use client";

import { useState } from "react";
import Hero from "@/components/home/Hero";
import IndustriesSection from "@/components/home/IndustriesSection";
import ModesBand from "@/components/home/ModesBand";
import ProcessSection from "@/components/home/ProcessSection";
import QuoteForm from "@/components/home/QuoteForm";
import ServicesAccordion from "@/components/home/ServicesAccordion";
import WhySection from "@/components/home/WhySection";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import FAQSchema from "@/components/seo/FAQSchema";
import OrganizationSchema from "@/components/seo/OrganizationSchema";
import WebSiteSchema from "@/components/seo/WebSiteSchema";

export default function HomePage() {
	const [open, setOpen] = useState(false);
	const [svc, setSvc] = useState(0);
	const [ind, setInd] = useState(0);
	const [sent, setSent] = useState(false);

	const baseUrl = "https://novajetlogistics.com";

	const faqItems = [
		{
			question: "What modes of transport does NovaJet Global Logistics offer?",
			answer:
				"NovaJet offers air freight, ocean freight (FCL & LCL), road transport (FTL, PTL/LTL), rail freight, and multimodal combinations tailored to your cargo and lane requirements.",
		},
		{
			question: "Does NovaJet handle customs clearance?",
			answer:
				"Yes, we provide in-house customs clearance at major Indian ports, airports, and ICDs including documentation, classification support, duty planning, and compliance advisory.",
		},
		{
			question: "Can NovaJet manage warehousing and distribution?",
			answer:
				"We offer secure storage, inventory control, kitting, and outbound distribution with end-to-end tracking through to the consignee.",
		},
		{
			question: "What is NovaJet's service area?",
			answer:
				"Headquartered in New Delhi, we operate across India and manage global trade lanes covering Asia, the Middle East, Europe, Africa, and the Americas.",
		},
		{
			question: "How do I get a quotation?",
			answer:
				"Use the quotation form on our website or email us directly. Share cargo details, origin, destination, timing, and mode preference. Our operations desk typically responds within 24 hours.",
		},
		{
			question: "Does NovaJet handle project and special cargo?",
			answer:
				"Yes, we manage OOG, heavy-lift, machinery, and exhibition cargo with route surveys, permits, and dedicated handling plans.",
		},
		{
			question: "What industries does NovaJet serve?",
			answer:
				"We serve manufacturers, importers, e-commerce brands, automotive, pharmaceuticals, textiles, chemicals, and project cargo sectors.",
		},
	];

	return (
		<>
			<OrganizationSchema
				name="NovaJet Global Logistics"
				url={baseUrl}
				logo={`${baseUrl}/logo.png`}
				description="NovaJet Global Logistics is a New Delhi-based freight and supply-chain company offering end-to-end air, ocean, road, rail, customs clearance, warehousing, and last-mile delivery solutions."
				address={{
					streetAddress: "New Delhi",
					addressLocality: "New Delhi",
					addressRegion: "Delhi",
					postalCode: "110001",
					addressCountry: "IN",
				}}
				telephone="+91-11-XXXX-XXXX"
				email="info@novajetlogistics.com"
				sameAs={[
					"https://www.linkedin.com/company/novajet-logistics",
					"https://twitter.com/novajetlogistics",
					"https://www.facebook.com/novajetlogistics",
				]}
				priceRange="$$"
				areaServed={[
					"India",
					"Asia",
					"Middle East",
					"Europe",
					"Africa",
					"Americas",
				]}
			/>
			<WebSiteSchema
				url={baseUrl}
				name="NovaJet Global Logistics"
				description="End-to-end freight forwarding and supply chain solutions from New Delhi. Air, ocean, road, rail, customs, warehousing, and last-mile delivery."
			/>
			<FAQSchema items={faqItems} />
			<Header open={open} setOpen={setOpen} />
			<main id="main-content" className="flex-1">
				<Hero />
				<ModesBand />
				<ServicesAccordion svc={svc} setSvc={setSvc} />
				<ProcessSection />
				<IndustriesSection ind={ind} setInd={setInd} />
				<WhySection />
				<QuoteForm sent={sent} setSent={setSent} />
			</main>
			<Footer />
		</>
	);
}
