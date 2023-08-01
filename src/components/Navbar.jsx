import React, { useState } from "react";
import { Link } from "react-router-dom";
import SchoolLogo from "../../public/assets/images/logo.svg";
import { Icon } from "@iconify/react";

function NavItem({ children, name, to }) {
  return (
    <div className="relative group">
      <button className="flex items-center gap-1 p-3  ">
        <Link to={to} className="text-2xl ">
          {name}
        </Link>
        <div className="mt-1">
          <Icon
            className="text-2xl transition-all group-hover:rotate-180"
            icon="material-symbols:keyboard-arrow-down-rounded"
          />
        </div>
      </button>
      <div className="absolute top-full right-0 bg-white p-4 w-48 whitespace-nowrap rounded-md shadow-lg z-[-1] opacity-0 group-hover:z-0 group-hover:opacity-100 delay-50 transition-opacity">
        <ul className="flex flex-col divide-y divide-gray-200 text-lg tracking-wider">
          {children}
        </ul>
      </div>
    </div>
  );
}

function Navbar() {
  return (
    <nav className="w-full h-24 bg-white flex text-bold items-center pl-4 text-xl fixed shadow-md z-[9999]">
      <Link to="/">
        <img src={SchoolLogo} className="w-28" />
      </Link>
      <div className="justify-end items-center flex w-full h-24 gap-16 pr-8">
        <Link to="/">
          <div>
            <button className="text-2xl relative after:absolute after:w-4 after:h-1 after:rounded-full after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:bg-blue-500">
              首页
            </button>
          </div>
        </Link>
        <NavItem name="关于我们" to="/about">
          <li className="px-2 py-3 pt-0">电协历史</li>
          <li className="px-2 py-3">我们的目标</li>
          <li className="px-2 py-3 pb-0">现任理事成员</li>
        </NavItem>
        <NavItem name="团队组织" to="/contributions">
          <li className="px-2 py-3 pt-0">纪律组</li>
          <li className="px-2 py-3">工作组</li>
          <li className="px-2 py-3 pb-0">学习组</li>
        </NavItem>
        <NavItem name="其他" to="/">
          <li className="px-2 py-3 pt-0">Others</li>
          <li className="px-2 py-3">Others</li>
          <li className="px-2 py-3 pb-0">Others</li>
        </NavItem>
      </div>
    </nav>
  );
}

export default Navbar;
