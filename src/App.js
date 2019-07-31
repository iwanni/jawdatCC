import React from 'react';
//import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Dashboard from "./components/dashboard/Dashboard"
import SignIn from "./components/auth/SignIn"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={SignIn} />
        <Route path="/dashboard" component={Dashboard} />
      </div>
    </BrowserRouter>
  );
}

export default App;
