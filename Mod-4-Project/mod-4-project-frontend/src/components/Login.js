import React from 'react'

export default class Login extends React.Component {
  constructor(){
    super()
    this.state ={
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
    this.fetchUser()
  }
  fetchUser = () => {
    let psw = ''
    let id = null
    fetch('http://localhost:3000/users')
    .then(r => r.json())
    .then(psw = (r => r.find(user => user.username === this.state.username).password))
    .then(id = (r => r.find(user => user.username === this.state.username).id))
    .then(this.isValid())
  }
  isValid = (psw, id) => {
    if(psw === this.state.password){
      this.setState({valid: true})
      this.setState({user_id: id})
      this.props.valid(this.state.username, this.state.user_id)
    }
  }

  render(){
    console.log(this.state)
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
