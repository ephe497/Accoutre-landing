import React, { useState } from "react";
import { BsPersonFill } from "react-icons/bs";
import { TbMail } from "react-icons/tb";
import Success from "./success";
import { useForm } from "react-hook-form";
import { constants } from "buffer";

export default function PopUp({toggleModal}:any) {
  const [showSucces, setShowSucces] = useState(false)
  const [showFirstPop, setShowFirstPop] = useState(true)
    const [formData, setFormData] = useState({
      name: '',
      email: '',
    });
  
    const [errors, setErrors] = useState({
      name: '',
      email: '',
    });
  

    const handleChange = (e:any) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
      // Reset the corresponding error when the user types
      setErrors({
        ...errors,
        [name]: '',
      });
    };
  
    const handleSubmit = (event:any) => {
      event.preventDefault();
  
      // Perform validation
      let valid = true;
      const newErrors = { ...errors };
  
      if (!formData.name.trim()) {
        valid = false;
        newErrors.name = 'Full Name is required';
      } else if (!/^[a-zA-Z ]+$/.test(formData.name)) {
        valid = false;
        newErrors.name = 'Full Name must contain only alphabet characters and at least one space';
      }
  
      if (!formData.email.trim()) {
        valid = false;
        newErrors.email = 'Email is required';
      } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
        valid = false;
        newErrors.email = 'Invalid email format';
      }
  
      if (valid) {
        setShowSucces(!showSucces)
        setShowFirstPop(!showFirstPop)
        console.log('Form is valid:', formData);
      } else {
        // Form is invalid, update the errors state
        setErrors(newErrors);
      }
    };
  
  const success = () =>{
    setShowSucces(!showSucces)
    setShowFirstPop(!showFirstPop)
  }

    return(
<>
<div className="fixed z-[1] pt-[100px] left-0 top-0 w-full h-full overflow-auto bg-[0,0,0] bg-[rgba(0,0,0,0.4)]">
        
        <div className={showFirstPop? "bg-[#FDFFFD] w-[80%] md:w-[40%] m-auto rounded-[14px] ": "hidden"}>
        <span onClick={toggleModal} className="cursor-pointer hover:text-[#000] text-[#aaa] float-right text-[28px] mr-[20px] mt-[20px] font-bold ">&times;</span>
           <div className="py-[60px] md:py-[100px]">
            <div className="w-[80%] md:w-[60%] m-auto"> 
                <img src="logoo.png" className="w-[70%] m-auto " />
                <form className="mt-[50px]">
                    <div className="mb-4 ">
                    <div className="relative">
               <input className="w-100 appearance-none border rounded-[10px] font-Josefin text-[13px] w-full py-3 px-[30px] text[#0D1417] leading-tight focus:outline-none focus:shadow-outline"
       id="username"
        type="text"
        name="name"
         placeholder='Your Full Name'
         value={formData.name}
          onChange={handleChange} 
           />
    <BsPersonFill className="absolute top-[50%] left-[10px] translate-y-[-50%] text-[#4CBE42] " />
                    </div>
     
    <p className="font-Josefin text-[13px] text-[red]">{errors.name}</p>
    </div>  

    <div className="mb-4 ">
      <div className="relative">
        <input className="w-100 appearance-none border rounded-[10px] font-Josefin text-[13px] w-full py-3 px-[30px] text[#0D1417] leading-tight focus:outline-none focus:shadow-outline"
       id="email" type="text" placeholder="Enter email address" 
       name="email"
          value={formData.email}
          onChange={handleChange}/>
      <TbMail className="absolute top-[50%] left-[10px] translate-y-[-50%] text-[#4CBE42] " />
      </div>
      
      <p className="font-Josefin text-[13px] text-[red]">{errors.email}</p>
    </div> 
   
       
       <button className="bg-[#4CBE42] font-PlusJakataSan font-[600] m-auto mt-[46px] block text-[11px] text-white py-[12px] px-[28px] rounded-[7px] "
          style={{boxShadow:'4px 4px black'}}
          
          onClick={handleSubmit}>
            Join The Waitlist
          </button>
         </form>
            </div>
            </div> 
            
        </div>

        { showSucces && <Success toggleModal={toggleModal} /> }
      

</div>
</>
    )
}