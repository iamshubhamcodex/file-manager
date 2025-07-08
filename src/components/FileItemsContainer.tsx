import { type CSSProperties } from "react";
import { useFileManagerStore } from "../store/useFileManagerStore";
import type { FileOrFolderType } from "../types/FileManager";
import FileCreateInput from "./FileCreateInput";
import FilesRenderer from "./FilesRenderer";

type FileItemsContainerPropsType = {
  files: FileOrFolderType[];
  level?: number;
  path?: string[];
};
export default function FileItemsContainer({
  files,
  level = 0,
  path = [],
}: FileItemsContainerPropsType) {
  const { selectedFilePath, isCreating } = useFileManagerStore();

  return (
    <div
      className="filesContainer | flex flex-col grow overflow-auto"
      style={
        {
          "--level": level,
        } as CSSProperties
      }
    >
      {!!isCreating && path.join(">") === selectedFilePath.join(">") && (
        <FileCreateInput isCreating={isCreating} />
      )}
      {files &&
        Array.isArray(files) &&
        files.map((file, index) => {
          if (file.show)
            return (
              <FilesRenderer
                key={index}
                file={file}
                level={level}
                path={[...path, file.name]}
              />
            );
        })}
    </div>
  );
}
