import React, { useEffect, useState } from "react";

const Alertbox = ({ type = "info", message = "Something went wrong!", onClose }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true); // Trigger fade-out animation after 4 seconds
    }, 4000);

    const removeTimer = setTimeout(() => {
      setIsVisible(false); // Remove the alert after the fade-out is complete (5 seconds total)
      if (onClose) onClose(); // Notify parent component
    }, 5000); // 4s visible + 1s fade-out duration

    return () => {
      clearTimeout(timer);
      clearTimeout(removeTimer);
    };
  }, [onClose]);

  if (!isVisible) return null;

  // Define styles for different alert types
  const alertStyles = {
    success: "bg-green-50 text-green-800 border-green-300 shadow-lg",
    error: "bg-red-50 text-red-800 border-red-300 shadow-lg",
    warning: "bg-yellow-50 text-yellow-800 border-yellow-300 shadow-lg",
    info: "bg-blue-50 text-blue-800 border-blue-300 shadow-lg",
  };

  const iconStyles = {
    success: "✅",
    error: "❌",
    warning: "⚠️",
    info: "ℹ️",
  };

  return (
    <div
      className={`fixed top-5 left-1/2 transform -translate-x-1/2 border-l-4 p-4 rounded-lg shadow-lg transition-opacity duration-1000 ${fadeOut ? "opacity-0" : "opacity-100"} ${alertStyles[type]}`}
      role="alert"
      aria-live="assertive" // To announce the alert to screen readers
    >
      <div className="flex items-center space-x-3">
        <div className="text-2xl">{iconStyles[type]}</div>
        <div className="flex-1">
          <p className="font-semibold">{message}</p>
        </div>
        <button
          onClick={() => {
            setFadeOut(true); // Start fade-out
            setTimeout(() => {
              setIsVisible(false); // Remove after fade-out
              if (onClose) onClose(); // Trigger callback if provided
            }, 1000); // Wait for the fade-out to finish
          }}
          className="text-gray-500 hover:text-gray-700 focus:outline-none"
          aria-label="Close Alert"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Alertbox;
