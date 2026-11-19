import logo from "@/assets/logo.webp";

export function Logo({ className = "h-8" }: { className?: string }) {
  return <img src={logo} alt="Race Digital" width={773} height={243} className={`w-auto shrink-0 ${className}`} />;
}
