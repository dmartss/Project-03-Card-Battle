import React from "react";

export default ({ input, placeholder, meta: { error, touched } }) => [
  <input
    key="2"
    placeholder={placeholder}
    {...input}
    style={{ marginBottom: "5px" }}
  />,
  <div key="3" style={{ marginBottom: "20px" }}>
    {touched && error}
  </div>
];
