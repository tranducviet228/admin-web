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
import CoreTable, {
  columnHelper,
} from "../../../../../../@Core/components/Table/CoreTable";
import { Box } from "@mui/material";

const UserTable = (props) => {
  const navigate = useNavigate();
  const { userTableHandler } = useAdminPageContext();

  console.log("============= userTableHandler", userTableHandler);
  const columns = useMemo(() => {
    return [
      columnHelper.accessor("id", {
        cell: (info) => info.getValue(),
        header: "abcasc",
      }),
      //   columnHelper.accessor("code", {
      //     header: t("title.email"),
      //   }),
      //   columnHelper.accessor("name", {
      //     header: t("title.name"),
      //   }),
      //   columnHelper.accessor("address", {
      //     header: t("title.birthday"),
      //   }),
      //   columnHelper.accessor("phone", {
      //     header: t("title.gender"),
      //   }),
      //   columnHelper.accessor("point", {
      //     header: t("title.place"),
      //   }),
      //   columnHelper.accessor("action", {
      //     header: t("title.action"),
      //     cell: ({ row }) => {
      //       const data = row.original;
      //       return (
      //         <div className="flex">
      //           <CoreActionView
      //             onClick={() => navigate(ROUTER_ADMIN.user.edit)}
      //           />
      //           <CoreActionEdit
      //             onClick={() => navigate(ROUTER_ADMIN.user.edit)}
      //           />
      //           <CoreActionDelete />
      //         </div>
      //       );
      //     },
      //   }),
    ];
  }, []);

  return (
    <Box>
      <CoreTable isShowPagination columns={columns} {...userTableHandler} />
    </Box>
  );
};

//ListSpotTable.defaultProps = {}

//ListSpotTable.propTypes = {}

export default React.memo(UserTable);
