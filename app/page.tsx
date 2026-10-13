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

export default function HomePage() {
	const [open, setOpen] = useState(false);
	const [svc, setSvc] = useState(0);
	const [ind, setInd] = useState(0);
	const [sent, setSent] = useState(false);

	return (
		<>
			<Header open={open} setOpen={setOpen} />
			<Hero />
			<ModesBand />
			<ServicesAccordion svc={svc} setSvc={setSvc} />
			<ProcessSection />
			<IndustriesSection ind={ind} setInd={setInd} />
			<WhySection />
			<QuoteForm sent={sent} setSent={setSent} />
			<Footer />
		</>
	);
}
