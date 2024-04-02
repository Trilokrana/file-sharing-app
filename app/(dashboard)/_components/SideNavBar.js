"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Upload, File, Shield } from "lucide-react";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

const SideNavBar = () => {
  const { user } = useUser();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("");
  const handleTabClick = (tab) => {
    setActiveTab(tab);
    router.push(`/${tab}`);
  };
  return (
    <div className="fixed inset-y-0 left-0 z-50 h-screen flex flex-col justify-between w-64 border-e border-gray-300 bg-white shadow-lg ">
      <div className="px-4 py-6">
        <div className="grid h-10 w-36 place-content-center text-gray-600 ">
          <Image src={"logo.svg"} width={150} height={100} alt="logo" />
        </div>

        <ul className="mt-6 space-y-1">
          <li>
            <button
              className={`flex w-full gap-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-600 hover:bg-blue-100 hover:text-primary ${
                activeTab === "Upload" &&
                "bg-blue-200 bg-opacity-50 text-primary"
              }`}
              onClick={() => handleTabClick("Upload")}
            >
              <Upload />
              Upload
            </button>
          </li>

          <li>
            <button
              className={`flex w-full gap-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-600 hover:bg-blue-100 hover:text-primary ${
                activeTab === "Files" &&
                "bg-blue-200 bg-opacity-50 text-primary"
              }`}
              onClick={() => handleTabClick("Files")}
            >
              <File />
              Files
            </button>
          </li>

          <li>
            <button
              className={`flex w-full gap-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-600 hover:bg-blue-100 hover:text-primary ${
                activeTab === "Upgrade" &&
                "bg-blue-200 bg-opacity-50 text-primary"
              }`}
              onClick={() => handleTabClick("Upgrade")}
            >
              <Shield />
              Upgrade
            </button>
          </li>
        </ul>
      </div>

      <div className="md:sticky inset-x-0 bottom-0 border-t border-gray-300">
        <a
          href="#"
          className="flex items-center gap-2 bg-white p-4 hover:bg-blue-100"
        >
          <img
            alt="image"
            src={user?.imageUrl}
            className="size-10 rounded-full object-cover"
          />

          <div>
            <p className="text-xs ">
              <strong className="block font-medium mb-1">
                {user?.fullName}
              </strong>
              <span>{user?.primaryEmailAddress.emailAddress}</span>
            </p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default SideNavBar;
