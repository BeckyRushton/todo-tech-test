import React from "react";
import "./InputBox.scss";

const InputBox = () => {
  return (
    <div className="inputBox">
      <input type="text" id="inputToDo" placeholder="Add your task here..." />
    </div>
  );
};

export default InputBox;
