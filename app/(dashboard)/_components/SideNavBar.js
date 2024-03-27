"use client";
import React from "react";
import Image from "next/image";
import { Upload, File, Shield } from "lucide-react";
import { useUser } from "@clerk/nextjs";

const SideNavBar = () => {
  const { user } = useUser();
  return (
    <div>
      <div className="flex h-screen flex-col justify-between border-e bg-white">
        <div className="px-4 py-6">
          <div className="grid h-10 w-36 place-content-center text-gray-600  ">
            <Image src={"logo.svg"} width={150} height={100} alt="logo" />
          </div>

          <ul className="mt-6 space-y-1">
            <li>
              <a
                href="/Upload"
                className=" flex gap-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-600 hover:bg-blue-100 hover:text-primary"
              >
                <Upload />
                Upload
              </a>
            </li>

            <li>
              <a
                href="/Files"
                className=" flex gap-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-600 hover:bg-blue-100 hover:text-primary"
              >
                <File />
                Files
              </a>
            </li>

            <li>
              <a
                href="#"
                className="flex gap-2  rounded-lg px-4 py-2 text-sm font-medium text-gray-600 hover:bg-blue-100 hover:text-primary"
              >
        
                <Shield />
                Upgrade
              </a>
            </li>

            <li>
              <details className="group [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                  <span className="text-sm font-medium"> Account </span>

                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </summary>

                <ul className="mt-2 space-y-1 px-4">
                  <li>
                    <a
                      href="#"
                      className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                    >
                      Details
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                    >
                      Security
                    </a>
                  </li>

                  <li>
                    <form action="#">
                      <button
                        type="submit"
                        className="w-full rounded-lg px-4 py-2 text-sm font-medium text-gray-500 [text-align:_inherit] hover:bg-gray-100 hover:text-gray-700"
                      >
                        Logout
                      </button>
                    </form>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>

        <div className="sticky inset-x-0 bottom-0 border-t border-gray-100">
          <a
            href="#"
            className="flex items-center gap-2 bg-white p-4 hover:bg-gray-50"
          >
            <img
              alt=""
              src={user?.imageUrl}
              className="size-10 rounded-full object-cover"
            />

            <div>
              <p className="text-xs ">
                <strong className="block font-medium mb-1">{user?.fullName}</strong>
                <span>{user?.primaryEmailAddress.emailAddress}</span>
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SideNavBar;
