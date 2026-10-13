import { wrap } from "@/lib/constants";

const routes = [
	[
		"M330 270 Q250 120 150 160",
		150,
		160,
		"Europe",
		"animate-[draw_2.2s_cubic-bezier(.6,0,.2,1)_.4s_forwards]",
	],
	[
		"M330 270 Q230 400 190 400",
		190,
		400,
		"Africa",
		"animate-[draw_2.2s_cubic-bezier(.6,0,.2,1)_.7s_forwards]",
	],
	[
		"M330 270 Q420 130 500 190",
		500,
		190,
		"Far East",
		"animate-[draw_2.2s_cubic-bezier(.6,0,.2,1)_1s_forwards]",
	],
	[
		"M330 270 Q450 400 470 350",
		470,
		350,
		"ASEAN",
		"animate-[draw_2.2s_cubic-bezier(.6,0,.2,1)_1.3s_forwards]",
	],
	[
		"M330 270 Q180 40 70 250",
		70,
		250,
		"Americas",
		"animate-[draw_2.2s_cubic-bezier(.6,0,.2,1)_1.6s_forwards]",
	],
];

export default function Hero() {
	return (
		<main id="top">
			{/* hero */}
			<div className="grid min-h-screen items-center bg-paper bg-[radial-gradient(900px_600px_at_85%_40%,#e3ecfa,transparent_70%)] pt-[130px] pb-[70px]">
				<div
					className={`${wrap} grid grid-cols-[1.05fr_.95fr] items-center gap-6 max-[900px]:grid-cols-1`}
				>
					<div>
						<h1 className="text-[clamp(48px,7.4vw,104px)] font-extrabold">
							Cargo that doesn&apos;t{" "}
							<em className="text-brand not-italic">stall.</em>
						</h1>
						<p className="mt-[18px] max-w-[520px] text-[18px] text-mute">
							NovaJet Global Logistics runs air, ocean, road, rail, warehousing
							and customs from one desk in New Delhi, with one owner from
							booking to proof of delivery.
						</p>
						<div className="mt-9 flex flex-wrap gap-3.5">
							<a
								className="inline-block cursor-pointer rounded-[14px] px-8 py-[17px] text-[16px] font-bold transition-transform duration-200 hover:-translate-y-0.5 motion-reduce:transition-none bg-brand text-white"
								href="#quote"
							>
								Request a quotation
							</a>
							<a
								className="inline-block cursor-pointer rounded-[14px] px-8 py-[17px] text-[16px] font-bold transition-transform duration-200 hover:-translate-y-0.5 motion-reduce:transition-none bg-transparent text-ink shadow-[inset_0_0_0_2px_#0a1f44]"
								href="#services"
							>
								See services
							</a>
						</div>
					</div>
					<svg
						className="h-auto w-full"
						viewBox="0 0 600 520"
						role="img"
						aria-label="Shipping routes from New Delhi to Europe, Africa, the Far East, ASEAN and the Americas"
					>
						<defs>
							<pattern
								id="dots"
								width="16"
								height="16"
								patternUnits="userSpaceOnUse"
							>
								<circle cx="2" cy="2" r="1.6" fill="#0a1f44" opacity=".25" />
							</pattern>
							<clipPath id="g">
								<circle cx="300" cy="260" r="250" />
							</clipPath>
						</defs>
						<circle cx="300" cy="260" r="250" fill="#fff" />
						<rect
							width="600"
							height="520"
							fill="url(#dots)"
							clipPath="url(#g)"
						/>
						{routes.map(([d, x, y, name, anim]) => {
							const cx = Number(x);
							const cy = Number(y);
							return (
								<g key={name}>
									<path
										pathLength="1"
										d={String(d)}
										className={`fill-none stroke-brand stroke-[2.5] [stroke-dasharray:1] [stroke-dashoffset:1] [stroke-linecap:round] motion-reduce:animate-none motion-reduce:[stroke-dashoffset:0] ${anim}`}
									/>
									<circle
										className="animate-[pop_.4s_2.2s_forwards] fill-ink opacity-0 motion-reduce:animate-none motion-reduce:opacity-100"
										cx={cx}
										cy={cy}
										r="6"
									/>
									<text
										className="animate-[pop_.5s_2.4s_forwards] fill-ink font-sans text-[13px] font-bold opacity-0 motion-reduce:animate-none motion-reduce:opacity-100"
										x={cx - 20}
										y={cy + 24}
									>
										{name}
									</text>
								</g>
							);
						})}
						<circle cx="330" cy="270" r="22" fill="#ff4b33" opacity=".2" />
						<circle cx="330" cy="270" r="9" fill="#ff4b33" />
						<text
							x="344"
							y="298"
							className="fill-ink font-sans text-[15px] font-extrabold"
						>
							New Delhi
						</text>
					</svg>
				</div>
			</div>
		</main>
	);
}
