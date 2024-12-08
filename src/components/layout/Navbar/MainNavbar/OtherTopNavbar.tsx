'use client';

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { integralCF } from "@/styles/fonts";
import { NavMenu } from "../navbar";

const ResTopNavbar = ({ data }: { data: NavMenu }) => {
  // State to manage menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu visibility
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);  // Toggle the state
  };

  return (
    <div className="relative">
      {/* Toggle Button */}
      <button
        onClick={toggleMenu}
        className="cursor-pointer p-2 rounded-md hover:bg-gray-200 transition duration-200 flex items-center justify-center"
      >
        {isMenuOpen ? (
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
      {isMenuOpen && (
        <div
          className="absolute left-0 top-0 w-64 bg-white shadow-lg rounded-lg p-6 z-10 mt-2 transition-all ease-in-out duration-300"
        >
          <div className="mb-6">
            <Link
              href="/"
              className={cn([integralCF.className, "text-3xl font-bold text-gray-800"])}
            >
              SHOP.CO
            </Link>
          </div>

          <div className="flex flex-col items-start">
            {data.map((item) => (
              <React.Fragment key={item.id}>
                {item.type === "MenuItem" && (
                  <Link
                    href={item.url ?? "/"}
                    className="text-lg text-gray-700 mb-4 hover:text-blue-500 transition duration-200"
                  >
                    {item.label}
                  </Link>
                )}
                {item.type === "MenuList" && (
                  <div className="mb-4 w-full">
                    <div className="text-lg text-gray-700 py-1 font-medium border-b mb-2">
                      {item.label}
                    </div>
                    <div className="flex flex-col space-y-2">
                      {item.children.map((itemChild) => (
                        <Link
                          key={itemChild.id}
                          href={itemChild.url ?? "/"}
                          className="text-base text-gray-600 hover:text-blue-500 transition duration-200"
                        >
                          {itemChild.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ResTopNavbar;
