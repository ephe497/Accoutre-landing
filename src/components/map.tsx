import React, { useEffect } from "react";

export default function Map() {
  return (
    <>
      <div className="map" id="map">
        {/* nsjsns */}
        <div className="block lg:grid grid-cols-2 bg-none lg:bg-[url(/map.png)] h-auto md:h-[1250px] bg-contain bg-no-repeat bg-[80%] ">
          <div className="block lg:hidden px-10">
              <img src="map.png" className="" />
          </div>
        
          <div className="hidden md:flex flex-col-reverse mt-10 md:mt-0 pb-[40%]">
            <div className="w-[90%] md:w-5/6 mx-auto text-[18px] md:text-[27px] font-bold text-[#42536A] leading-[27px] md:leading-[38px] font-PlusJakataSan">
              Accoutre Africa is a skills marketplace with a social impact
              mission.
              <p className="mt-[20px] md:mt-[40px]">
                 Our distinctive ecosystem nurtures connections,
              stimulates growth, and empowers MSMEs and skilled professionals.
              </p>
              
            </div>
          </div>

          <div></div>
        </div>
      </div>
    </>
  );
}
