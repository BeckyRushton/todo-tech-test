import "./InputBox.scss";
import addTodo from "../../assets/images/plus-icon.png";

const InputBox = (props) => {
  const { handleInput } = props;

  return (
    <form className="inputBox" onSubmit={handleInput}>
      <input type="text" id="inputToDo" placeholder="Add your task here..." />
      <input
        type="image"
        className="addButton"
        src={addTodo}
        alt="plus-button"
      />
    </form>
  );
};

export default InputBox;
