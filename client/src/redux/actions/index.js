import axios from "axios";
export const REGISTER_SUBMIT = "REGISTER_SUBMIT";

export const submitRegister = (values, history) => async dispatch => {
  try {
    console.log(values);
    const res = await axios.post("/auth/register", values);
    history.push("/user");
    dispatch({ type: REGISTER_SUBMIT, payload: res.data });
  } catch (err) {
    console.log(err);
  }
};
