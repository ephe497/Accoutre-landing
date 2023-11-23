
import React, { useState } from "react";
import MainSection from "@/components/mainSection";
import Goals from "@/components/goalsSection";
import Footer from "@/components/footer";
import PopUp from "@/components/popUp";
import Success from "@/components/success";

import { Plus_Jakarta_Sans } from 'next/font/google'

export default function HomePage() {
  const [showModal, setShowModal] = useState(false)

  const toggleModal = () =>{
    setShowModal(!showModal)
  }
  
  return (
    
      <div>
       <MainSection toggleModal={toggleModal} />
       <Goals />
       <Footer />

       {showModal && <PopUp toggleModal={toggleModal} />}

      </div>
  
  );
}
