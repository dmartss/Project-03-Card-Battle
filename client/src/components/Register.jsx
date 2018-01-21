import React from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import { submitRegister } from '../redux/actions';
import { compose, lifecycle } from 'recompose';
import RenderFields from './registerForm';

// const enhance =

const Register = ({ loggedIn, handleSubmit, submitRegister, history }) => {
  const submitAndRedirect = (values, history) =>
    submitRegister(values, history);
  return (
    <div className="register">
      <form id="register" onSubmit={handleSubmit(submitAndRedirect)}>
        {RenderFields}
        <button type="submit">Submit</button>
        {loggedIn && history.push('/user')}
      </form>
    </div>
  );
};

export default compose(
  reduxForm({ form: 'register' }),
  lifecycle({
    componentWillUnmount() {
      this.props.getInitial();
    }
  }),
  connect(({ auth: { loggedIn } }) => ({ loggedIn }), { submitRegister })
)(withRouter(Register));
