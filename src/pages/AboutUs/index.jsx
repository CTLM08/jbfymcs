import React from "react";
import Navbar from "../../Components/Navbar";
import History from "./Components/History";
import Tujuan from "./Components/Tujuan";
import DuaCore from "./Components/DuaCore";

const AboutUs = () => {
  return (
    <div className="p-[127px]  flex flex-col justify-center items-center w-full gap-2   ">
      <History />
      <Tujuan />
      <DuaCore />
    </div>
  );
};

export default AboutUs;
