import { useState } from "react";
import { FileDown, Download } from "lucide-react";

const FileItem = ({ file }) => {
  const [password, setPassword] = useState("");
  return (
    file && (
      <div className="flex items-center justify-center  bg-gray-100 ">
        <div className="max-w-sm w-full bg-white shadow-lg rounded-lg p-6 ">
          <div className="text-blue-600 font-bold text-center text-xl">
            {file?.userName},
            <span className="text-gray-600 text-lg">
              Shared the file with you
            </span>
          </div>
          <p className="text-gray-600 text-sm text-center m-2">
            Find files details below
          </p>
          <div className="flex flex-col items-center justify-center mt-4">
            <div className="flex justify-center items-center bg-blue-100 rounded-lg p-4 m-4">
              <FileDown size={62} />
            </div>
            <div className="mt-4">
              <div className="text-gray-700 font-semibold">
                {file?.fileName}
              </div>
              <div className="text-gray-500 mt-1 text-center">
                {file?.fileType}
              </div>
              <div className="text-gray-700  text-center">
                {(file?.fileSize / 1024 / 1024).toFixed(2)}MB
              </div>
            </div>
          </div>
          <div className="mt-4">
            {file?.password.length > 3 ? (
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password to access"
                className="px-4 py-2 w-full rounded-lg border-2 border-gray-300 focus:outline-none  focus:border-blue-500"
              />
            ) : null}
          </div>
          <div className="mt-4 flex flex-col">
            <button
              onClick={() => window.open(file?.fileUrl)}
              className="btn bg-blue-500 hover:bg-blue-600 text-white font-medium p-2 rounded-lg w-full disabled:bg-gray-400"
              disabled={file?.password !== password}
            >
              <Download className="inline-block mr-2" size={18} /> Download
            </button>
            <span className="text-center m-2 text-xs text-gray-500">
              * Term and Conditions apply
            </span>
          </div>
        </div>
      </div>
    )
  );
};

export default FileItem;
