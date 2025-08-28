import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { FaEye, FaEyeSlash, FaTags, FaUserPlus, FaCheckCircle } from "react-icons/fa";
import toast from "react-hot-toast";
import register from "../../public/register.png";

const Register = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const terms = e.target.terms.checked;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;

    if (password.length < 6) {
      toast.error("Password should be 6 Characters");
      setIsLoading(false);
      return;
    }

    if (!passwordRegex.test(password)) {
      toast.error(
        "Password should contain at least one uppercase letter, one lowercase letter, and one number. It must be at least 6 characters long."
      );
      setIsLoading(false);
      return;
    }

    if (!terms) {
      toast.error("Please Accept Our Terms and Condition");
      setIsLoading(false);
      return;
    }

    createUser(email, password, name)
      .then((result) => {
        updateUserProfile({ displayName: name, photoURL: photo })
          .then(() => {
            toast.success("Account created successfully!");
            e.target.reset();
            navigate("/");
          })
          .catch((error) => {
            toast.error("Profile update failed");
          });
      })
      .catch((error) => {
        toast.error("Registration failed. Please try again.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF8F5] to-[#FFEFE8] flex items-center justify-center p-4 pb-10 pt-5">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Side - Benefits Content */}
        <div className="text-gray-800">
          <div className="flex items-center mb-6">
            <FaTags className="text-4xl text-[#E1713B] mr-3" />
            <h1 className="text-4xl font-bold">CouponHive</h1>
          </div>
          <h2 className="text-3xl font-bold mb-4">Join CouponHive Today</h2>
          <p className="text-gray-600 text-lg mb-8 max-w-md">
            Create an account and start saving with exclusive coupons and deals from your favorite brands.
          </p>
          
          <div className="space-y-4 mb-10">
            <div className="flex items-center">
              <div className="bg-green-100 p-2 rounded-full mr-4">
                <FaCheckCircle className="text-green-600 text-xl" />
              </div>
              <div>
                <p className="font-semibold">Access Exclusive Deals</p>
                <p className="text-gray-600 text-sm">Get coupons not available to guest users</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="bg-blue-100 p-2 rounded-full mr-4">
                <FaCheckCircle className="text-blue-600 text-xl" />
              </div>
              <div>
                <p className="font-semibold">Save Your Favorite Coupons</p>
                <p className="text-gray-600 text-sm">Bookmark coupons for quick access later</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="bg-purple-100 p-2 rounded-full mr-4">
                <FaCheckCircle className="text-purple-600 text-xl" />
              </div>
              <div>
                <p className="font-semibold">Earn Reward Points</p>
                <p className="text-gray-600 text-sm">Get points for every coupon you use</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl border-l-4 border-[#E1713B] shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Already a member?</h3>
            <p className="text-gray-600 mb-4">Sign in to access your saved coupons and deals</p>
            <Link to="/login" className="inline-block bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-lg transition-colors">
              Sign In Now
            </Link>
          </div>
        </div>

        {/* Right Side - Registration Form */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-orange-100">
          <div className="p-8">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#E1713B] rounded-full mb-4">
                <FaUserPlus className="text-2xl text-white" />
              </div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">Create an account</h1>
              <p className="text-gray-600">Please fill in your details to create an account</p>
            </div>

            <form onSubmit={handleRegister} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#E1713B] focus:border-transparent transition-all"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Photo URL
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="Paste your profile photo URL"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#E1713B] focus:border-transparent transition-all"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#E1713B] focus:border-transparent transition-all"
                  required
                />
              </div>
              
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Create a strong password"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#E1713B] focus:border-transparent transition-all"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-11 text-gray-500 hover:text-[#E1713B] transition-colors"
                >
                  {showPassword ? <FaEyeSlash className="text-lg" /> : <FaEye className="text-lg" />}
                </button>
                <p className="text-xs text-gray-500 mt-2">
                  Must contain at least 6 characters, one uppercase, one lowercase, and one number
                </p>
              </div>
              
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    name="terms"
                    type="checkbox"
                    className="focus:ring-[#E1713B] h-4 w-4 text-[#E1713B] border-gray-300 rounded"
                    required
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="terms" className="font-medium text-gray-700">
                    I accept the <a href="#" className="text-[#E1713B] hover:underline">Terms and Conditions</a>
                  </label>
                </div>
              </div>
              
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full py-3 px-4 rounded-lg font-semibold transition-all ${
                  isLoading 
                    ? "bg-gray-400 cursor-not-allowed" 
                    : "bg-[#E1713B] hover:bg-[#C75B2A] text-white shadow-md hover:shadow-lg"
                }`}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Creating Account...
                  </div>
                ) : (
                  "Create Account"
                )}
              </button>
            </form>

            <p className="text-center text-gray-600 mt-6">
              Already have an account?{" "}
              <Link to="/login" className="text-[#E1713B] hover:underline font-semibold">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;