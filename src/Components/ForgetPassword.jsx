import React, { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import toast from "react-hot-toast";

const ForgetPassword = () => {

    const location = useLocation();
    const { signOutUser } = useContext(AuthContext);
  
    const [email, setEmail] = useState(location.state?.email || "");
  
    const handleResetPassword = () => {
      if (!email) {
        toast.error("Please provide a valid email address.");
        return;
      }
  
      signOutUser()
        .then(() => {
          toast.success("You have been logged out.");

          setTimeout(() => {
            window.location.href = "https://mail.google.com";
          }, 2000);
        })
        .catch(() => {
          toast.error("An error occurred while logging out.");
        });
    };

    
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-semibold text-center mb-4">Reset Password</h2>
          <p className="text-gray-600 text-center mb-6">
            Enter your email address below to reset your password.
          </p>
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Email Address</span>
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input input-bordered w-full"
              placeholder="Enter your email"
            />
          </div>
          <button
            onClick={handleResetPassword}
            className="btn btn-primary w-full"
          >
            Reset Password
          </button>
        </div>
      </div>
    );
};

export default ForgetPassword;