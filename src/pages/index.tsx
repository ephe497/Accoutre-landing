
import React, { useEffect } from "react";
import MainSection from "@/components/mainSection";
import Goals from "@/components/goalsSection";
import Footer from "@/components/footer";
import { Plus_Jakarta_Sans } from 'next/font/google'

export default function HomePage() {
  
  return (
    
      <div>
       <MainSection />
       <Goals />
       <Footer />
      </div>
  
  );
}
