import { ROUTER_ADMIN } from "./constants";
import React from "react";
/*
 * Created Date: 11-10-2022, 12:22:10 am
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

const LazyHomePage = React.lazy(() => import("../pages/HomePage"));
const LazyUserList = React.lazy(() => import("../pages/Users/ListPage"));
const LazyUserDetail = React.lazy(() => import("../pages/Users/DetailPage"));

// auth
const LazyLogin = React.lazy(() => import("../pages/Auth/Login"));

export const routerAuthConfig = [
  {
    path: ROUTER_ADMIN.auth.login,
    element: <LazyLogin />,
  },
];

export const routerAdminConfig = [
  {
    path: ROUTER_ADMIN.homePage,
    element: <LazyHomePage />,
  },
  {
    path: ROUTER_ADMIN.user.list,
    element: <LazyUserList />,
  },
  {
    path: ROUTER_ADMIN.user.edit,
    element: <LazyUserDetail />,
  },
];
