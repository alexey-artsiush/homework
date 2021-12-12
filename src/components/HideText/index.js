import { useState } from "react";

const HideText =() => {
  const [visible, setVisible] =useState(false)
  return (
    <div>
      <button onClick = {()=> setVisible(visible === true ? false :true)}>toggle</button>
      {visible ? <p>Lorem ipsum is</p>: 'no text'}
    </div>
  )

//<button onClick = {()=> setVisible(!visible)}>toggle</button>  МОЖНО СДЕЛАТЬ КОРОЧЕ
// {visible && <p>Lorem ipsum is</p>}
}

export default HideText