"use client";

import { useState } from "react";

const css = `
@import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,700;12..96,800&family=DM+Sans:wght@400;500;700&display=swap');
:root{--ink:#0a1f44;--red:#ff4b33;--sky:#e3ecfa;--paper:#f6f8fc;--mute:#56627a}
*{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
body{font-family:'DM Sans',system-ui,sans-serif;background:var(--paper);color:var(--ink);line-height:1.6}
a{color:inherit;text-decoration:none}
a:focus-visible,button:focus-visible,input:focus-visible,select:focus-visible{outline:3px solid var(--red);outline-offset:3px}
.wrap{max-width:1200px;margin:0 auto;padding:0 28px}
h1,h2,h3{font-family:'Bricolage Grotesque',sans-serif;letter-spacing:-.03em;line-height:1.02}
h2{font-size:clamp(34px,5vw,60px);font-weight:800}
p.sub{color:var(--mute);font-size:18px;max-width:520px;margin-top:18px}
section{padding:110px 0}

/* floating nav */
.nav{position:fixed;top:18px;left:0;right:0;z-index:30;display:flex;justify-content:center;padding:0 16px}
.pill{display:flex;align-items:center;gap:28px;background:#fff;border-radius:999px;padding:10px 12px 10px 24px;box-shadow:0 10px 40px rgba(10,31,68,.12);width:min(960px,100%);justify-content:space-between}
.logo{font-family:'Bricolage Grotesque';font-weight:800;font-size:22px;letter-spacing:-.03em;display:flex;gap:8px;align-items:center}
.logo i{width:26px;height:26px;border-radius:50% 50% 50% 4px;background:var(--ink);display:grid;place-items:center;color:#fff;font-size:12px;font-style:normal}
.logo b{color:var(--red)}
.links{display:flex;gap:26px;font-weight:500;font-size:15px}
.links a:hover{color:var(--red)}
.go{background:var(--ink);color:#fff;padding:12px 22px;border-radius:999px;font-weight:700;font-size:14px;transition:background .2s}
.go:hover{background:var(--red)}
.burger{display:none;background:none;border:0;font-size:24px;cursor:pointer;color:var(--ink)}

/* hero */
.hero{min-height:100vh;display:grid;align-items:center;background:radial-gradient(900px 600px at 85% 40%,var(--sky),transparent 70%),var(--paper);padding:130px 0 70px}
.hero .wrap{display:grid;grid-template-columns:1.05fr .95fr;gap:24px;align-items:center}
.hero h1{font-size:clamp(48px,7.4vw,104px);font-weight:800}
.hero h1 em{font-style:normal;color:var(--red)}
.hero .acts{display:flex;gap:14px;margin-top:36px;flex-wrap:wrap}
.btn{display:inline-block;background:var(--red);color:#fff;font-weight:700;padding:17px 32px;border-radius:14px;border:0;font-size:16px;cursor:pointer;font-family:inherit;transition:transform .2s}
.btn:hover{transform:translateY(-2px)}
.btn.ghost{background:transparent;color:var(--ink);box-shadow:inset 0 0 0 2px var(--ink)}
.map{width:100%;height:auto}
.arc{fill:none;stroke:var(--red);stroke-width:2.5;stroke-linecap:round;stroke-dasharray:1;stroke-dashoffset:1;animation:draw 2.2s .4s cubic-bezier(.6,0,.2,1) forwards}
.arc.d2{animation-delay:.7s}.arc.d3{animation-delay:1s}.arc.d4{animation-delay:1.3s}.arc.d5{animation-delay:1.6s}
@keyframes draw{to{stroke-dashoffset:0}}
.pt{fill:var(--ink);opacity:0;animation:pop .4s forwards}
@keyframes pop{to{opacity:1}}
.lbl{font:700 13px 'DM Sans';fill:var(--ink);opacity:0;animation:pop .5s 2.4s forwards}

/* modes band */
.band{background:var(--ink);color:#fff;padding:34px 0;overflow:hidden}
.band .wrap{display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;font-family:'Bricolage Grotesque';font-size:clamp(26px,4vw,48px);font-weight:700;letter-spacing:-.02em}
.band span:nth-child(even){color:var(--red)}

/* services accordion */
.svc .wrap{display:grid;grid-template-columns:.8fr 1.2fr;gap:70px}
.svc .head{position:sticky;top:120px;align-self:start}
.acc{border-top:2px solid var(--ink)}
.acc button{all:unset;box-sizing:border-box;width:100%;cursor:pointer;display:flex;justify-content:space-between;align-items:center;padding:26px 0;font-family:'Bricolage Grotesque';font-size:clamp(24px,3vw,36px);font-weight:700;letter-spacing:-.02em;border-bottom:1px solid #cdd6e6}
.acc button:focus-visible{outline:3px solid var(--red)}
.acc button span{width:36px;height:36px;border-radius:50%;background:var(--sky);display:grid;place-items:center;font-size:22px;transition:transform .25s,background .25s}
.acc .on button span{transform:rotate(45deg);background:var(--red);color:#fff}
.acc .body{display:grid;grid-template-rows:0fr;transition:grid-template-rows .3s}
.acc .on .body{grid-template-rows:1fr}
.acc .body p{overflow:hidden;color:var(--mute);font-size:18px;max-width:560px}
.acc .on .body p{padding:16px 0 28px}

/* process */
.proc{background:var(--ink);color:#fff}
.proc p.sub{color:#b4c1dc}
.track{margin-top:70px;display:grid;grid-template-columns:repeat(5,1fr);position:relative}
.track:before{content:"";position:absolute;left:0;right:0;top:11px;border-top:2px dashed rgba(255,255,255,.3)}
.stop{position:relative;padding-top:48px;padding-right:20px}
.stop:before{content:"";position:absolute;top:0;left:0;width:24px;height:24px;border-radius:50%;background:var(--red);box-shadow:0 0 0 6px var(--ink),0 0 0 8px var(--red)}
.stop h3{font-size:26px;margin-bottom:10px}
.stop p{color:#b4c1dc;font-size:15px}

/* industries tabs */
.ind .wrap{display:grid;grid-template-columns:1fr 1fr;gap:70px;align-items:start}
.tabs{display:flex;flex-wrap:wrap;gap:10px;margin-top:36px}
.tabs button{border:0;background:#fff;font:500 16px 'DM Sans';padding:13px 20px;border-radius:999px;cursor:pointer;box-shadow:inset 0 0 0 1.5px #cdd6e6;color:var(--ink);transition:.2s}
.tabs button:hover{box-shadow:inset 0 0 0 1.5px var(--ink)}
.tabs button[aria-selected=true]{background:var(--ink);color:#fff;box-shadow:none}
.panel{background:var(--sky);border-radius:28px;padding:48px;min-height:340px;display:flex;flex-direction:column;justify-content:flex-end}
.panel h3{font-size:clamp(30px,4vw,46px);margin-bottom:14px}
.panel p{color:var(--mute);font-size:19px}

/* why */
.why .wrap{display:grid;grid-template-columns:1fr 1fr;gap:70px}
.why ul{list-style:none;display:grid;gap:30px}
.why li{display:grid;grid-template-columns:36px 1fr;gap:16px}
.why li:before{content:"✓";width:36px;height:36px;border-radius:10px;background:var(--red);color:#fff;display:grid;place-items:center;font-weight:700}
.why li b{font-family:'Bricolage Grotesque';font-size:24px;letter-spacing:-.02em;display:block}
.why li span{color:var(--mute)}
.quote{margin-top:36px;font-family:'Bricolage Grotesque';font-size:22px;font-weight:500;border-left:4px solid var(--red);padding-left:20px;max-width:460px}

/* quote form */
.qt{padding-top:30px}
.box{background:var(--red);color:#fff;border-radius:36px;padding:64px;display:grid;grid-template-columns:1fr 1fr;gap:56px;align-items:center}
.box p{margin-top:16px;font-size:18px;opacity:.92}
form{display:grid;gap:14px}
input,select{width:100%;padding:17px 20px;border-radius:14px;border:0;font:500 16px 'DM Sans';background:#fff;color:var(--ink)}
.box .btn{background:var(--ink)}
.ok{background:#fff;color:var(--ink);padding:26px;border-radius:14px;font-weight:700}

footer{padding:50px 0 40px;color:var(--mute);font-size:14px}
footer .wrap{display:flex;justify-content:space-between;flex-wrap:wrap;gap:14px;align-items:center}

@media(max-width:900px){
 .links{display:none}.burger{display:block}
 .links.open{display:flex;flex-direction:column;position:absolute;top:70px;left:16px;right:16px;background:#fff;padding:24px;border-radius:24px;box-shadow:0 10px 40px rgba(10,31,68,.15)}
 .pill{position:relative}
 .go.hide{display:none}
 .hero .wrap,.svc .wrap,.ind .wrap,.why .wrap,.box{grid-template-columns:1fr}
 .svc .head{position:static}
 .track{grid-template-columns:1fr;gap:34px}.track:before{display:none}
 .box{padding:36px 24px;border-radius:28px}
 section{padding:72px 0}
}
@media(prefers-reduced-motion:reduce){*{animation:none!important;transition:none!important}.arc{stroke-dashoffset:0}.pt,.lbl{opacity:1}}
`;

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
	["M330 270 Q250 120 150 160", 150, 160, "Europe", "d1"],
	["M330 270 Q230 400 190 400", 190, 400, "Africa", "d2"],
	["M330 270 Q420 130 500 190", 500, 190, "Far East", "d3"],
	["M330 270 Q450 400 470 350", 470, 350, "ASEAN", "d4"],
	["M330 270 Q180 40 70 250", 70, 250, "Americas", "d5"],
];

