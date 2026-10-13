import { wrap } from "@/lib/constants";
import TrendingStocksMarqueeDemo from "../ui/shadcn-space/marquee/marquee-05";
import Marquee05 from "../ui/shadcn-space/marquee/marquee-05";

export default function ModesBand() {
	return (
		// <div className="overflow-hidden bg-foreground py-[34px] text-background">
		// 	<div
		// 		className={`${wrap} flex flex-wrap justify-between gap-5 font-display text-[clamp(26px,4vw,48px)] font-bold tracking-[-.02em] [&>span:nth-child(even)]:text-primary`}
		// 	>
		// 		<span>Air</span>
		// 		<span>Ocean</span>
		// 		<span>Road</span>
		// 		<span>Rail</span>
		// 		<span>Warehousing</span>
		// 		<span>Customs</span>
		// 	</div>
		// </div>
		// <TrendingStocksMarqueeDemo />
		<Marquee05 />
	);
}
