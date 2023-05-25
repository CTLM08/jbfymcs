import React from "react";
import { Fade } from "react-slideshow-image";
import { Icon } from "@iconify/react";
import Logo from "../../../public/assets/images/logo.svg";
import { Link } from "react-router-dom";

const slideImages = [
  {
    url: "/assets/images/4.jpg",
    offset: "220%",
    caption: "欢迎来到新山宽柔中学电脑协会",
    caption2: "Welcome to Micro Computer Society",
  },
  {
    url: "/assets/images/1.jpg",
    offset: "230%",
    caption: "欢迎来到新山宽柔中学电脑协会",
    caption2: "Welcome to Micro Computer Society",
  },
  {
    url: "/assets/images/2.jpg",
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
      <section
        className="flex flex-col items-center py-24 bg-no-repeat bg-center bg-[length:100%] bg-white/95 bg-blend-overlay"
        style={{
          backgroundImage: `url(/assets/images/logo.svg)`,
        }}
      >
        <div className="flex flex-col items-center backdrop-blur-sm">
          <span className="mb-4 text-2xl font-medium tracking-widest uppercase text-blue-500">
            Our Logo
          </span>
          <h2 className="text-6xl special-font">团徽 & 意义</h2>
          <div className="flex w-full px-24 pl-56 gap-16">
            <img src={Logo} alt="MCS Logo" className="w-1/2" />
            <div className="w-1/2 flex flex-col justify-center">
              <p className="text-4xl special-font text-blue-500 drop-shadow-[1px_2px_1px_rgb(0_0_0/0.2)]">
                蓝色<span>（Blue）</span>
              </p>
              <p className="text-lg tracking-wider mt-4 ml-1">
                团结一致, 奋发图强
              </p>
              <p className="text-4xl special-font text-red-500 mt-8 drop-shadow-[1px_2px_1px_rgb(0_0_0/0.2)]">
                红色<span>（Red）</span>
              </p>
              <p className="text-lg tracking-wider mt-4 ml-1">友爱, 温馨</p>
              <p className="text-4xl special-font text-gray-200 mt-8 drop-shadow-[1px_2px_1px_rgb(0_0_0/0.2)]">
                白色<span>（White）</span>
              </p>
              <p className="text-lg tracking-wider mt-4 ml-1">美好未来</p>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center pb-24 px-64">
        <span className="mb-4 text-2xl font-medium tracking-widest uppercase text-blue-500">
          Work Group
        </span>
        <h2 className="text-6xl special-font">工作组</h2>
        <div className="w-8 h-1 rounded-sm bg-blue-500 mt-6 mb-12" />
        <div className="grid grid-cols-2 gap-8">
          <div className="flex flex-col items-center shadow-lg rounded-lg p-8 border-t-4 border-blue-500">
            <img
              src="https://casatraining.id/wp-content/uploads/2022/04/general-affair2.jpg"
              alt="General Affair"
              className="h-44 mb-4"
            />
            <h3 className="text-4xl special-font mt-4">总务组</h3>
            <p className="text-lg tracking-wider mt-4 text-gray-400 font-normal text-center">
              负责协会的日常事务，包括协会的行政工作，财务管理，协会的活动策划与组织，以及协会的宣传工作。
            </p>
            <Link
              to="/general-affair"
              className="mt-6 w-full py-4 -pr-1 bg-blue-500 justify-center rounded-md shadow-md flex items-center text-white text-lg"
            >
              了解更多
              <Icon icon="uil:arrow-right" className="w-6 h-6 ml-2" />
            </Link>
          </div>
          <div className="flex flex-col items-center shadow-lg rounded-lg p-8 border-t-4 border-blue-500">
            <img
              src="https://quizizz.com/media/resource/gs/quizizz-media/quizzes/2f31402a-2a0c-4667-a745-a4cdd1a2068a"
              alt="Recreation"
              className="h-44 mb-4"
            />
            <h3 className="text-4xl special-font mt-4">康乐组</h3>
            <p className="text-lg tracking-wider mt-4 text-gray-400 font-normal text-center">
              负责协会的康乐活动，包括协会的户外活动，以及协会的户内活动，宗旨为让会员们在学习之余，能够放松身心，享受生活。
            </p>
            <Link
              to="/general-affair"
              className="mt-6 w-full py-4 -pr-1 bg-blue-500 justify-center rounded-md shadow-md flex items-center text-white text-lg"
            >
              了解更多
              <Icon icon="uil:arrow-right" className="w-6 h-6 ml-2" />
            </Link>
          </div>
          <div className="flex flex-col items-center shadow-lg rounded-lg p-8 border-t-4 border-blue-500">
            <img
              src="https://www.lisedunetwork.com/wp-content/uploads/2014/02/Types-of-Information.jpg"
              alt="Information"
              className="w-full h-44 object-contain mb-4"
            />
            <h3 className="text-4xl special-font mt-4">资料组</h3>
            <p className="text-lg tracking-wider mt-4 text-gray-400 font-normal text-center">
              负责协会的资料整理，包括协会的资料收集，资料整理，资料的存档，以及协会的资料的传递。
            </p>
            <Link
              to="/general-affair"
              className="mt-6 w-full py-4 -pr-1 bg-blue-500 justify-center rounded-md shadow-md flex items-center text-white text-lg"
            >
              了解更多
              <Icon icon="uil:arrow-right" className="w-6 h-6 ml-2" />
            </Link>
          </div>
          <div className="flex flex-col items-center shadow-lg rounded-lg p-8 border-t-4 border-blue-500">
            <img
              src="https://cdn-icons-png.flaticon.com/512/420/420435.png"
              alt="News"
              className="h-44 mb-4"
            />
            <h3 className="text-4xl special-font mt-4">快讯组</h3>
            <p className="text-lg tracking-wider mt-4 text-gray-400 font-normal text-center">
              负责协会的新闻报道，包括协会的新闻收集，新闻整理，新闻的发布，以及协会的新闻的传递。
            </p>
            <Link
              to="/general-affair"
              className="mt-6 w-full py-4 -pr-1 bg-blue-500 justify-center rounded-md shadow-md flex items-center text-white text-lg"
            >
              了解更多
              <Icon icon="uil:arrow-right" className="w-6 h-6 ml-2" />
            </Link>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center pb-24 px-64">
        <span className="mb-4 text-2xl font-medium tracking-widest uppercase text-blue-500">
          Study Group
        </span>
        <h2 className="text-6xl special-font">学习组</h2>
        <div className="w-8 h-1 rounded-sm bg-blue-500 mt-6 mb-12" />
        <div className="grid gap-8">
          <div className="flex items-center">
            <div>
              <span className="text-blue-500 text-sm font-medium tracking-[0.15em] ml-1">
                APP
              </span>
              <h3 className="text-4xl special-font mt-1">程式开发小组</h3>
              <p className="text-lg tracking-wider mt-4 text-gray-400 font-normal text-left">
                共同学习编程技术、Web开发、手机应用程式开发等。初学者与开发者欢迎加入，一起探索无限的学习机会！
              </p>
              <Link
                to="/general-affair"
                className="mt-4 text-blue-500 flex items-center text-lg"
              >
                了解更多
                <Icon icon="uil:angle-right" className="w-6 h-6 ml-2" />
              </Link>
            </div>
            <img
              className="h-64 aspect-[3/2] mb-4 rounded-lg ml-8 shadow-md"
              src="https://images.theconversation.com/files/479421/original/file-20220816-10908-uvh62x.jpg?ixlib=rb-1.1.0&rect=4%2C5%2C994%2C497&q=45&auto=format&w=668&h=324&fit=crop"
            />
          </div>
          <div className="flex items-center">
            <img
              className="h-64 aspect-[3/2] mb-4 rounded-lg mr-8 shadow-md"
              src="https://www.thongguan.com/wp-content/uploads/2022/03/3d-printer-filament.jpeg"
            />
            <div>
              <span className="text-blue-500 text-sm font-medium tracking-[0.15em] ml-1">
                BLENDER
              </span>
              <h3 className="text-4xl special-font mt-1">3D建模小组</h3>
              <p className="text-lg tracking-wider mt-4 text-gray-400 font-normal text-left">
                以3D建模为主，学习3D建模的基础知识，以及3D建模的软件的使用，以及3D建模的技巧。
              </p>
              <Link
                to="/general-affair"
                className="mt-4 text-blue-500 flex items-center text-lg"
              >
                了解更多
                <Icon icon="uil:angle-right" className="w-6 h-6 ml-2" />
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <div>
              <span className="text-blue-500 text-sm font-medium tracking-[0.15em] ml-1">
                MAKER
              </span>
              <h3 className="text-4xl special-font mt-1">创客小组</h3>
              <p className="text-lg tracking-wider mt-4 text-gray-400 font-normal text-left">
                探索3D打印、电子制作、机器人等创客技术。合作学习、分享创意和项目实践，一起创造未来！
              </p>
              <Link
                to="/general-affair"
                className="mt-4 text-blue-500 flex items-center text-lg"
              >
                了解更多
                <Icon icon="uil:angle-right" className="w-6 h-6 ml-2" />
              </Link>
            </div>
            <img
              className="h-64 aspect-[3/2] mb-4 rounded-lg ml-8 shadow-md"
              src="https://www.playwood.it/site/assets/files/1065/makersmanual-keytakeaways11603_n.636x0-is-pid3560.jpg"
            />
          </div>
          <div className="flex items-center">
            <img
              className="h-64 aspect-[3/2] mb-4 rounded-lg mr-8 shadow-md"
              src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2016/03/computer-with-stylus.jpg?auto=format&q=60&w=1830&h=1220&fit=crop&crop=faces"
            />
            <div>
              <span className="text-blue-500 text-sm font-medium tracking-[0.15em] ml-1">
                CG
              </span>
              <h3 className="text-4xl special-font mt-1">电绘小组</h3>
              <p className="text-lg tracking-wider mt-4 text-gray-400 font-normal text-left">
                探索数字绘画技术，包括Photoshop、Procreate等工具。互动学习、分享作品和技巧。
              </p>
              <Link
                to="/general-affair"
                className="mt-4 text-blue-500 flex items-center text-lg"
              >
                了解更多
                <Icon icon="uil:angle-right" className="w-6 h-6 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
