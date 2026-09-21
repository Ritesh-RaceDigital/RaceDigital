import rahul from "@/assets/team-rahul.jpg";
import priya from "@/assets/team-priya.jpg";
import aditya from "@/assets/team-aditya.jpg";
import sneha from "@/assets/team-sneha.jpg";
import karan from "@/assets/team-karan.jpg";
import neha from "@/assets/team-neha.jpg";
import jay from "@/assets/team-jay.jpg";
import ritika from "@/assets/team-ritika.jpg";

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
    name: "Rahul Mehta",
    role: "Founder & Growth Lead",
    focus: "Strategy, paid media",
    note: "Started Race Digital after a decade of running acquisition for retail brands. Still writes the first draft of every growth plan.",
    initials: "RM",
    photo: rahul,
  },
  {
    name: "Priya Shah",
    role: "Head of Search",
    focus: "SEO, technical audits",
    note: "Obsessive about crawl budgets and internal linking. Has migrated more sites than she cares to count — without losing rankings.",
    initials: "PS",
    photo: priya,
  },
];

export const team: TeamMember[] = [
  {
    name: "Aditya Patel",
    role: "Performance Marketing Manager",
    focus: "Google Ads, Shopping",
    note: "Treats every account like his own money is in it. Cuts wasted spend before he asks for more budget.",
    initials: "AP",
    photo: aditya,
  },
  {
    name: "Sneha Joshi",
    role: "Social Media Strategist",
    focus: "Meta, LinkedIn, creative",
    note: "Builds hooks that stop the scroll, then tests ten more to prove the first one wasn't luck.",
    initials: "SJ",
    photo: sneha,
  },
  {
    name: "Karan Desai",
    role: "Content Lead",
    focus: "Editorial, digital PR",
    note: "Ex-journalist. Refuses to publish anything he wouldn't read himself.",
    initials: "KD",
    photo: karan,
  },
  {
    name: "Neha Trivedi",
    role: "UI/UX Designer",
    focus: "Web design, CRO",
    note: "Designs for the person on a patchy 4G connection, not the one on a 27-inch monitor.",
    initials: "NT",
    photo: neha,
  },
  {
    name: "Jay Bhatt",
    role: "Web Developer",
    focus: "Front-end, Core Web Vitals",
    note: "Ships fast sites and then makes them faster. Speed is a feature, not a bonus.",
    initials: "JB",
    photo: jay,
  },
  {
    name: "Ritika Nair",
    role: "Analytics & Reporting",
    focus: "GA4, dashboards",
    note: "Turns messy event data into one page your leadership team actually reads.",
    initials: "RN",
    photo: ritika,
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
