import axios from "axios";

export const handleRegisterSubmit = (values, history) => async dispatch => {
  const res = await axios.post("/auth/register", values);
  console.log(values);
  history.push("/user");
  dispatch({ type: "SUBMIT_REGISTER", payload: res.data });
};
