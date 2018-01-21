import { REGISTER_SUBMIT } from '../actions';

const initialState = {
  auth: false,
  user: false
};
export default function(state = initialState, { type, payload }) {
  switch (type) {
    case REGISTER_SUBMIT:
      const { auth, user } = payload;
      return {
        ...state,
        auth: auth,
        user: user,
        loggedIn: true
      };
    default:
      return state;
  }
}
