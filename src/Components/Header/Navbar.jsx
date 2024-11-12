import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ThemeContext } from '../Context/ContextAPI';
import { CgProfile } from 'react-icons/cg';
import { IoMdPersonAdd } from 'react-icons/io';

const Navbar = () => {
  const { Users, SingOutUser } = useContext(ThemeContext);
  const [LogoutButton, setLogoutButton] = useState(false);

  const handleSignOut = () => {
    SingOutUser()
      .then(() => {
        console.log('Your account successfully log out');
      })
      .catch(error => {
        console.log('ERROR', error.message);
      });
  };

  const Links = (
    <div className="flex gap-3 md:gap-7">
      <NavLink to="/">Home</NavLink>
      {/* <NavLink>User</NavLink> */}
      {Users && (
        <>
          <NavLink to="/Others">Others</NavLink>
          <NavLink to="/About">About</NavLink>
        </>
      )}
      <NavLink to="/Login">Login</NavLink>
      <NavLink to="/Registration">Registration</NavLink>
    </div>
  );

  return (
    <nav className="navbar bg-gray-300">
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3  p-2 px-4 shadow"
          >
            {Links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl font-bold text-[#d8ae2d]">Web</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{Links}</ul>
      </div>
      <div className="navbar-end flex gap-2 relative">
        <a
          onClick={() => setLogoutButton(!LogoutButton)}
          className="btn btn-outline btn-warning"
        >
          Profile
        </a>

        <div
          className={`absolute z-50 ${
            LogoutButton ? 'top-14' : '-top-80'
          } p-2 shadow-lg bg-yellow-50 w-[200px] flex flex-col gap-3 h-[150px]`}
        >
          <small className="text-yellow-500 flex gap-1 items-center flex-grow">
            <CgProfile></CgProfile> {Users?.email}
          </small>

          <Link to="/Login">
            <button
              onClick={handleSignOut}
              className={`btn btn-sm btn-warning text-white mb-0 w-full ${
                Users && 'hidden'
              }`}
            >
              {!Users && 'Login'}
            </button>
          </Link>
          <Link to="/Login">
            <button
              className={`btn btn-sm btn-warning text-white mb-0 w-full my-1 flex items-center gap-1 ${
                !Users && 'hidden'
              }`}
            >
              <IoMdPersonAdd />
              <p className="text-xs"> Log into another account</p>
            </button>
          </Link>
          <Link className="/">
            <button
              onClick={handleSignOut}
              className={`btn btn-sm btn-warning text-white mb-0 w-full ${
                !Users && 'hidden'
              }`}
            >
              {Users && 'Log out'}
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
