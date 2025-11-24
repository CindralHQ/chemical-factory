import React from "react";
import { Link, NavLink } from "react-router-dom";
import siteConfig from "../config/siteConfig.js";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Products", to: "/products" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-base-200 bg-base-100/95 backdrop-blur">
      <div className="navbar max-w-6xl mx-auto px-4">
        <div className="navbar-start">
          <div className="dropdown">
            <label
              tabIndex={0}
              className="btn btn-ghost lg:hidden"
              aria-label="Open navigation menu"
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
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow bg-base-100 rounded-box w-60 gap-1"
            >
              {navLinks.map((item) => (
                <li key={item.to}>
                  <NavLink to={item.to} className="capitalize">
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <Link to="/" className="flex items-center gap-3 font-bold text-xl">
            <div className="h-10 w-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold">
              {siteConfig.company.initials}
            </div>
            {siteConfig.company.name}
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-2 font-medium">
            {navLinks.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `rounded-lg px-4 py-2 ${
                      isActive ? "bg-primary/10 text-primary" : ""
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-end">
          <Link to="/products" className="btn btn-primary">
            Get Quote
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
