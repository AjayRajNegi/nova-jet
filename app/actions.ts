"use server";

const SALES_EMAIL = "sales@novajet-global.com";
const EMAIL_REGEX = /^\S+@\S+\.\S+$/;

async function sendEmail({
	subject,
	text,
	replyTo,
}: {
	subject: string;
	text: string;
	replyTo: string;
}) {
	if (!process.env.RESEND_API_KEY) {
		return { success: false, error: "EMAIL_SERVICE_NOT_CONFIGURED" };
	}

	try {
		const res = await fetch("https://api.resend.com/emails", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
			},
			body: JSON.stringify({
				from: "NovaJet Logistics <onboarding@resend.dev>",
				to: [SALES_EMAIL],
				reply_to: replyTo,
				subject,
				text,
			}),
		});

		if (!res.ok) {
			const errorData = await res.json().catch(() => ({}));
			console.error("Resend API error:", errorData);
			return { success: false, error: "Failed to send email." };
		}
		return { success: true };
	} catch (err) {
		console.error("Error sending email:", err);
		return { success: false, error: "Network error while sending email." };
	}
}

export async function sendHeroQuote(formData: FormData) {
	const email = formData.get("email")?.toString().trim();
	if (!email || !EMAIL_REGEX.test(email)) {
		return { success: false, error: "Please enter a valid email address." };
	}

	return sendEmail({
		replyTo: email,
		subject: `New Quotation Request from ${email}`,
		text: `Hello Nitesh,\n\nA new quotation request was submitted on NovaJet Global Logistics.\n\nRequester Email: ${email}\n\nPlease follow up with this prospective client.\n\nBest regards,\nNovaJet System`,
	});
}

export async function sendQuoteForm(formData: FormData) {
	const email = formData.get("email")?.toString().trim();
	const name = formData.get("name")?.toString().trim() || "";
	const mode = formData.get("mode")?.toString().trim() || "";
	const originDest = formData.get("originDest")?.toString().trim() || "";

	if (!email || !EMAIL_REGEX.test(email)) {
		return { success: false, error: "Please enter a valid email address." };
	}

	return sendEmail({
		replyTo: email,
		subject: `New Quotation Request from ${email}`,
		text: `Hello Nitesh,\n\nA new quotation request was submitted on NovaJet Global Logistics (Quote Form).\n\nName: ${name}\nEmail: ${email}\nMode of Transport: ${mode}\nOrigin & Destination: ${originDest}\n\nPlease follow up with this prospective client.\n\nBest regards,\nNovaJet System`,
	});
}
