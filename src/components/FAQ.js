import { motion } from "framer-motion";
import Question from "./Question";

export default function FAQ(){
    return(
        <main name = "FAQ" className="bg-primary p-32 min-h-screen max-md:px-4  ">
            <div className="flex flex-col gap-8">
                <h1 className="font-bold text-secondary text-5xl text-center max-md:text-4xl"><span className="text-complementary">FAQ</span></h1>
                <motion.div 
                initial={{
                    scale: 0,
                    hidden: "true",
                    opacity: 0
                }}
                whileInView={{
                    x: 0,
                    opacity: 1,
                    scale: 1
                }}
                transition={{
                    duration: .5,
                    type:"spring",
                    damping: 10,
                    stiffness: 20
                }}
                viewport={{ once: false }}
                className="flex flex-col gap-8 items-center justify-center">
                    <Question question={"How much account growth will I see?"} answer={"Your account can grow from 50% to 300%. It depends on the work you put in, our chatters will be there to help you grow and make money."}></Question>
                    <Question question={"I have no experience yet, will I even be considered?"} answer={"While our main goal is to significantly expand existing accounts, we also welcome new users. When evaluating applications for success, we consider various aspects."}></Question>
                    <Question question={"What percentage of earnings will the agency take?"} answer={"The answer varies depending on your creator status."}></Question>
                    <Question question={"Can I retain ownership of my content?"} answer={"Absolutely, we will have no right to your content."}></Question>
                    <Question question={"How do I start working with you?"} answer={"You can directly apply here or via messaging Flourish on Instagram. We carefully review your provided information and reach out to you within the next 24 hours."}></Question>
                </motion.div>
                
            </div>
        </main>
    )
}