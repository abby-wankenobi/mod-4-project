import React from 'react'

export default class Login extends React.Component{
  constructor(){
    super()
    this.state = {
      username: '',
      password: '',
      valid: false,
      newUser: false
    }
  }
  handleSignUp = event => {
    this.setState({newUser: true})
  }
  handleUsername = event => {
    this.setState({username: event.target.value})
  }
  handlePassword = event => {
    this.setState({password: event.target.value})
  }
  handleLogIn = event => {
    fetch('http://localhost:3000/api/v1/users')
    .then(r => r.json())
    .then(r => r.find(user => {
      if (user.username === this.state.username && user.password === this.state.password){
        this.setState({valid: true})
        this.props.setUsername(this.state.username)
      }
      else {
        alert('Incorrect username or password!')
      }
    })
  )}
  handleCreateAccount = event => {
    fetch('http://localhost:3000/api/v1/users',{
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      } ,
      body: JSON.stringify({username: this.state.username, password: this.state.password})
    }).then(this.props.setUsername(this.state.username))
  }
  render(){
    console.log(this.state)
    const logIn =
    <div>
      Username: <input id="username" onChange = {this.handleUsername}/>
      Password: <input id="password" onChange = {this.handlePassword}/>
      <button id="login" onClick = {this.handleLogIn}>Log In</button> or <button id="signup" onClick={this.handleSignUp}>Sign Up</button>
    </div>
      const signUp =
        <div>
          Enter Username: <input onChange={this.handleUsername} id="new-username"/>
          Enter Password: <input onChange={this.handlePassword} id="new-password"/>
          <button id="create-account" onClick={this.handleCreateAccount}>Create Account</button>
        </div>
    return(
      <div>
      {this.state.newUser ? signUp : logIn}
      </div>
    )
  }
}
