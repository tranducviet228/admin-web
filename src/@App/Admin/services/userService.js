import BaseService from "../../../@Core/api/BaseService";

class User extends BaseService {
  BASE_URL = "https://expensemanagement-production.up.railway.app";

  BASE_ENDPOINT = "/api/admin/users";

  constructor(params) {
    super(params);
    this.setRequest();
  }
}

export const userSerivce = new User();
