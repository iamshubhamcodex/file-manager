type DeleteFileIconProps = {
  size?: number;
  color?: string;
};

export default function DeleteFileIcon({ size, color }: DeleteFileIconProps) {
  return (
    <svg
      width={size || 24}
      height={size || 24}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color || "currentColor"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="3 6 5 6 21 6" />
      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
      <path d="M10 11v6" />
      <path d="M14 11v6" />
      <rect x="9" y="2" width="6" height="4" rx="1" />
    </svg>
  );
}
