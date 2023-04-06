/*
 * Created Date: 12-10-2022, 3:17:29 pm
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

import { useRequest } from "ahooks";
import React, { useEffect } from "react";
import { userSerivce } from "../../services/userService";
import AdminPageProvider from "../../components/Provider/AdminPageProvider";
import useCoreTable from "../../../../@Core/components/Table/hooks/useCoreTable";
// import PropTypes from 'prop-types'

const ListUserProvider = (props) => {
  const requestUsers = useRequest(userSerivce.list, {
    manual: true,
  });

  const userTableHandler = useCoreTable(requestUsers);

  useEffect(() => {
    userTableHandler.handleFetchData();
  }, []);

  const data = {
    userTableHandler,
    ...props,
  };

  return <AdminPageProvider {...data}>{props.children}</AdminPageProvider>;
};

//ListSpotProvider.defaultProps = {}

//ListSpotProvider.propTypes = {}

export default React.memo(ListUserProvider);
