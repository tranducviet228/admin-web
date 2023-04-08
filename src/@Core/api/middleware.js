/*
 * Created Date: 16-08-2022, 2:14:11 am
 * Author: Peter
 * Email: phantrung696@gmail.com
 * -----
 * Last Modified:
 * Modified By:
 * -----
 * Copyright (c) 2022 PT CORP, Inc
 * -----
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	----------------------------------------------------------
 */

import Cookies from "js-cookie";

const excludeAuthenApi = [];
const authToken = async (requestConfig) => {
  let authToken = Cookies.get("ACCOUNT_INFO");

  console.log("_______ authToken _______", authToken);

  const { url, notAuth } = requestConfig;
  if (excludeAuthenApi.includes(url) || notAuth) {
    return requestConfig;
  }

  if (authToken) {
    requestConfig.headers.Authorization = `${
      JSON.parse(authToken)?.accessToken
    }`;
  }

  // requestConfig.headers.Authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRob3JpdGllcyI6W10sImJpel9hcHBfc2hvcnRfY29kZSI6ImhlbGxvd29ybGQxIiwiY29tcGFueV9jb2RlIjoiQVBVUyIsImNvbXBhbnlfaWQiOjEsImNvcmVfYXV0aG9yaXRpZXMiOlsiUF9URVNUX0FERCIsIlBfVEVTVF9FRElUIiwiUF9URVNUX1ZJRVciXSwiZW52IjoiRE9DS0VSIiwiZXhwIjo0MDcwODgzNjAwLCJpZCI6ImFhMWY0ZDhmLTE5ZjAtNGE2MC04MTg5LTBkOTVhNDBmYTVlYyIsIm9yaWdfaWF0IjoxNjIzMzM3ODQ2LCJ1c2VyX2lkIjoxfQ.8_vualJsNRH0xWhQWyPHUz024rjRi4_v5JDOaG-Zuj8`

  return requestConfig;
};

export const globalApiMiddleware = {
  auth: authToken,
};
