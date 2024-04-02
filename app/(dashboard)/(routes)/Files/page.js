"use client";
import React, { useEffect, useState } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { app } from "./../../../../firebaseConfig";
import { useRouter } from "next/navigation";

const Files = () => {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const db = getFirestore(app);
    const uploadedFilesRef = collection(db, "uploadedFile");

    const getUploadedFiles = async () => {
      try {
        setIsLoading(true);
        const querySnapshot = await getDocs(uploadedFilesRef);
        const files = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setUploadedFiles(files);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching uploaded files:", error);
        setError(error);
      }
    };

    getUploadedFiles();
  }, []);

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-900">My Files</h2>
        <span>Total File: {uploadedFiles.length}</span>
      </div>
      {isLoading ? (
        <div className="w-8 h-8 border-b-2 border-blue-400 rounded-full animate-spin mx-auto"></div>
      ) : error ? (
        <p className="text-red-500">Error: {error.message}</p>
      ) : (
        <div className="mt-4">
          <table className="min-w-full border-collapse block md:table overflow-x-auto">
            <thead className="block md:table-header-group">
              <tr className="md:table-row border border-gray-200 bg-gray-50">
                <th className="text-left p-4 md:table-cell">Filename</th>
                <th className="text-left p-4 md:table-cell">Type</th>
                <th className="text-left p-4 md:table-cell">Size</th>
                <th className="text-left p-4 md:table-cell">View</th>
              </tr>
            </thead>
            <tbody className="block md:table-row-group">
              {uploadedFiles.map((file) => (
                <tr
                  key={file.id}
                  className=" text-sm hover:bg-gray-100 transition-colors duration-300 ease-in-out md:table-row bg-white border border-gray-200 rounded-lg"
                >
                  <td className="p-4 md:table-cell font-semibold">
                    {file?.fileName}
                  </td>
                  <td className="p-4 md:table-cell">{file?.fileType}</td>
                  <td className="p-4 md:table-cell">
                    {(file?.fileSize / 1024 / 1024).toFixed(2)}MB
                  </td>
                  <td className="p-4 md:table-cell">
                    <button
                      onClick={() => router.push(`/File-preview/${file.id}`)}
                      className="text-indigo-600 hover:text-indigo-900 font-semibold"
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Files;
