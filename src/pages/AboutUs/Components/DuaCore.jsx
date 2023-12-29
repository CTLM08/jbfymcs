import React from "react";

const DuaCore = () => {
  const core = [
    {
      color: "bg-gray-50",
      text: "text-[#0000009E]",
      title: "和谐",
      description:
        "身为电协大家庭的一份子，会员们保持着不分你我、团结一致的心态，以共同营造和谐的气氛。",
    },
    {
      color: "bg-[#577AF6]",
      title: "合作",
      text: "text-white",
      description: "合作，以人多力量大来达到团结一心，提升效率及营造融治氛围。",
    },
  ];
  return (
    <div className="w-full flex justify-center items-center flex-col p-10">
      <h1 className="text-6xl special-font">我们的目标</h1>
      <p className="mt-2 special-font">
        在电协大家庭里不分你我，互相合作营造出和谐的气氛，
      </p>
      <p className="special-font">以带出电协双核（合作与和谐）的重要性。</p>
      <div className="flex flex-row gap-4 mt-2">
        {core.map((e) => (
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

export default DuaCore;
