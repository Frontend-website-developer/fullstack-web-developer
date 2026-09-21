"use client"
import  Image from "next/image";
import { SpecializationsContent } from "./specializationsContent";
import {motion} from "motion/react";

const Specializations = () => {
    return(
        <div className="mt-[80px]">
        <div className="text-center border-[2px] rounded-full border-[#038980] block mb-4 px-3 font-semibold mx-auto max-w-[120px]">
                 Services
             </div>
             <h1 className="text-center text-[32px] font-semibold mb-2">My Specializations</h1>
             <div className="grid md:grid-cols-3 gap-4 mt-5">
        {SpecializationsContent.map(
            (specialize) => {
                return(
                    
                        <motion.div initial={{background: "#2e2e2e", color: "#fff"}} whileHover={{background: "#fff", color: "#2e2e2e", border: "1px solid #2e2e2e", scale: 1.01}} className="py-[50px] px-6 mb-[20px] rounded-lg">
                            <h2 className="text-[22px] font-semibold mb-2">{specialize.Title}</h2> 
                            <p className="">{specialize.Description}</p></motion.div>
                    
                )
            }
        )}</div>
        </div>
    )

}

export {Specializations};