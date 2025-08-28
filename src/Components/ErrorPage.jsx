
import React from "react";
import { Link } from "react-router-dom";
import { FaExclamationTriangle, FaHome, FaSearch } from "react-icons/fa";

const ErrorPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF8F5] to-[#FFEFE8] flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-orange-100">
          <div className="p-8 text-center">
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-24 h-24 bg-red-100 rounded-full mb-6">
              <FaExclamationTriangle className="text-red-500 text-4xl" />
            </div>
            
            {/* Error Code */}
            <h1 className="text-8xl font-bold text-red-500 mb-2">404</h1>
            
            {/* Title */}
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Page Not Found
            </h2>
            
            {/* Description */}
            <p className="text-gray-600 text-lg mb-8 max-w-md mx-auto">
              Oops! The page you're looking for seems to have gone on a little adventure. 
              Don't worry, we'll help you find your way back to great deals!
            </p>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                to="/"
                className="inline-flex items-center justify-center px-6 py-3 bg-[#E1713B] hover:bg-[#C75B2A] text-white font-semibold rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <FaHome className="mr-2" />
                Go Home
              </Link>
              <button
                onClick={() => window.history.back()}
                className="inline-flex items-center justify-center px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold rounded-lg transition-all duration-300"
              >
                Go Back
              </button>
            </div>
            
            {/* Additional Help */}
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <p className="text-gray-700 mb-2 font-medium">Looking for something specific?</p>
              <div className="flex items-center justify-center">
                <div className="relative max-w-xs w-full">
                  <input
                    type="text"
                    placeholder="Search for coupons or brands..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E1713B] focus:border-transparent"
                  />
                  <FaSearch className="absolute left-3 top-3 text-gray-400" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Footer */}
          <div className="bg-gray-100 p-4 text-center">
            <p className="text-gray-600 text-sm">
              Need help? <a href="#" className="text-[#E1713B] hover:underline">Contact support</a>
            </p>
          </div>
        </div>
        
        {/* Brand Attribution */}
        <div className="text-center mt-6">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} CouponHive. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;