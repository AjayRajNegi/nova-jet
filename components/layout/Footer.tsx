import Link from "next/link";
import Logo from "./Logo";

// export default function Footer() {
// 	return (
// 		<footer className="pt-[50px] pb-10 text-[14px] text-muted-foreground">
// 			<div className="mx-auto max-w-[1200px] px-7 flex flex-wrap items-center justify-between gap-3.5">
// 				<Logo />
// 				<span>Connecting Markets. Delivering Value. Worldwide.</span>
// 				<span>© 2026 NovaJet Global Logistics</span>
// 			</div>
// 		</footer>
// 	);
// }

export default function Footer() {
	return (
		<footer className="w-full bg-white text-zinc-900 overflow-hidden border-t border-zinc-200 font-dmSans">
			<div className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8 flex flex-col items-center">
				<div className="w-full flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
					<div className="max-w-md">
						<h2 className="text-3xl font tracking-tight text-pretty mb-6">
							Have a project in mind? Let&apos;s build something exceptional.
						</h2>
						<a
							href="mailto:hello@example.com"
							className="text-lg font-medium border-b-2 border-zinc-900 pb-1 hover:text-zinc-500 hover:border-zinc-500 transition-all"
						>
							hello@novajet.com
						</a>
					</div>

					<div className="grid grid-cols-2 gap-12 sm:gap-24">
						<div>
							<p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-4">
								Location
							</p>
							<address className="not-italic text-sm space-y-1">
								<p>123 Creative Way</p>
								<p>Brooklyn, NY 11201</p>
							</address>
						</div>
						<div>
							<p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-4">
								Social
							</p>
							<nav className="flex flex-col gap-2">
								<Link href="/" className="text-sm font-medium hover:underline">
									Instagram
								</Link>
								<Link href="/" className="text-sm font-medium hover:underline">
									Dribbble
								</Link>
								<Link href="/" className="text-sm font-medium hover:underline">
									LinkedIn
								</Link>
							</nav>
						</div>
					</div>
				</div>

				<div className="relative w-full">
					<h1 className="text-[12vw] font-black tracking-tighter text-zinc-950 select-none pointer-events-none leading-none -mb-[2vw] opacity-5">
						NovaJet
					</h1>
					<div className="flex justify-between items-end border-t backdrop-blur border-zinc-200 pt-8 pb-6 relative z-10">
						<span className="text-xs font-medium uppercase tracking-widest text-zinc-400">
							© 2026 NovaJet{" "}
						</span>
						<div className="flex gap-8">
							<span className="text-xs  text-zinc-400">001 — 2024</span>
							<button
								type="button"
								className="text-xs font-bold uppercase tracking-widest cursor-pointer hover:text-zinc-500 transition-colors"
							>
								Back to top ↑
							</button>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
