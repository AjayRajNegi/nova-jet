import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
	return (
		<footer
			className="w-full bg-white text-zinc-900 overflow-hidden border-t border-zinc-200"
			role="contentinfo"
		>
			<div className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8 flex flex-col items-center">
				<div className="w-full flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
					<div className="max-w-md">
						<Logo />
						<p className="text-zinc-600 mb-6 leading-relaxed">
							NovaJet Global Logistics is a New Delhi-based freight and
							supply-chain company built to move cargo with clarity and pace —
							fast, accountable, and global in outlook.
						</p>
						<a
							href="mailto:sales@novajet-global.com"
							className="text-lg font-medium border-b-2 border-zinc-900 pb-1 hover:text-primary hover:border-primary transition-all"
						>
							sales@novajet-global.com
						</a>
					</div>

					<div className="grid grid-cols-2 gap-12 sm:gap-24">
						<div>
							<p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-4">
								Location
							</p>
							<address className="not-italic text-sm space-y-1 text-zinc-600">
								<p>New Delhi, Delhi 110001</p>
								<p>India</p>
							</address>
						</div>
						<div>
							<p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-4">
								Services
							</p>
							<nav className="flex flex-col gap-2">
								<Link
									href="#services"
									className="text-sm font-medium text-zinc-600 hover:text-primary hover:underline transition-colors"
								>
									Air Freight
								</Link>
								<Link
									href="#services"
									className="text-sm font-medium text-zinc-600 hover:text-primary hover:underline transition-colors"
								>
									Ocean Freight
								</Link>
								<Link
									href="#services"
									className="text-sm font-medium text-zinc-600 hover:text-primary hover:underline transition-colors"
								>
									Road & Rail
								</Link>
								<Link
									href="#services"
									className="text-sm font-medium text-zinc-600 hover:text-primary hover:underline transition-colors"
								>
									Customs Clearance
								</Link>
								<Link
									href="#services"
									className="text-sm font-medium text-zinc-600 hover:text-primary hover:underline transition-colors"
								>
									Warehousing
								</Link>
							</nav>
						</div>
					</div>
				</div>

				<div className="relative w-full">
					{/** biome-ignore lint/a11y/useHeadingContent: suppress */}
					<h1
						className="text-[12vw] font-black tracking-tighter text-zinc-950 select-none pointer-events-none leading-none -mb-[2vw] opacity-5"
						aria-hidden="true"
					>
						NovaJet
					</h1>
					<div className="flex justify-between items-end border-t backdrop-blur border-zinc-200 pt-8 pb-6 relative z-10">
						<span className="text-xs font-medium uppercase tracking-widest text-zinc-400">
							© {new Date().getFullYear()} NovaJet Global Logistics
						</span>
						<div className="flex gap-8">
							<span className="text-xs text-zinc-400">Privacy Policy</span>
							<a
								type="button"
								href="#top"
								className="text-xs font-bold uppercase tracking-widest cursor-pointer hover:text-primary transition-colors"
							>
								Back to top ↑
							</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
