/*
 * Created Date: 12-10-2022, 3:36:47 pm
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

import React, { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useAdminPageContext } from "../../../../components/Provider/AdminPageProvider";
import { Box, Chip } from "@mui/material";

const UserTable = (props) => {
  const navigate = useNavigate();
  const { tableHandler } = useAdminPageContext();

  return <Box>list</Box>;
};

//ListSpotTable.defaultProps = {}

//ListSpotTable.propTypes = {}

export default React.memo(UserTable);
