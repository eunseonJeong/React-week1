import React, { useState } from "react";
import Plus from "./components/Plus";
import Minus from "./components/Minus";
import "./App.css";

function App() {
  const [conunt,setConunt] = useState('0')

  // const buttonClickPlus = () =>{
  //   const ClickPlus = conunt +1
  //   setConunt(ClickPlus);
  // }

  //  const buttonClickMinus = () =>{
  //   const ClickMinus = conunt -1
  //   setConunt(ClickMinus);
  //  }

  return (
    <div>
      <div>{conunt}</div>

      <Plus conunt={conunt} setConunt={setConunt}/>
      <Minus conunt={conunt} setConunt={setConunt}/>

    </div>
  );
}

export default App;
