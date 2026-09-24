import rahul from "@/assets/team-rahul.webp";
import kishan from "@/assets/team-kishan.webp";
import salina from "@/assets/team-salina.webp";
import karan from "@/assets/team-karan.webp";
import neha from "@/assets/team-neha.webp";
import jay from "@/assets/team-jay.webp";
import ritika from "@/assets/team-ritika.webp";

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
    photo: rahul,
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
