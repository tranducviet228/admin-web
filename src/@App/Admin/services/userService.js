import BaseService from "../../../@Core/api/BaseService";

class User extends BaseService {
  BASE_URL = "/";

  BASE_ENDPOINT = "/api/resource/users";

  constructor(params) {
    super(params);
    this.setRequest();
  }
}

export const userSerivce = new User();
