import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import toast from "react-hot-toast";
import { FaUserCircle } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { LuLogIn } from "react-icons/lu";
import logo from "../../public/logo.png";

const Navbar = () => {
  const { user, signOutUser, loading } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        toast.success("Sign out successful");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-[#E1713B] font-semibold underline"
              : "text-black hover:text-[#E1713B] font-semibold"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/brands"
          className={({ isActive }) =>
            isActive
              ? "text-[#E1713B] font-semibold underline"
              : "text-black hover:text-[#E1713B] font-semibold"
          }
        >
          Brands
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-[#E1713B] font-semibold underline"
              : "text-black hover:text-[#E1713B] font-semibold"
          }
        >
          About us
        </NavLink>
      </li>
      {user && (
        <li>
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              isActive
                ? "text-[#E1713B] font-semibold underline "
                : "text-black hover:text-[#E1713B] font-semibold"
            }
          >
            Profile
          </NavLink>
        </li>
      )}
    </>
  );

  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <div className=" bg-base-100 w-full">
          <div className="text-center">
            <div className="text-center">
              <span className="loading loading-bars loading-md"></span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full mx-auto bg-blue-50 md:p-2 max-w-screen-2xl ">
      <div className="navbar w-full md:w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown lg:hidden">
            <button
              className="btn btn-ghost lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </button>

            {isMenuOpen && (
              <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                {links}
              </ul>
            )}
          </div>
          <Link
            to="/"
            className="btn btn-ghost text-2xl text-[#E1713B] font-bold flex justify-center items-center "
          >
            <img className="w-9 h-w-9 rounded-full" src={logo} alt="" />
            <p className=" text-lg md:text-2xl"> CouponHive</p>
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu-horizontal space-x-8">{links}</ul>
        </div>

        <div className="navbar-end">
          {user ? (
            <div className="flex-none">
              <div className="dropdown dropdown-end">
                <div
                  tabindex="0"
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    {user?.photoURL ? (
                      <img src={user.photoURL} alt="" />
                    ) : (
                      <p className="text-2xl">
                        <FaUserCircle />
                      </p>
                    )}
                  </div>
                </div>
                <ul
                  tabindex="0"
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                >
                  <div className="card-body p-2 w-full">
                    <span className="text-lg font-bold"></span>

                    <span className="text-gray-800 font-bold text-xl block overflow-hidden text-ellipsis whitespace-nowrap max-w-full text-center">
                      {user?.displayName}
                    </span>
                    <span className="text-gray-800 font-bold block overflow-hidden text-ellipsis whitespace-nowrap max-w-full text-center">
                      {user?.email}
                    </span>

                    <div className="card-actions">
                      <button
                        onClick={handleSignOut}
                        className="btn bg-[#E1713B] text-white hover:bg-orange-500 btn-block w-full mt-3"
                      >
                        Sign out
                      </button>
                    </div>
                  </div>
                </ul>
              </div>
            </div>
          ) : (
            <>
              <Link
                className="btn mr-2 bg-[#E1713B] text-white hover:text-[#E1713B] hidden md:flex"
                to="/Register"
              >
                <FaUser /> sign up
              </Link>
              <Link
                className="btn font-bold bg-[#E1713B] text-white hover:text-[#E1713B]"
                to="/login"
              >
                <LuLogIn />
                Login
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
