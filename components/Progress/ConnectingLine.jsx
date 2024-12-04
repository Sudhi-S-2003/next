import { motion } from "framer-motion";

function ConnectingLine({ delay }) {
    return (
        <div className="w-[100px] bg-white h-1">
            <motion.div
                className="w-[100px] bg-blue-600 h-1"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1, ease: "easeInOut", delay }}
            />
        </div>
    )
}

export default ConnectingLine