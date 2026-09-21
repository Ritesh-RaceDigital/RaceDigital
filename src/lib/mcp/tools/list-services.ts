import { defineTool, ToolError } from "@lovable.dev/mcp-js";
import { z } from "zod";

import { services } from "../content";

export default defineTool({
  name: "list_services",
  title: "List services",
  description:
    "List the marketing and design services the studio offers, with a short note and tags for each. Optionally filter by a keyword.",
  inputSchema: {
    query: z
      .string()
      .optional()
      .describe("Optional keyword to filter services by title or note, e.g. 'ads' or 'seo'."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ query }) => {
    const q = query?.trim().toLowerCase();
    const rows = q
      ? services.filter(
          (s) => s.title.toLowerCase().includes(q) || s.note.toLowerCase().includes(q),
        )
      : services;
    if (rows.length === 0) throw new ToolError(`No services matched "${query}".`);
    return {
      content: [
        {
          type: "text",
          text: rows.map((s) => `${s.title} — ${s.note} [${s.tags.join(", ")}]`).join("\n"),
        },
      ],
      structuredContent: { services: rows },
    };
  },
});
