import axios from "axios";
import { API_URL } from "../../components/http";
import AuthService from "../../components/services/AuthService";
import { unauthorized } from "../actions/errorAction";
import { enableLoader } from "../actions/loaderAction";
import { userIn } from "../actions/userAction";

export const singIn = (payload, navigate) => async (dispatch) => {
  try {
    const response = await AuthService.login(payload);
    dispatch(userIn(response.data.user));
    dispatch(enableLoader());
    navigate("/");
  } catch (error) {
    dispatch(unauthorized(error.response?.data?.message));
  }
};

export const checkAuth = () => async (dispatch) => {
  try {
    const response = await axios.get(`${API_URL}/refresh`, {
      withCredentials: true,
    });
    localStorage.setItem("access_token", response.data.accessToken);
    dispatch(userIn(response.data.user));
    dispatch(enableLoader());
  } catch (error) {
    dispatch(unauthorized(error.response?.data?.message));
  }
};
