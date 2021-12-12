import React, {useState} from "react";
import './names.json';

const Name = () => {

  let people = ['John', 'Eddi']
  const render = people.map((name) => 
  <li>{name}</li>)

  const index = Math.floor(Math.random() * 13);
  
  const onClick = () => {

  }

  return (
    <div>
      <ul>
      {render}
    </ul>
    <button onClick={onClick}>Add name</button>
    </div>
    
  )
  
}
export default Name