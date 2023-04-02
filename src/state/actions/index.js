export const addObject = (objec) => {
  return (dispatch) => {
    dispatch({
      type: "addObj",
      payload: objec,
    });
  };
};
export const deleteObj = (objec) => {
  return (dispatch) => {
    dispatch({
      type: "deleteObj",
      payload: objec,
    });
  };
};
