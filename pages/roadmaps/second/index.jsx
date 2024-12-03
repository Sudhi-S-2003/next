import React from "react";
import Linkcomponent from "@/components/common/Linkcomponent";
import { motion } from "framer-motion";
import CarProgress from "../../../components/Progress/CarProgress";
import Circle from "../../../components/Progress/circle";

const App = () => {
  return (
    <div className="h-screen bg-gradient-to-t from-[#a8e0ff] to-[#008dcf] flex flex-col items-center p-5">
      {/* Back Link */}
      <Linkcomponent name={"Back"} url={"/roadmaps"} style={{ color: "white" }} />
      {/* Car Progress Bar Container */}
      <CarProgress progress={50} />
      <div className="flex flex-col">
        {/* First Row */}
        <div className="flex items-center">
          <Circle topval={"100%"} level={1} desc={"Basic level"} />
          <div className="w-[100px] bg-white h-1">
            <motion.div
              className="w-[100px] bg-blue-600 h-1"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 3, ease: "easeInOut" }}
            />
          </div>
          <Circle topval={"100%"} level={2} desc={"Intermediate level"} />
          <div className="w-[100px] bg-white h-1">
            <motion.div
              className="w-[100px] bg-blue-600 h-1"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 3, ease: "easeInOut", delay: 3 }}
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
            transition={{ duration: 3, ease: "easeInOut", delay: 6 }}
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
              transition={{ duration: 3, ease: "easeInOut", delay: 9 }}
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
            transition={{ duration: 3, ease: "easeInOut", delay: 12 }}
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
              transition={{ duration: 3, ease: "easeInOut", delay: 15 }}
            />
          </div>
          <Circle topval={"100%"} level={7} desc={"Intermediate level"} />
          <div className="w-[100px] bg-white h-1">
            <motion.div
              className="w-[100px] bg-blue-600 h-1"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 3, ease: "easeInOut", delay: 18 }}
            />
          </div>
          <Circle topval={"100%"} level={8} desc={"Advanced level"} />
        </div>
      </div>
    </div>
  );
};

export default App;
