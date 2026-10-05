"use client";

import { useState } from "react";

const wrap = "mx-auto max-w-[1200px] px-7";
const sec = "py-[110px] max-[900px]:py-[72px]";
const h2 = "text-[clamp(34px,5vw,60px)] font-extrabold";
const sub = "mt-[18px] max-w-[520px] text-[18px] text-mute";
const btn =
	"inline-block cursor-pointer rounded-[14px] px-8 py-[17px] text-[16px] font-bold transition-transform duration-200 hover:-translate-y-0.5 motion-reduce:transition-none";
const field =
	"w-full rounded-[14px] bg-white px-5 py-[17px] text-[16px] font-medium text-ink";

const services = [
	[
		"Air Freight",
		"Priority, consolidation and charter options for time-critical, high-value and perishable cargo on major trade lanes from India.",
	],
	[
		"Ocean Freight",
		"FCL and LCL programmes with contracted space, origin handling and destination delivery across Asia, the Middle East, Europe, Africa and the Americas.",
	],
	[
		"Road & Rail",
		"FTL, PTL/LTL and rail-linked movements across India, including first-mile pickup and last-mile delivery to factories, warehouses and retail nodes.",
	],
	[
		"Customs Clearance",
		"Import and export documentation, classification support, duty planning and clearance at major Indian ports, airports and ICDs.",
	],
	[
		"Warehousing & Distribution",
		"Secure storage, inventory control, kitting and outbound distribution, with tracking through to the consignee.",
	],
	[
		"Project & Special Cargo",
		"OOG, heavy-lift, machinery and exhibition cargo with route surveys, permits and dedicated handling plans.",
	],
	[
		"E-commerce Logistics",
		"Inbound stock, fulfilment support, reverse logistics and scaled last-mile for online and omnichannel brands.",
	],
	[
		"Supply-Chain Advisory",
		"Mode selection, lane design, landed-cost reviews and process cleanup so logistics spend tracks business growth.",
	],
];

const steps = [
	[
		"Understand",
		"Commodity, Incoterms, packing, temperature, value and delivery window.",
	],
	["Design", "Mode mix, routing, carrier, compliance path and cost envelope."],
	[
		"Execute",
		"Booking, pickup, export/import formalities, line-haul and destination handling.",
	],
	["Control", "Milestone updates, exception management and proof of delivery."],
	[
		"Review",
		"Transit performance, cost against quote and fixes for the next cycle.",
	],
];

const industries = [
	[
		"Manufacturing",
		"Inbound raw material, finished goods dispatch, machinery and spare-parts pipelines.",
	],
	[
		"Import / Export",
		"Recurring ocean and air programmes with customs, duty and destination delivery handled as one file.",
	],
	[
		"E-commerce & Retail",
		"Stock-in, fulfilment support, peak-season surge and reverse logistics.",
	],
	[
		"Pharma & Healthcare",
		"Time-critical, temperature-aware handling with documented chain of custody.",
	],
	[
		"Garments & Lifestyle",
		"Seasonal collections, sample movements and packed-to-order retail distribution.",
	],
	[
		"Projects & Infrastructure",
		"Heavy and out-of-gauge cargo with site delivery planning.",
	],
	[
		"SMEs & Growing Brands",
		"Flexible volumes, transparent pricing and a partner that scales with your order book.",
	],
];

const why = [
	[
		"Single window",
		"Freight, customs, warehouse and last mile under one owner.",
	],
	[
		"Lane literacy",
		"Working knowledge of Indian ports, ICDs, airports and the documents that clear.",
	],
	[
		"Visibility",
		"Shipment status that operations and the customer can both read.",
	],
	[
		"Cost discipline",
		"Choices that protect landed cost, not just the headline freight rate.",
	],
	[
		"Responsive desk",
		"A 24/7 mindset for exceptions, cut-offs and urgent recoveries.",
	],
];

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

function Logo() {
	return (
		<a
			href="#top"
			className="flex items-center gap-2 font-display text-[22px] font-extrabold tracking-[-.03em]"
		>
			<i className="grid size-[26px] place-items-center rounded-[50%_50%_50%_4px] bg-ink text-[12px] text-white not-italic">
				NJ
			</i>
			<span>
				Nova<b className="text-brand">Jet</b>
			</span>
		</a>
	);
}

