import React, { useEffect } from "react";
import Header from "./header";
import Map from "./map";
import ContentWrapper from "./contentWrapper";

const img = require("../../public/logo.png");
const styling = {
  backgroundImage: `url('${img}')`,
  width: "100%",
  height: "100%",
};
console.log(img, "mamamamam");

export default function MainSection() {
  return (
    <>
      <div className="backImg">
        <Header />

        <ContentWrapper>
          <div className="grid grid-cols-2 text-center">
            <div className="bg-[#EDF8EC]   text-[#4CBE42] text-[10px] md:text-[20px] py-6 ">
              Are you a skilled professional?
            </div>
            <div className="w-100">
              <div className="bg-[#ECEEF0]   text-[#42536A] text-[10px] md:text-[20px] py-6 ">
                Looking to grow your business?
              </div>
            </div>
          </div>
        </ContentWrapper>
        {/* <div className="mt-[57px] lg:mt-[100px] px-[30px] md:px-[50px] lg:px-[80px] ">
        
        </div> */}
        <div className="flex justify-center mt-[56px]">
          <button className="bg-[#4CBE42] font-bold hover:bg-blue-400 hidden md:block text-[12px] text-white py-[18px] px-[32px] border-b-4 border-r-4 border-[black] hover:border-blue-500 rounded">
            Join The Waitlist
          </button>
        </div>
        <Map />
      </div>
    </>
  );
}
