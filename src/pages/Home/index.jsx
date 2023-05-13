import React from "react";
import { Fade } from "react-slideshow-image";
import Image1 from "../../../public/assets/images/1.jpg";
import { Icon } from "@iconify/react";
import Logo from "../../../public/assets/images/logo.svg";

const slideImages = [
  {
    url: Image1,
    offset: "230%",
    caption: "欢迎来到新山宽柔中学电脑协会",
    caption2: "Welcome to Micro Computer Society",
  },
  {
    url: "/assets/images/2.jpg",
    caption: "欢迎来到新山宽柔中学电脑协会",
    caption2: "Welcome to Micro Computer Society",
  },
  {
    url: "/assets/images/3.jpg",
    offset: "230%",
    caption: "欢迎来到新山宽柔中学电脑协会",
    caption2: "Welcome to Micro Computer Society",
  },
];

const Slideshow = () => {
  return (
    <div className="slide-container relative">
      <Fade
        transitionDuration={500}
        prevArrow={
          <Icon icon="uil:angle-left" className="w-12 h-12 text-white ml-4" />
        }
        nextArrow={
          <Icon icon="uil:angle-right" className="w-12 h-12 text-white mr-4" />
        }
        indicators={(idx) => (
          <div className="w-4 h-1 rounded-full bg-white/50" />
        )}
      >
        {slideImages.map((slideImage, index) => (
          <div key={index}>
            <div
              className="flex items-center justify-center bg-cover h-96 bg-black/40 bg-blend-multiply z-0"
              style={{
                backgroundImage: `url(${slideImage.url})`,
                backgroundPositionY: slideImage.offset,
              }}
            >
              <span className="text-6xl special-font text-white drop-shadow-lg text-center">
                {slideImage.caption}
                {slideImage.caption2 && (
                  <>
                    <br />
                    <span className="text-4xl">{slideImage.caption2}</span>
                  </>
                )}
              </span>
            </div>
          </div>
        ))}
      </Fade>
    </div>
  );
};

const Home = () => {
  return (
    <div>
      <Slideshow />
      <section className="flex flex-col items-center py-24">
        <span className="mb-4 text-2xl font-medium tracking-widest uppercase text-blue-500">
          MCS Logo
        </span>
        <h2 className="text-6xl special-font">团徽 & 意义</h2>
        <div className="flex w-full px-24 pl-56 gap-16">
          <img src={Logo} alt="MCS Logo" className="w-1/2" />
          <div className="w-1/2 flex flex-col justify-center">
            <p className="text-4xl special-font text-blue-500">
              蓝色<span>（Blue）</span>
            </p>
            <p className="text-lg tracking-wider mt-4 ml-1">
              团结一致, 奋发图强
            </p>
            <p className="text-4xl special-font text-red-500 mt-8">
              红色<span>（Red）</span>
            </p>
            <p className="text-lg tracking-wider mt-4 ml-1">友爱, 温馨</p>
            <p className="text-4xl special-font text-gray-200 mt-8">
              白色<span>（White）</span>
            </p>
            <p className="text-lg tracking-wider mt-4 ml-1">美好未来</p>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center pb-24">
        <span className="mb-4 text-2xl font-medium tracking-widest uppercase text-blue-500">
          Work Group
        </span>
        <h2 className="text-6xl special-font">工作组</h2>
      </section>
    </div>
  );
};

export default Home;
