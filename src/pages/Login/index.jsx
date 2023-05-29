import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import { signInWithGoogle, signOut } from "../../firebase.config";
import { appContext } from "../../App";
const Login = () => {
  const navigate = useNavigate();
  const { uid, user } = useContext(appContext);
  return (
    <div className="w-full flex items-center justify-center flex-1 flex-col py-24">
      {!user ? (
        <div className="w-1/2 p-5 bg-gray-100   rounded-lg shadow-md">
          <Link to="/">
            <button className="flex items-center">
              <Icon icon="material-symbols:arrow-back" />
              返回首页
            </button>
          </Link>
          <div className="w-full h-full flex justify-between items-center flex-col p-5 gap-4">
            <div className="flex flex-col items-center gap-4">
              <h1 className="text-4xl special-font">登录账号</h1>

              <p className="text-sm flex text-center">
                使用<p className="text-[#577AF6] font-bold">谷歌</p>登录, 只有
                <p className="text-[#577AF6] font-bold">理事</p>可登录
              </p>
            </div>
            <button
              className="flex flex-row items-center justify-center mt-2 h-14 rounded-md shadow-md bg-red-500 p-5 w-full gap-3"
              onClick={() => signInWithGoogle(navigate)}
            >
              <p className="text-white flex text-xl bruh">使用谷歌登录</p>
            </button>
          </div>
        </div>
      ) : (
        <div className="w-96 p-5 bg-gray-100   rounded-lg shadow-md">
          <div className="text-4xl  special-font w-full text-center">
            欢迎,来到电脑协会
          </div>
          <div>
            <Link to="/admin">
              <button className="w-full special-font text-xl mt-5 bg-[#577AF6] text-white flex flex-row items-center justify-center h-8 rounded-md shadow-md p-5">
                去到管理界面
              </button>
            </Link>
            <p className="text-sm flex mt-1">
              调整<p className="text-[#577AF6] font-bold">理事</p>
            </p>
            <button
              onClick={() => signOut()}
              className="w-full special-font text-xl mt-2 bg-red-500 text-white flex flex-row items-center justify-center h-8 rounded-md shadow-md p-5"
            >
              登出
            </button>
            <p className="text-sm flex mt-1">
              将失去<p className="text-red-500 font-bold">权力</p>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
