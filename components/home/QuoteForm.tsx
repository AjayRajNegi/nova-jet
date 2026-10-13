import { wrap } from "@/lib/constants";

interface Props {
	sent: boolean;
	setSent: (value: boolean) => void;
}

export default function QuoteForm({ sent, setSent }: Props) {
	return (
		<section id="quote" className="pt-[30px] pb-[110px] max-[900px]:pb-[72px]">
			<div className={wrap}>
				<div className="grid grid-cols-2 items-center gap-14 rounded-[36px] bg-primary p-16 text-primary-foreground max-[900px]:grid-cols-1 max-[900px]:rounded-[28px] max-[900px]:px-6 max-[900px]:py-9">
					<div>
						<h2 className="text-[clamp(34px,5vw,60px)] font-extrabold">
							{"Tell us what you're shipping."}
						</h2>
						<p className="mt-4 text-[18px] opacity-[.92]">
							{`Share the cargo, lane and timing. Our quotations state what's
							included and what isn't, so there are fewer surprises on landed
							cost.`}
						</p>
					</div>
					{sent ? (
						<div className="rounded-[14px] bg-card p-[26px] font-bold text-card-foreground">
							Thanks. Our operations desk will reply with a quotation shortly.
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
								className="w-full rounded-[14px] bg-card px-5 py-[17px] text-[16px] font-medium text-card-foreground"
								placeholder="Your name"
								aria-label="Your name"
							/>
							<input
								required
								type="email"
								className="w-full rounded-[14px] bg-card px-5 py-[17px] text-[16px] font-medium text-card-foreground"
								placeholder="Work email"
								aria-label="Work email"
							/>
							<select
								className="w-full rounded-[14px] bg-card px-5 py-[17px] text-[16px] font-medium text-card-foreground"
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
							<input
								className="w-full rounded-[14px] bg-card px-5 py-[17px] text-[16px] font-medium text-card-foreground"
								placeholder="Origin and destination"
								aria-label="Origin and destination"
							/>
							<button
								className="inline-block cursor-pointer rounded-[14px] bg-foreground px-8 py-[17px] text-[16px] font-bold text-background transition-transform duration-200 hover:-translate-y-0.5 motion-reduce:transition-none"
								type="submit"
							>
								Send request
							</button>
						</form>
					)}
				</div>
			</div>
		</section>
	);
}
