import Link from "next/link";

export default function Logo() {
	return (
		<Link
			href="#top"
			className="flex items-center gap-2 font-display text-[22px] font-thin tracking-[-.03em] text-foreground text-shadow-2xs"
		>
			{/* <i className="grid size-[26px] place-items-center rounded-[50%_50%_50%_4px] bg-foreground text-[12px] text-background not-italic">
				NJ
			</i> */}
			<span>
				Nova<b className="text-primary font-thin">Jet</b>
			</span>
		</Link>
	);
}
