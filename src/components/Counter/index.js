import React, {useState} from "react";
import './counter.css';

const Counter = () => {

  const [total, setCount] = useState(0)

  const upTotal =()=>{
    setCount(total+1)
  }

  const downTotal =()=>{
    setCount(total-1)

  }

  return (
    <div className="wrapper">
      <div className="counter">
      <div className="table">{total}</div>
      <button onClick={downTotal}>Press me to down total</button>
      <button onClick={upTotal}>Press me to up total</button>
      </div>
    </div>
  )
}

export default Counter