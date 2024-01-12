import React, { useState } from "react";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import MainPage from "./MainPage";
const HomePage = () => {
  const [isCategory1Open, setCategory1Open] = useState(false);

  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex-1">
        <div className="flex">
          <Sidebar />

          <div className="flex-1 ">
            <MainPage />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
