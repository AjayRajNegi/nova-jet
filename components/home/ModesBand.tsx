import { wrap } from "@/lib/constants";

export default function ModesBand() {
	return (
		<div className="overflow-hidden bg-ink py-[34px] text-white">
			<div
				className={`${wrap} flex flex-wrap justify-between gap-5 font-display text-[clamp(26px,4vw,48px)] font-bold tracking-[-.02em] [&>span:nth-child(even)]:text-brand`}
			>
				<span>Air</span>
				<span>Ocean</span>
				<span>Road</span>
				<span>Rail</span>
				<span>Warehousing</span>
				<span>Customs</span>
			</div>
		</div>
	);
}
