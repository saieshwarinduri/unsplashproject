import { act } from "react-dom/test-utils";

const at = {
  arr: [],
};
export const reducer2 = (state = at, action) => {
  if (action.type === "addObj") {
    return { arr: [...state.arr, ...action.payload] };
  } else if (action.type === "deleteObj") {
    return { arr: [] };
  } else {
    return state;
  }
};
