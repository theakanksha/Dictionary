import React from "react";
import "./App.css";
import word from "./containers/word";
import predict from "./containers/predict";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={word} />
        <Route path="/:word" component={predict} />
      </div>
    </Router>
  );
}

export default App;
