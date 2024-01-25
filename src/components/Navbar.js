
// import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Link } from "react-scroll"

export default function Navbar(){
    const [navbarActive, setNavbarActive] = useState(false)
    const navigate = useNavigate()

    const handleMobileNavbarApply = ()=>{
        setNavbarActive(false)
        navigate("/apply")
    }

    return(
        <nav className="bg-primary px-5 py-5 flex max-md:justify-between justify-around items-center fixed w-[100%] font-outfit top-0 z-0 max:md ">
            <img onClick={()=> navigate("/")} src="flourishs.png" className="text-complementary text-5xl h-16 w-16 font-bold hover:cursor-pointer"></img>
            <h1 className="text-5xl text-center text-secondary font-bold">Flourish Management <span className=" text-complementary"></span> </h1>
            <div className="flex gap-11 justify-center items-center max-md:hidden">
                <Link smooth = {true} duration = {500} to ="Home" className=" text-secondary text-md hover:border-b-2  hover:border-secondary hover:cursor-pointer">Home</Link>
                <Link smooth = {true} duration = {500} to ="About" className=" text-secondary text-md hover:border-b-2  hover:border-secondary hover:cursor-pointer">About</Link>
                <Link smooth = {true} duration = {500} to ="Services" className=" text-secondary text-md hover:border-b-2  hover:border-secondary hover:cursor-pointer">Services</Link>
                <Link smooth = {true} duration = {500} to = "Testimonials" className=" text-secondary text-md hover:border-b-2 hover:border-secondary hover:cursor-pointer">Testimonials</Link>
                <Link smooth = {true} duration = {500} to = "FAQ" className=" text-secondary text-md hover:border-b-2  hover:border-secondary hover:cursor-pointer">FAQ</Link>
                <button  onClick={()=> navigate("/apply")} className="flex text-xl justify-center items-center py-4 px-6 font-bold bg-complementary text-primary rounded-2xl hover:scale-105 hover:bg-secondary duration-300">
                Apply Now</button>
            </div>

            <img onClick={()=>setNavbarActive(!navbarActive)} src="flourishs.png" className="h-8 w-8 md:hidden hover:cursor-pointer"></img>
            {/* mobile menu */}

            {
                navbarActive &&
                (
                    <div className="flex flex-col gap-8 h-screen absolute top-24 bg-primary w-[100%] px-4 transition duration-300">
                        <Link onClick={()=>setNavbarActive(false)} smooth = {true} duration = {500} to ="Home" className=" text-secondary text-md hover:border-b-2 max-md:border-none max-md:hover:underline  hover:border-secondary hover:cursor-pointer">Home</Link>
                        <Link onClick={()=>setNavbarActive(false)} smooth = {true} duration = {500} to ="About" className=" text-secondary text-md hover:border-b-2 max-md:border-none max-md:hover:underline  hover:border-secondary hover:cursor-pointer">About</Link>
                        <Link onClick={()=>setNavbarActive(false)} smooth = {true} duration = {500} to ="Services" className=" text-secondary text-md hover:border-b-2 max-md:border-none max-md:hover:underline hover:border-secondary hover:cursor-pointer">Services</Link>
                        <Link onClick={()=>setNavbarActive(false)} smooth = {true} duration = {500} to = "Testimonials" className=" text-secondary text-md hover:border-b-2 hover:border-secondary hover:cursor-pointer max-md:border-none max-md:hover:underline ">Testimonials</Link>
                        <Link onClick={()=>setNavbarActive(false)} smooth = {true} duration = {500} to = "FAQ" className=" text-secondary text-md hover:border-b-2 max-md:border-none max-md:hover:underline hover:border-secondary hover:cursor-pointer">FAQ</Link>
                        <button onClick={handleMobileNavbarApply } className="flex text-xl justify-center items-center py-4 px-6 font-bold bg-complementary text-primary rounded-2xl hover:scale-105 hover:bg-secondary duration-300 max-md:w-[40%] max-md:h-[55px] max-md:text-md">
                Apply Now</button>
                    </div>
                )
            }
            
        </nav>
    )
}
