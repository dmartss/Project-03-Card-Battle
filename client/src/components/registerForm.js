import React from 'react';
import { Field } from 'redux-form';
import _ from 'lodash';
import registerFields from './regFields';
import registerRender from './registerRender';

export default _.map(registerFields, ({ type, placeholder, name }) => (
  <Field
    key={name}
    component={registerRender}
    placeholder={placeholder}
    type={type}
    name={name}
  />
));
