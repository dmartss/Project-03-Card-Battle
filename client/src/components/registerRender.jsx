import React from "react";

export default ({ input, placeholder, label, type }) => (
  <input
    {...input}
    type={type}
    placeholder={placeholder}
    style={{ marginBottom: "5px" }}
  />
);
