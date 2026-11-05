export function openMailDraft(name?: string, phone?: string) {
	const SALES_EMAIL = "sales@novajet-global.com";
	const MAIL_SUBJECT = "Quotation Request - NovaJet Global Logistics";

	const lines = [
		"Hello NovaJet Sales Team,",
		"",
		`${name ? `My name is ${name}. ` : ""}I would like to request a quotation for your logistics services.`,
		"",
		"Shipment details:",
		"- Origin:",
		"- Destination:",
		"- Cargo type / weight:",
		"",
		...(phone ? [`You can also reach me at: ${phone}`, ""] : []),
		"Please get in touch at your earliest convenience.",
		"",
		"Thank you,",
		name ?? "",
	];

	window.location.href = `mailto:${SALES_EMAIL}?subject=${encodeURIComponent(
		MAIL_SUBJECT,
	)}&body=${encodeURIComponent(lines.join("\n"))}`;
}

export function openQuoteMailDraft(
	name: string,
	mode: string,
	originDest: string,
) {
	const SALES_EMAIL = "sales@novajet-global.com";

	const lines = [
		"Hello NovaJet Sales Team,",
		"",
		`${name ? `My name is ${name}. ` : ""}I would like to request a quotation for your logistics services.`,
		"",
		"Shipment details:",
		`- Mode of transport: ${mode}`,
		`- Origin & destination: ${originDest}`,
		"",
		"Please get in touch at your earliest convenience.",
		"",
		"Thank you,",
		name,
	];

	window.location.href = `mailto:${SALES_EMAIL}?subject=${encodeURIComponent(
		"Quotation Request - NovaJet Global Logistics",
	)}&body=${encodeURIComponent(lines.join("\n"))}`;
}
