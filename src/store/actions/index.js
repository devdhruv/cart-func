import { DARK_MODE } from "../types";

export const modeHandler = (mode) => async (dispatch) => {
  localStorage.setItem("darkmode", mode);
  dispatch({
    type: DARK_MODE,
    payload: mode,
  });
};
