import { ERROR_UNAVTORIZ } from "../type/type";
import { initState } from "../initState";
export const errorReducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ERROR_UNAVTORIZ:
      return [payload];

    default:
      return state;
  }
};
