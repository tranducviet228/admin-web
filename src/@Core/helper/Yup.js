/*
 * Created Date: 10-10-2022, 10:43:11 pm
 * Author: Peter
 * Email: phantrung696@gmail.com
 * -----
 * Last Modified:
 * Modified By:
 * -----
 * Copyright (c) 2022 PROS+ Group , Inc
 * -----
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	----------------------------------------------------------
 */
import * as Yup from "yup";

export { yupResolver } from "@hookform/resolvers/yup";

const REGEX = {
  PASSWORD:
    /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/,
};

Yup.addMethod(
  Yup.string,
  "password",
  function (errorMessage = "Mật khẩu không hợp lệ") {
    return this.matches(REGEX.PASSWORD, {
      message: errorMessage,
      excludeEmptyString: true,
    });
  }
);

export default Yup;
