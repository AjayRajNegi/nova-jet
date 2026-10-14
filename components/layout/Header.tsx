import Logo from "./Logo";

interface HeaderProps {
	open: boolean;
	setOpen: (open: boolean) => void;
}

export default function Header({ open, setOpen }: HeaderProps) {
	return (
		<header className="fixed inset-x-0 top-[18px] z-30 flex justify-center px-4">
			<div className="relative flex w-[min(960px,100%)] items-center justify-between gap-7 rounded-full py-2.5 pr-3 pl-6 shadow-[0_10px_40px_color-mix(in_oklab,var(--foreground)_12%,transparent)] overflow-clip backdrop-blur-3xl bg-white/12 border border-white/20">
				<div className="h-24 w-2 bg-primary/50 absolute left-[20%] rotate-30" />
				<div className="h-24 w-2 bg-primary/50 absolute left-[22%] rotate-30" />

				<div className="h-24 w-2 bg-primary/50 absolute right-[20%] rotate-30" />
				<div className="h-24 w-2 bg-primary/50 absolute right-[22%] rotate-30" />

				<Logo />
				<nav
					className={
						"flex gap-[26px] text-[15px] font-medium font-display text-foreground " +
						(open
							? "max-[900px]:absolute max-[900px]:inset-x-4 max-[900px]:top-[70px] max-[900px]:flex-col max-[900px]:rounded-3xl max-[900px]:bg-background max-[900px]:p-6 max-[900px]:shadow-[0_10px_40px_color-mix(in_oklab,var(--foreground)_15%,transparent)]"
							: "max-[900px]:hidden")
					}
					aria-label="Primary"
				>
					{[
						["Services", "#services"],
						["Process", "#process"],
						["Industries", "#industries"],
						["Why us", "#why"],
					].map(([l, h]) => (
						<a
							key={l}
							href={h}
							className="hover:text-primary"
							onClick={() => setOpen(false)}
						>
							{l}
						</a>
					))}
				</nav>
				<a
					className="rounded-full bg-foreground px-[22px] py-3 text-[14px] font-thin text-background transition-colors duration-200 hover:bg-primary hover:text-primary-foreground motion-reduce:transition-none max-[900px]:hidden"
					href="#quote"
				>
					Get a quote
				</a>
				<button
					className="hidden cursor-pointer bg-transparent text-[24px] text-foreground max-[900px]:block"
					aria-label="Menu"
					aria-expanded={open}
					onClick={() => setOpen(!open)}
					type="button"
				>
					{open ? "×" : "☰"}
				</button>
			</div>
		</header>
	);
}
