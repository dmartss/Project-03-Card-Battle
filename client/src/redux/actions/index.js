import axios from "axios";
export const REGISTER_SUBMIT = "REGISTER_SUBMIT";

export const submitRegister = values => async dispatch => {
  try {
    const res = await axios.post("/auth/register", values);

    dispatch({ type: REGISTER_SUBMIT, payload: res.data });
  } catch (err) {
    console.log(err);
  }
};
