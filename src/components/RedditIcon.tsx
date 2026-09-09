export default function RedditIcon({
  size = 24,
  strokeWidth = 2,
  className,
}: {
  size?: number;
  strokeWidth?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <ellipse cx="12" cy="14.5" rx="7.5" ry="5.5" />
      <path d="M12 9V7.2C12 5.4 13 4.4 14.6 4.4" />
      <circle cx="16.2" cy="4.2" r="1.4" />
      <circle cx="9.4" cy="13.8" r="1" fill="currentColor" stroke="none" />
      <circle cx="14.6" cy="13.8" r="1" fill="currentColor" stroke="none" />
      <path d="M9.3 16.9c1.7 1.3 3.7 1.3 5.4 0" />
    </svg>
  );
}
