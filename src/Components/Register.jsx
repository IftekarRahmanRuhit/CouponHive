import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import toast from "react-hot-toast";



const Register = () => {

    const { createUser, updateUserProfile,} = useContext(AuthContext);
    const navigate = useNavigate()

   const [showPassword, setShowPassword] = useState(false);


    const handleRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name,email,password);

        const terms = event.target.terms.checked
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;


        if (password.length < 6) {
          toast.error("Password should be 6 Characters")
          return;
        }


        if (!passwordRegex.test(password)) {
          toast.error(
            "Password should contain at least one uppercase letter, one lowercase letter, and one number. It must be at least 6 characters long."
          );
          return;
        }

        
        if(!terms){
          toast.error('Please Accept Our Terms and Condition')
          return;
        }

        

        createUser(email,password,name)
        .then(result =>{
          console.log(result.user)
          updateUserProfile({displayName:name , photoURL:photo})
          .then(()=>{
            e.target.reset()
            navigate('/')
          })
          .catch(error =>{
            console.log(error)
          })
        })
        .catch(error => {
          console.log(error.message)
        })
      

    
       


      };


    return (
        <div>
        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content flex-col ">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl font-bold">Register Now!</h1>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <form onSubmit={handleRegister}  className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="input input-bordered"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo</span>
                  </label>
                  <input
                    type="text"
                    name="photo"
                    placeholder="photo url"
                    className="input input-bordered"
                    required
                  />
                </div>



                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
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
            
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>

            <div className="form-control">
              <label className="label justify-start gap-3 cursor-pointer ">
                <input type="checkbox" name = 'terms' className="checkbox mt-2" />
                <span className="label-text mt-2">
                  Accept Our Terms and Condition.
                </span>
              </label>
            </div>

                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-warning">Register</button>
                </div>
                <p className="text-center">
                  Already have an account?{" "}
                  <Link to="/login" className="text-blue-500 underline">
                    Login
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Register;