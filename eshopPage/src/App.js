import React from "react";
import './index.css'
import Nav from './Components/Nav'
import Heros from './Components/HerosSection'
function App() {
  return (
    <div className="App">
      <div>
        <Nav/>
        <Heros/>
      </div>
    </div>
  );
}

export default App;
