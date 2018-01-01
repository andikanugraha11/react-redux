import React, {Component} from 'react';

class Main extends Component {
    render() {
      return (
        <div>
          <div className="Button">
            <h1>Username : {this.props.username}</h1>
            <button onClick={this.props.btnAction}>{this.props.btnName}</button>
          </div>
        </div>
      );
    }
  }

  export default Main;