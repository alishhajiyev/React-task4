import React,{Component} from 'react'
import './UserLogin.css'
export default class UserLogin extends Component{
    state={
        email: "",
        password: ""
    }
    handleInput=(e)=>{
        this.setState({[e.target.name]: e.target.value})
    }
    submitted=(e)=>{
        if(this.state.email!=="" && this.state.password!=="") alert("Qeydiyyat basa catdi")
        else {
            e.preventDefault()
            alert("Bosluqlari doldurun");
        }
    }
    
    render(){
        return(
            <>
            <p>{JSON.stringify(this.state)}</p>
            <form onSubmit={this.submitted} className="container">
                <input value={this.state.email} onChange={this.handleInput} placeholder="Email" name="email" type="text" />
                <input value={this.state.password} onChange={this.handleInput} placeholder="Password" name="password" type="password" />
                <button type="submit">Login</button>
            </form>
            </>
        )
    }

}