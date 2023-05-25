import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import { signInWithGoogle } from "../../firebase.config";
const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full flex items-center justify-center ">
      <div className="w-96 p-5 bg-gray-100   rounded-lg shadow-md">
        <Link to="/">
          <button className="flex items-center">
            <Icon icon="material-symbols:arrow-back" />
            返回首页
          </button>
        </Link>
        <main className="w-full flex justify-center items-center flex-col p-5 gap-4">
          <h1 className="text-4xl    special-font">登录账号</h1>

          <div className="w-full">
            <p className="text-sm flex">
              使用<p className="text-[#577AF6] font-bold">谷歌</p>登录
            </p>
            <button
              className="flex flex-row items-center justify-center mt-2 h-8 rounded-md shadow-md bg-red-500 p-5 w-full gap-3"
              onClick={() => signInWithGoogle(navigate)}
            >
              <p className="text-white flex text-xl bruh">使用谷歌登录</p>
            </button>
          </div>
          <p className="text-sm flex">
            只有<p className="text-[#577AF6] font-bold">理事</p>可登录
          </p>
        </main>
      </div>
    </div>
  );
};

export default Login;
