import React, { Component } from 'react';
import MuseumPage from './components/MuseumPage'
import LoginForm from './components/Login'
import RegisterForm from './components/RegisterForm'
import { Route, Link } from 'react-router-dom';
import Logout from './components/Logout'
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
   if (this.state.auth) {
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
   else {
     return ""
   }
 }
  render() {
    return (
      <div className="App">
       <header className="App-header">
         <h1 className="App-title">Welcome to React</h1>

         { this.state.auth ?
           <div>
             <Link to="/museum">Museum</Link>
             <Link to="/logout">Log out</Link>
           </div>
           :
           <div>
             <Link to="/register">Register</Link>
             <Link to="/login">Login</Link>
           </div>
         }
       </header>
       <Route path="/register" render={ (renderProps) =>
         <RegisterForm history={ renderProps.history } authSet={ this.authFetched } />
       } />
       <Route path="/login" render={ (renderProps) =>
         <LoginForm history={ renderProps.history } authSet={ this.authFetched } />
       } />
       { this.authyBits() }
     </div>
    );
  }
}

export default App;
