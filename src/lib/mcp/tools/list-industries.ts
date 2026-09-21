import { defineTool } from "@lovable.dev/mcp-js";

import { industries, tools } from "../content";

export default defineTool({
  name: "list_industries_and_tools",
  title: "List industries and tools",
  description:
    "List the industries the studio works in and the marketing, analytics and design platforms it works with.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [
      {
        type: "text",
        text: [
          "Industries:",
          ...industries.map((i) => `- ${i.name} (${i.note})`),
          "",
          `Tools: ${tools.join(", ")}`,
        ].join("\n"),
      },
    ],
    structuredContent: { industries, tools },
  }),
});
