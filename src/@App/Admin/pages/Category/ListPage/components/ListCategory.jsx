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
import { Box, Chip, CircularProgress } from "@mui/material";

const UserTable = (props) => {
  const navigate = useNavigate();
  const { category, loadingCategory } = useAdminPageContext();
  const formatCategory = category
    ?.filter((i) => i?.parentId === 0)
    .map((i) => {
      return {
        ...i,
        categoryChildren: category?.filter((x) => x?.id === i?.id),
      };
    });

  console.log("============= formatCategory", formatCategory);

  return loadingCategory ? (
    <Box className="mt-40 text-center">
      <CircularProgress />
    </Box>
  ) : (
    <Box>list</Box>
  );
};

//ListSpotTable.defaultProps = {}

//ListSpotTable.propTypes = {}

export default React.memo(UserTable);
