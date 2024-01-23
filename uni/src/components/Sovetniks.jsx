import React from "react";
import "../index.css";
import sparta from "../assets/sparta.png";
import prit from "../assets/prit.png";
import arrow from "../assets/arrowgreen.svg";

const sov = [
  {
    id: "1",
    title: "Spartan",
    icon: sparta,
  },
  {
    id: "2",
    title: "Pritorian",
    icon: prit,
  },
];

const Sovetniks = ({ className, title }) => {
  return (
    <div className={className}>
      <h2 className="text-[32px] font-jura font-bold text-white md:text-[48px]">
        {title}
      </h2>
      <div className="flex flex-wrap pt-5 gap-10 justify-center md:pt-16">
        {sov.map((item) => (
          <div key={item.id} className="fight w-full px-4 py-4 md:w-fit">
            <h2 className="text-[28px] font-gilSemi text-white">
              {item.title}
            </h2>
            <div className="flex items-center justify-center flex-wrap pt-10 md:flex-col">
              <img
                src={item.icon}
                alt={item.title}
                className="object-contain md:w-[400px] md:h-[500px]"
              />
              <button className="mt-[48px] button text-[16px] font-gil text-white flex items-center justify-center px-[12px] gap-4 h-[56px] w-[280px]">
                <img src={arrow} alt="arrow" /> Узнать больше
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center gap-5 pt-8  md:pt-16">
        <span className="font-jura font-bold text-[22px] text-center text-white md:text-[32px]">
          Количество запущеных советников
        </span>
        <div className="persons px-4 rounded-md flex items-center justify-center py-1 md:rounded-2xl">
          <span className="text-white text-[24px] font-extralight tracking-[7px] md:text-[32px]  md:px-9 md:tracking-[10px]">
            0 1 2 1
          </span>
        </div>
      </div>
    </div>
  );
};

export default Sovetniks;
