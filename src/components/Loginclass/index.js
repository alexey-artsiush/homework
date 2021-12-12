import React, {Component, component} from "react";

class Loginclass extends Component {

  state = {
    phone: "",
    password: "",
  }

  onSubmit =()=> {

    // 1)Login
    // 2)password
    // 3)Пароль
  }

  onChangePassword = (event)=>{
    this.setState({password:event.targt.value})
  }

  onReset = () => {
    this.setState ({
      phone: "",
      password: "",
    })
  }

  render () {
    return (
      <div className ="page">
        <input 
        type='text' onChange={(event) => this.setState({phone:event.target.value})} 
        placeholder="phone"
        value ={this.state.phone}/>


        <input 
        type='text' 
        placeholder= "password" 
        onChange={this.onChangePassword}
        value ={this.state.phone}/>


        <button onClick = {this.onReset}>Reset</button>
      </div>
    )
  }
}

export default Loginclass