import React, { Component } from 'react';
import './App.css';
import Main from '../components/Main.js';
import { connect } from 'react-redux';
import {setUsername} from '../actions/userAction';
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
      dispatch(setUsername(name))
    }
  } 
}
export default connect(mapStateToProps,mapDispatchToProps) (App);
