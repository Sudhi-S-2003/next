import { motion } from "framer-motion";
import Circle from "./circle";
import ConnectingLine from "./ConnectingLine";

function TwoRow({ data = [], delaystart }) {
  if (!Array.isArray(data)) {
    return "Invalid data format";
  }


  return (
    <div className="flex items-center justify-center">
      {data[0] && (
        <>
          <Circle
            topval={data[0].presentage}
            level={data[0].level}
            desc={data[0].desc}
            type={
              data[0].status === "Locked"
                ? "Locked"
                : parseInt(data[0].presentage) === 100
                  ? "Complete"
                  : parseInt(data[0].presentage) < 100
                    ? "In-Complete"
                    : ""
            }
          />

          {data[1] && <ConnectingLine delay={delaystart} />}
        </>
      )}

      {data[1] && (
        <>
          <Circle
            topval={data[1].presentage}
            level={data[1].level}
            desc={data[1].desc}
            type={
              data[1].status === "Locked"
                ? "Locked"
                : parseInt(data[1].presentage) === 100
                  ? "Complete"
                  : parseInt(data[1].presentage) < 100
                    ? "In-Complete"
                    : ""
            }
          />

        </>
      )}

    </div>

  )
}

export default TwoRow