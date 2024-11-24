import { motion } from "framer-motion";
import CopyButton from "@/components/common/CopyButton";
import React from "react";

interface JsonContainerProps {
  itempostion?: string;
  head: {
    type: "bap" | "bpp";
  };
  payloadData: object;
  sendrequest: boolean;
  handleSendRequest: () => void;
}

const JsonContainer: React.FC<JsonContainerProps> = ({
  itempostion,
  head,
  payloadData,
  sendrequest,
  handleSendRequest,
}) => {
  return (
    <motion.div
      className={`w-1/3 flex flex-col ${itempostion || "items-start"}`}
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, type: "spring" }}
    >
      <h2 className="text-lg font-bold">
        {head.type === "bap"
          ? `BAP Server ("https://ondc.eatiko.com/ondc-PREPROD")`
          : `BPP Server ("staging-ondc-sellernp.eatiko.com")`}
      </h2>

      {/* Request Payload */}
      <motion.div
        className="bg-gray-100 p-4 rounded shadow-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="font-semibold">Request Payload</h3>
        <pre className="text-sm">{JSON.stringify(payloadData, null, 2)}</pre>
        <CopyButton text={JSON.stringify(payloadData, null, 2)} />
      </motion.div>

      {/* Send Request Button */}
      {sendrequest && (
        <motion.button
          onClick={handleSendRequest}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Send Request
        </motion.button>
      )}
    </motion.div>
  );
};

export default JsonContainer;
