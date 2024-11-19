
import React, { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { NavLink } from "react-router-dom";

const Profile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 p-4">
      <div className="card card-compact bg-base-100 w-96 shadow-xl border">

        <div className="card-body">
          <div className="flex flex-col items-center">
            <img
              src={user?.photoURL || "https://via.placeholder.com/150"}
              alt="User Avatar"
              className="rounded-full w-32 h-32 shadow-lg"
            />
            <h2 className="mt-4 text-2xl font-semibold">
              Username: {user?.displayName || "No Name Provided"}
            </h2>
            <p className="mt-2 text-gray-600">
              Email: {user?.email || "No Email Available"}
            </p>
          </div>
          <div className="card-actions justify-center mt-5">
            <NavLink to="/updateprofile" className="btn btn-primary">
              Update Profile
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;