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
// const LazyEventList = React.lazy(() => import('../pages/Event/ListPage'))
// const LazySpotList = React.lazy(() => import('../pages/Spot/ListSpot'))
// const LazySpotDetail = React.lazy(() => import('../pages/Spot/EditSpot'))
// const LazyUserList = React.lazy(() => import('../pages/Users/ListUser'))
// const LazyUserDetail = React.lazy(() => import('../pages/Users/EditUser'))
// const LazyTagDetail = React.lazy(() => import('../pages/Tag/DetailTag'))
// const LazyTagList = React.lazy(() => import('../pages/Tag/ListTag'))
// const LazySurroundingList = React.lazy(() => import('../pages/Surrounding/ListSurrounding'))
// const SurroundingEdit = React.lazy(() => import('../pages/Surrounding/EditSurrounding'))
// const LazyMissionList = React.lazy(() => import('../pages/Mission/ListMission'))
// const LazyMissionDetail = React.lazy(() => import('../pages/Mission/DetailMission'))
// const NotificationList = React.lazy(() => import('../pages/Notification/ListNotification'))
// const NotificationEdit = React.lazy(() => import('../pages/Notification/DetailNotification'))
// const ItemList = React.lazy(() => import('../pages/Item/ListItem'))
// const ItemEdit = React.lazy(() => import('../pages/Item/EditItem'))
// const Maintaince = React.lazy(() => import('../pages/Maintaince/Maintaince'))
// const MaintainceConfig = React.lazy(() => import('../pages/Maintaince/MaintainceConfig/MaintainceConfig'))
// const LazyAccountList = React.lazy(() => import('../pages/Account/ListAccount'))
// const LazyAccountDetail = React.lazy(() => import('../pages/Account/EditAccount'))
// const LazyCurrencyDetail = React.lazy(() => import('../pages/Currency/EditCurrency'))
// const CardList = React.lazy(() => import('../pages/Card/ListCard'))
// const CardEdit = React.lazy(() => import('../pages/Card/EditCard'))

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
];
