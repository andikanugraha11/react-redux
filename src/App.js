import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './Main.js';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Main btnName="Ganti User" username={this.props.user.username} btnAction={()=>{this.props.setName("dika")}}/>
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
        type :"SET_USERNAME",
        payload : name
      })
    }
  } 
}
export default connect(mapStateToProps,mapDispatchToProps) (App);
