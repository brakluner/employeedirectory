import React from "react";
import Meat from "./components/Meat";
import Milk from "./components/Milk";
import Eggs from "./components/Eggs"

function App() {
  return ( <div className='meatTable'><Meat /><Milk /><Eggs /></div> 
  )
  ;
}

export default App;