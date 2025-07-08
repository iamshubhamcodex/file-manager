export type Folder = {
  type: "folder";
  name: string;
  childrens: FileOrFolderType[];
  show?: boolean;
};
export type File = {
  type: "file";
  name: string;
  show?: boolean;
};
export type FileOrFolderType = File | Folder;
