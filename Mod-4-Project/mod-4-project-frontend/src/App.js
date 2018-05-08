import React, { Component } from 'react';
import MuseumPage from './components/MuseumPage'
import LoginForm from './components/Login'
import RegisterForm from './components/RegisterForm'
import { Route, Link } from 'react-router-dom';
// import Logout from './components/Logout'
import './App.css'
// import GalleryPage from '../components/GalleryPage'

class App extends Component {
  this.state = {
    username: '',
    user_id: null,
    valid: false
  }


  handleValid = (username, id) =>{
    this.setState({username: username })
    this.setState({user_id: id })
    this.setState({valid: true })
  }


  render() {
    return (
      <div className="App">
         { this.state.valid ?
          <div>
           <div id="nav">
              <a><img width="170" height="50" src='https://www.rijksmuseum.nl/WebStatic/Images/Logo/rijksmuseum-logo-combined.png'/></a>
              <Link to="/logout">Log out</Link>
           </div>
           <div><MuseumPage/></div>
           </div>

           :
           <div>
             <Link to="/register">Register</Link>
             <Link to="/login">Login</Link>
           </div>
         }
       <Route path="/register" render={ (renderProps) =>
         <RegisterForm history={ renderProps.history } valid={ this.handleValid } />
       } />
       <Route path="/login" render={ (renderProps) =>
         <LoginForm history={ renderProps.history } valid={ this.handleValid } />
       } />
     </div>
    );
  }
}

export default App;
