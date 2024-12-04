import React from "react";
import Linkcomponent from "@/components/common/Linkcomponent";
import BaseCardCircleProcess from "../../../components/Progress/BaseCardCircleProcess";

const App = () => {
  return (
    <div className="h-screen bg-gradient-to-t from-[#a8e0ff] to-[#008dcf] flex flex-col items-center p-5">
      {/* Back Link */}
      <Linkcomponent name={"Back"} url={"/roadmaps"} style={{ color: "white" }} />
    
   <BaseCardCircleProcess/>
    </div>
  );
};

export default App;
