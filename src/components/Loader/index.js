import { useState } from "react";
import "./Loader.css"

const Loader =() => {
  const [visible, setVisible] =useState(false)
  const [visiblePrivet, setVisiblePrivet] =useState(false)
  
  const onButtonClick = () =>{
    setTimeout( () => {
      setVisible(visible===true )
      }, 3000);  
      setVisible(visible===false )
      setVisiblePrivet(visiblePrivet===true)
  }

  return (
    <div>
      <button onClick = {()=>onButtonClick()}>Сказать привет</button>
      {visible && <div className="loader"></div>}
      {visiblePrivet && <div className="privet">Привет!</div>}
    </div>
  )
}
export default Loader