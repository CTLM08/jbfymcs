import React from "react";
import SchoolLogo from "../../public/assets/images/logo.svg";
import { Icon } from "@iconify/react";
const Footer = () => {
  return (
    <div className="flex flex-col w-full">
      <div class="inline-flex items-center justify-center w-full">
        <hr class="w-64 h-1 my-8 bg-gray-500 border-0 rounded" />
        <div class="absolute px-4 -translate-x-1/2 bg-white left-1/2 ">
          <svg
            aria-hidden="true"
            class="w-5 h-5 text-gray-500"
            viewBox="0 0 24 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>

      <main className="flex flex-row p-5 items-center justify-between">
        <div>
          <img src={SchoolLogo} className="w-32" />
        </div>
        <div className="flex items-center">
          © 2022 ‒ 2023 <p className="text-[#577AF6]">新山宽柔中学电脑协会</p>{" "}
          版权所有
        </div>
        <div className="flex items-center gap-3">
          <a>
            <Icon
              icon="akar-icons:instagram-fill"
              className="text-3xl h-8 w-8"
            />
          </a>
          <a>
            <Icon
              icon="akar-icons:facebook-fill"
              className="text-3xl h-8 w-8"
            />
          </a>
          <a>
            <Icon icon="akar-icons:youtube-fill" className="text-3xl h-8 w-8" />
          </a>
        </div>
      </main>
    </div>
  );
};

export default Footer;