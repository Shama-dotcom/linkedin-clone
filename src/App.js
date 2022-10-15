import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import React from "react";
// import Header from "./Components/Header";
// import Home from "./Components/Home";
import LogIn from "./Components/LogIn";

const App = () => {
  return (
    <div className="App">
      <Router>
       <LogIn />
      </Router>
    </div>
  );
}

export default App;