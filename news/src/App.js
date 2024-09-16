
import { useState } from "react";
import Navbar from "./Components/Navbar";
import NewsBoard from "./Components/NewsBoard";
function App() {

  const [category,setcategory] = useState("general")
  return (
    <div className="App">
     <Navbar setcategory={setcategory}/>
     <NewsBoard category={category}/>
    </div>
  );
}

export default App;
