import React from "react";

const Tujuan = () => {
  const tujuan = [
    {
      color: "bg-[#577AF6]",
      text: "text-white",
      title: "基础编程技巧",
      description:
        "为了让电协会员们的程度更上一层楼，所有会员们都必须掌握至少一种语言的编程能力，以培养会员们的逻辑思维并跟上现代科技的步伐。",
    },
    {
      color: "bg-gray-50",
      title: "拥有自学能力",
      text: "text-[#0000009E]",
      description:
        "会员们都必须善用科技与资讯网络以自行解决问题，并达到自我更进的目的。所有会员必须掌握至少一种编程语言，以培养会员们的逻辑思维并跟上现代科技的步伐。",
    },
  ];
  return (
    <div className="w-full flex justify-center items-center flex-col p-10">
      <h1 className="text-6xl special-font">我们的目标</h1>
      <div className="flex flex-row gap-4 mt-2">
        {tujuan.map((e) => (
          <div
            className={`${e.color} w-1/2 ${e.text} p-5 rounded-lg shadow-lg flex justify-center items-center flex-col gap-2 `}
          >
            <h1 className="text-3xl special-font">{e.title}</h1>
            <p className="text-center text-2xl special-font">{e.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tujuan;
