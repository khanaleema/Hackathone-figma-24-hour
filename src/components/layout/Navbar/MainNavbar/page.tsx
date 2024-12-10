'use client';

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { integralCF } from "@/styles/fonts";
import Link from "next/link";
import Image from "next/image";
import InputGroup from "@/components/ui/input-group";
import ResTopNavbar from "./OtherTopNavbar";  // Importing ResTopNavbar
import CartBtn from "./ButtonCard";
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

// Mock data for `NavMenu` (replace with actual data or fetch from an API)
const navMenuData = {
  items: [
    { name: 'Home', link: '/' },
    { name: 'Shop', link: '/shop' },
    { name: 'OnSale', link: '/shop' },
    { name: 'New Arrivals', link: '/shop' },
    { name: 'Brands', link: '/shop' }
  ]
};

const MainNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);  // Toggle the state on button click
  };

  return (
    <nav className="sticky top-0 bg-white z-20">
      <div className="flex relative max-w-frame mx-auto items-center justify-between md:justify-start py-5 md:py-6 px-4 xl:px-0">
        <div className="flex items-center">
          <div className="block md:hidden mr-4">
            {/* Toggle Button for Menu */}
            <button
              onClick={toggleMenu}
              className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-md focus:outline-none"
            >
              <span
                className={cn("block w-6 h-1 bg-black transition-transform duration-300", {
                  "rotate-45 translate-y-2": isOpen, // Open state
                  "mb-2": !isOpen
                })}
              ></span>
              <span
                className={cn("block w-6 h-1 bg-black transition-opacity duration-300", {
                  "opacity-0": isOpen, // Hidden in open state
                })}
              ></span>
              <span
                className={cn("block w-6 h-1 bg-black transition-transform duration-300", {
                  "-rotate-45 -translate-y-2": isOpen, // Open state
                  "mt-2": !isOpen
                })}
              ></span>
            </button>

            {/* Passing data and isOpen prop to ResTopNavbar */}
            <ResTopNavbar data={navMenuData} isOpen={isOpen} />
          </div>
          <Link
            href="/"
            className={cn([integralCF.className, "text-2xl lg:text-[32px] mb-2 mr-3 lg:mr-10"])}>
            SHOP.CO
          </Link>
        </div>

        {/* Navigation Links (visible only on larger screens) */}
        <div className="hidden md:flex items-center ml-10 space-x-6 whitespace-nowrap">
          {navMenuData.items.map((item) => (
            <Link
              key={item.name}
              href={item.link}
              className="text-black text-sm relative group"
            >
              {item.name}
              <MdOutlineKeyboardArrowDown className="ml-2 inline" />
              <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
          ))}
        </div>

        {/* Search Bar and Icons */}
        <div className="flex items-center ml-auto space-x-4">
          <InputGroup className="hidden md:flex bg-[#F0F0F0] w-[580px]">
            <InputGroup.Text>
              <Image
                priority
                src="/icons/search.svg"
                height={20}
                width={20}
                alt="search"
                className="min-w-5 min-h-5"
              />
            </InputGroup.Text>
            <InputGroup.Input
              type="search"
              name="search"
              placeholder="Search for products..."
              className="bg-transparent placeholder:text-black/40"
            />
          </InputGroup>

          {/* Icons (Cart and User) */}
          <Link href="/search" className="block md:hidden mr-[14px] p-1">
            <Image
              priority
              src="/icons/search-black.svg"
              height={100}
              width={100}
              alt="search"
              className="max-w-[22px] max-h-[22px]"
            />
          </Link>
          <CartBtn />
          <Link href="/auth" className="p-1">
            <Image
              priority
              src="/icons/user.svg"
              height={100}
              width={100}
              alt="user"
              className="max-w-[22px] max-h-[22px]"
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default MainNavbar;
