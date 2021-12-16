import React, {useState} from "react";
import "./Login.css"


const Login =() => {
  const [isSignedIn, setIsSignedIn] = useState(false)
  const [title, setTitle] = useState("LogIn")


const onButtonClick = () =>{
   setTimeout( () => {
     setIsSignedIn(isSignedIn===true )
    setTitle(title === "LogIn" ? "Hola!" : "LogIn")
     }, 3000);  
}

return (
  <button onClick = {onButtonClick}>{title}</button>
)
} 

export default Login