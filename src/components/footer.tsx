import React, { useEffect } from "react";
import { Josefin_Sans } from 'next/font/google'
import { RiAndroidLine  } from "react-icons/ri"
import { AiOutlineApple } from "react-icons/ai";

const josefin = Josefin_Sans({
        weight: '400',
        subsets: ['latin'],
        display: 'swap',
        
      })

export default function Footer() {
return(
    <>
    <div className="footer py-[51px] ">
        <div className="block md:grid grid-cols-[40fr,45fr,15fr] px-[20px] md:px-[70px] ">
            <div>
                <img src="footerlogo.png" className="w-[50%] md:w-auto mx-auto " />
                <div className="text-[14px] font-[400] font-Josefin mt-[30px] font-semibold text-[#42536A] text-justify ">Accoutre Africa is solving skill and knowledge gap problems African MSMEs face by using technology to facilitate easy access to skilled African professionals and business growth resources.</div>
            </div>

<div></div>

            <div className="md:text text-center right mt-[30px] ">
            <p className="font-[700] text-[#42536A] font-PlusJakataSan text-[28px] ">Get in touch</p>
            <p className=" mt-[14px] font-Josefin text-[#42536A] text-[18px] ">hello@accoutreafrica.com</p>
            
            <div className="flex justify-between mt-[14px] w-[80%] md:w-100 mx-auto ">
            <img src="facebook.png" className="w-[16%] h-[fit-content]" />
            <img src="linkedin.png" className="w-[16%] h-[fit-content]" />
            <img src="twitter.png" className="w-[16%] h-[fit-content]" />
            <img src="instagram.png" className="w-[16%] h-[fit-content]" />

            </div>

            <div className="flex mt-[10px] justify-center md:justify-end ">
                <div className="font-PlusJakataSan text-[11px] font-[700] ">Mobile App: </div>
                <RiAndroidLine color="#4CBE42" className="mx-[10px] text-[15px] " />
                <AiOutlineApple color="#4CBE42" className="text-[15px]" />
            </div>
            </div>
        
        </div>
    </div>
    </>
)
}