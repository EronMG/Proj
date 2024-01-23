import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import "./index.css";
import Sovetnik from "./components/Sovetnik";
import Sovetniks from "./components/Sovetniks";
import Partners from "./components/Partners";
import Bonus from "./components/Bonus";
import Active from "./components/Active";
import FAQ from "./components/FAQ";
import Birj from "./components/Birj";
import Sovet from "./components/Sovet";
import Footer from "./components/Footer";

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
      <div className="second pt-[100px] flex flex-col gap-[100px]">
        <Sovetnik
          title={"Преимущества Советника"}
          className={"flex  items-center justify-center gap-[18px] px-[20px]"}
        />
        <Bonus
          title={"Инновации "}
          className={
            "flex flex-col items-center justify-center gap-[16px] px-[20px]"
          }
        />
        <Sovetniks className={"px-[20px]"} title={"Советники"} />
        <Partners
          className={
            "partners flex items-center justify-center flex-col gap-8 px-[20px] pt-7 pb-4"
          }
          title={"Партнерская программа от Project Imperial"}
        />
        <Active
          className={"flex flex-col gap-5"}
          title={"Активы которыми мы торгуем"}
        />
        <FAQ className={"px-4 flex flex-col gap-10 py-5"} title={"F.A.Q"} />
      </div>
      <div className="last pt-[100px] h-fit flex flex-col gap-[100px] px-4 py-10">
        <Birj
          className={
            "partners flex items-center justify-center flex-col gap-8 px-[20px] pt-7 pb-4"
          }
          title={"Партнерская программа от биржи"}
        />
        <Sovet
          className={"block px-4 flex flex-col gap-5 py-7"}
          title={"Советы от Project Imperial"}
        />
      </div>
      <Footer className={"flex flex-col gap-24 py-10 px-4"} />
    </>
  );
};

export default App;
