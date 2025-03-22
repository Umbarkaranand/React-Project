import { useState } from "react";
import Navbar from "./Components/Navbar";
import NewsBoard from "./Components/NewsBoard";

function App() {
  const [category, setCategory] = useState("general"); // ✅ Default to "general"

  return (
    <div className="App">
      <Navbar setCategory={setCategory} />
      <NewsBoard category={category} />
    </div>
  );
}

export default App;
