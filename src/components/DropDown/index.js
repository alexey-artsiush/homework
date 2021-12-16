import { useState } from "react";
import './DropDown.css';

const DropDown =() => {

  const [visible, setVisible] =useState(false)
  const [title, setTitle] = useState('Ингредиенты 🔺')
  

  const onButtonClick = () =>{
    setTitle(title === 'Ингредиенты 🔺' ? 'Ингредиенты 🔻' :'Ингредиенты 🔺');
    setVisible(visible === true ? false :true)
  }

  return (
    <div className = "list">

      <button onClick = {()=> onButtonClick()}>{title} </button>
      {visible ? 
      <ul>
        <li>пеперони</li>
        <li>анчоусы</li>
        <li>сыр чедер</li>
        <li>ананасы</li>
        <li>шампиньоны</li>
      </ul>
      : ''}
    </div>
  )
}

export default DropDown