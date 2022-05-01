import $api from "../http";

export default class AuthService {
  static async login(userData) {
    const { username, password } = userData;
    const response = await $api.post("/auth", { username, password });
    localStorage.setItem("access_token", response.data.accessToken);
    return response;
  }
}
