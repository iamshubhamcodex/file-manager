type DeleteFileIconProps = {
  size?: number;
  color?: string;
};

export default function RenameFileIcon({ size, color }: DeleteFileIconProps) {
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
      <path d="M16.5 3a2.121 2.121 0 0 1 3 3L7 18.5H3v-4L16.5 3z" />
      <path d="M15 5l3 3" />
    </svg>
  );
}
