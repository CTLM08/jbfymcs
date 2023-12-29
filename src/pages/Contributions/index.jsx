import React from "react";
import team from "./team";
const Contirbutionos = () => {
  return (
    <div className="">
      <div
        style={{
          backgroundImage:
            "url('https://cdn.discordapp.com/attachments/995168654855520316/1106859870277341194/workplace-g15d0884b8_1920_1.png')",
        }}
        className="flex items-center justify-center  h-36  w-full bg-cover bg-center bg-no-repeat bg-[#577AF6BB] bg-blend-multiply bg-[center_top_-31rem]"
      >
        <p className="text-center special-font text-5xl text-white">
          电脑协会 官方网站 开发团队
        </p>
      </div>
      <div className="w-full flex flex-col justify-center items-center gap-28 p-5">
        {team.map((e) => (
          <div className="flex justify-center items-center flex-col">
            <h1 className="text-4xl special-font text-[#577AF6]">{e.title}</h1>
            <div className="gap-2 flex flex-col mt-3 text-xl">
              {e.student.map((x) => (
                <div className="flex flex-row gap-9 ">
                  <div className="flex justify-center items-center text-center w-32 text-[#9CA3AF]">
                    {x.class}
                  </div>
                  <div className="flex justify-center items-center text-center w-32 font-bold">
                    {x.name}
                  </div>
                  <div className="flex justify-center items-center text-center w-32 text-[#9CA3AF]">
                    {x.num}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contirbutionos;
