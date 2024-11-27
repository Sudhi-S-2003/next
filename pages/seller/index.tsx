import React, { useContext } from "react";
import UserProvider, { UserContext } from "../../components/User/UserProvider";
import UserAvatar from "../../components/User/UserAvatar"; // Import UserAvatar

const App = () => {
  const { userData, Login } = useContext(UserContext);

  const handleLogin = () => {
    const name = prompt("Enter your name:");
    const username = prompt("Enter your username:");
    if (name && username) {
      // Call the Login function to update the userData
      Login({ name, username });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-lg w-full">
        <h1 className="text-center text-gradient">Welcome to the User App</h1>
        <p className="text-center text-gray-500 mb-6">Current User: {userData.name || "None"}</p>

        {userData.username ? (
          <div className="text-center">
            <UserAvatar /> {/* Render UserAvatar component directly */}
          </div>
        ) : (
          <div className="text-center">
            <button
              onClick={handleLogin}
              className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none"
            >
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const Root = () => (
  <UserProvider>
    <App />
  </UserProvider>
);

export default Root;
