import React, { Component } from 'react'
//import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Dashboard from "./components/dashboard/Dashboard"
import SignIn from "./components/auth/SignIn"

// const PrivateRoute = ({ component: Component, ...rest }) => (
//   <Route {...rest} render={(props) => (
//     this.state.isAuthenticate === true
//       ? <Component {...props} />
//       : <Redirect to='/' />
//   )} />
// )

// const fakeAuth = {
//   isAuthenticate: false,
//   authenticate(cb) {
//     this.isAuthenticate = true;
//   },
//   signout(cb) {
//     this.isAuthenticate = false;
//   }
// }

export class App extends Component {
  state = {
    isAuthenticate: false
  }

  handleSignIn = () => {
    this.setState({
      isAuthenticate: true
    })
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path="/" render={(props) => <SignIn {...props} onSignIn={this.state.isAuthenticate} />} />
          <Route path="/dashboard" component={Dashboard} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App
