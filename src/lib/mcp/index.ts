import { defineMcp } from "@lovable.dev/mcp-js";

import getCaseStudies from "./tools/get-case-studies";
import getContact from "./tools/get-contact";
import getProcess from "./tools/get-process";
import listIndustries from "./tools/list-industries";
import listServices from "./tools/list-services";
import searchFaqs from "./tools/search-faqs";

export default defineMcp({
  name: "brand-horizon-redesign",
  title: "Brand Horizon Redesign",
  version: "0.1.0",
  instructions:
    "Public tools for the Race Digital agency site. Use them to answer questions about the agency's services, client case studies and results, engagement timeline, industries and tool stack, published FAQs, and how to get in touch. All data is public marketing content.",
  tools: [listServices, getCaseStudies, getProcess, searchFaqs, listIndustries, getContact],
});
