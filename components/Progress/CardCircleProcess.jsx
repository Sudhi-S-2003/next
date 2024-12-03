import Circle from "./circle"
import { motion } from "framer-motion";

function CardCircleProcess() {
    return (
        <div className="flex flex-col">
            {/* First Row */}
            <div className="flex items-center">
                <Circle topval={"100%"} level={1} desc={"Basic level"} />
                <div className="w-[100px] bg-white h-1">
                    <motion.div
                        className="w-[100px] bg-blue-600 h-1"
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                    />
                </div>
                <Circle topval={"100%"} level={2} desc={"Intermediate level"} />
                <div className="w-[100px] bg-white h-1">
                    <motion.div
                        className="w-[100px] bg-blue-600 h-1"
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 2, ease: "easeInOut", delay: 2 }}
                    />
                </div>
                <Circle topval={"100%"} level={3} desc={"Advanced level"} />
            </div>

            {/* Animated S-shaped Curve */}
            <svg width="500" height="200" xmlns="http://www.w3.org/2000/svg" className="mt-[-50px]">
                <path
                    d="M 450 50 C 250 150, 150 150, 150 250"
                    stroke="white"
                    fill="none"
                    strokeWidth="4"
                />
                <motion.path
                    d="M 450 50 C 250 150, 150 150, 150 250"
                    stroke="blue"
                    stroke-opacity="0.7"
                    fill="none"
                    strokeWidth="4"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, ease: "easeInOut", delay: 4 }}
                />
            </svg>

            {/* Second Row */}
            <div className="flex items-center justify-center">
                <Circle topval={"100%"} level={4} desc={"Expert level"} />
                <div className="w-[100px] bg-white h-1">
                    <motion.div
                        className="w-[100px] bg-blue-600 h-1"
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 2, ease: "easeInOut", delay: 6 }}
                    />
                </div>
                <Circle topval={"100%"} level={5} desc={"Master level"} />
            </div>

            {/* Animated S-shaped Curve */}
            <svg width="500" height="200" xmlns="http://www.w3.org/2000/svg" className="mt-[-50px]">
                <path
                    d="M 350 50 C 100 150, 150 150, 25 250"
                    stroke="white"
                    fill="none"
                    strokeWidth="4"
                />
                <motion.path
                    d="M 350 50 C 100 150, 150 150, 25 250"
                    stroke="blue"
                    stroke-opacity="0.7"
                    fill="none"
                    strokeWidth="4"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, ease: "easeInOut", delay: 8 }}
                />
            </svg>

            {/* Third Row */}
            <div className="flex items-center">
                <Circle topval={"100%"} level={6} desc={"Basic level"} />
                <div className="w-[100px] bg-white h-1">
                    <motion.div
                        className="w-[100px] bg-blue-600 h-1"
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 2, ease: "easeInOut", delay: 10 }}
                    />
                </div>
                <Circle topval={"100%"} level={7} desc={"Intermediate level"} />
                <div className="w-[100px] bg-white h-1">
                    <motion.div
                        className="w-[100px] bg-blue-600 h-1"
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 2, ease: "easeInOut", delay: 12 }}
                    />
                </div>
                <Circle topval={"100%"} level={8} desc={"Advanced level"} />
            </div>
        </div>
    )
}

export default CardCircleProcess