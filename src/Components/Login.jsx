import { useContext, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { auth } from "../Firebase/Firebase.init";
import loginbg from "../../public/login-bg.png";


const Login = () => {

  const { signINUser, signInWithGoogle, loading, setLoading } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const emailRef = useRef();
  const navigate = useNavigate()

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
      })

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
      navigate('/forgetpassword', { state: { email } })
    }
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse w-full">
        {/* Form Section */}
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleLogin} className="card-body">
            <h1 className="text-3xl font-bold text-center mb-4">Login Now!</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                ref={emailRef}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                className="input input-bordered"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 bottom-12"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
              <label className="label">
                <a
                  onClick={handleForgetPassword}
                  
                  className="label-text-alt link link-hover text-blue-500"
                >
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button
                className="btn btn-primary w-full"
                disabled={loading} // Disable button when loading
              >
                {loading ? "Loading..." : "Login"}
              </button>
            </div>
            <p className="text-center mt-4">
              Don't have an account?{" "}
              <Link to="/register" className="text-blue-500 underline">
                Register
              </Link>
            </p>
          </form>
          <div className="mt-6">
            <button
              onClick={handleGoogleSignIn}
              className="btn btn-outline w-full"
              disabled={loading} // Disable button when loading
            >
              {loading ? "Loading..." : "Sign In with Google"}
            </button>
          </div>
        </div>

        {/* Text and Image Section */}
        <div className="flex flex-col justify-center items-center text-center lg:text-left lg:w-1/2 space-y-6">
          <h1 className="text-5xl font-bold">Welcome Back!</h1>
          <p className="py-6">
            Login to access your account and continue exploring. Don’t have an
            account? Click the register button below to create one!
          </p>
          <img src={loginbg} alt="" className="max-w-full lg:max-w-md" />
        </div>
      </div>
    </div>
  );
};

export default Login;
