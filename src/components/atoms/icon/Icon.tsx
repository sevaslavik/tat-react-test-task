interface IconProps {
  name: "city" | "hotel" | "close";
  size?: number; // px
  color?: string;
}

export const Icon = ({
  name,
  size = 16,
  color = "currentColor",
}: IconProps) => {
  switch (name) {
    case "city":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="11" width="18" height="10" />
          <line x1="3" y1="11" x2="21" y2="11" />
          <line x1="7" y1="11" x2="7" y2="21" />
          <line x1="17" y1="11" x2="17" y2="21" />
        </svg>
      );
    case "hotel":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="7" width="20" height="14" />
          <path d="M2 7l10-5 10 5" />
          <line x1="6" y1="14" x2="6" y2="21" />
          <line x1="18" y1="14" x2="18" y2="21" />
        </svg>
      );
    case "close":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      );
    default:
      return null;
  }
};
