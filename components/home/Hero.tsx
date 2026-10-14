import Image from "next/image";

export default function Hero() {
	return (
		<main id="top" className="relative isolate min-h-screen overflow-hidden">
			{/* Full-bleed background */}
			<Image
				src="/hero.webp"
				alt=""
				fill
				priority
				sizes="100vw"
				className="-z-20 object-cover object-bottom"
			/>

			{/* Edge vignette */}
			<div
				aria-hidden
				className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_40%,transparent_40%,rgba(6,16,38,0.5)_100%)]"
			/>
			{/* Bottom scrim: this is what makes the text readable without a card */}
			<div
				aria-hidden
				className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[75%] bg-gradient-to-t from-[#061026]/90 via-[#0a1e3c]/60 to-transparent"
			/>

			<div className="mx-auto flex min-h-screen max-w-[1100px] flex-col items-center justify-end px-5 pb-12 text-center md:pb-16">
				<h1 className="text-balance text-[clamp(40px,6vw,76px)] font-semibold leading-[1.02] tracking-tight text-white [text-shadow:0_2px_24px_rgba(6,16,38,0.45)]">
					Cargo That <span className="text-primary">Doesn&apos;t</span> Stall.
				</h1>

				<p className="mx-auto mt-5 max-w-[720px] text-balance text-[16px] leading-4 text-white/80 [text-shadow:0_1px_12px_rgba(6,16,38,0.5)] md:text-[18px]">
					NovaJet Global Logistics runs air, ocean, road, rail, warehousing and
					customs from one desk in New Delhi, with one owner from booking to
					proof of delivery.
				</p>

				{/* CTA row: email pill + secondary button */}
				<div className="mt-9 flex w-full flex-wrap items-center justify-center gap-3 md:mt-11">
					<form
						action="#quote"
						method="get"
						className="flex w-full max-w-[470px] items-center rounded-full border border-white/25 bg-white/12 p-1.5 shadow-[0_10px_40px_-12px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.25)] backdrop-blur-xl focus-within:border-white/60 focus-within:ring-2 focus-within:ring-white/40"
					>
						<label htmlFor="hero-email" className="sr-only">
							Work email
						</label>
						<input
							id="hero-email"
							name="email"
							type="email"
							required
							placeholder="Enter your email"
							className="min-w-0 flex-1 bg-transparent px-5 text-[16px] text-white placeholder:text-white/60 focus:outline-none"
						/>
						<button
							type="submit"
							className="cursor-pointer rounded-full bg-primary px-6 py-3 text-[16px] font-medium text-primary-foreground transition-transform duration-200 hover:-translate-y-0.5 motion-reduce:transition-none"
						>
							Request a quotation
						</button>
					</form>

					<a
						href="#services"
						className="cursor-pointer rounded-full border border-white/25 bg-white/12 px-6 py-3.5 text-[16px] font-medium text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.25)] backdrop-blur-xl transition-transform duration-200 hover:-translate-y-0.5 hover:bg-white/20 motion-reduce:transition-none"
					>
						See services
					</a>
				</div>
			</div>
		</main>
	);
}
