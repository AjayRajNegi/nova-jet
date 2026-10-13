import Logo from "./Logo";

export default function Footer() {
	return (
		<footer className="pt-[50px] pb-10 text-[14px] text-muted-foreground">
			<div className="mx-auto max-w-[1200px] px-7 flex flex-wrap items-center justify-between gap-3.5">
				<Logo />
				<span>Connecting Markets. Delivering Value. Worldwide.</span>
				<span>© 2026 NovaJet Global Logistics</span>
			</div>
		</footer>
	);
}
