import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import MainScreen from "./pages/Main";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/main" element={<MainScreen />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
