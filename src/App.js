import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import Login from './pages/Login';
import Home from './pages/Home';

class App extends Component {

  state={
    user:null
  }
  render() {
    return (
      <div className="App">
        { this.state.user?<Home />:<Login />}
        
      </div>
    );
  }
}


export default App;
