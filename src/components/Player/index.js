import React, {useState} from "react";

const Player = () => {
  const value = ["play", "pause", "stop"]

  const [title, setTitle] = useState("Play")

  const onButtonClick = () =>{
    setTitle(title === "Play" ? "Pause" : "Play")
  }

  return (
    <button onClick={onButtonClick}>{title}</button>
  )
}


export default Player 