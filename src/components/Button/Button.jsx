import React from "react";
import "./Button.scss";

const Button = (props) => {
  const { buttonText, handleReset } = props;

  return (
    <div onClick={handleReset} className="buttonStyle">
      {buttonText}
    </div>
  );
};

export default Button;
