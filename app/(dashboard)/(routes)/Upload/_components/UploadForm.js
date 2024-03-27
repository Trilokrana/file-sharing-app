"use client";
import React, { useState } from "react";
import { FileInput, Label } from "flowbite-react";
import { motion } from "framer-motion";
import AlertMsg from "./AlertMsg";
import FilePreview from "./FilePreview";
import ProgressBar from "./ProgressBar";

const UploadForm = ({ uploadBtn, progress, user }) => {
  const [file, setFile] = useState();
  const [errorMsg, setErrorMsg] = useState();

  const onFileSelect = (file) => {
    console.log(file);
    if (file && file.size > 5000000) {
      console.error("Maximum File Upload size is 5MB");
      setErrorMsg("Maximum File Upload size is 5MB");
      return;
    }
    setErrorMsg(null);
    setFile(file);
  };
  return (
    <div className="text-center">
      <div className="flex w-full items-center justify-center">
        <Label
          htmlFor="dropzone-file"
          className="hover:bg-bray-800 flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed  bg-gray-50 hover:bg-gray-100  border-gray-600  hover:border-blue-500"
        >
          <div className="flex flex-col items-center justify-center pb-6 pt-5">
            <svg
              className="mb-4 h-8 w-8 text-primary dark:text-primary"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLineJoin="round"
                strokeWidth="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="font-semibold text-2xl p-2">
                <strong className="text-primary">Click to upload</strong> or{" "}
                <strong className="text-primary">drag and drop</strong>
              </span>
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              SVG, PNG, JPG or GIF (Max Size : 5MB)
            </p>
          </div>
          <FileInput
            id="dropzone-file"
            className="hidden"
            onChange={(e) => onFileSelect(e.target.files[0])}
          />
        </Label>
      </div>
      {errorMsg ? <AlertMsg msg={errorMsg} /> : null}
      {file ? (
        <FilePreview file={file} removeFile={() => setFile(null)} />
      ) : null}

      {progress > 0 ? (
        <ProgressBar progress={progress} />
      ) : (
        <motion.button
          whileHover={{ scale: 1.1 }}
          disabled={!file}
          onClick={() => uploadBtn(file)}
          className="w-40 text-white bg-primary text-center p-2 rounded-full justify-center mt-8 disabled:bg-gray-400 hover:bg-blue-500"
        >
          Upload
        </motion.button>
      )}
        
    </div>
  );
};

export default UploadForm;
