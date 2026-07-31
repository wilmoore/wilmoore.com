/**
 * EditorialPlaceholder Component
 *
 * Styled image placeholder with diagonal pattern and label.
 * Used for case studies and project images until actual screenshots are added.
 */

interface EditorialPlaceholderProps {
  label: string;
  aspectRatio?: "video" | "square" | "portrait" | "wide";
  className?: string;
}

const aspectRatioClasses = {
  video: "aspect-video",
  square: "aspect-square",
  portrait: "aspect-[3/4]",
  wide: "aspect-[21/9]",
};

export function EditorialPlaceholder({
  label,
  aspectRatio = "video",
  className = "",
}: EditorialPlaceholderProps) {
  return (
    <div
      className={`editorial-placeholder ${aspectRatioClasses[aspectRatio]} ${className}`}
    >
      <span className="editorial-placeholder-label">{label}</span>
    </div>
  );
}
