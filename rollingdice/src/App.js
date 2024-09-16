
import StartGame from "./Components/StartGame";
import GamePlay from "./Components/GamePlay";
import { useState } from "react";

function App() {

  const [isGmaeStarted, setIsGameStarted] = useState(false);

  const toggleGamePlay = () =>{
    setIsGameStarted((prev) => !prev);
  };

  return (
    <div className="App">
     
     {isGmaeStarted ? <GamePlay /> : <StartGame toggle={toggleGamePlay}/>}
   
    </div>
  );
}

export default App;
