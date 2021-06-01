import React, { Fragment } from "react";
import "./App.css";

import List from "./containers/List";
// import data from "./assets/data.json"; "queda pendiente revisar"



function App() {
  return (
    <Fragment>
      <nav className="navbar navbar-dark bg-dark border-bottom border-white">
        <a href="/" className="navbar-brand px-5">
          MovieApp
        </a>
      </nav>
      <main className="bg-dark">
        <div className="container">
          <List />
        </div>
      </main>
    </Fragment>
  );
}

export default App;
