import React, { forwardRef } from "react";

const Inputbox = forwardRef(({ name, value, onChange, onKeyDown }, ref) => {
  return (
    <input
      type="text"
      size="1"
      name={name}
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      maxLength="1"
      ref={ref}
      className="w-12 h-12 text-center text-2xl font-bold border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500 hover:border-gray-400 transition-all mx-2 bg-gray-50"
    />
  );
});

export default Inputbox;
