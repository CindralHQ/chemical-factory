import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#0f1216] text-gray-300 border-t border-gray-700">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 px-6 py-6">

        {/* Left side */}
        <div className="flex items-center gap-3">
          {/* Logo / Icon */}
          <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M14.31 8l5.74 9.94" />
              <path d="M9.69 8h11.48" />
              <path d="M7.38 12l5.74-9.94" />
              <path d="M9.69 16l-5.74-9.94" />
            </svg>
          </div>

          {/* Copyright */}
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} — All rights reserved
          </p>
        </div>

        {/* Right side social links */}
        <div className="flex gap-6 text-gray-400">
          <a href="#" className="hover:text-purple-400 transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M24 4.56a9.83 9.83 0 0 1-2.83.78 4.93 4.93 0 0 0 2.16-2.71c-.95.56-2 .97-3.13 1.19A4.92 4.92 0 0 0 16.68 3c-2.72 0-4.92 2.2-4.92 4.92 0 .39.04.76.12 1.12C7.73 8.85 4.1 6.89 1.67 3.9a4.93 4.93 0 0 0-.66 2.47c0 1.7.86 3.2 2.17 4.08a4.9 4.9 0 0 1-2.23-.62v.06c0 2.38 1.7 4.37 3.95 4.82a4.94 4.94 0 0 1-2.22.08 4.93 4.93 0 0 0 4.6 3.42A9.87 9.87 0 0 1 0 19.54a13.93 13.93 0 0 0 7.56 2.22c9.05 0 14.01-7.5 14.01-14v-.64A9.93 9.93 0 0 0 24 4.56z" />
            </svg>
          </a>

          <a href="#" className="hover:text-purple-400 transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
            </svg>
          </a>

          <a href="#" className="hover:text-purple-400 transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.378 14.192 5 15.115 5H18V0h-3.808C10.596 0 9 1.583 9 4.615V8z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
