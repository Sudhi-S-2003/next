import { motion } from "framer-motion";

function TwoToThreeCurve({delay}) {
    return (
        <svg width="500" height="150" xmlns="http://www.w3.org/2000/svg" className="mt-[-50px]">
            <path
                d="M 400 10 C 20 170, 70 150, 10 200"
                stroke="white"
                fill="none"
                strokeWidth="4"
            />
            <motion.path
                d="M 400 10 C 20 170, 70 150, 10 200"
                stroke="blue"
                stroke-opacity="0.7"
                fill="none"
                strokeWidth="4"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 3, ease: "easeInOut", delay }}
            />
        </svg>

    )
}

export default TwoToThreeCurve