import { REGISTER_SUBMIT } from "../actions";

const initialState = {
  auth: false,
  user: false
};
export default function(state = initialState, { type, payload }) {
  switch (type) {
    case REGISTER_SUBMIT:
      return {
        ...state,
        auth: payload.auth,
        user: payload.user
      };
    default:
      return state;
  }
}
