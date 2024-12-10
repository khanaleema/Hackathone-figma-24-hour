'use client';  // Ensure this is placed at the top of the file to specify client-side rendering

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { integralCF } from "@/styles/fonts";

// Define the NavMenu type
export interface NavMenu {
  items: { name: string; link: string; }[];
}

// Update the props to accept both 'data' and 'isOpen'
const OtherTopNavbar = ({ data, isOpen }: { data: NavMenu; isOpen: boolean }) => {
  // Function to toggle the menu visibility (no need for local state here since 'isOpen' is passed from the parent)
  return (
    <div className="relative">
      {/* Toggle Button */}
      <button
        className="cursor-pointer p-2 rounded-md hover:bg-gray-200 transition duration-200 flex items-center justify-center"
      >
        {isOpen ? (
          <Image
            priority
            src="/icons/close.svg"  // Close icon
            height={100}
            width={100}
            alt="close menu"
            className="max-w-[22px] max-h-[22px]"
          />
        ) : (
          <Image
            priority
            src="/icons/menu.svg"  // Menu icon
            height={100}
            width={100}
            alt="open menu"
            className="max-w-[22px] max-h-[22px]"
          />
        )}
      </button>

      {/* Conditionally render the menu */}
      {isOpen && (
        <div
          className="absolute left-0 top-0 w-64 bg-white shadow-lg rounded-lg p-6 z-10 mt-2 transition-all ease-in-out duration-300"
        >
          <div className="mb-6">
            <Link
              href="/"
              className={cn([integralCF.className, "text-3xl font-bold text-gray-800"])}>
              SHOP.CO
            </Link>
          </div>

          <div className="flex flex-col items-start">
            {data.items.map((item, index) => (
              <React.Fragment key={index}>
                <Link
                  href={item.link}
                  className="text-lg text-gray-700 mb-4 hover:text-blue-500 transition duration-200"
                >
                  {item.name}
                </Link>
              </React.Fragment>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default OtherTopNavbar;
