import React from "react";
import "./Todos.scss";
import ListItem from "../../components/ListItem/ListItem";
import { useState } from "react";

const Todos = (props) => {
  const { text } = props;
  const [todoText, setTodoText] = useState();

  const handleAdd = (event) => {
    const todo = event.target.value;
  };
  return (
    <div className="todoSection">
      <ListItem />
    </div>
  );
};

export default Todos;
