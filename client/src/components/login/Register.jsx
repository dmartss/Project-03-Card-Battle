import React from "react";
import { reduxForm } from "redux-form";
import _ from "lodash";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import validateEmails from "./validateEmails";
import { RegisterComponent } from "./inputs";
import fields from "./fields";
import { handleRegisterSubmit } from "../../redux/actions";

const Register = ({ handleSubmit, history, handleRegisterSubmit, values }) => (
  <div className="register">
    <form>
      {RegisterComponent()}
      <button
        onSubmit={handleSubmit(handleRegisterSubmit(values, history))}
        type="submit"
      >
        Register
      </button>
    </form>
  </div>
);

const validate = values => {
  const errors = {};

  errors.recipients = validateEmails(values.recipients || "");

  _.each(fields, ({ name }) => {
    if (!values[name]) {
      errors[name] = "You must provide a value";
    }
  });
  return errors;
};

export default reduxForm({
  validate,
  form: "registerField"
})(connect(null, { handleRegisterSubmit })(withRouter(Register)));
