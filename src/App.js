import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {this.props.user.username}
      </div>
    );
  }
}

const mapStateToProps = (state) =>{
  return {
    user : state.userReducer
  }
}

const mapDispatchToProps= (dispatch) =>{
  return {
    setName : (name) =>{
      dispatch({
        type :"SET_NAME",
        payload : name
      })
    }
  } 
}
export default connect(mapStateToProps,mapDispatchToProps) (App);
