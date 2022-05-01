import { GETPEOPLE } from "../type/type";

export const setListPeople = (people) => {
  return {
    type: GETPEOPLE,
    payload: people,
  };
};
