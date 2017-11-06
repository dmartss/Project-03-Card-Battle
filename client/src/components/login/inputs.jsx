import React from "react";
import _ from "lodash";
import fields from "./fields";
import { Field } from "redux-form";
import registerField from "./registerField";

export const RegisterComponent = () => {
  return _.map(fields, ({ placeholder, name }) => (
    <Field
      key={name}
      component={registerField}
      placeholder={placeholder}
      type="text"
      name={name}
    />
  ));
};
