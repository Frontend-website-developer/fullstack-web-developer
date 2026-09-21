"use client"

import { motion, useMotionValue, useTransform } from "motion/react"
import CardFront from "./CardFront"

export default function ProfileCard() {
  const x = useMotionValue(0)
  const rotate = useTransform(x, [-150, 150], [-20, 20]) // drag range → tilt range

  return (
    <>
    <motion.div
          drag
          dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
          dragElastic={0.15}
          dragTransition={{ bounceStiffness: 300, bounceDamping: 15 }}
          style={{ x, rotate, transformOrigin: "top center" }} initial={{rotate: 0, animationDuration: 2}} animate={{rotate: -3}} transition={{ type: "spring" }}>
      <div className="flex justify-center">
        <div className="w-[30px] h-[100px] bg-gradient-to-b from-neutral-900 to-neutral-800"></div>
      </div>
      <div className="flex justify-center">
        <div
          className="w-[400px] h-[400px] py-5 p-2 rounded-2xl shadow-lg overflow-hidden text-center relative inline-block bg-white/10 backdrop-blur-md shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),inset_0_-1px_1px_rgba(0,0,0,0.15),0_4px_12px_rgba(0,0,0,0.3)]"
        >
          <CardFront />
        </div>
      </div>
      </motion.div>
    </>
  )
}
