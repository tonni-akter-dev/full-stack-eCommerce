'use client'
import Image from 'next/image';
import React from 'react';
import logo from '../../../public/assets/logo.png'
import { MagnifyingGlass } from '@phosphor-icons/react'

const TopNav = () => {
  return (
    <div className="w-full bg-white shadow-md">
      <div className="container max-w-[1460px] mx-auto flex items-center justify-between py-3 px-4">
        {/* Logo */}
        <div className="flex items-center">
          <Image src={logo} alt="" />
        </div>
        {/* Search Bar */}
        <div className="flex items-center border border-light_gray rounded-[10px] ">
          <select className="text-primary_dark_color px-3 py-2 outline-none cursor-pointer text-lg">
            <option>All Categories</option>
            <option>Category 1</option>
            <option>Category 2</option>
          </select>
          <input
            type="text"
            className="flex-1 px-4 py-2 ml-[30px] outline-none text-gray-700 border-l text-lg"
            placeholder="Enter Search Products"
          />
          <button className="px-4 text-gray-600">
            <MagnifyingGlass size={16} />
          </button>
        </div>

        {/* Support Section */}
        <div className="flex items-center">
          <div className="text-right mr-2">
            <p className="text-sm text-gray-500">Support 24/7</p>
            <p className="text-lg font-semibold text-gray-700">
              894 4567 123 94+
            </p>
          </div>
          <div className="text-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 16l4-4m0 0l-4-4m4 4H3"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;