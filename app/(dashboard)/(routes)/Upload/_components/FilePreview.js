import React from "react";
import { File, X } from "lucide-react";
const FilePreview = ({ file, removeFile }) => {
  return (
    <div>
      <div
        role="alert"
        className="rounded-xl border border-gray-100 bg-white p-4 mt-5"
      >
        <div className="flex items-start gap-4">
          <span className="text-green-600">
            <File size={36} />
          </span>

          <div className="flex-1">
            <strong className="block font-medium text-gray-900">
              {file.name}
            </strong>
            <p className="mt-1 text-sm text-gray-600">
              {file?.type} / {(file.size / 1024 / 1024).toFixed(2)}MB
            </p>
          </div>
          <button
            onClick={() => removeFile()}
            className="text-gray-500 transition hover:text-gray-600"
          >
            <X />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilePreview;
