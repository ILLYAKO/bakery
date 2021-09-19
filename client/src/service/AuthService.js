import $api from "../http";

export default class AuthService {
  static async login(email, password) {
    console.log("$api", $api);
    return $api.post("/user/login", { email, password });
  }

  static async registration(email, password) {
    return $api.post("/user/register", { email, password });
  }

  static async logout() {
    return $api.post("/user/logout");
  }
}
