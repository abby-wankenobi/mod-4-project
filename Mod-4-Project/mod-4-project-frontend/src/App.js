import React, { Component } from 'react';
import MuseumPage from './components/MuseumPage'
import LoginForm from './components/Login'
import RegisterForm from './components/RegisterForm'
import { Route, Link } from 'react-router-dom';
import Logout from './components/Logout'
import GalleryBrowser from './components/Gallery/GalleryBrowser'
import './App.css'
// import GalleryPage from '../components/GalleryPage'

class App extends Component {
  state = {

  }
  componentDidMount() {
    if (localStorage.auth) {
      const auth = JSON.parse(localStorage.auth)
      this.setState({ auth });
    }
  }

  authFetched = (auth) =>{
    localStorage.auth = JSON.stringify(auth);
    this.setState({ auth });
  }
  logout = () => {
   localStorage.removeItem("auth")
   this.setState({ auth: null })
 }
 authyBits(){
     return (
       <div>
        <Route path="/museum" render={ (renderProps) => {
            return <MuseumPage auth={ this.state.auth } />
          }
        } />
         <Route path="/logout" render={ (renderProps) => {
             return <Logout logout={ this.logout } />
           }
         } />
       </div>)
 }
  render() {
    return (
      <div className="App">

         { this.state.auth ?
           <div id="nav">
              <a><img width="170" height="50" src='https://www.rijksmuseum.nl/WebStatic/Images/Logo/rijksmuseum-logo-combined.png'/></a>
              <a className="logout" ><Link to="/logout">Log out</Link></a>
           </div>
           :
           <div>
             <Link to="/register">Register</Link>
             <br></br>
             <Link to="/login">Login</Link>
           </div>
         }
       <Route path="/register" render={ (renderProps) =>
         <RegisterForm history={ renderProps.history } authSet={ this.authFetched } />
       } />
       <Route path="/login" render={ (renderProps) =>
         <LoginForm history={ renderProps.history } authSet={ this.authFetched } />
       } />
       <Route path="/galleries" component={GalleryBrowser} />
       { this.authyBits() }
     </div>
    );
  }
}

export default App;
