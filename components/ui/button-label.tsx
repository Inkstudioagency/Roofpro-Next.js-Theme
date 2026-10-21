/** Two stacked copies of a button's text; motion.css slides one out and the other in on hover. */
export function ButtonLabel({ children, className = "" }: { children: string; className?: string }) {
  const cls = className ? `button-text ${className}` : "button-text";
  return (
    <div className="button-text-block">
      <div className={`${cls} is-1`}>{children}</div>
      <div className={`${cls} is-2`} aria-hidden="true">
        {children}
      </div>
    </div>
  );
}

/** Diagonal arrow pair used by `.has-icon` buttons (one exits top-right while the other enters). */
export function ButtonArrow() {
  return (
    <div className="button-icon-block has-icon" aria-hidden="true">
      <div className="button-icon is-1">
        <Arrow />
      </div>
      <div className="button-icon is-2 has-icon">
        <Arrow />
      </div>
    </div>
  );
}

function Arrow() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path
        d="M17 6.99951L7 16.9995"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 6.99951H17V15.9995"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
