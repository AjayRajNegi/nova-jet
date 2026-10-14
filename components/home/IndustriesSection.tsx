import {
	ArrowRight,
	ArrowUpRight,
	Construction,
	Factory,
	type LucideIcon,
	Pill,
	Ship,
	Shirt,
	ShoppingCart,
	Sprout,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { h2, sec, wrap } from "@/lib/constants";
import { cn } from "@/lib/utils";

const industries: [string, string, LucideIcon, string][] = [
	[
		"Manufacturing",
		"Inbound raw material, finished goods dispatch, machinery and spare-parts pipelines.",
		Factory,
		"/services/air.webp",
	],
	[
		"Import / Export",
		"Recurring ocean and air programmes with customs, duty and destination delivery handled as one file.",
		Ship,
		"/services/ocean.webp",
	],
	[
		"E-commerce & Retail",
		"Stock-in, fulfilment support, peak-season surge and reverse logistics.",
		ShoppingCart,
		"/services/customs.webp",
	],
	[
		"Pharma & Healthcare",
		"Time-critical, temperature-aware handling with documented chain of custody.",
		Pill,
		"/services/special.webp",
	],
	[
		"Garments & Lifestyle",
		"Seasonal collections, sample movements and packed-to-order retail distribution.",
		Shirt,
		"/services/supply.webp",
	],
	[
		"Projects & Infrastructure",
		"Heavy and out-of-gauge cargo with site delivery planning.",
		Construction,
		"/services/warehouse.webp",
	],
	[
		"SMEs & Growing Brands",
		"Flexible volumes, transparent pricing and a partner that scales with your order book.",
		Sprout,
		"/services/road.webp",
	],
];

interface Props {
	ind: number;
	setInd: (value: number) => void;
}

export default function IndustriesSection({ ind, setInd }: Props) {
	return (
		<section id="industries" className={`${sec}`}>
			<div className={wrap}>
				<Card className="gap-0 rounded-xl border-border bg-card p-5 text-card-foreground sm:p-9">
					<CardHeader className="p-0">
						<h2 className={`${h2} font-thin tracking-tighter`}>
							Built around the cargo you move.
						</h2>
						<p className="max-w-[520px] text-[18px] text-mute font-thin tracking-tighter mt-0">
							Choose your industry to see how we handle it.
						</p>
					</CardHeader>
					<div className="grid grid-cols-3 gap-7 max-[1100px]:grid-cols-2 max-[700px]:grid-cols-1 mt-8">
						{industries.map(([title, desc, Icon, img], i) => {
							const selected = ind === i;

							return (
								<Card
									key={title}
									className={cn(
										"group gap-0 overflow-hidden rounded-xl bg- py-0 shadow-none transition-colors duration-200 motion-reduce:transition-none p-0",
										selected
											? "border-foreground ring-1 ring-foreground"
											: "border-border hover:border-foreground/40",
									)}
									onMouseEnter={() => setInd(i)}
								>
									<CardContent className="flex flex-1 flex-col p-6">
										<Icon
											className="size-8 text-foreground"
											strokeWidth={1.75}
											aria-hidden
										/>
										<h3 className="mt-4 text-xl leading-tight font-medium tracking-tight text-foreground">
											{title}
										</h3>
										<p className="mt-2 flex-1 text-sm leading-tight font-light text-muted-foreground">
											{desc}
										</p>
										<Button
											type="button"
											variant="ghost"
											aria-pressed={selected}
											className="mt-8 h-auto w-fit justify-between gap-10 rounded-none border-b border-b-foreground px-0 pt-0 pb-2 text-sm font-normal text-foreground hover:bg-transparent hover:text-foreground focus-visible:ring-ring/50"
										>
											Let&apos;s work together
											<span className="relative size-1">
												<ArrowUpRight
													className="absolute inset-0 size-4 transition-all duration-200 group-hover:scale-75 group-hover:opacity-0 motion-reduce:transition-none"
													aria-hidden
												/>
												<ArrowRight
													className="absolute inset-0 size-4 scale-75 opacity-0 transition-all duration-200 group-hover:scale-100 group-hover:opacity-100 motion-reduce:transition-none"
													aria-hidden
												/>
											</span>
										</Button>
									</CardContent>
									<img
										src={img}
										alt=""
										loading="lazy"
										className="h-36 w-full object-cover"
									/>
								</Card>
							);
						})}
					</div>
				</Card>
			</div>
		</section>
	);
}
