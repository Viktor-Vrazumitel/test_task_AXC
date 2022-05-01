import { ListService } from "../../components/services/ListService";
import { unauthorized } from "../actions/errorAction";
import { setListPeople } from "../actions/listPeopleAction";

export const getListPeople = () => async (dispatch) => {
  try {
    const response = await ListService.getList();
    dispatch(setListPeople(response.data.people));
  } catch (error) {
    dispatch(unauthorized(error));
  }
};
