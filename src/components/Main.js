import React from 'react';
import { Field, reduxForm } from 'redux-form';
const Main = (props) => {
  const { handleSubmit } = props;
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Username : {props.username}</h1>
        <div>
          <label htmlFor="firstName">First Name</label>
          <Field name="usrName" component="input" type="text" />
        </div>
        <button type="submit">{props.btnName}</button>
      </form>
      {/* <div className="Button">
        <h1>Username : {props.username}</h1>
        <button onClick={props.btnAction}>{props.btnName}</button>
      </div> */}
    </div>
  );
}


export default reduxForm({form :'usr'})(Main);