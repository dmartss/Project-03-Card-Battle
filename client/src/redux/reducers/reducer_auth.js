import { REGISTER_SUBMIT } from "../actions";

const initialState = {
  auth: false,
  user: false
};
export default function(state = initialState, action) {
  switch (action.type) {
    case REGISTER_SUBMIT:
      return {
        ...state,
        auth: action.payload.auth,
        user: action.payload.user
      };
    default:
      return state;
  }
}
