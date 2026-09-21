import { defineTool } from "@lovable.dev/mcp-js";

import { contact } from "../content";

export default defineTool({
  name: "get_contact_details",
  title: "Get contact details",
  description:
    "Get the studio's public contact details: address, email, phone, WhatsApp link, working hours and expected reply time.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [
      {
        type: "text",
        text: [
          `Studio: ${contact.studio}`,
          `Email: ${contact.email}`,
          `Phone: ${contact.phone}`,
          `WhatsApp: ${contact.whatsapp}`,
          `Hours: ${contact.hours}`,
          `Reply time: ${contact.responseTime}`,
          `Social: ${contact.social.join(", ")}`,
        ].join("\n"),
      },
    ],
    structuredContent: { contact },
  }),
});
