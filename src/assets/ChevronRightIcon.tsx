type ChevronRightIconProps = {
  size?: number | string;
  color?: string;
};

export default function ChevronRightIcon({
  color,
  size,
}: ChevronRightIconProps) {
  return (
    <svg
      width={size ?? "24"}
      height={size ?? "24"}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 6l6 6-6 6"
        stroke={color ?? "currentColor"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
