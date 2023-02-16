import React from "react";
import "./Main.scss";
import InputBox from "../../components/InputBox/InputBox";
import Todos from "../Todos/Todos";

const Main = ({ handleInput, todoArr }) => {
  return (
    <div className="mainSection">
      <InputBox handleInput={handleInput} />
      <Todos todoArr={todoArr} />
    </div>
  );
};

export default Main;
