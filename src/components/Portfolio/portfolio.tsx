"use client";

import  Image from "next/image";
import {motion} from "motion/react";
import {PortfolioContentPage} from "@/components/Portfolio/PortfolioContent";

const Portfolio = () => {
    return(
        <div className="mt-[80px]">
            <div className="text-center border-[2px] rounded-full border-[#038980] block mb-4 px-3 font-semibold mx-auto max-w-[120px]">
                Portfolio
            </div>
            <h1 className="text-center text-[32px] font-semibold">My Recent Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {PortfolioContentPage.map(
                (p) => {
                    return(
                        <div className="my-3">
                        <a href={p.Link} target="_blank"><Image
                        src={p.Image.src}
                        alt={p.Title}
                        width={p.Image.width}
                        height={p.Image.height}
                        /></a>

                        
                        <h3 className="text-[22px] font-semibold">{p.Title}</h3>
                    {p.Tags.map(
                        (port) => {
                            return(
                                <motion.button className="rounded-full border bg-[#f6f6f6] px-3 text-[12px] mr-2 py-1 my-2" whileHover={{background: "#038980", scale: 1.1, animationDuration: 1.1, color: "#fff"}}>{port}</motion.button>
                            )
                        }
                    )}
                    </div>
                    )

                }
            )
        }
        </div>
        
            
           
        </div>
    )
}

export {Portfolio};