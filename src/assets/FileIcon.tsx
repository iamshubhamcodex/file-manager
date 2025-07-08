import type { JSX } from "react";

type FileIconProps = {
  size?: number | string;
  extension?: string;
};

export default function FileIcon({ size, extension }: FileIconProps) {
  const iconSize = size || 24;

  type ExtensionIconMap = {
    [key: string]: JSX.Element;
  };

  const icons: ExtensionIconMap = {
    pdf: (
      <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#E53935" />
        <text x="6" y="18" fontSize="6" fill="#fff" fontFamily="Arial">
          PDF
        </text>
      </svg>
    ),
    doc: (
      <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#1976D2" />
        <text x="6" y="18" fontSize="6" fill="#fff" fontFamily="Arial">
          DOC
        </text>
      </svg>
    ),
    docx: (
      <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#1976D2" />
        <text x="4" y="18" fontSize="6" fill="#fff" fontFamily="Arial">
          DOCX
        </text>
      </svg>
    ),
    xls: (
      <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#388E3C" />
        <text x="6" y="18" fontSize="6" fill="#fff" fontFamily="Arial">
          XLS
        </text>
      </svg>
    ),
    xlsx: (
      <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#388E3C" />
        <text x="4" y="18" fontSize="6" fill="#fff" fontFamily="Arial">
          XLSX
        </text>
      </svg>
    ),
    jpg: (
      <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#FBC02D" />
        <text x="6" y="18" fontSize="6" fill="#fff" fontFamily="Arial">
          JPG
        </text>
      </svg>
    ),
    png: (
      <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#0288D1" />
        <text x="6" y="18" fontSize="6" fill="#fff" fontFamily="Arial">
          PNG
        </text>
      </svg>
    ),
    txt: (
      <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#757575" />
        <text x="6" y="18" fontSize="6" fill="#fff" fontFamily="Arial">
          TXT
        </text>
      </svg>
    ),
    default: (
      <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#90A4AE" />
        <text x="6" y="18" fontSize="6" fill="#fff" fontFamily="Arial">
          FILE
        </text>
      </svg>
    ),
  };

  const ext = extension?.toLowerCase() || "";
  const icon = icons[ext] || icons.default;
  return icon;
}
