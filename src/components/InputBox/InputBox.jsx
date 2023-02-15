import "./InputBox.scss";
import addTodo from "../../assets/images/plus-icon.png";
import Todos from "../../containers/Todos/Todos";

const InputBox = (props) => {
  const { handleInput } = props;

  return (
    <div className="inputBox">
      <input type="text" id="inputToDo" placeholder="Add your task here..." />
      <img className="addButton" src={addTodo} alt="plus-button" />
    </div>
  );
};

export default InputBox;
