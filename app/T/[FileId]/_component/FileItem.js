import { useState } from "react";

const FileItem = ({ file }) => {
  const [password, setPassword] = useState("");

  return (
    <div className="bg-white p-4 rounded shadow-md w-full">
      <div className="bg-gray-200 p-2 rounded">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {/* SVG content here */}
        </svg>
      </div>
      <div className="text-gray-600 mb-2">{file?.fileName}</div>
      <div className="text-gray-500 mb-4">{file?.fileType}</div>
      <div className="text-gray-500 mb-4">{file?.fileSize} Bytes</div>
      {file.password && file.password.length > 3 ? (
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password to access"
          className="input border border-gray-300 p-2 rounded w-full mb-4"
        />
      ) : null}
      <button
        onClick={() => window.open(file?.fileUrl)}
        className="btn bg-blue-500 hover:bg-blue-600 text-white font-medium p-2 rounded w-full disabled:bg-gray-400"
        disabled={file?.password !== password}
      >
        Download
      </button>
    </div>
  );
};

export default FileItem;