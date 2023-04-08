/*
 * Created Date: 06-10-2022, 9:46:59 pm
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

import React from "react";
import CoreAppTheme from "../@Core/components/CoreAppTheme";
// import PropTypes from 'prop-types'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  useNavigate,
} from "react-router-dom";
import { appRouterConfig } from "./appConfig";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-datepicker/dist/react-datepicker.css";
import withAppProviders from "./withAppProviders";
import { CoreConfirmProvider } from "../@Core/components/Confirm/CoreConfirm";
import Cookies from "js-cookie";
import { useEffect } from "react";
const App = (props) => {
  return (
    <CoreAppTheme>
      <CoreConfirmProvider>
        <RouterProvider router={appRouterConfig} />
      </CoreConfirmProvider>
      <ToastContainer />
    </CoreAppTheme>
  );
};

//App.defaultProps = {}

//App.propTypes = {}

export default App;
