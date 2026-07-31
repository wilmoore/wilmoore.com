/**
 * SectionLabel Component
 *
 * Editorial-style section label with optional number prefix.
 * Example: "01 — Process"
 */

interface SectionLabelProps {
  number?: string;
  label: string;
  className?: string;
}

export function SectionLabel({ number, label, className = "" }: SectionLabelProps) {
  return (
    <div className={`section-label flex items-center gap-3 ${className}`}>
      {number && (
        <>
          <span className="tabular-nums">{number}</span>
          <span className="text-[var(--border)]">&mdash;</span>
        </>
      )}
      <span>{label}</span>
    </div>
  );
}
