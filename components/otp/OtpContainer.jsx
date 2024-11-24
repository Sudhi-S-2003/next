import React, { useState, useRef } from "react";
import Inputbox from "./Inputbox";

function OtpContainer({ size }) {
  const [otp, setOtp] = useState(Array(size).fill(""));
  const inputRefs = useRef([]);

  // Ensure `inputRefs` is always an array of size `size`
  if (inputRefs.current.length !== size) {
    inputRefs.current = Array(size)
      .fill()
      .map((_, i) => inputRefs.current[i] || React.createRef());
  }

  // Handle input changes
  const handleChange = (e, index) => {
    const { value } = e.target;

    // Only allow numeric input
    if (isNaN(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move focus to the next input
    if (value && index < size - 1) {
      inputRefs.current[index + 1]?.current?.focus();
    }
  };

  // Handle backspace
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.current?.focus();
    }
  };

  // Render inputs
  return (
    <div className="flex justify-center items-center my-28">
      {Array.from({ length: size }).map((_, index) => (
        <Inputbox
          key={index}
          name={`otp-${index}`}
          value={otp[index]}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          ref={inputRefs.current[index]}
        />
      ))}
    </div>
  );
}

export default OtpContainer;
