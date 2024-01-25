

import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import { useState } from "react";
import Creator from "./Creator";


const creators = [
  {
    image:"girl6.jpg",
    name:"Olivia Ava",
    profession:"Influencer",
    quote: '"Unbelievable"',
    description:"Flourish has truly helped me grow my account and brought my OnlyFans to new heights. I am now able to make more money while spending less time in front of the screen."
  },
  {
    image:"girl7.jpg",
    name:"Emma Grace",
    profession:"Influencer",
    quote: '"Made my first million in less than 6 months"',
    description:"I'm thankful to be part of the Flourish family. They've helped me earn more in a supportive and respectful environment, surpassing my expectations."
  },
  {
    image:"girl8.jpg",
    name:"Sophia Lily",
    profession:"Influencer",
    quote: '"Great Growth"',
    description:"From top 40% of creators to top 1% of creators, I can't thank Flourish enough."
  },
  {
    image:"girl9.jpg",
    name:"Isabella Aria",
    profession:"Influencer",
    quote: '"I still cannot believe it."',
    description:"I saw a big increase in my income and Flourish's expert advice and efficient management grew my subscribers and lead to significant earnings."
  },
  {
    image:"girl10.jpg",
    name:"Scarllet Addison",
    profession:"Influencer",
    quote: '"Joined with no experience"',
    description:"The management team at Flourish give personalized marketing and great communication. Their help has made it easier for me to focus on content and give more to my fans."
  }
]


export default function Testimonials(){
    const controls = useAnimation();
    const [currentIndex, setIndex] = useState(0)

    // const autoChange = ()=>{
    //   setIndex( (currentIndex+1) % creators.length )
    // }
    // useEffect(()=>{
    //   const intervalId = setInterval(()=>autoChange(),10000)
    //   return () => clearInterval(intervalId);
    // },[])

    const switchIndex = (dir)=>{
      if(dir == -1 && currentIndex == 0){
        return setIndex(creators.length-1)
      }
      setIndex( (currentIndex+dir) % creators.length )
    }
    
    return(
        <main name = "Testimonials" className=" min-h-screen p-28 max-md:px-12 font-outfit bg-primary ">
            <div className="flex flex-col gap-12">
                <h1 className="max-md:text-4xl text-5xl text-center text-secondary font-bold">What our <span className=" text-complementary">testimonials say</span> </h1>
                
                <div className="flex justify-center relative items-center max-h-fit overflow-clip">
                  <AnimatePresence mode="wait" initial={false} custom={currentIndex}>
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: '0%' }}
                    animate={{ opacity: 1, x: '0%' }}
                    exit={{ opacity: 0 }}
                    transition={{ 
                      duration: .5,
                      ease: 'easeInOut'
                    }} 
                    className="flex items-center justify-center w-[100%] h-[100%]">
                    <Creator image={creators[currentIndex].image} name = {creators[currentIndex].name} profession={creators[currentIndex].profession} quote = {creators[currentIndex].quote} description={creators[currentIndex].description} ></Creator>

                  </motion.div>
                </AnimatePresence>
                  
                  <button onClick={()=>switchIndex(1)} className="p-4 max-md:p-1 max-md:text-md max-md:right-0 bg-secondary rounded-full bg-opacity-15 m-auto h-24 hover:scale-105 duration-200 flex justify-center items-center absolute top-0 bottom-0 right-6 text-secondary text-4xl">{">"}</button>
                  <button onClick={()=>switchIndex(-1)} className="p-4 bg-secondary rounded-full bg-opacity-15 m-auto h-24 hover:scale-105 duration-200 flex justify-center items-center absolute top-0 bottom-0 left-6 text-secondary text-4xl max-md:p-1 max-md:text-md max-md:left-0">{"<"}</button>
                </div>
                
                        
                
            </div>
        </main>
    )
}