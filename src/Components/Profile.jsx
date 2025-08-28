import React, { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { NavLink } from "react-router-dom";
import { FaUserCircle, FaEdit, FaStar, FaTags, FaHeart } from "react-icons/fa";

const Profile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Welcome to Your Profile!
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore and collect amazing coupons tailored just for you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            <div className="bg-gradient-to-r from-[#E1713B] to-[#F9A266] h-24 relative">
              <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
                <div className="relative">
                  {user?.photoURL ? (
                    <img
                      src={user.photoURL}
                      alt="Profile"
                      className="rounded-full w-24 h-24 border-4 border-white shadow-lg object-cover"
                    />
                  ) : (
                    <div className="rounded-full w-24 h-24 border-4 border-white bg-gray-200 shadow-lg flex items-center justify-center">
                      <FaUserCircle className="text-5xl text-gray-400" />
                    </div>
                  )}
                  <div className="absolute bottom-0 right-0 bg-white rounded-full p-1 shadow-md">
                    <div className="bg-[#E1713B] rounded-full p-1">
                      <FaEdit className="text-white text-xs" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-16 px-6 pb-6 text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-1">
                {user?.displayName || "No Name Provided"}
              </h3>
              <p className="text-gray-600 mb-6">{user?.email || "No Email Available"}</p>
              
              <div className="flex justify-center space-x-6 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#E1713B]">12</div>
                  <div className="text-sm text-gray-500">Coupons Saved</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#E1713B]">8</div>
                  <div className="text-sm text-gray-500">Coupons Used</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#E1713B]">$127</div>
                  <div className="text-sm text-gray-500">Total Saved</div>
                </div>
              </div>

              <NavLink
                to="/updateprofile"
                className="inline-flex items-center bg-[#E1713B] hover:bg-[#C75B2A] text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 shadow-md"
              >
                <FaEdit className="mr-2" />
                Update Profile
              </NavLink>
            </div>
          </div>

          {/* Quick Stats Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                <FaStar className="text-yellow-500 mr-2" />
                Member Status
              </h3>
              <div className="bg-gradient-to-r from-yellow-100 to-yellow-50 rounded-lg p-4 border border-yellow-200">
                <div className="text-center">
                  <div className="text-lg font-semibold text-yellow-700">Silver Member</div>
                  <div className="text-sm text-yellow-600 mt-1">Earn 5% more rewards</div>
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-4">
                <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '45%' }}></div>
              </div>
              <div className="text-xs text-gray-500 mt-2 text-center">45% to Gold Status</div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                <FaTags className="text-[#E1713B] mr-2" />
                Recent Activity
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center text-sm text-gray-600">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  Used 15% off coupon at Amazon
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                  Saved coupon from Nike
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                  Earned 50 loyalty points
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                <FaHeart className="text-red-500 mr-2" />
                Favorite Categories
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-full">Electronics</span>
                <span className="bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-full">Fashion</span>
                <span className="bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-full">Home & Garden</span>
              </div>
            </div>
          </div>
        </div>

        {/* Upcoming Rewards Section */}
        <div className="bg-white rounded-2xl shadow-xl p-6 mt-8 border border-gray-100">
          <h3 className="text-xl font-bold text-gray-800 mb-6">Your Upcoming Rewards</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gradient-to-r from-green-50 to-green-100 border border-green-200 rounded-xl p-4">
              <div className="text-green-700 font-bold text-lg">$5 Gift Card</div>
              <div className="text-green-600 text-sm mt-2">Earn at 200 points</div>
              <div className="w-full bg-green-200 rounded-full h-2 mt-3">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '60%' }}></div>
              </div>
              <div className="text-xs text-green-700 mt-2">120/200 points</div>
            </div>
            
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-xl p-4">
              <div className="text-blue-700 font-bold text-lg">Free Shipping</div>
              <div className="text-blue-600 text-sm mt-2">On next purchase</div>
              <div className="w-full bg-blue-200 rounded-full h-2 mt-3">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '30%' }}></div>
              </div>
              <div className="text-xs text-blue-700 mt-2">3/10 purchases</div>
            </div>
            
            <div className="bg-gradient-to-r from-purple-50 to-purple-100 border border-purple-200 rounded-xl p-4">
              <div className="text-purple-700 font-bold text-lg">Double Points</div>
              <div className="text-purple-600 text-sm mt-2">Next 7 days</div>
              <div className="w-full bg-purple-200 rounded-full h-2 mt-3">
                <div className="bg-purple-500 h-2 rounded-full" style={{ width: '80%' }}></div>
              </div>
              <div className="text-xs text-purple-700 mt-2">Starts in 2 days</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;