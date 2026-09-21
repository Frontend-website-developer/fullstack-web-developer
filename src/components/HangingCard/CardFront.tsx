import Image from "next/image"
import { IconType } from "react-icons"
import { FaReact, FaNode } from "react-icons/fa"
import { DiMongodb, DiPostgresql } from "react-icons/di"
import { SiExpress } from "react-icons/si"

const skills: { icon: IconType; color: string }[] = [
    { icon: FaReact, color: "#61DAFB" },
    { icon: FaNode, color: "#3C873A" },
    { icon: DiMongodb, color: "#47A248" },
    { icon: SiExpress, color: "#000000" },
    { icon: DiPostgresql, color: "#336791" },
]

const SIZE = 260   // orbit container diameter (px)
const RADIUS = 110 // distance of icons from center (px)
const IMAGE_SIZE = 150

export default function CardFront() {
    return (
        <>
        <div className="relative mx-auto" style={{ width: SIZE, height: SIZE }}>
            <Image
                className="rounded-full object-cover absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0"
                src="/display-picture.jpg"
                alt="Display picture"
                width={IMAGE_SIZE}
                height={IMAGE_SIZE}
            />

            {skills.map(({ icon: Icon, color }, i) => {
                const angle = (360 / skills.length) * i - 90 // start at top, go clockwise
                const rad = (angle * Math.PI) / 180
                const x = RADIUS * Math.cos(rad)
                const y = RADIUS * Math.sin(rad)

                return (
                    <div
                        key={i}
                        className="absolute top-1/2 left-1/2 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md"
                        style={{ transform: `translate(-50%, -50%) translate(${x}px, ${y}px)` }}
                    >
                        <Icon size={24} color={color} />
                    </div>
                )
            })}
        </div>
        <h1 className="text-[30px]">Syed Sajid Ali</h1>
        <p>Fullstack Developer</p>
        </>
    )
}
