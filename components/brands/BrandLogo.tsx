import { cn } from "@/lib/utils";

export function BrandLogo({
  text,
  className,
  compact = false,
}: {
  text: string;
  className?: string;
  compact?: boolean;
}) {
  return (
    <span className={cn("brand-logo", className, compact && "brand-logo-compact")} aria-label={text}>
      {text}
    </span>
  );
}
