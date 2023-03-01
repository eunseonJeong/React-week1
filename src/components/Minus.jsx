import React from 'react'

function Minus({conunt,setConunt}) {
  const buttonClickMinus = () =>{
    const ClickMinus = conunt -1
    setConunt(ClickMinus)};

  return (
    <button onClick={buttonClickMinus}> 
    마이너스 
    </button>
  )
}

export default Minus