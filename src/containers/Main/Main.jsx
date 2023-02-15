import React from "react";
import "./Main.scss";
import InputBox from "../../components/InputBox/InputBox";
import Todos from "../Todos/Todos";
import { useState } from "react";

const Main = () => {
  const [todoArr, setTodoArr] = useState([]);

  const handleInput = (event) => {
    event.preventDefault();
    console.log(event.target[0].value);
    const todoItem = event.target[0].value;
    const newArr = [...todoArr];
    newArr.push(todoItem);
    setTodoArr(newArr);
  };

  return (
    <div className="mainSection">
      <InputBox handleInput={handleInput} />
      <Todos todoArr={todoArr} />
    </div>
  );
};

export default Main;
