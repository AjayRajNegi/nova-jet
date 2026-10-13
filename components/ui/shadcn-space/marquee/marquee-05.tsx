import {
	BaggageClaimIcon,
	PlaneTakeoff,
	ShipIcon,
	TrainFront,
	TruckIcon,
	WarehouseIcon,
} from "lucide-react";
import type { ReactNode } from "react";
import { Marquee } from "../animations/marquee";

type Stock = {
	name: string;
	logoClass: string;
	icon?: ReactNode;
};

const stocks: Stock[] = [
	{
		name: "Air",
		logoClass: "bg-blue-500",
		icon: <PlaneTakeoff />,
	},
	{
		name: "Ocean",
		logoClass: "bg-sky-400",
		icon: <ShipIcon />,
	},
	{
		name: "Road",
		logoClass: "bg-teal-400",
		icon: <TruckIcon />,
	},
	{
		name: "Rail",
		logoClass: "bg-red-500",
		icon: <TrainFront />,
	},
	{
		name: "Warehousing",
		logoClass: "bg-orange-400",
		icon: <WarehouseIcon />,
	},
	{
		name: "Customs",
		logoClass: "bg-amber-300",
		icon: <BaggageClaimIcon />,
	},
];

const StockItem = ({ name, icon, logoClass }: Stock) => {
	return (
		<div className="flex items-center gap-3 px-6">
			{icon}
			<p className="text-lg font-medium text-foreground">{name}</p>
			{/* <p className="text-sm text-muted-foreground">${price.toFixed(2)}</p> */}
		</div>
	);
};

export default function ServicesMarquee() {
	return (
		<div className="w-full overflow-hidden border border-border bg-card">
			<Marquee pauseOnHover className="py-4 [--duration:30s] [--gap:0rem]">
				{stocks.map((stock) => (
					<StockItem key={stock.name} {...stock} />
				))}
			</Marquee>
		</div>
	);
}
