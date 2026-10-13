import { wrap } from "@/lib/constants";

const why = [
	[
		"Single window",
		"Freight, customs, warehouse and last mile under one owner.",
	],
	[
		"Lane literacy",
		"Working knowledge of Indian ports, ICDs, airports and the documents that clear.",
	],
	[
		"Visibility",
		"Shipment status that operations and the customer can both read.",
	],
	[
		"Cost discipline",
		"Choices that protect landed cost, not just the headline freight rate.",
	],
	[
		"Responsive desk",
		"A 24/7 mindset for exceptions, cut-offs and urgent recoveries.",
	],
];

export default function WhySection() {
	return (
		<section id="why" className="pb-[110px] max-[900px]:pb-[72px]">
			<div
				className={`${wrap} grid grid-cols-2 gap-[70px] max-[900px]:grid-cols-1`}
			>
				<div>
					<h2 className="text-[clamp(34px,5vw,60px)] font-extrabold">
						Why shippers stay with NovaJet.
					</h2>
					<p className="mt-9 max-w-[460px] border-l-4 border-brand pl-5 font-display text-[22px] font-medium">
						We don&apos;t claim to be the largest house. We claim to be the one
						that answers, documents and delivers.
					</p>
				</div>
				<ul className="grid gap-[30px]">
					{why.map(([t, d]) => (
						<li
							key={t}
							className="grid grid-cols-[36px_1fr] gap-4 before:grid before:size-9 before:place-items-center before:rounded-[10px] before:bg-brand before:font-bold before:text-white before:content-['✓']"
						>
							<div>
								<b className="block font-display text-[24px] tracking-[-.02em]">
									{t}
								</b>
								<span className="text-mute">{d}</span>
							</div>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}
