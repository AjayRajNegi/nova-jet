import { h2, sec, sub, wrap } from "@/lib/constants";

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

export default function ServicesAccordion({ svc, setSvc }: Props) {
	return (
		<section id="services" className={sec}>
			<div
				className={`${wrap} grid grid-cols-[.8fr_1.2fr] gap-[70px] max-[900px]:grid-cols-1`}
			>
				<div className="sticky top-[120px] self-start max-[900px]:static">
					<h2 className={h2}>Every leg of the journey, one partner.</h2>
					<p className={sub}>
						Each service is scoped against transit time, cargo nature,
						compliance risk and landed cost. Book one mode or a full
						door-to-door programme.
					</p>
				</div>
				<div className="border-t-2 border-ink">
					{services.map(([t, d], i) => {
						const on = svc === i;
						return (
							<div key={t}>
								{/* biome-ignore lint/a11y/useButtonType: no */}
								<button
									className="flex w-full cursor-pointer items-center justify-between border-b border-[#cdd6e6] py-[26px] text-left font-display text-[clamp(24px,3vw,36px)] font-bold tracking-[-.02em]"
									aria-expanded={on}
									onClick={() => setSvc(on ? -1 : i)}
								>
									{t}
									<span
										className={
											"grid size-9 place-items-center rounded-full transition-[transform,background-color] duration-[250ms] motion-reduce:transition-none" +
											(on ? " rotate-45 bg-brand text-white" : " bg-mist")
										}
									>
										<svg
											viewBox="0 0 14 14"
											className="size-[14px]"
											fill="none"
											stroke="currentColor"
											strokeWidth="1.8"
											strokeLinecap="round"
										>
											<path d="M7 1v12M1 7h12" />
										</svg>
									</span>
								</button>
								<div
									className={
										"grid transition-[grid-template-rows] duration-300 motion-reduce:transition-none " +
										(on ? "grid-rows-[1fr]" : "grid-rows-[0fr]")
									}
								>
									<p
										className={
											"max-w-[560px] overflow-hidden text-[18px] text-mute " +
											(on ? "pt-4 pb-7" : "")
										}
									>
										{d}
									</p>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
