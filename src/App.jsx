import "./App.scss";
import React from "react";
import Main from "./containers/Main/Main";
import Title from "./containers/Title/Title";

function App() {
  const [todoArr, setTodoArr] = useState([]);
  const handleReset = (event) => {
    event.preventDefault();
    setTodoArr([])
  };

  const handleInput = (event) => {
    event.preventDefault();
    console.log(event.target[0].value);
    const todoItem = event.target[0].value;
    const newArr = [...todoArr];
    newArr.push(todoItem);
    setTodoArr(newArr);
  };

  return (
    <div className="App">
      <Title handleReset={handleReset} />
      <Main todoArr={todoArr} handleInput={handleInput}/>
    </div>
  );
}

export default App;
