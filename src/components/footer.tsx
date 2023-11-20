import React, { useEffect } from "react";
import { Josefin_Sans } from 'next/font/google'

const josefin = Josefin_Sans({
        weight: '400',
        subsets: ['latin'],
        display: 'swap',
        
      })

export default function Footer() {
return(
    <>
    <div className="footer py-[51px] ">
        <div className="block md:grid grid-cols-[40fr,40fr,20fr] px-[40px] md:px-[70px] ">
            <div>
                <img src="logo.png" className="w-[30%] md:w-auto " />
                <div className="text-[10px] md:text-[14px] fnt-['Josefin_Sans'] mt-[30px] font-semibold text-[#42536A] text-justify ">Accoutre Africa is solving skill and knowledge gap problems African MSMEs face by using technology to facilitate easy access to skilled African professionals and business growth resources.</div>
            </div>

<div></div>

            <div className="text-right mt-[30px] ">
            <p className="font-semibold text-[#42536A] text-[26px] ">Get in touch</p>
            <p className="font-semibold mt-[14px] text-[#42536A] text-[16px] ">hello@accoutreafrica.com</p>
            
            <div className="flex justify-between mt-[14px] ">
            <img src="facebook.png" />
            <img src="linkedin.png" />
            <img src="twitter.png" />
            <img src="instagram.png" />

            </div>
            </div>
        
        </div>
    </div>
    </>
)
}