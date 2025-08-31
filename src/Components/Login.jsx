import { useContext, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash, FaTags, FaUsers, FaPiggyBank } from "react-icons/fa";
const google = "/google.png";
const user = "/user.png";

const Login = () => {
  const { signINUser, signInWithGoogle, loading, setLoading } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const emailRef = useRef();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (password.length < 6) {
      toast.error("Password should be at least 6 characters long");
      return;
    }

    setLoading(true);
    signINUser(email, password)
      .then(() => {
        toast.success("Welcome Back!");
        e.target.reset();
        navigate("/");
      })
      .catch(() => {
        toast.error("Incorrect email or password. Please try again.");
        setLoading(false);
      });
  };

  const handleGoogleSignIn = () => {
    setLoading(true);
    signInWithGoogle()
      .then(() => {
        navigate("/");
      })
      .catch(() => {
        toast.error("Unable to sign in with Google. Please try again.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleForgetPassword = () => {
    const email = emailRef.current.value;

    if (!email) {
      toast.error("Please provide a valid email address");
    } else {
      navigate('/forgetpassword', { state: { email } });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF8F5] to-[#FFEFE8] flex items-center justify-center p-4 pb-16 ">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Side - Welcome Content */}
        <div className="text-gray-800">
          <div className="flex items-center mb-6">
            <FaTags className="text-4xl text-[#E1713B] mr-3" />
            <h1 className="text-4xl font-bold">CouponHive</h1>
          </div>
          <h2 className="text-3xl font-bold mb-4">Welcome to CouponHive</h2>
          <p className="text-gray-600 text-lg mb-10 max-w-md">
            Your ultimate destination for exclusive coupons and savings. Join our community of smart shoppers and never pay full price again.
          </p>
          
          <div className="grid grid-cols-2 gap-6 mb-10">
            <div className="flex items-center">
              <div className="bg-[#E1713B] p-3 rounded-full mr-4">
                <FaUsers className="text-xl text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold">10K+</p>
                <p className="text-gray-600">Active Savers</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="bg-[#E1713B] p-3 rounded-full mr-4">
                <FaPiggyBank className="text-xl text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold">$50K+</p>
                <p className="text-gray-600">Total Savings</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl border-l-4 border-[#E1713B] shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Sign in to your account</h3>
            <p className="text-gray-600">Access your coupon dashboard and continue saving</p>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-orange-100">
          <div className="p-8">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#efedec] rounded-full mb-4">
                <img className="w-8 h-8" src={user} alt="User icon" />
              </div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome Back</h1>
              <p className="text-gray-600">Please enter your details to sign in</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  ref={emailRef}
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
                  placeholder="Enter your password"
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
                
                <div className="flex justify-end mt-2">
                  <button
                    type="button"
                    onClick={handleForgetPassword}
                    className="text-sm text-[#E1713B] hover:underline font-medium"
                  >
                    Forgot password?
                  </button>
                </div>
              </div>
              
              <button
                type="submit"
                disabled={loading}
                className={`w-full py-3 px-4 rounded-lg font-semibold transition-all ${
                  loading 
                    ? "bg-gray-400 cursor-not-allowed" 
                    : "bg-[#E1713B] hover:bg-[#C75B2A] text-white shadow-md hover:shadow-lg"
                }`}
              >
                {loading ? (
                  <div className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Signing in...
                  </div>
                ) : (
                  "Sign in"
                )}
              </button>
            </form>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or continue with</span>
              </div>
            </div>

            <button
              onClick={handleGoogleSignIn}
              disabled={loading}
              className="w-full flex items-center justify-center gap-3 py-3 px-4 bg-white text-gray-700 rounded-lg border border-gray-300 hover:border-gray-400 transition-colors font-medium shadow-sm"
            >
              <img className="w-5 h-5" src={google} alt="Google logo" />
              {loading ? "Loading..." : "Sign In with Google"}
            </button>

            <p className="text-center text-gray-600 mt-6">
              Don't have an account?{" "}
              <Link to="/register" className="text-[#E1713B] hover:underline font-semibold">
                Create an account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;