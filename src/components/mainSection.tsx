import React, { useEffect, useState } from "react";
import Header from "./header";
import Map from "./map";
import ContentWrapper from "./contentWrapper";
import PopUp from "./popUp";

const img = require("../../public/logo.png");
const styling = {
  backgroundImage: `url('${img}')`,
  width: "100%",
  height: "100%",
};
console.log(img, "mamamamam");

export default function MainSection({toggleModal}:any) {

  return (
    <>
      <div className="backImg pb-o md:pb-[50px]">
        <Header toggleModal={toggleModal} />

        <ContentWrapper>
          <div className=" block md:grid grid-cols-2 text-center">
            <div className="bg-[#EDF8EC] font-Josefin md:font-PlusJakataSan text-[#4CBE42] font-[700] text-[16px] md:text-[18px] py-6 ">
              Are you a skilled professional?
            </div>
            <div className="w-100">
              <div className="bg-[#ECEEF0] font-Josefin md:font-PlusJakataSan font-[700]  text-[#42536A] text-[16px] md:text-[18px] md:text-[30px] py-6 ">
                Looking to grow your business?
              </div>
            </div>
          </div>
        </ContentWrapper>
        {/* <div className="mt-[57px] lg:mt-[100px] px-[30px] md:px-[50px] lg:px-[80px] ">
        
        </div> */}
        <div className="flex justify-center my-[26px] mb-[33px]">
          <button className="bg-[#4CBE42] font-PlusJakataSan font-[600] block text-[12px] md:text-[11px] text-white py-[10px] md:py-[12px] px-[10px] md:px-[28px] rounded-[7px] "
          style={{boxShadow:'4px 4px black'}}
          onClick={toggleModal}>
            Join The Waitlist
          </button>
        </div>
        <Map />
        {/* {showModal && <PopUp />} */}

      </div>
    </>
  );
}
