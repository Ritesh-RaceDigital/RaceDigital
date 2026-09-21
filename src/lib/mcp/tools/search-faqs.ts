import { defineTool, ToolError } from "@lovable.dev/mcp-js";
import { z } from "zod";

import { faqs } from "../content";

export default defineTool({
  name: "search_faqs",
  title: "Search FAQs",
  description:
    "Search the studio's published FAQs about pricing, SEO timelines, ad platforms, websites and getting started.",
  inputSchema: {
    query: z.string().optional().describe("Optional keyword, e.g. 'pricing', 'seo', 'leads'."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ query }) => {
    const q = query?.trim().toLowerCase();
    const rows = q
      ? faqs.filter((f) => f.q.toLowerCase().includes(q) || f.a.toLowerCase().includes(q))
      : faqs;
    if (rows.length === 0) throw new ToolError(`No FAQ matched "${query}".`);
    return {
      content: [{ type: "text", text: rows.map((f) => `Q: ${f.q}\nA: ${f.a}`).join("\n\n") }],
      structuredContent: { faqs: rows },
    };
  },
});
