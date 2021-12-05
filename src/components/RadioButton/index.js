import React, {useState} from "react";
import "./radiobutton.css"
const titles =  ["⏯️", "⏹️", "⏸️"]

const RadioButton = () => {
  const [index, setIndex] = useState(0)

  const onClick = () =>{
    setIndex((index + 1) % titles.length);
  }

  return (
    <div>
      <button onClick={onClick}>{titles[index]} </button>
    </div>
  )
}

export default RadioButton