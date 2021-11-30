import React, {useState} from "react";

// class Button extends React.Component {
//   state = {
//     title: "Play"
//   }

// onButtonClick = (newTitle) => {
//   this.setState ({ title: newTitle})
// }

//   render() {
//     return (
//       <button onClick = {() => {this.onButtonClick( this.state.title === "Play" ? "Pause" : "Play")}} > {this.state.title}</button>     
//     )
//   }
// }



//Функциональным методом
const ButtonFC = () => {

  const [title, setTitle] = useState("Play")

  const onButtonClick = () =>{
    setTitle(title === "Play" ? "Pause" : "Play")
  }

  return (
    <button onClick={onButtonClick}>{title}</button>
  )
}


// export default Button;
export default ButtonFC;