import React from "react";
import "./Todos.scss";
import ListItem from "../../components/ListItem/ListItem";

const Todos = (props) => {
  const { todoArr } = props;
  const listItemsJSX = todoArr.map((todo,index) => {
    return <ListItem text={todo} key={index} />;
  });
  return <div className="todoSection">{listItemsJSX}</div>;
};

export default Todos;
