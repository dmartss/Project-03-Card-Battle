import React from "react";
import _ from "lodash";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { submitRegister } from "../redux/actions";
import registerFields from "./regFields";
import registerRender from "./registerRender";

const Register = ({ handleSubmit, submitRegister, history }) => {
  const submitAndRedirect = (values, history) =>
    submitRegister(values, history);
  const fieldsNow = _.map(registerFields, ({ type, placeholder, name }) => (
    <Field
      key={name}
      component={registerRender}
      placeholder={placeholder}
      type={type}
      name={name}
    />
  ));
  return (
    <div className="register">
      <form id="register" onSubmit={handleSubmit(submitAndRedirect)}>
        {fieldsNow}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default reduxForm({ form: "register" })(
  connect(null, { submitRegister })(withRouter(Register))
);
