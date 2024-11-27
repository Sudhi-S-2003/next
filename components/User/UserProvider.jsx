import React, { createContext, useContext, useState, useEffect } from "react";
import Alertbox from "./Alertbox";

// Create a UserContext
export const UserContext = createContext();

function UserProvider({ children }) {
  const [userData, setUserData] = useState({
    name: "",
    username: "",
    data: [],
  });
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState("");

  // Retrieve seller_Np_ref from localStorage and set userData
  useEffect(() => {
    const storedSellerData = localStorage.getItem("seller_Np_ref");
    if (storedSellerData) {
      const parsedData = JSON.parse(storedSellerData);
      if (parsedData.userData) {
        setUserData(parsedData.userData);
      }
    }
  }, []);

  // Login Component
  const Login = ({ name, username, data = [] }) => {
    if (!name || !username) {
      setAlertMessage("Name and username are required");
      setAlertType("error");
      return;
    }

    const newUserData = { name, username, data };

    // Get the current stored seller_Np_ref object, or create a new one
    const storedSellerData = JSON.parse(localStorage.getItem("seller_Np_ref")) || {};

    // Update the userData key with the new user data
    const updatedSellerData = { ...storedSellerData, userData: newUserData };

    // Save the updated object back to localStorage
    localStorage.setItem("seller_Np_ref", JSON.stringify(updatedSellerData));

    setUserData(newUserData);
    setAlertMessage("Login successful");
    setAlertType("success");
  };

  // LogOut Component
  const LogOut = () => {
    if (!userData.name || !userData.username) {
      setAlertMessage("Unable to log out");
      setAlertType("error");
      return;
    }

    // Clear userData from the seller_Np_ref object
    const storedSellerData = JSON.parse(localStorage.getItem("seller_Np_ref")) || {};
    const updatedSellerData = { ...storedSellerData, userData: {} };

    // Save the updated object back to localStorage
    localStorage.setItem("seller_Np_ref", JSON.stringify(updatedSellerData));

    setUserData({
      name: "",
      username: "",
      data: [],
    });
    setAlertMessage(`${userData.name} logged out successfully`);
    setAlertType("success");
  };

  return (
    <UserContext.Provider value={{ userData, setUserData, Login, LogOut }}>
      {children}
      {alertMessage && (
        <Alertbox message={alertMessage} type={alertType} onClose={() => setAlertMessage("")} />
      )}
    </UserContext.Provider>
  );
}

export default UserProvider;
