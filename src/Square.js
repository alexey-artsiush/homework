import logo from './logo.svg';
import './Square.css';
const Square = (props) => { 
  return (
    <div className="mySquare" style={{ width:props.size, height:props.size, fontSize: props.fontSize  }}>  
      {props.label}
      
    </div>
  );
}
export default Square;