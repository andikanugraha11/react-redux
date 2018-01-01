import React from 'react';

const Main = (props) => {
      return (
        <div>
          <div className="Button">
            <h1>Username : {props.username}</h1>
            <button onClick={props.btnAction}>{props.btnName}</button>
          </div>
        </div>
      );
    }

    export default Main;