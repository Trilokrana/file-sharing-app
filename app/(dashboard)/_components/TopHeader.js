"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { AlignJustify, X } from "lucide-react";
import SideNavBar from "./SideNavBar";
import { UserButton } from "@clerk/nextjs";

const TopHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSideNav = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);

  return (
    <div className="flex p-5 border-b items-center justify-between md:justify-end relative">
      {!isOpen && (
        <AlignJustify
          className="md:hidden cursor-pointer"
          onClick={toggleSideNav}
        />
      )}

      {!isOpen && (
        <Image
          src={"/logo.svg"}
          width={150}
          height={100}
          className="md:hidden gap-4"
          alt="logo"
        />
      )}
      {!isOpen && <UserButton className="md:hidden" />}

      {isOpen && (
        <SideNavBar
          onClose={toggleSideNav}
          className="absolute top-0 right-0 h-full bg-white shadow-md z-50"
        >
          {/* Content of the SideNavBar */}
        </SideNavBar>
      )}

      {isOpen && (
        <button
          className="fixed top-5 right-5 bg-gray-200 hover:bg-gray-300 p-2 rounded-md md:hidden z-60"
          onClick={toggleSideNav}
        >
          <X />
        </button>
      )}
    </div>
  );
};

export default TopHeader;

<style jsx>
  {`
    html,
    body {
      margin: 0;
      padding: 0;
    }

    @media (max-width: 768px) {
      .TopHeader {
        position: relative; /* Ensure relative positioning */
      }

      .SideNavBar {
        position: absolute; /* Change position to absolute */
        top: 0;
        left: 0;
        bottom: 0;
        width: 70%; /* Adjust width as needed */
        z-index: 1000; /* Ensure navbar appears above content */
        overflow-y: auto; /* Enable scrolling if content exceeds viewport */
      }

      .TopHeader .AlignJustify,
      .TopHeader .Image {
        display: none;
      }
    }
  `}
</style>
