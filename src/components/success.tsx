import React, { useState } from "react";

export default function Success({toggleModal}:any) {
return(
    <>
    <div className="bg-[#FDFFFD] w-[80%] md:w-[30%] m-auto rounded-[14px]">
    <div className="py-[60px] text-center ">
        <img src="check.png" className=" w-[30%] m-auto " />    
        <p className="font-Josefin mt-[40px] text-[24px] font-bold ">Email sent successfully</p>
        <button className="bg-[#4CBE42] font-PlusJakataSan font-[600] m-auto mt-[46px] block text-[11px] text-white py-[12px] px-[28px] rounded-[7px] "
          style={{boxShadow:'4px 4px black'}}
          onClick={toggleModal}>
           <a href="#"> Go Back </a>
          </button>
    </div>


    </div>
    </>
)

}