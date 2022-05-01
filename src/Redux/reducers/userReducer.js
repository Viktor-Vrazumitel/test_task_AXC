import { USERIN_AVTORIZ } from "../type/type";

export const userReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case USERIN_AVTORIZ:
      return [...state, payload];

    default:
      return state;
  }
};
