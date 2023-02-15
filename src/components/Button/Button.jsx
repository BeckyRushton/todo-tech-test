import React from "react";
import "./Button.scss";

const Button = (props) => {
  const { buttonText } = props;

  return <div className="buttonStyle">{buttonText}</div>;
};

export default Button;
