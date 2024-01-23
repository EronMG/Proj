import React, { useCallback, useState } from "react";
import "../index.css";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import online from "../assets/online.svg";
import pause from "../assets/pause.svg";
import set from "../assets/set.svg";
import plus from "../assets/plus.svg";
import line from "../assets/line.svg";
import what from "../assets/what.svg";

const seting = [
  {
    id: "1",
    name: "Long",
  },
  {
    id: "2",
    name: "Short",
  },
  {
    id: "3",
    name: "Take profit",
  },
  {
    id: "4",
    name: "Stop loss",
  },
  {
    id: "5",
    name: "Тайминг",
  },
  {
    id: "6",
    name: "Монета",
  },
  {
    id: "7",
    name: "Кратность",
  },
  {
    id: "8",
    name: "Кредитное плечо",
  },
  {
    id: "9",
    name: "Борьба с PumP и DumP",
  },
];

const Settings = () => {
  const [active, setActive] = useState(false);

  const handleActive = useCallback(() => setActive((prev) => !prev), []);

  return (
    <div className="third flex flex-col items-center">
      <header className="flex flex-col items-center px-2 pt-10 sm:hidden">
        <img src={logo} alt="logo" />
        <div className="flex gap-10">
          <Link to="/main" className=" font-gil text-[18px] text-white">
            Перейти к лендингу
          </Link>
          <Link
            to="/"
            className="button flex items-center px-5 justify-center font-gil text-[18px] text-white"
          >
            Выход
          </Link>
        </div>
      </header>
      <header className="hidden sm:flex items-center justify-between w-full mt-10 px-10">
        <Link to="/main" className=" font-gil text-[22px] text-white">
          Перейти к лендингу
        </Link>
        <img src={logo} alt="logo" />
        <Link
          to="/"
          className="button flex items-center px-5 justify-center font-gil text-[18px] w-[117px] h-[56px] text-white"
        >
          Выход
        </Link>
      </header>
      <div className="block w-full px-2 sm:hidden mt-6">
        <div className="flex  items-center justify-between">
          <h2 className="text-[32px] font-jura font-bold text-white">
            Pritorian
          </h2>
          <div className="flex gap-2">
            <img src={online} alt="icon" className="w-7 h-7 cursor-pointer" />
            <img src={pause} alt="icon" className="w-7 h-7 cursor-pointer" />
            <img
              src={set}
              alt="icon"
              onClick={handleActive}
              className="w-7 h-7 cursor-pointer"
            />
          </div>
        </div>
        <div className="flex justify-between gap-5">
          <span className="text-[24px] text-white font-gilSemi">Pnl +20 %</span>
          <span className="text-[24px] text-white font-gilSemi">
            Срок в днях 8
          </span>
        </div>
      </div>
      <div className="block hidden sm:flex justify-between w-full items-center py-10 px-10 gg:mt-16 mt-6">
        <h2 className="text-[32px] font-jura font-bold text-white gg:text-[48px]">
          Pritorian
        </h2>
        <div className="flex gap-5 gg:gap-16">
          <span className="text-[24px] text-white font-gilSemi gg:text-[32px]">
            Pnl +20 %
          </span>
          <span className="text-[24px] text-white font-gilSemi gg:text-[32px]">
            Срок в днях 8
          </span>
        </div>
        <div className="flex items-center gap-5 gg:gap-16">
          <img src={online} alt="icon" className="w-7 h-7 cursor-pointer" />
          <img src={pause} alt="icon" className="w-7 h-7 cursor-pointer" />
          <img
            src={set}
            alt="icon"
            onClick={handleActive}
            className="w-7 h-7 cursor-pointer"
          />
        </div>
      </div>
      {active === true ? (
        <>
          <div className="blockInf w-full px-2 pb-5 sm:hidden">
            {seting.map((item) => (
              <div key={item.id} className="flex flex-col items-center gap-2">
                <span className="text-white font-gilSemi text-[18px] pt-4">
                  {item.name}
                </span>
                <div className="flex gap-6">
                  {item.id === "1" || item.id === "2" ? (
                    Array.from({ length: 3 }, (_, index) => (
                      <div
                        key={index + 1}
                        className="hit w-[87px] h-[48px] text-gray-500 flex items-center pl-3 font-gil text-[14px]"
                      >
                        Ввод
                      </div>
                    ))
                  ) : item.id === "3" ||
                    item.id === "4" ||
                    item.id === "7" ||
                    item.id === "8" ? (
                    <div className="flex items-center gap-4 text-white text-[20px]">
                      <div className="hit w-[87px] h-[48px] text-gray-500 flex items-center pl-3 font-gil text-[14px]">
                        Ввод
                      </div>{" "}
                      %
                    </div>
                  ) : item.id === "9" ? (
                    <div className="flex gap-5">
                      <div className="flex items-center text-white text-[20px] gap-3">
                        <div className="hit w-[87px] h-[48px] text-gray-500 flex items-center pl-3 font-gil text-[14px]">
                          Ввод
                        </div>{" "}
                        %
                      </div>
                      <div className="flex items-center text-white text-[20px] gap-3">
                        <div className="hit w-[87px] h-[48px] text-gray-500 flex items-center pl-3 font-gil text-[14px]">
                          Ввод
                        </div>{" "}
                        %
                      </div>
                    </div>
                  ) : item.id === "5" ? (
                    <div className="hit w-[180px] h-[48px] text-white  items-center pl-3 font-gil text-[14px] flex gap-5">
                      Выбрать время
                      <img src={line} alt="" />
                    </div>
                  ) : (
                    <div className="hit w-[180px] h-[48px] text-white  items-center pl-3 font-gil text-[14px] flex gap-5">
                      Выбрать монету
                      <img src={line} alt="" />
                    </div>
                  )}
                </div>
              </div>
            ))}
            <div className="flex justify-between items-center pt-6">
              <button className="button w-[157px] h-[56px] flex items-center justify-center text-white font-gilSemi text-[18px]">
                Сохранить
              </button>
              <img src={what} alt="" />
            </div>
            <div className="flex items-center gap-3 pt-5">
              <div className="w-[23px] h-[23px] border-[1px] border-white rounded-[5px]"></div>
              <span className="text-[14px] font-gil text-white">
                Вернуть рекомендованные настройки
              </span>
            </div>
          </div>
          <div className="blockInf hidden sm:flex px-5 py-10 gg:w-[1328px] gg:justify-between gg:px-16">
            <div className="flex flex-col gap-6">
              {seting.map((item) => (
                <div key={item.id} className="flex flex-row items-center gap-2">
                  <span className="text-white font-gilSemi text-[18px] pt-4 w-[98px]">
                    {item.name}
                  </span>
                  <div className="flex gap-3">
                    {item.id === "1" || item.id === "2" ? (
                      <>
                        <div className="flex gap-3 gg:hidden">
                          {Array.from({ length: 4 }, (_, index) => (
                            <div
                              key={index + 1}
                              className="hit w-[87px] h-[48px] text-gray-500 flex items-center pl-3 font-gil text-[14px]"
                            >
                              Ввод
                            </div>
                          ))}
                        </div>
                        <div className="hidden gap-3 gg:flex">
                          {Array.from({ length: 7 }, (_, index) => (
                            <div
                              key={index + 1}
                              className="hit w-[87px] h-[48px] text-gray-500 flex items-center pl-3 font-gil text-[14px]"
                            >
                              Ввод
                            </div>
                          ))}
                        </div>
                      </>
                    ) : item.id === "3" ||
                      item.id === "4" ||
                      item.id === "7" ||
                      item.id === "8" ? (
                      <div className="flex items-center gap-4 text-white text-[20px]">
                        <div className="hit w-[87px] h-[48px] text-gray-500 flex items-center pl-3 font-gil text-[14px]">
                          Ввод
                        </div>{" "}
                        %
                      </div>
                    ) : item.id === "9" ? (
                      <div className="flex gap-5">
                        <div className="flex items-center text-white text-[20px] gap-3">
                          <div className="hit w-[87px] h-[48px] text-gray-500 flex items-center pl-3 font-gil text-[14px]">
                            Ввод
                          </div>{" "}
                          %
                        </div>
                        <div className="flex items-center text-white text-[20px] gap-3">
                          <div className="hit w-[87px] h-[48px] text-gray-500 flex items-center pl-3 font-gil text-[14px]">
                            Ввод
                          </div>{" "}
                          %
                        </div>
                      </div>
                    ) : item.id === "5" ? (
                      <div className="hit w-[180px] h-[48px] text-white  items-center pl-3 font-gil text-[14px] flex gap-5">
                        Выбрать время
                        <img src={line} alt="" />
                      </div>
                    ) : (
                      <div className="hit w-[180px] h-[48px] text-white  items-center pl-3 font-gil text-[14px] flex gap-5">
                        Выбрать монету
                        <img src={line} alt="" />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col justify-between items-end">
              <img src={what} alt="" />
              <div className="flex flex-col items-end">
                <button
                  onClick={handleActive}
                  className="button w-[157px] h-[56px] flex items-center justify-center text-white font-gilSemi text-[18px]"
                >
                  Сохранить
                </button>
                <div className="flex items-center gap-3 pt-5">
                  <div className="w-[23px] h-[23px] border-[1px] border-white rounded-[5px]"></div>
                  <span className="text-[14px] font-gil text-white text-end gg:text-[16px]">
                    Вернуть рекомендованные настройки
                  </span>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <img src={plus} alt="plus" className="mt-5" />
      )}
    </div>
  );
};

export default Settings;
