import "./App.css";

import List from "./containers/List";
// import data from "./assets/data.json"; "queda pendiente revisar"

// console.log(data);

function App() {
  return (
    <main className="bg-dark">
      <div className="container">
        <List />
      </div>
    </main>
  );
}

export default App;
