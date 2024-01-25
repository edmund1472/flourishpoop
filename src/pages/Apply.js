// import nodemailer from "nodemailer"
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import { useState } from "react";




export default function Apply(){
    const [message, setMessage] = useState()
    
    
    const sendEmail = async (e)=>{
        setMessage("")
        e.preventDefault()
        // console.log(e.target.name.value)

        const name = e.target.name.value || "Did not enter"
        const email = e.target.email.value || "Did not enter"
        const number = e.target.number.value || "No number"
        const twitter = e.target.twitter.value || "Did not enter"
        const insta = e.target.instagram.value || "Did not enter"


        console.log(email.split("@"))
        if(name.length < 3){
            return setMessage("Name must be at least 3 characters")
        }
        if(email.split("@").length == 1 || email.split("@").length >2){
            return setMessage("Invalid email address")
        }
        if(number.split(" ").length != 3 || number.split(" ")[2].length > 4){
            return setMessage("Invalid phone number")
        }
        
        
        
        const templateParams = {
            name,email,number,twitter,insta
        };
      
        try{
            emailjs.init(process.env.REACT_APP_USER_ID);
            const response = await emailjs.send(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, templateParams);
            console.log("Email sent successfully")
            setMessage("Application sent successfully")
        }catch(error){
            console.log(error)
            setMessage("An unknown error occured, please try again later")
        }
    
    }

    const formatPhoneNumber = (e) => {
        
        // Remove non-numeric characters
        const numericInput = e.target.value.replace(/\D/g, '');
    
        // Format as (XXX) XXX XXXX
        const formattedPhoneNumber = numericInput.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2 $3');
        
        e.target.value = formattedPhoneNumber;
    };

    
    return (
        <main className=" min-h-screen bg-primary font-outfit ">
            
            <motion.form onSubmit={sendEmail} className="flex p-32 max-md:px-4 justify-center"
            initial={{
                opacity: 0,
                hidden: "true"
            }}
            whileInView={{
                x: 0,
                y: 0,   
                rotate: 0,
                opacity: 1
            }}
            transition={{
                duration: 1,
                type:"spring",
                damping: 10,
                stiffness: 20
            }}
            viewport={{ once: false }}  
            >
                <div className="flex flex-col bg-secondary bg-opacity-15 gap-4 w-[800px] p-12 rounded-xl max-md:p-4 max-md:gap-1">
                    <h1 className="font-bold text-6xl text-secondary max-md:text-4xl"> <span className=" text-complementary">Model</span> Form</h1>
                    <div className="flex flex-col gap-2">
                        <label className=" text-secondary text-lg">Name:</label>
                        <input required = {true} name = "name" placeholder="Enter your name" className= "bg-secondary bg-opacity-10 w-[100%] p-3 text-md rounded-xl border-2 border-secondary border-opacity-20  text-secondary max-md:p-2   "></input>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className=" text-secondary text-lg">Email:</label>
                        <input required = {true} name = "email" placeholder="Enter your email" className= "bg-secondary bg-opacity-10 w-[100%] p-3 text-md rounded-xl border-2 border-secondary border-opacity-20  text-secondary max-md:p-2  "></input>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className=" text-secondary text-lg">Phone Number:</label>
                        <input onChange={formatPhoneNumber} required = {true} name = "number" placeholder="(123) 447 689" className= "bg-secondary bg-opacity-10 w-[100%] p-3 text-md rounded-xl border-2 border-secondary border-opacity-20 max-md:p-2 text-secondary  "></input>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className=" text-secondary text-lg">Twitter Handle:</label>
                        <input name = "twitter" placeholder="@username" className= "bg-secondary bg-opacity-10 w-[100%] p-3 text-md rounded-xl border-2 border-secondary max-md:p-2  border-opacity-20  text-secondary  "></input>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className=" text-secondary text-lg">Instagram Handle:</label>
                        <input name = "instagram" placeholder="@username" className= "bg-secondary bg-opacity-10 w-[100%] p-3 text-md rounded-xl border-2 border-secondary border-opacity-20 max-md:p-2   text-secondary  "></input>
                    </div>
                    <button type="submit" className={" bg-complementary w-[100%] h-[65px] text-2xl justify-center text-primary font-bold rounded-xl hover:scale-105 hover:bg-secondary duration-300 max-md:h-[50px] max-md:mt-2"}>
                        Apply
                    </button>
                    <h3 className="text-center max-md:text-sm text-secondary text-lg">Already applied or facing errors. <span onClick={()=>
                    window.location.href = "https://www.instagram.com/flourishmgt/"} className="underline hover:text-complementary hover:cursor-pointer">Message Us</span></h3>
                    <h1 className=" text-complementary text-4xl text-center">{message}</h1>
                </div>
            </motion.form>
        </main>
    )
}