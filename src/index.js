import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './components/TimePicker/TimePicker.css';
import TimePicker from "./components/TimePicker"


ReactDOM.render(
  <React.StrictMode>
    <TimePicker/>
  </React.StrictMode>,
  document.getElementById('root')
);

