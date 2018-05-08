import React from 'react'


export default class RegisterForm extends React.Component {
  constructor(){
    super()
    this.state = {
      username:'',
      user_id: null,
      password: '',
      valid: false
    }
  }
  handleChange = event => {
    this.setState({[event.target.name]: event.target.value})
  }
  handleSubmit = event => {
    event.preventDefault()
    this.setState({valid: true})
    this.postUser()
  }
  postUser = () => {
    fetch('http://localhost:3000/users', {
      method: "POST",
      headers: {
        "Content-Type" : "application/json",
        "Accept": "application/javascript"
      },
      body: JSON.stringify({username: this.state.username, password: this.state.password})
    }).then(r => r.json()).(r => this.setState({user_id: r.id})).then(this.isValid())
  }
  isValid = () => {
    if(this.state.valid){
    this.props.valid(this.state.username, this.state.user_id)
    }
  }
  render(){
    return (<div>
      <form onSubmit={ this.handleSubmit }>
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
        <input type="submit" />
      </form>
    </div>)
  }

}
