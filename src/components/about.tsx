"use client";

import {motion} from "motion/react";
import {Mail, Download} from "lucide-react";
import { scale } from "motion";

export default function About() {
    return(
        <>
        <div className="md:flex mt-[80px] gap-[30px]">
            <div className="lg:w-4/12">
                <div className="border-[2px] rounded-full border-[#038980] inline-block mb-4 px-3 font-semibold">
                    About Me
                </div>
                <motion.h1 initial={{opacity: 0}} whileInView={{opacity: 1}} className="text-[32px] font-semibold">12+ Years of Turning Ideas Into Production-Ready Software</motion.h1>
            </div>
            <div className="lg:flex-1">
                <motion.p initial={{opacity: 0, transitionDelay: 2}} whileInView={{opacity: 1, transitionDuration: 3}} className="leading-[32px] text-[18px] mb-4">I'm a Senior Full-Stack Developer based in Doha with over 12 years of hands-on experience across the modern web stack. My core expertise is the MERN stack (MongoDB, Express, React, Node.js) with TypeScript, deployed on Microsoft Azure with GitHub Actions CI/CD pipelines. Alongside that, I've delivered 100+ WordPress projects — custom themes, business websites, and e-commerce storefronts — for clients across Qatar, the UAE, USA, and Canada.</motion.p>
                <motion.p initial={{opacity: 0}} whileInView={{opacity: 1}} className="leading-[32px] text-[18px]">Beyond the stack, I bring exposure to enterprise environments — Blazor, Radzen, C#/.NET, and SQL Server from delivering internal modules at an MEP consulting firm, and construction/infrastructure document management workflows through Aconex. I'm equally comfortable owning a project end-to-end, integrating with existing teams, or mentoring junior developers. My goal on every project is the same: clean code, honest timelines, and software that ships.</motion.p>
            </div>
        </div>

            
        </>
    )
}