//Import libraries
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Report1 from "./components/Report1";
import Report2 from "./components/Report2";
import Report3 from "./components/Report3";

//Component is a 'Function'(no state) or 'Class'
//const App = function(){
const App = () => {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route path="/R1" component={Report1} />
        <Route path="/R2" component={Report2} />
        <Route path="/R3" component={Report3} />
      </div>
    </BrowserRouter>
  );
};

ReactDOM.render(
  <App />,
  //root in public/index.html
  document.querySelector("#root")
);
