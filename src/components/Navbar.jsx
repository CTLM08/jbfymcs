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
      <div className="absolute top-full left-0 bg-white p-3 shadow-lg z-[-1] opacity-0 group-hover:z-0 group-hover:opacity-100 delay-50 transition-opacity">
        {children}
      </div>
    </div>
  );
}

function Navbar() {
  return (
    <nav className="w-full h-24 bg-white flex text-bold text-xl relative z-[9999]">
      <img src={SchoolLogo} className="w-32" />
      <div className="justify-center items-center flex w-full h-24 gap-8 ">
        <Link>
          {" "}
          <button href="/">
            <div className="text-2xl">首页</div>
          </button>
        </Link>
        <NavItem name="关于我们" to="/about">
          <ul>
            <li>电协历史</li>
            <li>电协历史</li>
            <hr
              style={{
                background: "#6F38C5",
                height: "1px",
                border: "none",
              }}
            />
            <li>我们的目标</li>
            <hr
              style={{
                background: "#6F38C5",
                height: "1px",
                border: "none",
              }}
            />
            <li>现任历史成员</li>
          </ul>
        </NavItem>
        <NavItem name="团队组织" to="/contributions">
          <ul>
            <li>纪律组</li>
            <hr
              style={{
                background: "#6F38C5",
                height: "1px",
                border: "none",
              }}
            />
            <li>工作组</li>
            <hr
              style={{
                background: "#6F38C5",
                height: "1px",
                border: "none",
              }}
            />
            <li>学习组</li>
          </ul>
        </NavItem>
        <NavItem name="其他" to="/">
          <ul>
            <li>Others</li>
            <hr
              style={{
                background: "#6F38C5",
                height: "1px",
                border: "none",
              }}
            />
            <li>Others</li>
            <hr
              style={{
                background: "#6F38C5",
                height: "1px",
                border: "none",
              }}
            />
            <li>Others</li>
          </ul>
        </NavItem>
      </div>
    </nav>
  );
}

export default Navbar;
