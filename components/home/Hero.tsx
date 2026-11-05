"use client";

import Image from "next/image";
import { useState, useTransition } from "react";
import { sendHeroQuote } from "@/app/actions";
import { openMailDraft } from "@/lib/helper/open-mail-draft";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function Hero() {
	const [pending, startTransition] = useTransition();
	const [submitted, setSubmitted] = useState(false);
	const [error, setError] = useState<string | null>(null);

	async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		setError(null);

		const formData = new FormData(e.currentTarget);
		const email = formData.get("email")?.toString().trim();
		const name = formData.get("name")?.toString().trim();
		const phone = formData.get("phone")?.toString().trim();

		if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
			setError("Please enter a valid email address.");
			return;
		}

		startTransition(async () => {
			try {
				const res = await sendHeroQuote(formData);
				if (res.success) {
					setSubmitted(true);
					return;
				}
			} catch {}
			openMailDraft(name, phone);
			setSubmitted(true);
		});
	}

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
			<div
				aria-hidden
				className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[75%] bg-gradient-to-t from-[#061026]/90 via-[#0a1e3c]/60 to-transparent"
			/>

			<div className="mx-auto flex min-h-screen max-w-[1100px] flex-col items-center justify-end px-5 pb-12 text-center md:pb-16">
				<h1 className="text-balance text-[clamp(40px,6vw,76px)] font-thin leading-[1.02] tracking-tight text-white [text-shadow:0_2px_24px_rgba(6,16,38,0.45)]">
					Cargo That <span className="text-primary">Doesn&apos;t</span> Stall.
				</h1>

				<p className="mx-auto mt-5 max-w-[720px] text-balance font-thin text-[16px] leading-4 text-white/80 [text-shadow:0_1px_12px_rgba(6,16,38,0.5)] md:text-[18px]">
					NovaJet Global Logistics runs air, ocean, road, rail, warehousing and
					customs from one desk in New Delhi, with one owner from booking to
					proof of delivery.
				</p>

				{/* CTA row: email pill + secondary button */}
				<div className="mt-9 flex w-full flex-wrap items-center justify-center gap-3 md:mt-11">
					{submitted ? (
						<div className="rounded-full border border-white/25 bg-white/12 px-8 py-4 text-[16px] font-medium text-white shadow-[0_10px_40px_-12px_rgba(0,0,0,0.5)] backdrop-blur-xl">
							Thank you! Your quotation request has been sent.
						</div>
					) : (
						<form
							onSubmit={handleSubmit}
							className="flex w-full max-w-[470px] flex-col gap-2 rounded-2xl border border-white/25 bg-white/12 p-2 shadow-[0_10px_40px_-12px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.25)] backdrop-blur-xl focus-within:border-white/60 focus-within:ring-2 focus-within:ring-white/40 sm:flex-row sm:items-center sm:rounded-full sm:p-1.5"
						>
							<label htmlFor="hero-email" className="sr-only">
								Work email
							</label>

							<Input
								id="hero-email"
								name="email"
								type="email"
								required
								placeholder="Enter your email"
								className="h-11 min-w-0 text-center lg:text-left flex-1 border-0 bg-transparent rounded-full px-4 text-base text-white shadow-none placeholder:text-white/60 focus-visible:ring-0 focus-visible:ring-offset-0"
							/>

							<Button
								type="submit"
								disabled={pending}
								className="h-11 w-full shrink-0 cursor-pointer rounded-full px-5 text-sm font-medium transition-transform duration-200 hover:-translate-y-0.5 motion-reduce:transition-none sm:w-auto sm:px-5 sm:text-base"
							>
								{pending ? "Sending..." : "Request a quotation"}
							</Button>
						</form>
					)}

					<a
						href="#services"
						className="cursor-pointer rounded-full border border-white/25 bg-white/12 px-6 py-3.5 text-[16px] font-medium text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.25)] backdrop-blur-xl transition-transform duration-200 hover:-translate-y-0.5 hover:bg-white/20 motion-reduce:transition-none"
					>
						See services
					</a>
				</div>
				{error && <p className="mt-3 text-sm text-red-300">{error}</p>}
			</div>
		</main>
	);
}
