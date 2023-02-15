import React from "react";
import "./Title.scss";
import Button from "../../components/Button/Button";

const Title = () => {
  return (
    <div className="title">
      <h2 className="appName">My Todos</h2>
      <Button buttonText={"Reset"} />
    </div>
  );
};

export default Title;
