# File Manager

A simple and efficient file manager application for organizing, viewing, and managing your files.

## Features

- Browse files and folders
- Search and filter files
- Rename, move, copy, and delete files
- Create new folders
- User-friendly interface

## Installation

Follow these steps to set up the project locally:

1. **Clone the repository:**
  ```bash
  git clone https://github.com/iamshubhamcodex/file-manager.git
  cd file-manager
  ```

2. **Install dependencies:**
  ```bash
  npm install
  ```

3. **Start the development server:**
  ```bash
  npm run dev
  ```

This project uses [Vite](https://vitejs.dev/) with [React](https://react.dev/) and [Tailwind CSS](https://tailwindcss.com/) for fast development and modern styling.  
For production builds, run:

```bash
npm run build
```

## Folder Structure

The project is organized as follows:

```
file-manager/
├── src/                # Application source code
│   ├── components/     # Reusable UI components
│   ├── utils/          # Utility functions and helpers
│   ├── assets/         # Images, icons, and static files
│   └── App.js          # Main application entry point
├── public/             # Static public files
├── package.json        # Project metadata and dependencies
└── README.md           # Project documentation
```

This structure helps maintain clarity and scalability as the project grows.

## Project Idea & Data Structure

The core idea behind this file manager is to provide a seamless way to organize and interact with files and folders, similar to traditional desktop file explorers. To efficiently represent the hierarchical nature of files and directories, a **tree data structure** is used. Each node in the tree represents either a file or a folder, with folders containing child nodes.

This structure enables intuitive navigation and manipulation of nested directories. When performing operations like search, the application traverses the entire tree to locate matching files or folders. After identifying matches, parent folders are marked or expanded as needed to reveal the search results, ensuring users can quickly find and access relevant items even in deeply nested structures.