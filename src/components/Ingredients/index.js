import React, {useState} from "react";
import "./index.css"

const INGREDIENTS = [
  {
    name: "Скрэмбл", 
    price: 0.80,
    id: 0,

  },
  {
    name: "Лук", 
    price: 0.50,
    id: 1,
  
  },
  {
    name: "Морковь",
    price: 1.5,
    id: 2,

  },
  {
    name: "Грибы шиитаке",
    price: 2,
    id: 3,

  },
  {
    name: "Грибы вешенка",
    price: 2,
    id: 4,

  },
  {
    name: "Пак-чой",
    price: 2,
    id: 5,

  },
  {
    name: "Кунжут",
    price: 2,
    id: 6,

  },
  {
    name: "Шрираче",
    price: 2,
    id: 7,

  },
]

const Ingredients = () => {
  const [total, setTotal] = useState(0)
  const onChangeIngredientCount = (count) => {
    setTotal(total + count)
  }
return (
  <div className="list"> 
    <div className="nav"><h2>Добавки к лапше WOK</h2></div>
    {INGREDIENTS.map(e=>{
      return (
        <Ingredient
        name = {e.name}
        key = {e.id}
        price = {e.price}
        onChangeIngredientCount={onChangeIngredientCount}
        />
      )
    })}
    <div className="footer"><h4>Итого: {total.toFixed(2)}</h4></div>
  </div>
)
}
export default Ingredients

const Ingredient = ({name ='нет названия', price, onChangeIngredientCount}) => {
  const [count, setCount] = useState(0)
  // const [counter, setCounter] = useState(0)
  const arrTrue = [] 


  const change = (e) => {
    setCount(e.target.checked)
    if (e.target.checked === true) {
      onChangeIngredientCount(price)
      // const newCount = counter + 1
      // setCounter(newCount)
      arrTrue.push('true')
      console.log(arrTrue)

    }
    else if (e.target.checked === false) {
      onChangeIngredientCount(-price)
      // setCounter(counter -1)
      arrTrue.pop('true')
      console.log(arrTrue)
    }
  }

  return (
    <div className="ingredient">
      <div className="container">
        <input type={'checkbox'}  className="checkbox" onChange={change}/>
        <label>{name}</label>
        </div> 
     <span className="container">+{price} руб</span>  
    </div>
  )
}