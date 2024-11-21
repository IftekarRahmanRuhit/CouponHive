import React, { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { NavLink } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

const Profile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-base-100 p-6">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-[#E1713B]">
          Welcome to Your Profile!
        </h2>
        <p className="text-gray-600 mt-2 text-lg">
          Explore and collect amazing coupons tailored just for you!
        </p>
      </div>

      <div className="bg-white rounded-xl border border-1 shadow-lg overflow-hidden w-full max-w-md">
        <div className="flex flex-col items-center p-6">
          <img
            src={user?.photoURL || <p className="text-2xl">
              <FaUserCircle />
            </p>}
            alt=""
            className="rounded-full w-32 h-32 shadow-lg mb-4"
          />
        </div>
        <div className="px-6 pb-6 text-center">
          <p className="font-bold text-gray-700 text-lg mb-2">
            Username:{" "}
            <span className="text-gray-600 font-semibold ">
              {user?.displayName || "No Name Provided"}
            </span>
          </p>
          <p className="font-bold text-gray-700 text-lg">
            Email:{" "}
            <span className="text-gray-600 font-semibold ">
              {user?.email || "No Email Available"}
            </span>
          </p>
        </div>
        <div className="flex justify-center p-4">
          <NavLink
            to="/updateprofile"
            className="btn btn-primary bg-[#E1713B] hover:bg-orange-600 text-white font-medium py-2 px-6 rounded-lg shadow-md border-none"
          >
            Update Profile
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Profile;
