"use client";

import {motion} from "motion/react";
import {Mail, Download} from "lucide-react";
import { scale } from "motion";

export default function Introduction() {
    return(
        <>
            <div className="border-[2px] rounded-full border-[#038980] inline-block mb-4 px-3 mt-[100px] font-semibold">
                Introduction
            </div>
            <h1 className="text-[34px] font-[500]">Hey! I'm Syed Sajid Ali, Senior Full-Stack Developer</h1>
            <p className="text-[20px] mb-4">MERN Stack · Next.js · WordPress · 12+ Years Building for the Web</p>
            <p className="leading-[32px] text-[18px]">Senior Full-Stack Developer with 12+ years of experience delivering production-grade web applications across MERN, Next.js, and WordPress ecosystems. Based in Doha, I build everything from custom React and Node.js applications deployed on Azure with CI/CD, to pixel-perfect WordPress themes and business websites for clients across the Gulf, USA, and Canada. I care about clean architecture, performance, and shipping software that actually solves problems.</p>
            
            <div className="flex gap-4  mt-6">
                <motion.a initial={{y: 10, opacity: 0}} animate={{y: 0, opacity: 1}} whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} className="bg-[#038980] py-3 px-4 rounded-sm text-[#fff] cursor-pointer uppercase font-[600] text-[14px] flex gap-2 items-center" href="mailto:ssajidali.dev@gmail.com">
                    <Mail size={20}/> Hire Me Now
                </motion.a>

                <motion.a initial={{y: 10, opacity: 0}} animate={{y: 0, opacity: 1}} whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} className="bg-[#038980] py-3 px-4 rounded-sm text-[#fff] cursor-pointer uppercase font-[600] text-[14px] flex gap-2 items-center" href="/syed-sajid-ali-fullstack-developer.pdf">
                    <Download size={20}/> Download CV
                </motion.a>
            </div>
        </>
    )
}