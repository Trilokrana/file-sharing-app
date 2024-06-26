import React, { useState, useEffect } from "react";
import { ArrowLeft, ClipboardCopy } from "lucide-react";
import Link from "next/link";
import GlobalApi from "./../../../../../_utils/GlobalApi";
import { useUser } from "@clerk/nextjs";
import { toast } from "react-toastify";

const FileInfo = ({ file, onPasswordSave }) => {
  const [email, setEmail] = useState("");
  const { user } = useUser();
  const [fileType, setFileType] = useState();
  const [enablePassword, setEnablePassword] = useState(false);
  const [password, setPassword] = useState("");

  const sendEmail = async () => {
    try {
      const data = {
        emailToSend: email,
        fileName: file?.name,
        fileSize: file?.size,
        fileType: file?.type,
        userName: user?.fullName,
        shortUrl: file?.shortUrl,
      };

      console.log("Email data:", data);

      const response = await GlobalApi.SendEmail(data);
      console.log("Email response:", response);

      toast.success("Email Sent Successfully");
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("Failed to send email");
    }
  };

  useEffect(() => {
    file && setFileType(file?.fileType.split("/")[0]);
  });

  useEffect(() => {
    if (file?.password) {
      setEnablePassword(true);
      setPassword(file?.password);
    }
  }, [file]);

  const copyToClipboard = () => {
    if (file?.shortUrl) {
      navigator.clipboard.writeText(file.shortUrl).then(
        () => {
          toast.success("Copied URL");
        },
        () => {
          alert("Failed to copy Short Url!");
        }
      );
    } else {
      alert("Short Url not available!");
    }
  };

  return (
    file && (
      <div className="flex flex-col items-center justify-center h-screen ">
        <Link href="/Upload">
          <button className=" flex gap-2 mt-2  self-start text-sm font-medium py-2 px-4 rounded-lg bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            <ArrowLeft /> Go to Upload
          </button>
        </Link>
        <div className="flex flex-col justify-center w-full p-8 rounded-lg shadow-md bg-white lg:flex-row">
          <div className="w-full lg:w-1/2 flex flex-col items-center justify-center rounded-lg border border-gray-300 mb-8 lg:mb-0 lg:mr-8">
            <img
              src={file?.fileUrl}
              alt="File preview"
              className="w-72 h-40 object-cover rounded-lg mt-5"
            />
            <p className="text-xl font-bold m-1">{file?.fileName}</p>
            <p className="text-sm text-gray-500">{file?.fileType}</p>
            <p className="text-sm text-gray-500">
              {(file?.fileSize / 1024 / 1024).toFixed(2)}MB
            </p>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col space-y-4">
            <div className="flex flex-col">
              <label htmlFor="shortUrl" className="text-sm font-medium mb-2">
                Short Url
              </label>
              <div className="flex flex-row">
                <input
                  type="text"
                  id="shortUrl"
                  value={file?.shortUrl}
                  disabled
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  placeholder="http://localhost:3000/phGw9"
                />
                <div
                  className="cursor-pointer ml-2 m-1"
                  onClick={() => copyToClipboard(file?.shortUrl)}
                >
                  <ClipboardCopy size="28" />
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="password"
                  className="w-4 h-4 mr-2 rounded focus:ring-blue-500"
                  onChange={(e) => setEnablePassword(e.target.checked)}
                />
                <label htmlFor="password" className="text-sm font-medium mb-2">
                  Enable Password?
                </label>
              </div>
              {enablePassword && (
                <div className="flex flex-row">
                  <input
                    type="password"
                    id="passwordInput"
                    className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    placeholder="Enter Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    onClick={() => onPasswordSave(password)}
                    className="w-24 px-3 py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ml-2"
                  >
                    Save
                  </button>
                </div>
              )}
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="text-sm font-medium mb-2">
                Send File to Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="example@gmail.com"
              />
            </div>
            <button
              onClick={() => sendEmail()}
              className="w-full py-2 px-4 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700"
            >
              Send Email
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default FileInfo;
