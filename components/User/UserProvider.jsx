// src/UserProvider.js
import React, { createContext, useContext, useState } from "react";
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

  // Login Component
  const Login = ({ name, username, data = [] }) => {
    if (!name || !username) {
      setAlertMessage("Name and username are required");
      setAlertType("error");
      return;
    }

    setUserData({
      name: name,
      username: username,
      data: data,
    });
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
