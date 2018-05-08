import React from 'react'


export default class RegisterForm extends React.Component {
  constructor(){
    super()
    this.state = {
      username:'',
      user_id: '',
      password: '',
      valid: false
    }
  }
  handleChange = event => {
    this.setState({[event.target.name]: event.target.value})
  }
  handleClick = event => {
    // event.preventDefault()
    this.postUser()
  }
  postUser = () => {
    fetch('http://localhost:3000/users', {
      method: "POST",
      headers: {
        "Content-Type" : "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({username: this.state.username, password: this.state.password})
    }).then(r => r.json()).then(json => this.setState({user_id: json.id, valid: true})).then(this.isValid())
  }
  isValid = () => {
    console.log('sadas', this.state.valid)
    this.props.valid(this.state.username, this.state.user_id)
  }
  render(){
    console.log(this.state)
    return (<div>

        <label htmlFor="username">Username</label>
        <input type="text" onChange={ this.handleChange }
                           value={ this.state.username }
                           name="username"
                           id="username" />
        <label htmlFor="password">Password</label>
        <input type="password" onChange={ this.handleChange }
                           value={ this.state.password }
                           name="password"
                           id="password" />
      <button onClick = {this.handleClick}>Submit</button>
    </div>)
  }

}
