import { defineTool } from "@lovable.dev/mcp-js";

import { process } from "../content";

export default defineTool({
  name: "get_engagement_process",
  title: "Get engagement process",
  description:
    "Get the studio's six-step engagement timeline, from the discovery call through launch and weekly optimisation.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [
      {
        type: "text",
        text: process.map((s) => `${s.when} — ${s.title}: ${s.body}`).join("\n"),
      },
    ],
    structuredContent: { steps: process },
  }),
});
