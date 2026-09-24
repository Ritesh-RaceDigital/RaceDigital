import logo from "@/assets/logo.webp";

export function Logo({ className = "h-8" }: { className?: string }) {
  return <img src={logo} alt="Race Digital" className={`w-auto shrink-0 ${className}`} />;
}
