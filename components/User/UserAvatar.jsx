import React, { useContext } from "react";
import { UserContext } from "./UserProvider";

const UserAvatar = () => {
    const { userData, LogOut } = useContext(UserContext);

    const handleLogout = () => {
        LogOut(); // Call the LogOut function from UserContext
    };

    if (!userData.username) {
        return <p className="text-center">No user logged in.</p>; // Centered "No user logged in."
    }

    return (
        <div className="flex justify-center">
            <div className="card card-compact bg-base-100 w-96 shadow-xl transform transition-transform hover:scale-105">
                <figure className="flex justify-center">
                    <div className="avatar online">
                        <div className="w-24 rounded-full border-4 border-blue-500">
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                                alt="User Avatar"
                            />
                        </div>
                    </div>
                </figure>
                <div className="card-body text-center">
                    <h2 className="card-title justify-center text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
                        Username: {userData.username}
                    </h2>
                    <p className="text-sm text-gray-500">Name: {userData.name}</p>
                    <div>
                        {Array.isArray(userData.data) && userData.data.length > 0 ? (
                            userData.data.map((item) => (
                                <p key={item.id} className="text-gray-600">{item.name}</p>
                            ))
                        ) : (
                            <p>No additional data.</p>
                        )}
                    </div>
                    <div className="card-actions justify-center">
                        <button className="btn btn-primary" onClick={handleLogout}>
                            Log Out
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserAvatar;
