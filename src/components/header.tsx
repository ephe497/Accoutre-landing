import React, { useState, useEffect } from "react";
import PopUp from "./popUp";

export default function Header({toggleModal}) {
  const [menuOpen, setMenuOpen] = useState(false);
  

  return (
    <>
      <div className="py-[26px] lg:px-[75px] md:px-[45px] px-[20px] ">
        <div className="hidden md:flex justify-between items-center">
          <div className="flex justify-between">
            <p className="text-[#0D1417] text-[11px] cursor-pointer font-[500] font-PlusJakataSan "> <a href="#map"> About us</a> </p>
            <p className="lg:pl-[80px] pl-[30px] cursor-pointer text-[11px] text-[#0D1417] font-semibold  font-PlusJakataSan">
             <a href="#contact"> Contact
              </a>
            </p>
          </div>
          <img src="logo.png" className=" w-[11%] " />
          <button className="bg-[#4CBE42] font-PlusJakataSan font-[600] hidden md:block text-[10px] text-white py-[13px] px-[22px] rounded-[7px] "
          style={{
            boxShadow:'4px 4px 4px black'
          }}
          onClick={toggleModal}>
            Join The Waitlist
          </button>

        </div>

        {/* mobile view */}
       <div className="flex md:hidden justify-between">
        <div>
          <img src="menu.png" onClick={()=>{
            setMenuOpen(!menuOpen)
          }} />
        </div>
        
        <div className="flex justify-between w-[55%] ">
           <img src="minilogo.png" />
        
        <button className="bg-[#4CBE42] font-PlusJakataSan font-[600] text-[12px] text-white py-[10px] px-[10px] rounded-[7px] "
          style={{
            boxShadow:'4px 4px 4px black'
          }}
          onClick={toggleModal}>
            Join The Waitlist
          </button>
        </div>
       
        </div> 

  
      </div>
      <div
          className={menuOpen ? "flex flex-col bg-[#ECEEF0] px-[20px] py-[10px] " : "hidden  w-100 space-x-4  "}
        >
          <p className="text-[#0D1417] text-[11px] font-[500] font-PlusJakataSan "><a href="#map"> About us</a></p>
            <p className="lg:pl-[80px] text-[11px] text-[#0D1417] font-semibold  font-PlusJakataSan">
            <a href="#contact"> Contact
              </a>
            </p>
        </div>
    </>
  );
}
