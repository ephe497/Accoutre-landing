import React, { useEffect } from "react";

export default function Goals() {
return(
<>
<div className="flex md:hidden flex-col-reverse mt-8 md:mt-0]">
            <div className="w-[90%] md:w-5/6 mx-auto text-[18px] md:text-[27px] font-bold text-[#42536A] leading-[27px] md:leading-[38px] font-PlusJakataSan">
              Accoutre Africa is a skills marketplace with a social impact
              mission.
              <p className="mt-[20px] md:mt-[40px]">
                 Our distinctive ecosystem nurtures connections,
              stimulates growth, and empowers MSMEs and skilled professionals.
              </p>
              
            </div>
          </div>

<div className="bg-[white] py-[30px] block md:flex justify-center ">

    <div className="w-[77%] mx-auto ">
<div className="block md:grid grid-cols-[30fr,70fr] items-center justify-center ">
    <div>
       <p className="text-[#4CBE42] text-center md:text-justify font-Josefin font-[500] md:font-bold text-[24px] lg:text-[30px] md:text-[20px] leading-[24px] md:leading-[30px] ">SUSTAINABLE DEVELOPMENT </p>
    <span className="flex items-center justify-center md:justify-start text-[#4CBE42] font-Josefin font-bold text-[30px]">G  
        <span>
        <img src="circle.png" />
    </span>
    ALS
        </span>  
    </div>
    
    
    
    <div className=" hidden md:flex justify-between mt-4 md:mt-0">
        <img src="poverty.png" className="w-[13%] h-[fit-content] " />
        <img src="hunger.png" className="w-[13%] h-[fit-content] " />
        <img src="growth.png" className="w-[13%] h-[fit-content] " />
        <img src="industry.png" className="w-[13%] h-[fit-content] " />
        <img src="reduced.png" className="w-[13%] h-[fit-content] " />

    </div>
</div>
    </div>
    <div className="w-[90%] mx-auto block md:hidden ">
    <div className="flex md:hidden justify-between mt-4 md:mt-0">
        <img src="poverty.png" className="w-[13%] h-[fit-content] " />
        <img src="hunger.png" className="w-[13%] h-[fit-content] " />
        <img src="growth.png" className="w-[13%] h-[fit-content] " />
        <img src="industry.png" className="w-[13%] h-[fit-content] " />
        <img src="reduced.png" className="w-[13%] h-[fit-content] " />

    </div>
    </div>

</div>

<div className="bg-[#EDF8EC]  md:bg-[#F8FFF8] text-center py-[40px] md:py-[60px] ">
    <p className="font-PlusJakataSan font-bold text-[#265F21] text-[24px] leading-[30px]  ">
    Empowering the continent, one business at a time.
    </p>
</div>
</>
)

}