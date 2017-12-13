import React from "react";
import _ from "lodash";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { submitRegister } from "../redux/actions";

const Register = ({ handleSubmit, submitRegister, history }) => (
  <div className="register">
    <form onSubmit={handleSubmit(submitRegister)}>
      <div>
        <label htmlFor="username">First Name</label>
        <Field name="username" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="password">Last Name</label>
        <Field name="password" component="input" type="password" />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <Field name="email" component="input" type="email" />
      </div>
      <div>
        <label htmlFor="displayName" />
        <Field name="displayName" component="input" type="text" />
      </div>
      <button onClick={() => history.push("/user")} type="submit">
        Submit
      </button>
    </form>
  </div>
);

export default reduxForm({ form: "registerForm" })(
  connect(null, { submitRegister })(withRouter(Register))
);
