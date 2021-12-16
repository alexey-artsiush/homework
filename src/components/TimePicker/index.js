import React, {useState, useEffect} from "react";
import './index.css';

const TimePicker = () => {

  let [countSecond, setCountSecond ] = useState(0)
  let [countMinute, setCountMinute ] = useState(0)

  useEffect(() => {
    if (countMinute === 60) {
      setCountMinute(countMinute = 0)
    } 
    else if (countMinute === -1) {
      setCountMinute(countMinute = 59)
      setCountSecond(countSecond = 59)
    }
  });

  useEffect(() => {
    if (countSecond === 60) {
      setCountMinute(countMinute +=1)
      setCountSecond(countSecond = 0)
    }
    else if (countSecond === -1) {
      setCountMinute(countMinute -= 1)
      setCountSecond(countSecond = 59)
    }
  }, [countSecond])

  const gos = () => setInterval(() => { setCountSecond(countSecond -= 1)}, 1000)
  
  const onClickMinuteUp = () => {
    setCountMinute(countMinute +=1) 
  }
  const onClickMinuteDown = () => {
    setCountMinute(countMinute -=1)
  }
  const onClickSecondUp = () => {
    setCountSecond(countSecond +=1)
  }
  const onClickSecondDown = () => {
    setCountSecond(countSecond -=1)
  }

return (
  <div>
    <div className="timer">
    <div>
      <div className="clock" >{countMinute}</div>
      <button onClick={onClickMinuteUp}>+</button>
      <button onClick={onClickMinuteDown}>-</button>
    </div>
    <div>
      <div className="minute">{countSecond}</div>
      <button onClick={onClickSecondUp}>+</button>
      <button onClick={onClickSecondDown}>-</button>
    </div>
    <button className="go" onClick={gos}>GO!</button>
    </div>
  </div>
)
}

export default TimePicker