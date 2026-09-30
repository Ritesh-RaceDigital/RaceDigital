import ritesh from "@/assets/team-ritesh.webp";
import kishan from "@/assets/team-kishan.webp";
import salina from "@/assets/team-salina.webp";
import nafe from "@/assets/team-nafe.webp";
import momin from "@/assets/team-momin.webp";
import tanzil from "@/assets/team-tanzil.webp";
import faeza from "@/assets/team-faeza.webp";
import chetan from "@/assets/team-chetan.webp";

export interface TeamMember {
  name: string;
  role: string;
  focus: string;
  note: string;
  initials: string;
  photo: string;
}

export const leadership: TeamMember[] = [
  {
    name: "Ritesh Priyankar",
    role: "Founder & Growth Lead",
    focus: "Strategy, paid media",
    note: "Started Race Digital after a decade of running acquisition for retail brands. Still writes the first draft of every growth plan.",
    initials: "RP",
    photo: ritesh,
  },
];

export const team: TeamMember[] = [
  {
    name: "Kishan Parmar",
    role: "SEO Specialist",
    focus: "SEO, technical audits",
    note: "Owns search across every account — technical audits, on-page fixes and the tracking that shows what actually moved.",
    initials: "KP",
    photo: kishan,
  },
  {
    name: "Salina Siddiqui",
    role: "UI/UX Designer",
    focus: "UI/UX, web design",
    note: "Turns briefs into interfaces people can use without thinking — layouts, flows and the details that make a page easy to act on.",
    initials: "SS",
    photo: salina,
  },
  {
    name: "Nafe Kapadiya",
    role: "SEO Executive",
    focus: "SEO, on-page",
    note: "Handles the day-to-day of search — on-page updates, keyword tracking and the fixes that come out of every audit.",
    initials: "NK",
    photo: nafe,
  },
  {
    name: "Momin Gulamhussain",
    role: "Video Editor",
    focus: "Reels, ad creative",
    note: "Cuts footage into the kind of reels people actually watch to the end, then trims it further.",
    initials: "MG",
    photo: momin,
  },
  {
    name: "Tanzil Valani",
    role: "Content Creator",
    focus: "Content creation",
    note: "Plans the content calendar and writes every draft, from the first idea to what actually gets posted.",
    initials: "TV",
    photo: tanzil,
  },
  {
    name: "Faeza Vora",
    role: "Graphics Designer",
    focus: "Visual design, branding",
    note: "Designs the graphics behind every campaign — social creative, ad visuals and the brand details that make work look finished.",
    initials: "FV",
    photo: faeza,
  },
  {
    name: "Chetan Kumar",
    role: "Website Developer & WordPress Expert",
    focus: "Web development, WordPress",
    note: "Builds and maintains the sites — from a WordPress rebuild to the small fixes that keep a site running fast.",
    initials: "CK",
    photo: chetan,
  },
];

export const teamValues = [
  {
    title: "We say the unpopular thing",
    body: "If a channel won't work for your margins, you'll hear it in the first call — not in month four.",
  },
  {
    title: "Small pods, senior hands",
    body: "The people in your kickoff are the people doing the work. No handover to a junior after signing.",
  },
  {
    title: "Numbers before opinions",
    body: "Every recommendation ships with the data behind it, and we retire the ideas that stop earning.",
  },
];
