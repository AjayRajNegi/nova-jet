"use client";
import { motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";
import { h2, sec, sub, wrap } from "@/lib/constants";

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

const STEP_MS = 1600;
const CYCLE = steps.length + 1;

export default function ProcessSection() {
	const reduce = useReducedMotion();
	const [active, setActive] = useState(0);

	useEffect(() => {
		if (reduce) return;
		const id = setInterval(() => setActive((a) => (a + 1) % CYCLE), STEP_MS);
		return () => clearInterval(id);
	}, [reduce]);

	const current = reduce ? CYCLE - 1 : active;
	const progress = current >= steps.length ? 1 : current / (steps.length - 1);

	return (
		<section id="process" className={`${sec} bg-foreground text-background`}>
			<div className={wrap}>
				<h2 className={`${h2} tracking-tight font-thin`}>
					From brief to proof of delivery.
				</h2>
				<p className={`${sub} text-background/70 tracking-tight leading-5`}>
					You get a named operations contact, not a rotating ticket queue.
					Exceptions are escalated the same day.
				</p>

				<div className="relative mt-[70px] grid grid-cols-5 before:absolute before:top-[11px] before:left-3 before:w-[80%] before:border-t-2 before:border-dashed before:border-background/30 before:content-[''] max-[900px]:grid-cols-1 max-[900px]:gap-[34px] max-[900px]:before:hidden">
					<div
						aria-hidden
						className="absolute top-[11px] left-3 h-0.5 w-[80%] max-[900px]:hidden"
					>
						<motion.div
							className="h-full origin-left bg-primary"
							initial={false}
							animate={{ scaleX: progress }}
							transition={{
								duration: current === 0 ? 0.5 : STEP_MS / 1000,
								ease: current === 0 ? "easeInOut" : "linear",
							}}
						/>
					</div>

					{steps.map(([t, d], i) => {
						const isCurrent = current === i;
						const isDone = current > i;
						const reached = isCurrent || isDone;

						return (
							<div key={t} className="relative pt-12 pr-5">
								<div className="absolute top-0 left-0 size-6">
									{isCurrent && !reduce && (
										<motion.span
											aria-hidden
											className="absolute inset-0 rounded-full bg-primary"
											initial={{ scale: 1, opacity: 0.6 }}
											animate={{ scale: 2.6, opacity: 0 }}
											transition={{
												duration: STEP_MS / 1000,
												ease: "easeOut",
												repeat: Number.POSITIVE_INFINITY,
											}}
										/>
									)}
									<motion.span
										aria-hidden
										className="relative block size-6 rounded-full shadow-[0_0_0_6px_var(--foreground),0_0_0_8px_var(--chart-1)]"
										initial={false}
										animate={{ scale: isCurrent ? 1.25 : 1 }}
										transition={{ type: "spring", stiffness: 320, damping: 16 }}
										style={{
											backgroundColor: reached
												? "var(--primary)"
												: "color-mix(in oklab, var(--background) 25%, var(--foreground))",
										}}
									/>
								</div>

								<motion.div
									initial={false}
									animate={{
										opacity: reached ? 1 : 0.45,
										y: isCurrent ? -2 : 0,
									}}
									transition={{ duration: 0.4 }}
								>
									<h3 className="mb-2.5 text-2xl font-thin">{t}</h3>
									<p className="text-[15px] text-background/70 tracking-tight font-thin leading-4">
										{d}
									</p>
								</motion.div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
