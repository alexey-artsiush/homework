import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import Text from './Text';
import Square from './Square';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    {/* <Text text="Reguar text"  />
    <Text text="Huge header" fontWeight = "600" fontSize = "36px" />
    <Text text="Danger notification" color = "red" />
    <Text text="Uderlined text" trughty = "underline" /> */}
    <Square label ="Big square" cssClass = "big" size = "600px" fontSize="4rem" />
    <Square label ="A less square" cssClass = "midle" size = "300px" fontSize="3rem"   />
    <Square label ="The smallest one" cssClass = "small" size = "200px" fontSize="2rem"  />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
