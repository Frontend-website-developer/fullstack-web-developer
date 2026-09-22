"use client"

import {motion} from "motion/react";
import { Mail } from "lucide-react"
import { FaGithub, FaLinkedin } from "react-icons/fa"

const Footer = () => {
    return(
        <>
    <div className="border border-[#038980] md:flex items-center rounded-[12px] p-6 my-5 shadow-xl inset-shadow-sm">
        <div className="md:w-8/12">
            <h3 className="text-[22px] mb-2">Let's Build Something That Ships</h3>
            <p>Available for freelance projects and full-time roles.</p>
        </div>
        <div className="md:flex-1 mt-[20px] md:mt-0 md:text-right items-center">
            <motion.a initial={{y: 10, opacity: 0}} animate={{y: 0, opacity: 1}} whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} className="bg-[#038980] py-3 px-4 rounded-sm text-[#fff] cursor-pointer uppercase font-[600] text-[14px] flex gap-2 items-center inline-block" href="mailto:ssajidali.dev@gmail.com">Contact Me</motion.a>
        </div>
    </div>

    <div className="bg-[#000] text-[#fff] p-6 flex gap-4">
        <a href="https://github.com/Frontend-website-developer" target="_blank"><FaGithub size={22} /></a> <a href="https://www.linkedin.com/in/syed-sajid-ali-front-end-developer/" target="_blank"><FaLinkedin size={22} /></a> <a href="mailto:ssajidali.dev@gmail.com"><Mail size={22} /></a>
    </div>

    </>
    )
}

export {Footer};