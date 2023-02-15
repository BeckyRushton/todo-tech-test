import React from "react";
import "./Todos.scss";
import ListItem from "../../components/ListItem/ListItem";

const Todos = (props) => {
  const { todoArr } = props;
  const listItemsJSX = todoArr.map((todo) => {
    return <ListItem text={todo} />;
  });
  return <div className="todoSection">{listItemsJSX}</div>;
};

export default Todos;
