import React from "react";
import SchoolLogo from "../../public/assets/images/logo.svg";
import { Icon } from "@iconify/react";
const Footer = () => {
  return (
    <div className="flex flex-col w-full px-12">
      <div className="flex flex-row items-center justify-between">
        <div>
          <img src={SchoolLogo} className="w-24" />
        </div>
        <div className="flex items-center gap-1 text-sm">
          © 2022 ‒ 2023{" "}
          <span className="text-blue-500">新山宽柔中学电脑协会</span>
          {"  "}
          版权所有
        </div>
        <div className="flex items-center gap-6">
          <a href="https://instagram.com/fymcs_jb?igshid=MzRlODBiNWFlZA==">
            <Icon icon="uil:instagram" className="w-5 h-5" />
          </a>
          <a>
            <Icon icon="uil:facebook" className="w-5 h-5" />
          </a>
          <a>
            <Icon icon="uil:youtube" className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
