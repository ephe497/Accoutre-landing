import React, { useEffect } from "react";

export default function Goals() {
return(
<>
<div className="bg-[white]">
<div className="block  md:grid grid-cols-[30fr,70fr] items-center justify-center px-[40px] md:px-[60px] lg:px-[100px]">
    <div>
       <p className="text-[#4CBE42] font-semibold lg:text-[30px] md:text-[20px] leading-[20px] md:leading-[30px] ">SUSTAINABLE DEVELOPMENT </p>
    <span className="flex items-center text-[#4CBE42] font-semibold lg:text-[30px] md:text-[20px]">G  
        <span>
        <img src="circle.png" />
    </span>
    ALS
        </span>  
    </div>
    
    
    
    <div className="flex justify-between mt-4 md:mt-0">
        <img src="poverty.png" className="w-[12%] h-[fit-content] " />
        <img src="hunger.png" className="w-[12%] h-[fit-content] " />
        <img src="growth.png" className="w-[12%] h-[fit-content] " />
        <img src="industry.png" className="w-[12%] h-[fit-content] " />
        <img src="reduced.png" className="w-[12%] h-[fit-content] " />

    </div>
</div>
</div>

<div className="bg-[#F8FFF8] text-center py-[40px] md:py-[60px] ">
    <p className="font-bold text-[#265F21] text-[15px] md:text-[20px] lg:text-[20px]  ">
    Empowering the continent, one business at a time.
    </p>
</div>
</>
)

}