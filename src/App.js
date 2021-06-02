import React, { Fragment } from "react";
import "./App.css";

import List from "./containers/List";
// import data from "./assets/data.json"; "queda pendiente revisar"

function App() {
  return (
    <Fragment>
      <nav className="navbar navbar-dark bg-dark border-bottom border-white">
        <a href="/" className="navbar-brand px-5">
          MovieSearch
        </a>
      </nav>

      <div className="hero_section"></div>

      <main className="bg-dark">
        <div className="container">
          <List />
        </div>
        <div className="py-5">
          <h5 className="text-center">
            Aplicación desarrollada por Giovanni Di Rosa. Librería Js REACT
          </h5>
        </div>
      </main>
    </Fragment>
  );
}

export default App;
