import { initState } from "../initState";
import { GETPEOPLE } from "../type/type";

export const peopleReducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GETPEOPLE:
      if (Array.isArray(payload)) {
        return payload;
      } else {
        return [payload];
      }

    default:
      return state;
  }
};
