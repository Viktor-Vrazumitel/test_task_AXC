import { USERIN_AVTORIZ } from "../type/type";

export const userIn = (user) => {
  return {
    type: USERIN_AVTORIZ,
    payload: user,
  };
};
