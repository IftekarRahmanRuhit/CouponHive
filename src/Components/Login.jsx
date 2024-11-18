

import { useContext, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { auth } from "../Firebase/Firebase.init";
import { sendPasswordResetEmail } from "firebase/auth";

const Login = () => {
    const navigate = useNavigate();
    const { signINUser, signInWithGoogle } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const emailRef = useRef();

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        if (password.length < 6) {
            toast.error("Password should be 6 Characters")
            return;
          }

        signINUser(email, password)
            .then(result => {
                console.log(result.user, 'sign in successful');
                toast.success("Wellcome Back!!");
                e.target.reset();
                navigate('/');
            })
            .catch(error => {
                console.log(error.message);
                toast.error("Password or email might be wrong. Please try again.");

            });
    };

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user);
                navigate('/');
            })
            .catch(error => {
                console.log(error.message);
                toast.error("Password or email might be wrong. Please try again.");
            });
    };

    const handleForgetPassword =()=>{

        const email = emailRef.current.value
    
        if(!email){
          toast.error('Please provide a valid email address')
        }
        else{
          sendPasswordResetEmail(auth,email)
          .then(()=>{
        toast.success('Password Reset Email Sent, Please Check your email')


          })
        }
    
      }









    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-4xl font-bold">Login now!</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="email"
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
              placeholder="password"
              className="input input-bordered"
            />
            <button
             type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="btn btn-xs absolute right-4 top-12"
            >
              {/* <FaEye /> */}
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
                            <label className="label">
                                <a onClick={handleForgetPassword} href="#" className="label-text-alt link link-hover">
                                    Forgot password?
                                </a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <p className="text-center">Don't have an account? <Link to='/register' className="text-blue-500 underline">Register</Link></p>
                    </form>
                    {/* Updated Google Sign In Button */}
                    <div>
                        <button onClick={handleGoogleSignIn} className="btn w-full">Sign In with Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;