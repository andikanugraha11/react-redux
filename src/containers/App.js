import React, { Component } from 'react';
import './App.css';
import Main from '../components/Main.js';
import { connect } from 'react-redux';
import {setUsername} from '../actions/userAction';
class App extends Component {
  
  changeUsr = (values) =>{
    if(typeof values.usrName === 'undefined'){
      alert('Username tidak boleh kosong');
    }else{
      this.props.setName(values.usrName);
    }
  }

  render() {
    return (
      <div className="App">
        <Main btnName="Ganti User" username={this.props.user.username} onSubmit={this.changeUsr}/>
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
