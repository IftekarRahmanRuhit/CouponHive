import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        toast.success("sign out successfull");
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
        <>
          <li>
            <NavLink to="/profile">Profile</NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">CuponHive</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <span>
                {" "}
                <div class="flex-none">
                  <div class="dropdown dropdown-end">
                    <div
                      tabindex="0"
                      class="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
                    ></div>
                  </div>
                  <div class="dropdown dropdown-end">
                    <div
                      tabindex="0"
                      role="button"
                      class="btn btn-ghost btn-circle avatar"
                    >
                      <div class="w-10 rounded-full">
                        <img
                          alt="Tailwind CSS Navbar component"
                          src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                        />
                      </div>
                    </div>
                    <ul
                      tabindex="0"
                      class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                    >
                      <div class="card-body">
                        <span class="text-lg font-bold"></span>
                        <span class="text-red-600">{user.email}</span>
                        <div class="card-actions">
                          <button
                            onClick={handleSignOut}
                            class="btn btn-primary btn-block"
                          >
                            Sign out
                          </button>
                        </div>
                      </div>
                    </ul>
                  </div>
                </div>
              </span>
            </>
          ) : (
            <>
            <Link className="btn btn-warning" to="/Register">Register</Link>
            <Link className="btn btn-secondary" to="/login">Login</Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
