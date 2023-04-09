import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Link to={'/'}>Home</Link>
        <Link to={'/about'}>About</Link>
        <Routes>
          <Route path="/" Component={Home} extact></Route>
          <Route path="/about" Component={About}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
