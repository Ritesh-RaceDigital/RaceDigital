export function LogoMark({ className = "size-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <rect width="40" height="40" rx="11" fill="var(--g-blue)" />
      <path
        d="M13 29V11h9.4c3.6 0 5.9 2 5.9 5.2 0 2.5-1.4 4.2-3.8 4.9L29 29h-4.9l-3.9-7.1h-2.6V29H13Zm4.6-10.6h4c1.5 0 2.4-.8 2.4-2s-.9-2-2.4-2h-4v4Z"
        fill="#fff"
      />
    </svg>
  );
}

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`flex min-w-0 items-center gap-2.5 ${className}`}>
      <LogoMark className="size-8 shrink-0" />
      <span className="truncate font-display text-lg font-extrabold tracking-tight">
        Race<span className="text-g-blue">Digital</span>
      </span>
    </span>
  );
}
