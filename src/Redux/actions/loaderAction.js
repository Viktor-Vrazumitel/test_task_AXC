import { DISABLE_LOADER, ENABLE_LOADER } from "../type/type";

export const enableLoader = () => {
  return {
    type: ENABLE_LOADER,
  };
};
export const disableLoader = () => {
  return {
    type: DISABLE_LOADER,
  };
};
