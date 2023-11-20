import React, { useState, useEffect } from "react";
import { Plus_Jakarta_Sans } from "next/font/google";

// const smallFont = Plus_Jakarta_Sans({
//     weight: '400',
//     subsets: ['latin'],
//     display: 'swap',

//   })
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="py-[26px] lg:px-[75px] md:px-[45px] px-[20px] ">
        <div className="flex justify-between items-center">
          <div className="hidden md:flex justify-between">
            <p className="text-[#0D1417] text-[12px] font-bold ">About us</p>
            <p className="lg:pl-[80px] pl-[30px] text-[12px] text-[#0D1417] font-bold  font-PlusJakataSan">
              Contact
            </p>
          </div>
          <img src="logo.png" className=" lg:w-auto w-[30%] " />
          <button className="bg-[#4CBE42] font-bold hover:bg-blue-400 hidden md:block text-[12px] text-white py-[18px] px-[32px] border-b-4 border-r-4 border-[black] hover:border-blue-500 rounded">
            Join The Waitlist
          </button>

          <button
            className="flex md:hidden items-center px-3 py-2 border rounded text-black-200 border-black-400 hover:text-white hover:border-white"
            onClick={() => {
              setMenuOpen(!menuOpen);
            }}
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>

        <div
          className={menuOpen ? "flex flex-col" : "hidden  w-100 space-x-4  "}
        >
          jsjnsjsnsjsnsjsnj
        </div>
      </div>
    </>
  );
}
