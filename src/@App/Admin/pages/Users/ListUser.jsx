/*
 * Created Date: 11-10-2022, 12:31:21 am
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
import AdminContentPage from "../../components/Layout/AdminContentPage";
import ListUserProvider from "./ListUserProvider";
import ListUserTable from "./Components/ListUserTable";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ListUser = (props) => {
  const navigate = useNavigate();
  return (
    <ListUserProvider>
      <AdminContentPage
        pageTitle="Danh sách user"
        headerAction={
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate("/admin/user/new")}
          >
            Thêm mới
          </Button>
        }
        content={<ListUserTable />}
      />
    </ListUserProvider>
  );
};

export default React.memo(ListUser);
