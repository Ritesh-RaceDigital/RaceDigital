export function Counter({
  to,
  prefix = "",
  suffix = "",
  decimals = 0,
  className = "",
}: {
  to: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  className?: string;
}) {
  return (
    <span className={`tabular-nums ${className}`}>
      {prefix}
      {to.toFixed(decimals)}
      {suffix}
    </span>
  );
}
