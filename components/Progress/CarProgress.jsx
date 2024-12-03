import { motion } from "framer-motion";

function CarProgress({progress}) {
  const progresspercentage=`${progress}%`
  return (
    <>
       {/* Car Progress Bar Container */}
       <div className="relative w-full mt-10">
        {/* Progress Bar Background */}
        <div className="bg-[#3e6c88] h-2 rounded-xl overflow-hidden relative w-full">
          {/* Yellow Progress Bar */}
          <motion.div
            className="h-full bg-[#f7c948]"
            initial={{ width: 0 }}
            animate={{ width: progresspercentage }}
            transition={{
              duration: 2,
              ease: "easeInOut",
            }}
          />
        </div>

        {/* Car Emoji (Above the Progress Bar) */}
        <motion.div
          className="absolute top-[-30px]  text-3xl"
          initial={{ left:"calc(0% - 2%)" }}
          animate={{ left: `calc(${progresspercentage} - 2%)` }} 
          transition={{
            duration: 2,
            ease: "easeInOut",
          }}
        >
          🚃
        </motion.div>
      </div></>
  )
}

export default CarProgress