import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"


export default function About(){
    const navigate = useNavigate()
    return(
        <main name = "About" className="min-h-screen p-32 max-md:px-4 font-outfit bg-primary  ">
            <motion.div
            initial={{
                x: "-100%",
                hidden: "true",
                opacity: 0
            }}
            whileInView={{  
                x: 0,
                opacity: 1
            }}
            transition={{
                duration: .5,
                type:"spring",
                damping: 10,
                stiffness: 20
            }}
            viewport={{ once: false }}
            className="flex justify-center items-center gap-16 max-md:flex-col max-md:text-center">
                <div className="flex flex-col gap-12 max-md:justify-center max-md:items-center ">
                    <h1 className=" font-bold text-6xl text-secondary max-md:text-4xl"> <span className="text-complementary ">How</span> it works</h1>
                    <h3 className="text-3xl max-md:text-lg text-secondary">Flourish Management focuses on driving account growth for models, providing strategic management, and curating compelling content to enhance their visibility in the industry. With dedicated efforts in account management, these agencies guide models in negotiations, career decisions, and personal branding. Additionally, they employ full-time messaging services to maintain effective communication between models and clients, ensuring seamless collaboration and professional success.</h3>
                    <button onClick={()=>navigate("/apply")} className="text-2xl text-primary font-bold rounded-2xl hover:bg-secondary hover:scale-105 duration-300 items-center bg-complementary w-[75%] h-[75px]">Apply Now</button>   
                </div>
                <img src="girl5.jpg" className=" object-cover rounded-2xl md:min-w-[300px] max-md:w-[75%] max-md:h-[200px] h-[500px] bg-secondary max-md:rounded-sm"></img>   
            </motion.div>
            
        </main>
    )
}