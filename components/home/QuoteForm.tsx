"use client";

import { wrap } from "@/lib/constants";
import { useState, useTransition } from "react";
import { sendQuoteForm } from "@/app/actions";

interface Props {
	sent: boolean;
	setSent: (value: boolean) => void;
}

export default function QuoteForm({ sent, setSent }: Props) {
	const [pending, startTransition] = useTransition();
	const [error, setError] = useState<string | null>(null);

	async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		setError(null);
		const form = e.currentTarget;
		const formData = new FormData(form);
		const email = formData.get("email")?.toString();

		if (!email || !email.includes("@")) {
			setError("Please enter a valid email address.");
			return;
		}

		startTransition(async () => {
			const res = await sendQuoteForm(formData);
			if (res.success) {
				setSent(true);
			} else if (res.error === "EMAIL_SERVICE_NOT_CONFIGURED") {
				// Fallback: open mailto with all form data
				const name = formData.get("name")?.toString() || "";
				const mode = formData.get("mode")?.toString() || "";
				const originDest = formData.get("originDest")?.toString() || "";

				const subject = encodeURIComponent(`Quotation Request from ${email}`);
				const body = encodeURIComponent(
					`Hello Ajay,\n\nA new quotation request was submitted on NovaJet Global Logistics (Quote Form).\n\nName: ${name}\nEmail: ${email}\nMode of Transport: ${mode}\nOrigin & Destination: ${originDest}\n\nPlease follow up with this prospective client.`,
				);
				window.location.href = `mailto:ajayrajnegi1608@gmail.com?subject=${subject}&body=${body}`;
				setSent(true);
			} else {
				setError(res.error || "Something went wrong. Please try again.");
			}
		});
	}

	return (
		<section id="quote" className="pt-[30px] pb-[110px] max-[900px]:pb-[72px]">
			<div className={wrap}>
				<div className="grid grid-cols-2 items-center gap-14 rounded-[36px] bg-primary p-16 text-primary-foreground max-[900px]:grid-cols-1 max-[900px]:rounded-[28px] max-[900px]:px-6 max-[900px]:py-9">
					<div>
						<h2 className="text-[clamp(34px,5vw,60px)] font-thin leading-tight tracking-tighter">
							{"Tell us what you're shipping."}
						</h2>
						<p className="mt-4 text-[18px] opacity-[.92] font-thin leading-tight tracking-tight">
							{`Share the cargo, lane and timing. Our quotations state what's
							included and what isn't, so there are fewer surprises on landed
							cost.`}
						</p>
					</div>
					{sent ? (
						<div className="rounded-md bg-card p-[26px] font-thin leading-tight tracking-tighter text-card-foreground">
							Thanks. Our operations desk will reply with a quotation shortly.
						</div>
					) : (
						<form
							onSubmit={handleSubmit}
							className="grid gap-3.5"
						>
							<input
								name="name"
								required
								className="w-full rounded-[14px] bg-card px-5 py-3 text-sm font-medium text-card-foreground outline-0"
								placeholder="Your name"
								aria-label="Your name"
							/>
							<div className="flex gap-2">
								<input
									name="email"
									required
									type="email"
									className="flex-1 w-full rounded-l-md border-r bg-card px-5 py-3 text-sm font-medium text-card-foreground outline-0"
									placeholder="Work email"
									aria-label="Work email"
								/>
								<select
									name="mode"
									className="flex-1 w-full rounded-r-md bg-card px-5 py-3 text-sm font-medium text-card-foreground outline-0"
									aria-label="Mode"
									defaultValue=""
								>
									<option value="" disabled>
										Mode of transport
									</option>
									<option>Air</option>
									<option>Ocean</option>
									<option>Road / Rail</option>
									<option>Warehousing</option>
									<option>Customs only</option>
								</select>
							</div>
							<input
								name="originDest"
								className="w-full rounded-md bg-card px-5 py-3 text-sm font-medium text-card-foreground outline-0"
								placeholder="Origin and destination"
								aria-label="Origin and destination"
							/>
							<button
								type="submit"
								disabled={pending}
								className="inline-block cursor-pointer rounded-md bg-foreground px-8 py-3 text-sm text-background transition-transform duration-200 hover:-translate-y-0.5 motion-reduce:transition-none disabled:opacity-50"
							>
								{pending ? "Sending..." : "Send request"}
							</button>
						</form>
					)}
					{error && <p className="mt-3 text-sm text-red-300">{error}</p>}
				</div>
			</div>
		</section>
	);
}