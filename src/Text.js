import logo from './logo.svg';
import './Text.css';

const Text = ({text, color, fontSize, fontWeight, trughty}) => {
  return (
    <div className="text" style={{ textAlign: "center", padding: 20, color: color, fontWeight: fontWeight, fontSize: fontSize, textDecoration: trughty  }}>
      {text}
      
      
    </div>
    
    
  );
}

export default Text;
