import React, { useState, useEffect } from "react";
import PopUp from "./popUp";
import { LiaTimesSolid } from "react-icons/lia"

export default function Header({toggleModal}:any) {
  const [menuOpen, setMenuOpen] = useState(false);
  
  const closeMenu = ()=>{
    setMenuOpen(!menuOpen)
  }

  return (
    <>
      <div className="py-[26px] lg:px-[75px] md:px-[45px] px-[20px] ">
        <div className="hidden md:flex justify-between items-center">
          <div className="flex justify-between">
            <p className="text-[#0D1417] text-[11px] cursor-pointer font-[500] font-PlusJakataSan "> <a href="#map"> About us</a> </p>
            <p className="lg:pl-[80px] pl-[30px] cursor-pointer text-[11px] text-[#0D1417] font-[500] font-PlusJakataSan">
             <a href="#contact"> Contact
              </a>
            </p>
          </div>
          <img src="logo.png" className=" w-[11%] " />
          <button className="bg-[#4CBE42] font-PlusJakataSan font-[600] hidden md:block text-[10px] text-white py-[13px] px-[22px] rounded-[7px] "
          style={{
            boxShadow:'4px 4px black'
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
        
        <div className="flex justify-between w-[63%] ">
           <img src="minilogo.png" />
        
        <button className="bg-[#4CBE42] font-PlusJakataSan font-[600] text-[12px] text-white py-[10px] px-[10px] rounded-[7px] "
          style={{
            boxShadow:'4px 4px black'
          }}
          onClick={toggleModal}>
            Join The Waitlist
          </button>
        </div>
       
        </div> 

  
      </div>
      <div
          className={menuOpen ? "absolute top-0 w-full flex-col bg-[#fff] h-auto px-[20px] py-[20px] " : "hidden  w-100 space-x-4  "}
        >
          

          {/* </div>
        <span onClick={()=>{
            setMenuOpen(!menuOpen)
          }} className="cursor-pointer hover:text-[#000] text-[#aaa] float-right text-[28px] font-bold ">&times;</span>
          <div> */}
<div className="flex items-center border-b-2 borser-[#C9EBC6] pb-[37px] ">

  <img src="logoo.png" className="w-[45%] m-auto" />
        <LiaTimesSolid size={'28px'} onClick={closeMenu} />     
            </div>
<div className="text-center mt-43px ">
            
<p className="text-[#4CBE42] text-[18px] font-[600] pb-[60px] pt-[40px] font-[500] font-PlusJakataSan ">
  <a href="#" onClick={closeMenu}> Home</a></p>
            <p className="text-[#0D1417] active:bg-violet-700 text-[18px] pb-[60px]  font-[500] font-PlusJakataSan ">
              <a href="#About" onClick={closeMenu}> About us</a></p>
            <p className="lg:pl-[80px] text-[18px] text-[#0D1417] font-[500]  font-PlusJakataSan">
            <a href="#contact" onClick={closeMenu}> Contact
              </a>
            </p>
            <button className="bg-[#4CBE42] font-PlusJakataSan font-[600] m-auto mt-[46px] block text-[11px] text-white py-[12px] px-[13px] rounded-[7px] "
          style={{boxShadow:'4px 4px black'}}
          onClick={toggleModal}>
            Join The Waitlist
          </button>
          </div>
          
        </div>
    </>
  );
}
