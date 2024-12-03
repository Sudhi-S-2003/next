import React from "react";
import { motion } from "framer-motion";
import Linkcomponent from "@/components/common/Linkcomponent";

const App = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-t from-[#a8e0ff] to-[#008dcf]">
            <Linkcomponent  name={"Back"}url={"/roadmaps"}/>

      <div className="bg-[#0c4257] w-full max-w-[400px] p-6 rounded-2xl shadow-xl">
        <div className="flex items-center justify-between mb-4">
          <img
            src="profile.jpg"
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
          <p className="text-white text-lg">ROAD MAP</p>
        </div>
        <div className="bg-[#3e6c88] h-2 rounded-xl overflow-hidden mb-4">
          <motion.div
            className="h-full bg-[#f7c948]"
            initial={{ width: 0 }}
            animate={{ width: "50%" }}
            transition={{ duration: 1 }}
          />
        </div>
        <p className="text-white text-center mb-4 text-sm">Earn 650 points to level up</p>
        <div className="flex justify-between mb-6">
          <p className="text-white">Chapters Read: <strong>9/75</strong></p>
          <p className="text-white">Level: <strong>1</strong></p>
        </div>
        <div className="flex items-center justify-between mb-6">
          {[1, 2, 3, 4, 5, 6, 7].map((node, index) => (
            <React.Fragment key={index}>
              <motion.div
                className={`w-10 h-10 rounded-full flex justify-center items-center text-white ${
                  node === 5 ? "bg-[#f7c948]" : node <= 4 ? "bg-[#4caf50]" : "bg-[#3e6c88]"
                }`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 * index, duration: 1 }}
              >
                {node}
              </motion.div>
              {index < 6 && <div className="flex-1 h-1 bg-[#3e6c88]" />}
            </React.Fragment>
          ))}
        </div>
        <div className="flex justify-between mt-6">
          {["Roadmap", "Extra Tests", "Statistics", "Settings"].map((item, index) => (
            <motion.button
              key={index}
              className="w-full bg-[#1d3e53] text-white py-2 px-4 rounded-lg hover:bg-[#f7c948] transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {item}
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;