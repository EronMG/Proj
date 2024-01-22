import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import "./index.css";
import Sovetnik from "./components/Sovetnik";
import Sovetniks from "./components/Sovetniks";
import Partners from "./components/Partners";
import Bonus from "./components/Bonus";

const App = () => {
  return (
    <>
      <div className="main">
        <Header
          className={
            "text-white flex flex-col items-center justify-center border-b-[0.5px] border-line pb-6 pt-[31.5px]"
          }
        />
        <Main
          className={"px-[30px] pt-[88px] pb-[192px] flex gap-4 items-center"}
          title={"Безопасная и доступая торговля для всех пользователей "}
        />
      </div>
      <div className="second pt-[100px] px-[20px] flex flex-col gap-[100px]">
        <Sovetnik
          title={"Преимущества Советника"}
          className={"flex  items-center justify-center gap-[18px]"}
        />
        <Bonus
          title={"Инновации "}
          className={"flex flex-col items-center justify-center gap-[16px]"}
        />
        <Sovetniks className={""} title={"Советники"} />
        <Partners />
      </div>
    </>
  );
};

export default App;
