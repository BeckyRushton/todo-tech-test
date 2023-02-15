import React from "react";
import "./Title.scss";
import Button from "../../components/Button/Button";

const Title = (props) => {
  const { handleReset } = props;
  return (
    <div className="title">
      <h2 className="appName">My Todos</h2>
      <Button buttonText={"Reset"} onClick={handleReset} />
    </div>
  );
};

export default Title;