export default function HomePage() {
	const [open, setOpen] = useState(false);
	const [svc, setSvc] = useState(0);
	const [ind, setInd] = useState(0);
	const [sent, setSent] = useState(false);

	return (
		<>
			{/* floating nav */}
			<header className="fixed inset-x-0 top-[18px] z-30 flex justify-center px-4">
				<div className="relative flex w-[min(960px,100%)] items-center justify-between gap-7 rounded-full bg-white py-2.5 pr-3 pl-6 shadow-[0_10px_40px_rgba(10,31,68,.12)]">
					<Logo />
					<nav
						className={
							"flex gap-[26px] text-[15px] font-medium font-display" +
							(open
								? "max-[900px]:absolute max-[900px]:inset-x-4 max-[900px]:top-[70px] max-[900px]:flex-col max-[900px]:rounded-3xl max-[900px]:bg-white max-[900px]:p-6 max-[900px]:shadow-[0_10px_40px_rgba(10,31,68,.15)]"
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
								className="hover:text-brand"
								onClick={() => setOpen(false)}
							>
								{l}
							</a>
						))}
					</nav>
					<a
						className="rounded-full bg-ink px-[22px] py-3 text-[14px] font-bold text-white transition-colors duration-200 hover:bg-brand motion-reduce:transition-none max-[900px]:hidden"
						href="#quote"
					>
						Get a quote
					</a>
					<button
						className="hidden cursor-pointer bg-transparent text-[24px] text-ink max-[900px]:block"
						aria-label="Menu"
						aria-expanded={open}
						onClick={() => setOpen(!open)}
						type="button"
					>
						{open ? "×" : "☰"}
					</button>
				</div>
			</header>

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
							<p className={sub}>
								NovaJet Global Logistics runs air, ocean, road, rail,
								warehousing and customs from one desk in New Delhi, with one
								owner from booking to proof of delivery.
							</p>
							<div className="mt-9 flex flex-wrap gap-3.5">
								<a className={`${btn} bg-brand text-white`} href="#quote">
									Request a quotation
								</a>
								<a
									className={`${btn} bg-transparent text-ink shadow-[inset_0_0_0_2px_#0a1f44]`}
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

				{/* modes band */}
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

				{/* services accordion */}
				<section id="services" className={sec}>
					<div
						className={`${wrap} grid grid-cols-[.8fr_1.2fr] gap-[70px] max-[900px]:grid-cols-1`}
					>
						<div className="sticky top-[120px] self-start max-[900px]:static">
							<h2 className={h2}>Every leg of the journey, one partner.</h2>
							<p className={sub}>
								Each service is scoped against transit time, cargo nature,
								compliance risk and landed cost. Book one mode or a full
								door-to-door programme.
							</p>
						</div>
						<div className="border-t-2 border-ink">
							{services.map(([t, d], i) => {
								const on = svc === i;
								return (
									<div key={t}>
										{/** biome-ignore lint/a11y/useButtonType: no */}
										<button
											className="flex w-full cursor-pointer items-center justify-between border-b border-[#cdd6e6] py-[26px] text-left font-display text-[clamp(24px,3vw,36px)] font-bold tracking-[-.02em]"
											aria-expanded={on}
											onClick={() => setSvc(on ? -1 : i)}
										>
											{t}
											<span
												className={
													"grid size-9 place-items-center rounded-full transition-[transform,background-color] duration-[250ms] motion-reduce:transition-none" +
													(on ? " rotate-45 bg-brand text-white" : " bg-mist")
												}
											>
												<svg
													viewBox="0 0 14 14"
													className="size-[14px]"
													fill="none"
													stroke="currentColor"
													strokeWidth="1.8"
													strokeLinecap="round"
												>
													
													<path d="M7 1v12M1 7h12" />
													
												</svg>
											</span>
										</button>
										<div
											className={
												"grid transition-[grid-template-rows] duration-300 motion-reduce:transition-none " +
												(on ? "grid-rows-[1fr]" : "grid-rows-[0fr]")
											}
										>
											<p
												className={
													"max-w-[560px] overflow-hidden text-[18px] text-mute " +
													(on ? "pt-4 pb-7" : "")
												}
											>
												{d}
											</p>
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</section>

				{/* process */}
				<section id="process" className={`${sec} bg-ink text-white`}>
					<div className={wrap}>
						<h2 className={h2}>From brief to proof of delivery.</h2>
						<p className={`${sub} text-[#b4c1dc]`}>
							You get a named operations contact, not a rotating ticket queue.
							Exceptions are escalated the same day.
						</p>
						<div className="relative mt-[70px] grid grid-cols-5 before:absolute before:inset-x-0 before:top-[11px] before:border-t-2 before:border-dashed before:border-white/30 before:content-[''] max-[900px]:grid-cols-1 max-[900px]:gap-[34px] max-[900px]:before:hidden">
							{steps.map(([t, d]) => (
								<div
									key={t}
									className="relative pt-12 pr-5 before:absolute before:top-0 before:left-0 before:size-6 before:rounded-full before:bg-brand before:shadow-[0_0_0_6px_#0a1f44,0_0_0_8px_#ff4b33] before:content-['']"
								>
									<h3 className="mb-2.5 text-[26px] font-bold">{t}</h3>
									<p className="text-[15px] text-[#b4c1dc]">{d}</p>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* industries tabs */}
				<section id="industries" className={sec}>
					<div
						className={`${wrap} grid grid-cols-2 items-start gap-[70px] max-[900px]:grid-cols-1`}
					>
						<div>
							<h2 className={h2}>Built around the cargo you move.</h2>
							<p className={sub}>
								Choose your industry to see how we handle it.
							</p>
							<div className="mt-9 flex flex-wrap gap-2.5" role="tablist">
								{industries.map(([t], i) => (
									<button
										key={t}
										role="tab"
										aria-selected={ind === i}
										className={
											"cursor-pointer rounded-full px-5 py-[13px] text-[16px] font-medium transition-all duration-200 motion-reduce:transition-none " +
											(ind === i
												? "bg-ink text-white"
												: "bg-white text-ink shadow-[inset_0_0_0_1.5px_#cdd6e6] hover:shadow-[inset_0_0_0_1.5px_#0a1f44]")
										}
										onClick={() => setInd(i)}
										type="button"
									>
										{t}
									</button>
								))}
							</div>
						</div>
						<div
							className="flex min-h-[340px] flex-col justify-end rounded-[28px] bg-mist p-12"
							role="tabpanel"
						>
							<h3 className="mb-3.5 text-[clamp(30px,4vw,46px)] font-bold">
								{industries[ind][0]}
							</h3>
							<p className="text-[19px] text-mute">{industries[ind][1]}</p>
						</div>
					</div>
				</section>

				{/* why */}
				<section id="why" className="pb-[110px] max-[900px]:pb-[72px]">
					<div
						className={`${wrap} grid grid-cols-2 gap-[70px] max-[900px]:grid-cols-1`}
					>
						<div>
							<h2 className={h2}>Why shippers stay with NovaJet.</h2>
							<p className="mt-9 max-w-[460px] border-l-4 border-brand pl-5 font-display text-[22px] font-medium">
								We don&apos;t claim to be the largest house. We claim to be the
								one that answers, documents and delivers.
							</p>
						</div>
						<ul className="grid gap-[30px]">
							{why.map(([t, d]) => (
								<li
									key={t}
									className="grid grid-cols-[36px_1fr] gap-4 before:grid before:size-9 before:place-items-center before:rounded-[10px] before:bg-brand before:font-bold before:text-white before:content-['✓']"
								>
									<div>
										<b className="block font-display text-[24px] tracking-[-.02em]">
											{t}
										</b>
										<span className="text-mute">{d}</span>
									</div>
								</li>
							))}
						</ul>
					</div>
				</section>

				{/* quote form */}
				<section
					id="quote"
					className="pt-[30px] pb-[110px] max-[900px]:pb-[72px]"
				>
					<div className={wrap}>
						<div className="grid grid-cols-2 items-center gap-14 rounded-[36px] bg-brand p-16 text-white max-[900px]:grid-cols-1 max-[900px]:rounded-[28px] max-[900px]:px-6 max-[900px]:py-9">
							<div>
								<h2 className={h2}>{"Tell us what you're shipping."}</h2>
								<p className="mt-4 text-[18px] opacity-[.92]">
									{`Share the cargo, lane and timing. Our quotations state what's
									included and what isn't, so there are fewer surprises on
									landed cost.`}
								</p>
							</div>
							{sent ? (
								<div className="rounded-[14px] bg-white p-[26px] font-bold text-ink">
									Thanks. Our operations desk will reply with a quotation
									shortly.
								</div>
							) : (
								<form
									className="grid gap-3.5"
									onSubmit={(e) => {
										e.preventDefault();
										setSent(true);
									}}
								>
									<input
										required
										className={field}
										placeholder="Your name"
										aria-label="Your name"
									/>
									<input
										required
										type="email"
										className={field}
										placeholder="Work email"
										aria-label="Work email"
									/>
									<select className={field} aria-label="Mode" defaultValue="">
										<option value="" disabled>
											Mode of transport
										</option>
										<option>Air</option>
										<option>Ocean</option>
										<option>Road / Rail</option>
										<option>Warehousing</option>
										<option>Customs only</option>
									</select>
									<input
										className={field}
										placeholder="Origin and destination"
										aria-label="Origin and destination"
									/>
									<button className={`${btn} bg-ink text-white`} type="submit">
										Send request
									</button>
								</form>
							)}
						</div>
					</div>
				</section>
			</main>

			<footer className="pt-[50px] pb-10 text-[14px] text-mute">
				<div
					className={`${wrap} flex flex-wrap items-center justify-between gap-3.5`}
				>
					<Logo />
					<span>Connecting Markets. Delivering Value. Worldwide.</span>
					<span>© 2026 NovaJet Global Logistics</span>
				</div>
			</footer>
		</>
	);
}
