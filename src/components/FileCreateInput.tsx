import { useState, type ChangeEvent, type KeyboardEvent } from "react";
import ChevronRightIcon from "../assets/ChevronRightIcon";
import FileIcon from "../assets/FileIcon";
import { useFileManagerStore } from "../store/useFileManagerStore";

type FileCreateInputPropsType = {
  isCreating: boolean | "file" | "folder";
  name?: string;
  path?: string[];
  callBack?: () => void;
};

export default function FileCreateInput({
  isCreating,
  name: fileName,
  path,
  callBack,
}: FileCreateInputPropsType) {
  const [name, setName] = useState(fileName ?? "");
  const [errorMessage, setErrorMessage] = useState("");

  const { setCreating, addFile, selectedFilePath, updateFileName } =
    useFileManagerStore();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.value;
    setName(name);

    if (name.trim() === "") {
      setErrorMessage("File or Folder Name can not be empty");
    } else if (isCreating === "file" && name.split(".").length < 2) {
      setErrorMessage("File Name must have an extension");
    } else {
      setErrorMessage("");
    }
  };
  const handleSubmit = () => {
    if (typeof isCreating === "string") {
      if (path) {
        updateFileName(
          path,
          errorMessage.trim() === "" ? name : fileName ?? ""
        );
        if (callBack && typeof callBack === "function") callBack();
      } else {
        if (errorMessage.trim() === "")
          addFile(selectedFilePath, { name, type: isCreating, childrens: [] });
      }
    }
    setCreating(false);
  };
  const handleInputBlur = () => {
    handleSubmit();
  };
  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div className="fileItem | relative">
      <div className="file | flex gap-2">
        <span className="icon">
          {isCreating === "folder" ? (
            <ChevronRightIcon size={14} />
          ) : (
            <FileIcon size={12} />
          )}
        </span>
        <input
          type="text"
          autoFocus
          value={name}
          onChange={handleChange}
          onKeyDown={handleKeyPress}
          onBlur={handleInputBlur}
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
      {errorMessage.trim() !== "" && (
        <div
          style={{
            background: "var(--borderColor)",
            left: "calc(3.5rem + calc(var(--level) * 1.2rem))",
            translate: "0 -5px",
            padding: ".2rem .4rem",
            borderRadius: 2,
          }}
          className="error | fixed z-30"
        >
          <p>{errorMessage}</p>
        </div>
      )}
    </div>
  );
}
