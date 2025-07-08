import { useState } from "react";
import CreateFileIcon from "../assets/CreateFileIcon";
import CreateFolderIcon from "../assets/CreateFolderIcon";
import "../css/fileManager.css";
import { useFileManagerStore } from "../store/useFileManagerStore";
import FileItemsContainer from "./FileItemsContainer";
import SearchIcon from "../assets/SearchIcon";

export default function FileManagerWrapper() {
  const [isSearching, setIsSearching] = useState<boolean>(false);

  const { files, setCreating, searchVal, setSearchVal } = useFileManagerStore();

  const handleCreationClick = (type: "file" | "folder") => {
    setCreating(type);
  };

  return (
    <div className="fileManagerContainer | flex flex-col">
      <div className="head | w-full flex justify-between items-center">
        <h1>EXPLORER</h1>
        <div className="icons | flex gap-1">
          <span
            className="icon"
            title="Create File"
            onClick={() => setIsSearching((prev) => !prev)}
          >
            <SearchIcon size={14} />
          </span>
          <span
            className="icon"
            title="Create File"
            onClick={() => handleCreationClick("file")}
          >
            <CreateFileIcon size={14} />
          </span>
          <span
            className="icon"
            title="Create Folder"
            onClick={() => handleCreationClick("folder")}
          >
            <CreateFolderIcon size={14} />
          </span>
        </div>
      </div>
      {isSearching && (
        <div className="head | !py-0 !mb-2">
          <input
            type="text"
            value={searchVal}
            onChange={(e) => setSearchVal(e.target.value)}
            placeholder="Enter search..."
            style={{
              background: "var(--borderColor)",
              border: "1px solid #165d91",
              outline: "none",
              width: "100%",
              borderRadius: 2,
              padding: "0px 5px",
            }}
          />
        </div>
      )}
      <FileItemsContainer files={files} />
    </div>
  );
}
