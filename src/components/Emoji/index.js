import React, {useState} from "react";


const Emojis = () => {

  const [title, setEmoji] = useState("👶")

  const onButtonClickEmoji = () =>{
    setEmoji(title === "👶" ? "👨" : "👶")
  }

  return (
    <button onClick={onButtonClickEmoji}>{title}</button>
  )
}

export default Emojis