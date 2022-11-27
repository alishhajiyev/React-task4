import React, {Component} from 'react'
import './App.css'
// import { render } from 'react-dom'
import UserLogin from './component/User/UserLogin'

class App extends Component {
  state={
    name: ""
  }
  render(){
    return (
      <div className="App">
        <UserLogin/>
      </div>
    )
  }
  
}

export default App
