import { h2, sec, sub, wrap } from "@/lib/constants";

const industries = [
	[
		"Manufacturing",
		"Inbound raw material, finished goods dispatch, machinery and spare-parts pipelines.",
	],
	[
		"Import / Export",
		"Recurring ocean and air programmes with customs, duty and destination delivery handled as one file.",
	],
	[
		"E-commerce & Retail",
		"Stock-in, fulfilment support, peak-season surge and reverse logistics.",
	],
	[
		"Pharma & Healthcare",
		"Time-critical, temperature-aware handling with documented chain of custody.",
	],
	[
		"Garments & Lifestyle",
		"Seasonal collections, sample movements and packed-to-order retail distribution.",
	],
	[
		"Projects & Infrastructure",
		"Heavy and out-of-gauge cargo with site delivery planning.",
	],
	[
		"SMEs & Growing Brands",
		"Flexible volumes, transparent pricing and a partner that scales with your order book.",
	],
];

interface Props {
	ind: number;
	setInd: (value: number) => void;
}

export default function IndustriesSection({ ind, setInd }: Props) {
	return (
		<section id="industries" className={sec}>
			<div
				className={`${wrap} grid grid-cols-2 items-start gap-[70px] max-[900px]:grid-cols-1`}
			>
				<div>
					<h2 className={h2}>Built around the cargo you move.</h2>
					<p className={sub}>Choose your industry to see how we handle it.</p>
					<div className="mt-9 flex flex-wrap gap-2.5" role="tablist">
						{industries.map(([t], i) => (
							<button
								key={t}
								role="tab"
								aria-selected={ind === i}
								className={
									"cursor-pointer rounded-full px-5 py-[13px] text-[16px] font-medium transition-all duration-200 motion-reduce:transition-none " +
									(ind === i
										? "bg-foreground text-background"
										: "bg-card text-card-foreground ring-[1.5px] ring-inset ring-border hover:ring-foreground")
								}
								onClick={() => setInd(i)}
								type="button"
							>
								{t}
							</button>
						))}
					</div>
				</div>
				<div
					className="flex min-h-[340px] flex-col justify-end rounded-[28px] bg-muted p-12"
					role="tabpanel"
				>
					<h3 className="mb-3.5 text-[clamp(30px,4vw,46px)] font-bold text-foreground">
						{industries[ind][0]}
					</h3>
					<p className="text-[19px] text-muted-foreground">
						{industries[ind][1]}
					</p>
				</div>
			</div>
		</section>
	);
}