export default function Home() {
	const [open, setOpen] = useState(false);
	const [svc, setSvc] = useState(0);
	const [ind, setInd] = useState(0);
	const [sent, setSent] = useState(false);

	return (
		<>
			<style>{css}</style>

			<header className="nav">
				<div className="pill">
					<a href="#top" className="logo">
						<i>NJ</i>
						<span>
							Nova<b>Jet</b>
						</span>
					</a>
					<nav className={"links" + (open ? " open" : "")} aria-label="Primary">
						{[
							["Services", "#services"],
							["Process", "#process"],
							["Industries", "#industries"],
							["Why us", "#why"],
						].map(([l, h]) => (
							<a key={l} href={h} onClick={() => setOpen(false)}>
								{l}
							</a>
						))}
					</nav>
					<a className="go hide" href="#quote">
						Get a quote
					</a>
					<button
						className="burger"
						aria-label="Menu"
						aria-expanded={open}
						onClick={() => setOpen(!open)}
					>
						{open ? "×" : "☰"}
					</button>
				</div>
			</header>

			<main id="top">
				<div className="hero">
					<div className="wrap">
						<div>
							<h1>
								Cargo that doesn't <em>stall.</em>
							</h1>
							<p className="sub">
								NovaJet Global Logistics runs air, ocean, road, rail,
								warehousing and customs from one desk in New Delhi, with one
								owner from booking to proof of delivery.
							</p>
							<div className="acts">
								<a className="btn" href="#quote">
									Request a quotation
								</a>
								<a className="btn ghost" href="#services">
									See services
								</a>
							</div>
						</div>
						<svg
							className="map"
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
							{routes.map(([d, x, y, name, c]) => (
								<g key={name}>
									<path className={"arc " + c} pathLength="1" d={d} />
									<circle
										className="pt"
										style={{ animationDelay: "2.2s" }}
										cx={x}
										cy={y}
										r="6"
									/>
									<text className="lbl" x={x - 20} y={y + 24}>
										{name}
									</text>
								</g>
							))}
							<circle cx="330" cy="270" r="22" fill="#ff4b33" opacity=".2" />
							<circle cx="330" cy="270" r="9" fill="#ff4b33" />
							<text
								x="344"
								y="298"
								style={{ font: "800 15px 'DM Sans'", fill: "#0a1f44" }}
							>
								New Delhi
							</text>
						</svg>
					</div>
				</div>

				<div className="band">
					<div className="wrap">
						<span>Air</span>
						<span>Ocean</span>
						<span>Road</span>
						<span>Rail</span>
						<span>Warehousing</span>
						<span>Customs</span>
					</div>
				</div>

				<section id="services" className="svc">
					<div className="wrap">
						<div className="head">
							<h2>Every leg of the journey, one partner.</h2>
							<p className="sub">
								Each service is scoped against transit time, cargo nature,
								compliance risk and landed cost. Book one mode or a full
								door-to-door programme.
							</p>
						</div>
						<div className="acc">
							{services.map(([t, d], i) => (
								<div key={t} className={svc === i ? "on" : ""}>
									<button
										aria-expanded={svc === i}
										onClick={() => setSvc(svc === i ? -1 : i)}
									>
										{t}
										<span>+</span>
									</button>
									<div className="body">
										<p>{d}</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</section>

				<section id="process" className="proc">
					<div className="wrap">
						<h2>From brief to proof of delivery.</h2>
						<p className="sub">
							You get a named operations contact, not a rotating ticket queue.
							Exceptions are escalated the same day.
						</p>
						<div className="track">
							{steps.map(([t, d]) => (
								<div className="stop" key={t}>
									<h3>{t}</h3>
									<p>{d}</p>
								</div>
							))}
						</div>
					</div>
				</section>

				<section id="industries" className="ind">
					<div className="wrap">
						<div>
							<h2>Built around the cargo you move.</h2>
							<p className="sub">
								Choose your industry to see how we handle it.
							</p>
							<div className="tabs" role="tablist">
								{industries.map(([t], i) => (
									<button
										key={t}
										role="tab"
										aria-selected={ind === i}
										onClick={() => setInd(i)}
									>
										{t}
									</button>
								))}
							</div>
						</div>
						<div className="panel" role="tabpanel">
							<h3>{industries[ind][0]}</h3>
							<p>{industries[ind][1]}</p>
						</div>
					</div>
				</section>

				<section id="why" className="why" style={{ paddingTop: 0 }}>
					<div className="wrap">
						<div>
							<h2>Why shippers stay with NovaJet.</h2>
							<p className="quote">
								We don't claim to be the largest house. We claim to be the one
								that answers, documents and delivers.
							</p>
						</div>
						<ul>
							{why.map(([t, d]) => (
								<li key={t}>
									<div>
										<b>{t}</b>
										<span>{d}</span>
									</div>
								</li>
							))}
						</ul>
					</div>
				</section>

				<section id="quote" className="qt">
					<div className="wrap">
						<div className="box">
							<div>
								<h2>Tell us what you're shipping.</h2>
								<p>
									Share the cargo, lane and timing. Our quotations state what's
									included and what isn't, so there are fewer surprises on
									landed cost.
								</p>
							</div>
							{sent ? (
								<div className="ok">
									Thanks. Our operations desk will reply with a quotation
									shortly.
								</div>
							) : (
								<form
									onSubmit={(e) => {
										e.preventDefault();
										setSent(true);
									}}
								>
									<input
										required
										placeholder="Your name"
										aria-label="Your name"
									/>
									<input
										required
										type="email"
										placeholder="Work email"
										aria-label="Work email"
									/>
									<select aria-label="Mode" defaultValue="">
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
										placeholder="Origin and destination"
										aria-label="Origin and destination"
									/>
									<button className="btn" type="submit">
										Send request
									</button>
								</form>
							)}
						</div>
					</div>
				</section>
			</main>

			<footer>
				<div className="wrap">
					<a href="#top" className="logo">
						<i>NJ</i>
						<span>
							Nova<b>Jet</b>
						</span>
					</a>
					<span>Connecting Markets. Delivering Value. Worldwide.</span>
					<span>© 2026 NovaJet Global Logistics</span>
				</div>
			</footer>
		</>
	);
}
