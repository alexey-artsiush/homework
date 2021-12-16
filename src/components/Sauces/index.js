import React from "react";
import { useState } from "react";
import './style.css';


const SAUCES = [
  {
    image: "https://app.pzzby.com/uploads/photos/jZIGfgJfBy.jpg",
    name: "Пармеджано", 
    price: 0.80,
    id: 0,
  },
  {
    image: "https://app.pzzby.com/uploads/photos/LNO0Qbtn7F.jpg",
    name: "Чесночный", 
    price: 0.50,
    id: 1,
  },
  {
    image: "https://app.pzzby.com/uploads/photos/7GvxxQcWms.jpg",
    name: "Терияки",
    price: 0.76,
    id: 2,
  },
  {
    image: "https://app.pzzby.com/uploads/photos/qH6e61tx6q.jpg",
    name: "Кисло-сладкий",
    price: 0.99,
    id: 3,
  },
]

const Sauces = () => {
  const [total, setTotal] = useState(0)

  //1 создать функцию с входным параметром
  const onChangeSauceCount = (count) => {
    setTotal(total + count)
    console.log(count)
  }

  return (
    <div>
      <div>Выберите соусы</div>
      <h2>Итого: {total.toFixed(2)} руб</h2>
      <div className="list">
        {SAUCES.map(sauce =>{
          return (
            <Sauce 
            image={sauce.image}
            name={sauce.name}
            price = {sauce.price}
            key ={sauce.id}
            //2 передать функцию через пропсы
            onChangeSauceCount={onChangeSauceCount}
            />

          )
        })}
      </div>
      <button onClick={()=>console.log(total)}>Подтвердить заказ</button>
    </div>
  )
}

export default Sauces
//3 принимаем функцию в пропсах в целевом компоненте
const Sauce = ({image, name = "нет названия", price = 0, onChangeSauceCount}) => {

  const [count, setCount] = useState(0)


  // const onChangeCount = (value) => {
  //   if(!count && value <0) {
  //     return
  //   }

  //   setCount(count+value)
  // }

  const onPlus = () =>{
    const newCount = count + 1
    setCount(newCount)
    //4 вызываем функцию и передаем параметр
    onChangeSauceCount(price)
  }

  const onMinus = () =>{
    if (!count) {
      return
    }
    setCount(count -1)
    onChangeSauceCount(-price)
  }

  return (
    <div className="sauce">
      <img src={image}/>
      <h4>Соус {name}</h4>
      <h5>{price} руб</h5>

      <div className="picker">
        <button onClick={onMinus}>-</button>
        <strong>{count}</strong>
        <button onClick={onPlus}>+</button>
      </div>
    </div>
    
  )

}