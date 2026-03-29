import * as React from "react";

interface ContactEmailTemplateProps {
  name: string;
  email: string;
  phone?: string;
  service?: string;
  message: string;
  type: "notification" | "confirmation";
}

const SERVICE_LABELS: Record<string, string> = {
  "fence-staining": "Fence Staining",
  "deck-staining": "Deck Staining",
  "wood-sealing": "Wood Sealing",
  "pressure-washing": "Pressure Washing",
  "wood-restoration": "Wood Restoration",
  "multiple": "Multiple Services",
};

export function ContactEmailTemplate({
  name,
  email,
  phone,
  service,
  message,
  type,
}: ContactEmailTemplateProps) {
  const serviceLabel = service ? (SERVICE_LABELS[service] ?? service) : "Not specified";
  const isNotification = type === "notification";

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{isNotification ? "New Quote Request" : "We got your message"}</title>
      </head>
      <body style={styles.body}>
        <table width="100%" cellPadding={0} cellSpacing={0} style={styles.outerTable}>
          <tbody>
            <tr>
              <td align="center" style={{ padding: "40px 16px" }}>
                <table width="600" cellPadding={0} cellSpacing={0} style={styles.card}>
                  <tbody>
                    {/* Header */}
                    <tr>
                      <td style={styles.header}>
                        {/* Logo area */}
                        <table width="100%" cellPadding={0} cellSpacing={0}>
                          <tbody>
                            <tr>
                              <td align="center" style={{ paddingBottom: "12px" }}>
                                {/* Shield SVG */}
                                <svg
                                  width="44"
                                  height="52"
                                  viewBox="0 0 40 48"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M20 2L38 10V26C38 36 20 46 20 46C20 46 2 36 2 26V10L20 2Z"
                                    stroke="#FFD700"
                                    strokeWidth="2"
                                    fill="none"
                                  />
                                  <circle cx="20" cy="18" r="5" fill="#FFD700" />
                                  <path
                                    d="M20 26 C16 30 14 34 20 38 C26 34 24 30 20 26Z"
                                    fill="#C9A84C"
                                    opacity="0.8"
                                  />
                                </svg>
                              </td>
                            </tr>
                            <tr>
                              <td align="center">
                                <p style={styles.brandName}>PRECISION</p>
                                <p style={styles.brandSub}>STAIN &amp; SEAL</p>
                                <p style={styles.brandTagline}>FENCES &amp; DECKS — AUSTIN, TEXAS</p>
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        {/* Divider */}
                        <table width="100%" cellPadding={0} cellSpacing={0} style={{ marginTop: "20px" }}>
                          <tbody>
                            <tr>
                              <td style={styles.goldDivider} />
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>

                    {/* Body */}
                    <tr>
                      <td style={styles.body2}>
                        {isNotification ? (
                          /* ── NOTIFICATION EMAIL (to business) ── */
                          <>
                            <p style={styles.heading}>New Quote Request</p>
                            <p style={styles.subtext}>
                              A new inquiry has been submitted through your website. Details below.
                            </p>

                            {/* Detail rows */}
                            <table width="100%" cellPadding={0} cellSpacing={0} style={styles.detailTable}>
                              <tbody>
                                {[
                                  { label: "Name", value: name },
                                  { label: "Email", value: email },
                                  { label: "Phone", value: phone || "Not provided" },
                                  { label: "Service", value: serviceLabel },
                                ].map(({ label, value }) => (
                                  <tr key={label}>
                                    <td style={styles.detailLabel}>{label}</td>
                                    <td style={styles.detailValue}>{value}</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>

                            {/* Message block */}
                            <p style={styles.fieldLabel}>PROJECT DETAILS</p>
                            <div style={styles.messageBox}>
                              <p style={styles.messageText}>{message}</p>
                            </div>

                            {/* Reply CTA */}
                            <table width="100%" cellPadding={0} cellSpacing={0} style={{ marginTop: "28px" }}>
                              <tbody>
                                <tr>
                                  <td align="center">
                                    <a href={`mailto:${email}`} style={styles.ctaButton}>
                                      Reply to {name}
                                    </a>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </>
                        ) : (
                          /* ── CONFIRMATION EMAIL (to customer) ── */
                          <>
                            <p style={styles.heading}>Thanks, {name.split(" ")[0]}!</p>
                            <p style={styles.subtext}>
                              We've received your quote request and will be in touch within{" "}
                              <strong style={{ color: "#C9A84C" }}>24 hours</strong> with a
                              free, no-obligation estimate.
                            </p>

                            {/* Summary */}
                            <p style={styles.fieldLabel}>YOUR REQUEST SUMMARY</p>
                            <table width="100%" cellPadding={0} cellSpacing={0} style={styles.detailTable}>
                              <tbody>
                                {[
                                  { label: "Service", value: serviceLabel },
                                  { label: "Phone", value: phone || "Not provided" },
                                ].map(({ label, value }) => (
                                  <tr key={label}>
                                    <td style={styles.detailLabel}>{label}</td>
                                    <td style={styles.detailValue}>{value}</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>

                            <p style={styles.fieldLabel}>YOUR MESSAGE</p>
                            <div style={styles.messageBox}>
                              <p style={styles.messageText}>{message}</p>
                            </div>

                            {/* Contact nudge */}
                            <div style={styles.nudgeBox}>
                              <p style={styles.nudgeText}>
                                Need to reach us sooner? Call or text us directly:
                              </p>
                              <a href="tel:+15125550100" style={styles.nudgePhone}>
                                (512) 555-0100
                              </a>
                            </div>
                          </>
                        )}
                      </td>
                    </tr>

                    {/* Footer */}
                    <tr>
                      <td style={styles.footerCell}>
                        <table width="100%" cellPadding={0} cellSpacing={0}>
                          <tbody>
                            <tr>
                              <td style={styles.goldDivider} />
                            </tr>
                          </tbody>
                        </table>
                        <p style={styles.footerText}>
                          Precision Stain &amp; Seal · Austin, Texas
                        </p>
                        <p style={styles.footerLinks}>
                          <a href="tel:+15125550100" style={styles.footerLink}>(512) 555-0100</a>
                          {" · "}
                          <a href="mailto:info@precisionstainandseal.com" style={styles.footerLink}>
                            info@precisionstainandseal.com
                          </a>
                        </p>
                        <p style={styles.footerDisclaimer}>
                          {isNotification
                            ? "This notification was sent from your website contact form."
                            : "You're receiving this because you submitted a quote request on our website."}
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </body>
    </html>
  );
}

/* ── Inline styles (email clients require inline CSS) ── */
const styles: Record<string, React.CSSProperties> = {
  body: {
    margin: 0,
    padding: 0,
    backgroundColor: "#0a0a0a",
    fontFamily: "Georgia, 'Times New Roman', serif",
  },
  outerTable: {
    backgroundColor: "#0a0a0a",
    width: "100%",
  },
  card: {
    backgroundColor: "#111111",
    border: "1px solid #2a2000",
    maxWidth: "600px",
    width: "100%",
  },
  header: {
    backgroundColor: "#0a0a0a",
    padding: "36px 40px 28px",
    textAlign: "center" as const,
    borderBottom: "1px solid #1a1400",
  },
  brandName: {
    margin: "0",
    fontSize: "22px",
    fontWeight: "700",
    letterSpacing: "8px",
    color: "#C9A84C",
    fontFamily: "Georgia, serif",
  },
  brandSub: {
    margin: "2px 0 0",
    fontSize: "11px",
    letterSpacing: "5px",
    color: "#8B6914",
    fontFamily: "Georgia, serif",
  },
  brandTagline: {
    margin: "6px 0 0",
    fontSize: "9px",
    letterSpacing: "3px",
    color: "#5a4a20",
    fontFamily: "Arial, sans-serif",
    textTransform: "uppercase" as const,
  },
  goldDivider: {
    height: "1px",
    background: "linear-gradient(90deg, transparent, #C9A84C, #FFD700, #C9A84C, transparent)",
    fontSize: "0",
    lineHeight: "0",
  },
  body2: {
    padding: "36px 40px",
  },
  heading: {
    margin: "0 0 10px",
    fontSize: "26px",
    fontWeight: "700",
    color: "#C9A84C",
    fontFamily: "Georgia, serif",
    letterSpacing: "0.5px",
  },
  subtext: {
    margin: "0 0 24px",
    fontSize: "14px",
    lineHeight: "1.7",
    color: "#a09070",
    fontFamily: "Arial, sans-serif",
  },
  fieldLabel: {
    margin: "20px 0 8px",
    fontSize: "9px",
    letterSpacing: "3px",
    color: "#7a6030",
    fontFamily: "Arial, sans-serif",
    textTransform: "uppercase" as const,
    fontWeight: "600",
  },
  detailTable: {
    borderCollapse: "collapse" as const,
    width: "100%",
    border: "1px solid #2a2000",
  },
  detailLabel: {
    padding: "10px 14px",
    fontSize: "11px",
    letterSpacing: "1px",
    color: "#8B6914",
    fontFamily: "Arial, sans-serif",
    textTransform: "uppercase" as const,
    backgroundColor: "#0d0d00",
    borderBottom: "1px solid #1a1400",
    width: "120px",
    fontWeight: "600",
  },
  detailValue: {
    padding: "10px 14px",
    fontSize: "13px",
    color: "#d4b870",
    fontFamily: "Arial, sans-serif",
    borderBottom: "1px solid #1a1400",
    backgroundColor: "#111100",
  },
  messageBox: {
    backgroundColor: "#0d0d00",
    border: "1px solid #2a2000",
    borderLeft: "3px solid #C9A84C",
    padding: "16px 18px",
  },
  messageText: {
    margin: 0,
    fontSize: "13px",
    lineHeight: "1.75",
    color: "#c0a060",
    fontFamily: "Arial, sans-serif",
    whiteSpace: "pre-wrap" as const,
  },
  ctaButton: {
    display: "inline-block",
    padding: "13px 32px",
    backgroundColor: "#C9A84C",
    color: "#0a0a0a",
    textDecoration: "none",
    fontSize: "12px",
    fontWeight: "700",
    letterSpacing: "2px",
    fontFamily: "Arial, sans-serif",
    textTransform: "uppercase" as const,
  },
  nudgeBox: {
    marginTop: "28px",
    padding: "18px 20px",
    border: "1px solid #2a2000",
    backgroundColor: "#0d0d00",
    textAlign: "center" as const,
  },
  nudgeText: {
    margin: "0 0 8px",
    fontSize: "12px",
    color: "#7a6030",
    fontFamily: "Arial, sans-serif",
  },
  nudgePhone: {
    fontSize: "20px",
    fontWeight: "700",
    color: "#C9A84C",
    fontFamily: "Georgia, serif",
    textDecoration: "none",
    letterSpacing: "1px",
  },
  footerCell: {
    padding: "24px 40px 28px",
    textAlign: "center" as const,
    backgroundColor: "#0a0a0a",
    borderTop: "1px solid #1a1400",
  },
  footerText: {
    margin: "14px 0 4px",
    fontSize: "11px",
    letterSpacing: "2px",
    color: "#5a4a20",
    fontFamily: "Arial, sans-serif",
    textTransform: "uppercase" as const,
  },
  footerLinks: {
    margin: "4px 0 10px",
    fontSize: "11px",
    color: "#5a4a20",
    fontFamily: "Arial, sans-serif",
  },
  footerLink: {
    color: "#7a6030",
    textDecoration: "none",
  },
  footerDisclaimer: {
    margin: "0",
    fontSize: "10px",
    color: "#3a3020",
    fontFamily: "Arial, sans-serif",
  },
};
