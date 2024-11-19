import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import toast from "react-hot-toast";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const { user, signOutUser, loading } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        toast.success("Sign out successful");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/brands">Brands</NavLink>
      </li>
      <li>
        <NavLink to="/about">About us</NavLink>
      </li>
      {user && (
        <li>
          <NavLink to="/profile">Profile</NavLink>
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
    <div className="w-full mx-auto bg-blue-50">
      <div className="navbar w-11/12 mx-auto">
        <div className="navbar-start">
          {/* Hamburger Icon for Mobile */}
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
          <a className="btn btn-ghost text-xl">CuponHive</a>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
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

                    <span className="text-red-600 block overflow-hidden text-ellipsis whitespace-nowrap max-w-full">
                      {user?.displayName}
                    </span>
                    <span className="text-red-600 block overflow-hidden text-ellipsis whitespace-nowrap max-w-full">
                      {user?.email}
                    </span>

                    <div className="card-actions">
                      <button
                        onClick={handleSignOut}
                        className="btn btn-primary btn-block w-full"
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
              <Link className="btn btn-warning" to="/Register">
                Register
              </Link>
              <Link className="btn btn-secondary" to="/login">
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
