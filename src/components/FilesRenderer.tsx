import { useState } from "react";
import ChevronRightIcon from "../assets/ChevronRightIcon";
import type { FileOrFolderType } from "../types/FileManager";
import FileIcon from "../assets/FileIcon";
import FileItemsContainer from "./FileItemsContainer";
import { useFileManagerStore } from "../store/useFileManagerStore";
import DeleteFileIcon from "../assets/DeleteIcon";
import FileCreateInput from "./FileCreateInput";
import RenameFileIcon from "../assets/RenameFileIcon";

type FilesRendererPropsType = {
  file: FileOrFolderType;
  level?: number;
  path?: string[];
};
export default function FilesRenderer({
  file,
  level = 0,
  path = [],
}: FilesRendererPropsType) {
  const [opened, setOpened] = useState<boolean>(false);
  const [renaming, setRenaming] = useState<boolean>(false);

  const { setSelectedFilePath, deleteFile } = useFileManagerStore();

  function toggleOpened() {
    if (file.type === "folder") {
      setSelectedFilePath(path);
      setOpened((prev) => !prev);
    }
  }
  function handleFileRenameClick() {
    toggleOpened();
    setRenaming(true);
  }
  function handleFileDeleteClick() {
    toggleOpened();
    deleteFile(path);
  }

  return (
    <div className="fileItem | flex flex-col gap-0" title={path.join(">")}>
      {!renaming ? (
        <div
          className={`file | flex justify-between items-center gap-2`}
          onClick={toggleOpened}
        >
          <p className="flex gap-2">
            <span
              className="icon"
              style={{
                transform: `rotate(${opened ? "90" : "0"}deg)`,
              }}
            >
              {file.type === "folder" ? (
                <ChevronRightIcon size={14} />
              ) : (
                <FileIcon extension={file.name.split(".")[1]} size={12} />
              )}
            </span>
            <span className="name">{file.name}</span>
          </p>
          <div className="icons | flex items-center gap-2">
            <span onClick={() => handleFileDeleteClick()}>
              <DeleteFileIcon size={14} />
            </span>
            <span onClick={() => handleFileRenameClick()}>
              <RenameFileIcon size={14} />
            </span>
          </div>
        </div>
      ) : (
        <FileCreateInput
          isCreating={file.type}
          name={file.name}
          path={path}
          callBack={() => setRenaming(false)}
        />
      )}
      {opened && file.type === "folder" && Array.isArray(file.childrens) && (
        <FileItemsContainer
          files={file.childrens}
          level={level + 1}
          path={path}
        />
      )}
    </div>
  );
}
