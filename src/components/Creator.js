export default function Creator({image,name, profession, quote, description}){
    return(
        <main className="p-8 w-[800px] h-[400px] max-md:w-[100%] bg-secondary bg-opacity-5 border-2 border-secondary border-opacity-20 rounded-lg">
            <div className="flex flex-col gap-4 ">
                <div className="flex justify-between items-center">
                    <img src= {image} className=" w-[75px] max-md:w-[50px] max-md:h-[50px] h-[75px] rounded-full object-cover "></img>
                    <div className="flex flex-col gap-4 ">
                        <h1 className="text-xl max-md:text-lg text-secondary font-bold ">{name}</h1>
                        <h3 className="text-xl max-md:text-lg text-complementary font-secondary ">{profession}</h3>
                    </div>
                    <div className="flex gap-4">
                        
                        
                        <img className="w-[10px] h-[10px] rounded-full bg-complementary"></img>
                        <img className="w-[10px] h-[10px] rounded-full bg-complementary"></img>
                        <img className="w-[10px] h-[10px] rounded-full bg-complementary"></img>
                        <img className="w-[10px] h-[10px] rounded-full bg-complementary"></img>
                        <img className="w-[10px] h-[10px] rounded-full bg-complementary"></img>
                    </div>
                </div>
                <h3 className="text-secondary max-md:text-md text-xl font-bold">{quote}</h3>
                <h3 className= " max-md:text-sm text-lg text-secondary">{description}</h3>
            </div>
        </main>
    )
}

