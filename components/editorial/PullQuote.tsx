/**
 * PullQuote Component
 *
 * Large quote with vertical accent bar, editorial magazine style.
 */

interface PullQuoteProps {
  children: React.ReactNode;
  className?: string;
}

export function PullQuote({ children, className = "" }: PullQuoteProps) {
  return (
    <blockquote className={`pull-quote ${className}`}>
      <div className="pull-quote-text">{children}</div>
    </blockquote>
  );
}
