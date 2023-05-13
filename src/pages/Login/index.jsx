import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
const Login = () => {
  return (
    <div className="w-full flex items-center justify-center ">
      <div className="w-96 p-5 bg-gray-50   rounded-lg">
        <Link to="/">
          <button className="flex items-center">
            <Icon icon="material-symbols:arrow-back" />
            返回首页
          </button>
        </Link>
        <main className="w-full flex justify-center items-center flex-col p-5 gap-4">
          <h1 className="text-4xl special-font">登录账号</h1>
          <button className="flex flex-row items-center justify-center mt-2 h-8 rounded-md shadow-md bg-red-500 p-5 w-full gap-3">
            <p className="text-white flex text-xl bruh">使用谷歌登录</p>
          </button>
          <p className="text-sm flex">
            只有<p className="text-[#577AF6] font-bold">理事</p>可登录
          </p>
        </main>
      </div>
    </div>
  );
};

export default Login;
