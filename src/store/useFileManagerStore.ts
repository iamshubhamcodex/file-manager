import { create } from "zustand";
import type { FileOrFolderType } from "../types/FileManager";

interface FileManagerState {
  files: FileOrFolderType[];
  setFiles: (files: FileOrFolderType[]) => void;
  selectedFilePath: string[];
  setSelectedFilePath: (path: string[]) => void;
  isCreating: boolean | "file" | "folder";
  setCreating: (type: boolean | "file" | "folder") => void;
  addFile: (path: string[], fileOptions: FileOrFolderType) => void;
  updateFileName: (path: string[], newName: string) => void;
  deleteFile: (path: string[]) => void;
  searchVal: string;
  setSearchVal: (val: string) => void;
}

export const useFileManagerStore = create<FileManagerState>((set) => ({
  files: [
    {
      name: "public",
      type: "folder",
      show: true,
      childrens: [
        {
          name: "common",
          type: "folder",
          show: true,
          childrens: [
            {
              name: "view.css",
              type: "file",
              show: true,
            },
          ],
        },
        {
          name: "index.css",
          show: true,
          type: "file",
        },
        {
          name: "index.pdf",
          show: true,
          type: "file",
        },
        {
          name: "index.xlsx",
          show: true,
          type: "file",
        },
      ],
    },
  ],
  setFiles: (files) => set({ files }),
  addFile: (path: string[], fileOptions: FileOrFolderType) =>
    set((state) => {
      const addFileRecursive = (
        nodes: FileOrFolderType[],
        currentPath: string[]
      ): FileOrFolderType[] => {
        if (currentPath.length === 0) {
          return [
            ...nodes,
            fileOptions.type === "folder"
              ? { ...fileOptions, childrens: [] }
              : { ...fileOptions },
          ];
        }
        return nodes.map((node) => {
          if (
            node.type === "folder" &&
            node.name === currentPath[0] &&
            node.childrens
          ) {
            return {
              ...node,
              childrens: addFileRecursive(node.childrens, currentPath.slice(1)),
            };
          }
          return node;
        });
      };

      return {
        files: addFileRecursive(state.files, path),
      };
    }),
  selectedFilePath: [],
  setSelectedFilePath: (path: string[]) => set({ selectedFilePath: path }),
  isCreating: false,
  setCreating: (type: boolean | "file" | "folder") => set({ isCreating: type }),
  updateFileName: (path: string[], newName: string) =>
    set((state) => {
      const updateNameRecursive = (
        nodes: FileOrFolderType[],
        currentPath: string[]
      ): FileOrFolderType[] => {
        return nodes.map((node) => {
          if (node.name === currentPath[0]) {
            if (currentPath.length === 1) {
              return { ...node, name: newName };
            }
            if (node.type === "folder" && node.childrens) {
              return {
                ...node,
                childrens: updateNameRecursive(
                  node.childrens,
                  currentPath.slice(1)
                ),
              };
            }
          }
          return node;
        });
      };
      return {
        files: updateNameRecursive(state.files, path),
      };
    }),
  deleteFile: (path: string[]) =>
    set((state) => {
      console.log(path);
      const deleteRecursive = (
        nodes: FileOrFolderType[],
        currentPath: string[]
      ): FileOrFolderType[] => {
        if (currentPath.length === 1) {
          return nodes.filter((node) => node.name !== currentPath[0]);
        }
        return nodes.map((node) => {
          if (
            node.type === "folder" &&
            node.name === currentPath[0] &&
            node.childrens
          ) {
            return {
              ...node,
              childrens: deleteRecursive(node.childrens, currentPath.slice(1)),
            };
          }
          return node;
        });
      };
      return {
        files: deleteRecursive(state.files, path),
      };
    }),
  searchVal: "",
  setSearchVal: (val: string) =>
    set((state) => {
      const dfs = (nodes: FileOrFolderType[]): FileOrFolderType[] => {
        return nodes.map((node) => {
          let show = false;
          if (node.type === "folder" && node.childrens) {
            const updatedChildrens = dfs(node.childrens);
            show =
              updatedChildrens.some((child) => child.show) ||
              node.name.toLowerCase().includes(val.toLowerCase());
            return {
              ...node,
              childrens: updatedChildrens,
              show,
            };
          } else {
            show = node.name.toLowerCase().includes(val.toLowerCase());
            return {
              ...node,
              show,
            };
          }
        });
      };
      return {
        searchVal: val,
        files: dfs(state.files),
      };
    }),
}));
