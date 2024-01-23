import React from "react";
import coin1 from "../assets/coin1.svg";
import coin2 from "../assets/coin2.svg";
import coin3 from "../assets/coin3.svg";
import coin4 from "../assets/coin4.svg";
import coin5 from "../assets/coin5.svg";
import coin6 from "../assets/coin6.svg";
import "../index.css";
import arrow from "../assets/redarrow.svg";

const coins = [
  {
    id: "1",
    icon: coin1,
    name: "Лайткоин",
    title: "LTC",
    dollar: "69,40 $",
    rub: "6 102,9717 ₽",
    procent: "4.2%",
    cap: "5 108 184 463 $",
    hourd: "493 109 880 $",
  },
  {
    id: "2",
    icon: coin2,
    name: "Polygon",
    title: "MATIC",
    dollar: "0,788$",
    rub: "71,5987 ₽",
    procent: "13.6%",
    cap: "7 318 194 907 $",
    hourd: "479 847 257 $",
  },
  {
    id: "3",
    icon: coin3,
    name: "Эфириум Классик",
    title: "ETC",
    dollar: "2 472,50 $",
    rub: "223 676,4219 ₽",
    procent: "4.3%",
    cap: "297 859 323 661 $",
    hourd: "16 069 509 713 $",
  },
  {
    id: "4",
    icon: coin4,
    name: "Chainlink",
    title: "LINK",
    dollar: "14,78 $",
    rub: "1 346,8911 ₽",
    procent: "0.6%",
    cap: "8 403 349 439 $",
    hourd: "567 643 956 $",
  },
  {
    id: "5",
    icon: coin5,
    name: "Kusama",
    title: "KSM",
    dollar: "39,15 $",
    rub: "3 493,2097 ₽",
    procent: "11.8%",
    cap: "361 967 575 $",
    hourd: "22 338 501 $",
  },
  {
    id: "6",
    icon: coin6,
    name: "Кардано",
    title: "ADA",
    dollar: "0,5087 $",
    rub: "45,586 ₽",
    procent: "11.8%",
    cap: "17 874 777 483 $",
    hourd: "311 879 314 $",
  },
];
const firstThreeCoins = coins.slice(0, 3);

const Active = ({ className, title }) => {
  return (
    <div className={className}>
      <h2 className="text-white text-[32px] text-center font-jura font-bold ">
        {title}
      </h2>
      <div className="block">
        <div className=" mt-8 px-4 py-5 flex flex-col gap-4">
          {firstThreeCoins.map((item) => (
            <div
              key={item.id}
              className={`flex flex-col gap-2 ${
                item.id === "2"
                  ? " border-b-[1px] border-t-[1px] border-gray-500 py-3"
                  : ""
              }`}
            >
              <div className="flex items-center gap-4">
                <img src={item.icon} alt={item.name} />
                <div className="flex items-center gap-3">
                  <span className="text-white font-gil text-base">
                    {item.name}
                  </span>
                  <span className="text-[#ACACAC] font-gil text-[12px]">
                    {item.title}
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <p className="text-white font-gilSemi text-[18px]">
                    Цена в $
                  </p>
                  <span className="text-gray-400 font-gil text-[16px]">
                    {item.dollar}
                  </span>
                </div>
                <div className="flex items-center  justify-between">
                  <p className="text-white font-gilSemi text-[18px]">
                    Цена в ₽
                  </p>
                  <span className="text-gray-400 font-gil text-[16px]">
                    {item.rub}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-white font-gilSemi text-[18px]">7 дней</p>
                  <span className="text-red font-gil text-[16px] flex">
                    <img src={arrow} alt="arrow" /> {item.procent}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-white font-gilSemi text-[18px] w-[120px]">
                    Рыночная капитализация
                  </p>
                  <span className="text-gray-400 font-gil text-[16px]">
                    {item.cap}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-white font-gilSemi text-[18px] w-[120px]">
                    Объем торгов за 24 часа
                  </p>
                  <span className="text-gray-400 font-gil text-[16px]">
                    {item.hourd}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Active;
