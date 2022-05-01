import $api from "../http";

export class ListService {
  static async getList() {
    const response = await $api.get("/list");
    return response;
  }
}
