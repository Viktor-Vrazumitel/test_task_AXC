import { ERROR_UNAVTORIZ } from "../type/type";

export const unauthorized = (message) => {
  return {
    type: ERROR_UNAVTORIZ,
    payload: message,
  };
};
