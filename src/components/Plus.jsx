import React from 'react'

function Plus({conunt,setConunt}) {
    const buttonClickPlus = () =>{
        const ClickPlus = conunt +1
        setConunt(ClickPlus);
      }
  return (
    <>    
    <button onClick={buttonClickPlus}> 
    플러스 
    </button>
    </>

  )
}

export default Plus