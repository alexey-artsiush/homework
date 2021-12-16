import React from "react";
import data  from "./names.json"

const AddName = () =>{
  const index = Math.floor(Math.random() * 13);
  let oneMoreName = data[index]

  const people = ['John', 'Rembo']
  const newPeople = [ ...people, oneMoreName]

  let list = people.map((number) => 
  <li key={number.toString()}>{number}</li>
  )  
  const onClick = () =>{
    newPeople.push(data[Math.floor(Math.random() * 13)])
    list = newPeople.map((number) => 
  <li key={number.toString()}>{number}</li>
    )}
  return (
    <div>
      {list}
      <button onClick={onClick}>Add name</button>
    </div>
  )
}

export default AddName