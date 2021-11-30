import React, {useState} from "react";
import "./radiobutton.css"
const RadioButton = () => {

  const [value, setValue] = useState("⏯️")
  const [index, setIndex] = useState(0)

  const onButtonClick = () =>{
    setIndex(index === 2 ? 0 : index + 1);
    setValue(["⏯️", "⏹️", "⏸️"][index]);
  }

  return (
    <div><button onClick={onButtonClick}>{value} </button></div>
  )
}

export default RadioButton