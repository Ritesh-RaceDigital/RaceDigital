export interface Industry {
  name: string;
  note: string;
  caseStudySlug?: string;
}

export const industries: Industry[] = [
  { name: "Restaurants", note: "Multi-outlet F&B", caseStudySlug: "naan-kabob" },
  { name: "Automotive", note: "Dealers & service", caseStudySlug: "toyota-dealership" },
  { name: "Hospitality", note: "Venues & events", caseStudySlug: "the-cupule-wedding-venue" },
  { name: "E-commerce", note: "D2C & marketplace", caseStudySlug: "d2c-home-decor" },
  { name: "Healthcare", note: "Clinics & diagnostics", caseStudySlug: "healthcare-clinic-network" },
  { name: "Real estate", note: "Developers & brokers" },
  { name: "Education", note: "Coaching & institutes" },
  { name: "Startups", note: "Pre-seed to Series A" },
];
