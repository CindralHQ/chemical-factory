import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="shadow-md w-full relative z-[9999]">
      {/* Drawer for Mobile */}
      <div className="drawer lg:hidden relative z-[9999]">
        <input id="nav-drawer" type="checkbox" className="drawer-toggle" />

        <div className="drawer-content relative z-[9999]">
          <div className="navbar bg-base-100 px-4 relative z-[9999]">
            {/* Mobile Menu Button */}
            <label htmlFor="nav-drawer" className="btn btn-ghost lg:hidden relative z-[9999]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </label>

            {/* Logo */}
            <div className="flex items-center gap-2 relative z-[9999]">
              <img
                src="https://img.icons8.com/?size=100&id=111565&format=png&color=000000"
                className="w-10 h-10"
                alt="Factory Logo"
              />
              <span className="text-xl font-bold">ChemFactory</span>
            </div>
          </div>
        </div>

        {/* Drawer Side Menu (Mobile) */}
        <div className="drawer-side relative z-[9999]">
          <label htmlFor="nav-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-64 bg-base-200 min-h-full text-lg relative z-[9999]">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>

            <li className="relative z-[9999]">
              <details>
                <summary>Products</summary>

                <ul className="relative z-[9999]">
                  <li className="relative z-[9999]">
                    <details>
                      <summary>Category 1</summary>
                      <ul className="relative z-[9999]">
                        <li><Link to="/products/cat1/sub1">Subcategory 1</Link></li>
                        <li><Link to="/products/cat1/sub2">Subcategory 2</Link></li>
                      </ul>
                    </details>
                  </li>

                  <li className="relative z-[9999]">
                    <details>
                      <summary>Category 2</summary>
                      <ul className="relative z-[9999]">
                        <li><Link to="/products/cat2/subA">Subcategory A</Link></li>
                        <li><Link to="/products/cat2/subB">Subcategory B</Link></li>
                      </ul>
                    </details>
                  </li>
                </ul>
              </details>
            </li>

            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>
      </div>

      {/* DESKTOP NAVBAR */}
      <div className="hidden lg:flex navbar bg-base-100 px-6 py-3 justify-between relative z-[9999]">

        {/* Left: Logo */}
        <div className="flex items-center gap-3 relative z-[9999]">
          <img
            src="https://img.icons8.com/?size=100&id=111565&format=png&color=000000"
            className="w-10 h-10"
            alt="Factory Logo"
          />
          <h1 className="text-xl font-bold">ChemFactory</h1>
        </div>

        {/* Right: Menu */}
        <ul className="menu menu-horizontal text-lg font-medium gap-4 relative z-[9999]">

          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>

          <li className="relative z-[9999]">
            <details className="relative z-[9999]">
              <summary>Products</summary>

              {/* MAIN DROPDOWN */}
              <ul className="p-2 bg-base-100 shadow rounded-box w-56 absolute z-[9999]">

                {/* Category 1 */}
                <li className="relative z-[9999]">
                  <details>
                    <summary>Category 1</summary>
                    <ul className="pl-4 absolute left-full top-0 bg-base-100 shadow rounded-box z-[9999]">
                      <li><Link to="/products/cat1/sub1">Subcategory 1</Link></li>
                      <li><Link to="/products/cat1/sub2">Subcategory 2</Link></li>
                    </ul>
                  </details>
                </li>

                {/* Category 2 */}
                <li className="relative z-[9999]">
                  <details>
                    <summary>Category 2</summary>
                    <ul className="pl-4 absolute left-full top-0 bg-base-100 shadow rounded-box z-[9999]">
                      <li><Link to="/products/cat2/subA">Subcategory A</Link></li>
                      <li><Link to="/products/cat2/subB">Subcategory B</Link></li>
                    </ul>
                  </details>
                </li>

              </ul>
            </details>
          </li>

          <li><Link to="/contact">Contact Us</Link></li>
        </ul>

      </div>
    </div>
  );
};

export default Navbar;
