import React from "react";
import Weather from "./Components/Weather";
import "./App.css";

function App() {
  return (
    <>
      <div className="background"></div> {/* Background Image */}
      <div className="app-container">
        <Weather />
      </div>
    </>
  );
}

export default App;
