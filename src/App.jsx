import "./App.scss";
import React from "react";
import Main from "./containers/Main/Main";
import Title from "./containers/Title/Title";

function App() {
  const handleReset = (event) => {
    event.preventDefault();
  };
  return (
    <div className="App">
      <Title handleReset={handleReset} />
      <Main />
    </div>
  );
}

export default App;
