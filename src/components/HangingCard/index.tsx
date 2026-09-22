"use client"

import { useState } from "react"
import { motion, useMotionValue, useTransform } from "motion/react"
import CardFront from "./CardFront"
import CardBack from "./CardBack"

const cardFaceClass =
  "absolute inset-0 py-5 p-2 rounded-2xl shadow-lg overflow-hidden text-center bg-white/10 backdrop-blur-md shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),inset_0_-1px_1px_rgba(0,0,0,0.15),0_4px_12px_rgba(0,0,0,0.3)]"

export default function ProfileCard() {
  const x = useMotionValue(0)
  const rotate = useTransform(x, [-150, 150], [-20, 20]) // drag range → tilt range
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div className="flex flex-col items-center">
      <motion.div
        drag
        dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
        dragElastic={0.15}
        dragTransition={{ bounceStiffness: 300, bounceDamping: 15 }}
        style={{ x, rotate, transformOrigin: "top center" }}
        initial={{ rotate: 0, animationDuration: 2 }}
        animate={{ rotate: -3 }}
        transition={{ type: "spring" }}
      >
        <div className="flex justify-center">
          <div className="w-[30px] h-[100px] bg-gradient-to-b from-neutral-900 to-neutral-800"></div>
        </div>

        <div className="flex justify-center" style={{ perspective: 1200 }}>
          <motion.div
            className="relative w-[400px] h-[400px]"
            style={{ transformStyle: "preserve-3d" }}
            animate={{ rotateY: isFlipped ? 180 : 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <div className={cardFaceClass} style={{ backfaceVisibility: "hidden" }}>
              <CardFront />
            </div>
            <div
              className={cardFaceClass}
              style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
            >
              <CardBack />
            </div>
          </motion.div>
        </div>
      </motion.div>

      <button
        onClick={() => setIsFlipped((flipped) => !flipped)}
        className="mt-4 cursor-pointer text-sm text-neutral-500 underline underline-offset-4 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
      >
        {isFlipped ? "Flip Back" : "Flip Card"}
      </button>
    </div>
  )
}
