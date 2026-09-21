import { defineTool, ToolError } from "@lovable.dev/mcp-js";
import { z } from "zod";

import { caseStudies } from "../content";

export default defineTool({
  name: "get_case_studies",
  title: "Get case studies",
  description:
    "Get published client case studies in problem → strategy → result form, including the headline metric for each.",
  inputSchema: {
    client: z
      .string()
      .optional()
      .describe("Optional client name to return a single case study, e.g. 'Air Riderz'."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ client }) => {
    const q = client?.trim().toLowerCase();
    const rows = q ? caseStudies.filter((c) => c.client.toLowerCase().includes(q)) : caseStudies;
    if (rows.length === 0) throw new ToolError(`No case study found for "${client}".`);
    return {
      content: [
        {
          type: "text",
          text: rows
            .map(
              (c) =>
                `${c.client} (${c.sector})\nProblem: ${c.problem}\nStrategy: ${c.strategy}\nResult: ${c.result} — ${c.detail}`,
            )
            .join("\n\n"),
        },
      ],
      structuredContent: { caseStudies: rows },
    };
  },
});
