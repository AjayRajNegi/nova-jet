"use client";

import {
	Container,
	FileCheck2,
	type LucideIcon,
	Plane,
	Ship,
	ShoppingCartPlus,
	TrainFront,
	Truck,
	Warehouse,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { sec, wrap } from "@/lib/constants";

const services = [
	[
		"Air Freight",
		"Priority, consolidation and charter options for time-critical, high-value and perishable cargo on major trade lanes from India.",
	],
	[
		"Ocean Freight",
		"FCL and LCL programmes with contracted space, origin handling and destination delivery across Asia, the Middle East, Europe, Africa and the Americas.",
	],
	[
		"Road & Rail",
		"FTL, PTL/LTL and rail-linked movements across India, including first-mile pickup and last-mile delivery to factories, warehouses and retail nodes.",
	],
	[
		"Customs Clearance",
		"Import and export documentation, classification support, duty planning and clearance at major Indian ports, airports and ICDs.",
	],
	[
		"Warehousing & Distribution",
		"Secure storage, inventory control, kitting and outbound distribution, with tracking through to the consignee.",
	],
	[
		"Project & Special Cargo",
		"OOG, heavy-lift, machinery and exhibition cargo with route surveys, permits and dedicated handling plans.",
	],
	[
		"E-commerce Logistics",
		"Inbound stock, fulfilment support, reverse logistics and scaled last-mile for online and omnichannel brands.",
	],
	[
		"Supply-Chain Advisory",
		"Mode selection, lane design, landed-cost reviews and process cleanup so logistics spend tracks business growth.",
	],
];

interface Props {
	svc: number;
	setSvc: (value: number) => void;
}

const media: { src: string; alt: string; icon: LucideIcon }[] = [
	{ src: "/services/air.webp", alt: "Cargo aircraft on approach", icon: Plane },
	{ src: "/services/ocean.webp", alt: "Container ship at sea", icon: Ship },
	{
		src: "/services/road.webp",
		alt: "Freight trucks on a highway",
		icon: Truck,
	},
	{
		src: "/services/customs.webp",
		alt: "Custom clearances",
		icon: TrainFront,
	},
	{
		src: "/services/warehouse.webp",
		alt: "Warehouse racking",
		icon: Warehouse,
	},
	{
		src: "/services/special.webp",
		alt: "Customs paperwork review",
		icon: FileCheck2,
	},
	{
		src: "/services/e-com.webp",
		alt: "e-commerce",
		icon: ShoppingCartPlus,
	},
	{
		src: "/services/supply.webp",
		alt: "Supply chain",
		icon: Container,
	},
];

export default function ServicesAccordion({ svc, setSvc }: Props) {
	const [shown, setShown] = useState(0);
	useEffect(() => {
		// eslint-disable-next-line react-hooks/set-state-in-effect
		if (svc >= 0) setShown(svc);
	}, [svc]);

	const current = services[shown];

	return (
		<section id="services" className={sec}>
			<div
				className={`${wrap} grid grid-cols-[.9fr_1.1fr] gap-[50px] max-[900px]:grid-cols-1`}
			>
				{/* Left: image panel */}
				<div className="sticky top-[120px] min-h-[560px] self-start overflow-hidden rounded-[32px] shadow-[0_30px_80px_-30px_rgba(8,24,52,0.6)] max-[900px]:static max-[900px]:min-h-[440px]">
					{services.map(([t], i) => {
						const m = media[i] ?? media[0];
						return (
							<Image
								key={t}
								src={m.src}
								alt=""
								aria-hidden
								fill
								sizes="(max-width: 900px) 100vw, 45vw"
								className={
									"object-cover transition-[opacity,transform] duration-700 ease-out motion-reduce:transition-none " +
									(shown === i
										? "scale-100 opacity-100"
										: "scale-105 opacity-0")
								}
							/>
						);
					})}

					<div
						aria-hidden
						className="absolute inset-0 bg-gradient-to-t from-[#061026]/90 via-[#0a1e3c]/45 to-[#0a1e3c]/30"
					/>

					<div className="relative flex h-full min-h-[inherit] flex-col justify-between p-8 md:p-10">
						<div>
							<h2 className="text-balance font-display text-[clamp(30px,3.4vw,46px)] font-[300] text-shadow-2xs tracking-tight text-white">
								Every leg of the journey, one partner.
							</h2>
							<p className="mt-4 max-w-[440px] text-[16px] leading-5 tracking-tighter text-shadow-2xs text-white/80 md:text-[17px]">
								Each service is scoped against transit time, cargo nature,
								compliance risk and landed cost. Book one mode or a full
								door-to-door programme.
							</p>
						</div>

						{/* Live caption: tells you which image you're looking at */}
						<div className="mt-10 inline-flex w-fit items-center gap-3 rounded-full border border-white/25 bg-white/12 py-2 pr-5 pl-2 text-white backdrop-blur-xl">
							<span className="grid size-9 place-items-center rounded-full bg-primary text-primary-foreground">
								{(() => {
									const Icon = (media[shown] ?? media[0]).icon;
									return <Icon className="size-4" aria-hidden />;
								})()}
							</span>
							<span className="text-[15px] font-medium">{current?.[0]}</span>
						</div>
					</div>
				</div>

				{/* Right: shadcn accordion */}
				<Accordion
					value={svc >= 0 ? [String(svc)] : []}
					onValueChange={(v) => setSvc(v.length ? Number(v[0]) : -1)}
				>
					{services.map(([t, d], i) => {
						const Icon = (media[i] ?? media[0]).icon;
						return (
							<AccordionItem
								key={t}
								value={String(i)}
								className="border-b border-border mb-5"
							>
								<AccordionTrigger className="group items-center gap-4 text-left font-display text-[clamp(22px,2.6vw,28px)] font-thin text-shadow-2xs tracking-tighter text-foreground/55 transition-colors hover:text-foreground hover:no-underline data-[state=open]:text-foreground">
									<span className="flex items-center gap-2">
										<Icon
											className="size-6 shrink-0 text-foreground/55 group-hover:text-foreground transition-colors group-data-[state=open]:text-primary"
											aria-hidden
										/>
										{t}
									</span>
								</AccordionTrigger>
								<AccordionContent className="pb-5 pl-10 text-base leading-relaxed text-muted-foreground">
									<p className="max-w-[540px] tracking-tight leading-4 text-shadow-2xs">
										{d}
									</p>
									<p className="inline-flex items-center gap-2 rounded-full bg-primary px-3 py-1.5 text-sm font-medium text-primary-foreground transition-transform duration-200 hover:-translate-y-0.5 motion-reduce:transition-none hover:text-white">
										Get a quote for {t.toLowerCase()}
									</p>
								</AccordionContent>
							</AccordionItem>
						);
					})}
				</Accordion>
			</div>
		</section>
	);
}
