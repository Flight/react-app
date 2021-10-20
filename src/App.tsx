import React from "react";
import "./App.scss";
import Spinner from "./components/Spinner/Spinner";

const App: React.FC = () => (
  <main className="App">
    <div className="App__center">
      <h1>Sample react app</h1>
      <Spinner />
    </div>
  </main>
);

export default App;
