import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import MainPage from "./MainPage";
const HomePage = () => {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Navbar />
      <div className="flex-1">
        <div className="flex">
          <Sidebar />

          <div className="flex-1 px-14 -ml-30 ">
            <MainPage />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
