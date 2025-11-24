import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import ConnectFab from "../components/ConnectFab.jsx";

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-base-100 flex flex-col text-base-content">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <ConnectFab />
    </div>
  );
};

export default MainLayout;
