import React from "react";
import "../index.css";
import icon1 from "../assets/stratefy.svg";
import icon2 from "../assets/settings.svg";
import icon3 from "../assets/choose.svg";
import icon4 from "../assets/person.svg";
import robot from "../assets/robot.png";

const sov = [
  {
    id: "1",
    icon: icon1,
    title:
      "Стратегии и алгоритмы заложенные в советника, позволяют настраивать его в различные режимы торговли",
  },
  {
    id: "2",
    icon: icon2,
    title: "Рекомендованные настройки торговли от разработчика",
  },
  {
    id: "3",
    icon: icon3,
    title: "Гибкость всех настроек советника",
  },
  {
    id: "4",
    icon: icon4,
    title: "Советники подходят даже для начинающих Инвесторов",
  },
];

const plash = [
  {
    id: "1",
    title: "Телеграмм чат с реальными пользователями продукта",
  },
  {
    id: "2",
    title:
      "Чат поддержки трейдера с публикацией уровней и событий по используемым активам",
  },
  {
    id: "3",
    title: "Чат поддержки",
  },
];

const Bonus = ({ className, title }) => {
  return (
    <div className={className}>
      <div className="block pb-[33px] pt-8 px-4">
        <h2 className="text-[32px] text-white font-jura font-bold">Бонусы</h2>
        <div className="pt-9 flex items-center flex-wrap justify-center gap-8">
          <div className="flex flex-col gap-6">
            {plash.map((item) => (
              <div
                key={item.id}
                className={`plash ${
                  item.id === "1" || item.id === "2"
                    ? "max-w-[265px]"
                    : "max-w-[167px]"
                } items-center justify-center py-[15px] text-white font-gil text-base px-6`}
              >
                <span>{item.title}</span>
              </div>
            ))}
          </div>
          <img src={robot} alt="robot" className=" object-contain" />
        </div>
      </div>
      <div className="block max-w-[880px] px-4 py-6">
        <h2 className="text-[32px] font-jura font-bold text-white">{title}</h2>
        <div className=" flex flex-wrap pt-10 gap-y-8 gap-x-10 justify-center">
          {sov.map((item) => (
            <div
              key={item.id}
              className={`blockInf flex flex-col gap-4 h-fit py-4 px-2`}
            >
              <img
                src={item.icon}
                alt={item.id}
                className="w-[35px] h-[35px] object-fit"
              />
              <span
                className={`text-[14px] text-white font-gil ${
                  item.id === "1" || item.id === "3"
                    ? "max-w-[284px]"
                    : "max-w-[224px]"
                }`}
              >
                {item.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bonus;
