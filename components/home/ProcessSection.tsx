import { h2, sec, sub, wrap } from "@/lib/constants";

const steps = [
	[
		"Understand",
		"Commodity, Incoterms, packing, temperature, value and delivery window.",
	],
	["Design", "Mode mix, routing, carrier, compliance path and cost envelope."],
	[
		"Execute",
		"Booking, pickup, export/import formalities, line-haul and destination handling.",
	],
	["Control", "Milestone updates, exception management and proof of delivery."],
	[
		"Review",
		"Transit performance, cost against quote and fixes for the next cycle.",
	],
];

export default function ProcessSection() {
	return (
		<section id="process" className={`${sec} bg-ink text-white`}>
			<div className={wrap}>
				<h2 className={h2}>From brief to proof of delivery.</h2>
				<p className={`${sub} text-[#b4c1dc]`}>
					You get a named operations contact, not a rotating ticket queue.
					Exceptions are escalated the same day.
				</p>
				<div className="relative mt-[70px] grid grid-cols-5 before:absolute before:inset-x-0 before:top-[11px] before:border-t-2 before:border-dashed before:border-white/30 before:content-[''] max-[900px]:grid-cols-1 max-[900px]:gap-[34px] max-[900px]:before:hidden">
					{steps.map(([t, d]) => (
						<div
							key={t}
							className="relative pt-12 pr-5 before:absolute before:top-0 before:left-0 before:size-6 before:rounded-full before:bg-brand before:shadow-[0_0_0_6px_#0a1f44,0_0_0_8px_#ff4b33] before:content-['']"
						>
							<h3 className="mb-2.5 text-[26px] font-bold">{t}</h3>
							<p className="text-[15px] text-[#b4c1dc]">{d}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
