import React, { useState } from "react";
import { BsPersonFill } from "react-icons/bs";
import { TbMail } from "react-icons/tb";

export default function PopUp({toggleModal}:any) {


    return(
<>
<div className="fixed z-[1] pt-[100px] left-0 top-0 w-full h-full overflow-auto bg-[0,0,0] bg-[rgba(0,0,0,0.4)]">
        
        <div className="bg-[#FDFFFD] w-[80%] md:w-[40%] m-auto rounded-[14px] ">
        <span onClick={toggleModal} className="cursor-pointer hover:text-[#000] text-[#aaa] float-right text-[28px] mr-[20px] mt-[20px] font-bold ">&times;</span>
           <div className="py-[60px] md:py-[100px]">
            <div className="w-[80%] md:w-[60%] m-auto"> 
                <img src="logoo.png" className="w-[70%] m-auto " />
                <div className="mt-[50px]">
                    <div className="mb-4 relative">
                    
      <input className="w-100 appearance-none border rounded-[10px] font-Josefin text-[13px] w-full py-3 px-[30px] text[#0D1417] leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder='Your Name' />
    <BsPersonFill className="absolute top-[50%] left-[10px] translate-y-[-50%] text-[#4CBE42] " />
    </div>  

    <div className="mb-4 relative">
      
      <input className="w-100 appearance-none border rounded-[10px] font-Josefin text-[13px] w-full py-3 px-[30px] text[#0D1417] leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Enter email address" />
      <TbMail className="absolute top-[50%] left-[10px] translate-y-[-50%] text-[#4CBE42] " />
    </div> 
   
       </div>
       <button className="bg-[#4CBE42] font-PlusJakataSan font-[600] m-auto mt-[46px] block text-[11px] text-white py-[12px] px-[28px] rounded-[7px] "
          style={{boxShadow:'4px 4px black'}}
          onClick={toggleModal}>
            Join The Waitlist
          </button>
         
            </div>
            </div> 
            
        </div>

</div>
</>
    )
}