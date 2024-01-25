import { motion } from "framer-motion";
import Service from "./Service";

export default function Services(){
    return(
        <main name = "Services" className=" min-h-screen p-28 max-md:px-8 font-outfit bg-primary ">
            <div className="flex flex-col gap-16">
                <h1 className="text-5xl text-center text-secondary font-bold max-md:text-4xl max-md:text-center">What We Do <span className=" text-complementary">!</span> </h1>
                <motion.div 
        initial={{
            scale: 0,
            hidden: "true"
        }}
        whileInView={{  
            scale: 1,
            opacity: 1
        }}
        transition={{
            duration: .5,
            type:"spring",
            damping: 10,
            stiffness: 20
        }}
        viewport={{ once: false }} className=" flex flex-wrap gap-8  items-center justify-center">
                    <Service service={"Full Management"} description={"We oversee content creation, optimize posting schedules, implement targeted marketing strategies, handle customer interactions, and ensure overall brand consistency to maximize the account's success and growth."}></Service>
                    <Service service={"Account Growth"} description={"Strategic account growth for your OnlyFans account involves leveraging data analytics, engaging with the audience through interactive content, and implementing promotional campaigns to steadily increase subscriber numbers and overall revenue."}></Service>
                    <Service service={"Content Creation"} description={"We understand the millions of users using OnlyFans and we know that the first perception of you will be the most important. This is why, we will help do research on the most captivating content that the audience wants. "}></Service>
                    <Service service={"24/7 Chatting"} description={"Striving for you to create the best content, we offer 24/7 chatting to match the constant demand for personal engagement, providing a seamless and effortless way to interact with fans while enhancing user satisfaction and retention."}></Service>
                </motion.div>
            </div>
        </main>
    )
}