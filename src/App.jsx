import "./App.scss";
import React from "react";
import Main from "./containers/Main/Main";
import Title from "./containers/Title/Title";

function App() {
  return (
    <div className="App">
      <Title />
      <Main />
    </div>
  );
}

export default App;
