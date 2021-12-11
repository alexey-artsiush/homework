import React, {useEffect} from "react";
import { useState } from "react/cjs/react.development";

const Navigation = () =>{

  const [posts, setPosts] = useState([])
  

  const buttons = [
    { id: 1},
    { id: 2},
    { id: 3},
    { id: 4},
    { id: 5},
    { id: 6},
    { id: 7},
    { id: 8},
    { id: 9},
    { id: 10}
  ]

  const onClick = async () => {
    let id = buttons.id
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${id}&_limit=10`)  
    const data = await response.json()
    setPosts(data)
    console.log(id)   
  }

   const createButtons = buttons => buttons.map(item => (
     <button key={item.id} id={item.id}>{item.id}</button>
   ));
 
return (
  <div >
    {<div onClick={onClick}>{createButtons(buttons)}</div>}
  </div>
 )
}

export default Navigation