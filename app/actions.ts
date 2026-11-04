"use server";

export async function sendHeroQuote(formData: FormData) {
	const email = formData.get("email")?.toString();
	if (!email || !email.includes("@")) {
		return { success: false, error: "Please enter a valid email address." };
	}

	if (process.env.RESEND_API_KEY) {
		const recipient = "sales@novajet-global.com";
		const subject = `New Quotation Request from ${email}`;
		const text = `Hello Nitesh,\n\nA new quotation request was submitted on NovaJet Global Logistics (Hero section).\n\nRequester Email: ${email}\n\nPlease follow up with this prospective client.\n\nBest regards,\nNovaJet System`;

		try {
			const res = await fetch("https://api.resend.com/emails", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
				},
				body: JSON.stringify({
					from: "NovaJet Logistics <onboarding@resend.dev>",
					to: [recipient],
					subject: subject,
					text: text,
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

	return { success: false, error: "EMAIL_SERVICE_NOT_CONFIGURED" };
}

export async function sendQuoteForm(formData: FormData) {
	const email = formData.get("email")?.toString();
	const name = formData.get("name")?.toString() || "";
	const mode = formData.get("mode")?.toString() || "";
	const originDest = formData.get("originDest")?.toString() || "";

	if (!email || !email.includes("@")) {
		return { success: false, error: "Please enter a valid email address." };
	}

	if (process.env.RESEND_API_KEY) {
		const recipient = "sales@novajet-global.com";
		const subject = `New Quotation Request from ${email}`;
		const text = `Hello Nitesh,\n\nA new quotation request was submitted on NovaJet Global Logistics (Quote Form).\n\nName: ${name}\nEmail: ${email}\nMode of Transport: ${mode}\nOrigin & Destination: ${originDest}\n\nPlease follow up with this prospective client.\n\nBest regards,\nNovaJet System`;

		try {
			const res = await fetch("https://api.resend.com/emails", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
				},
				body: JSON.stringify({
					from: "NovaJet Logistics <onboarding@resend.dev>",
					to: [recipient],
					subject: subject,
					text: text,
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

	return { success: false, error: "EMAIL_SERVICE_NOT_CONFIGURED" };
}
