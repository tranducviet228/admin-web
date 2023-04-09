import React, { useEffect, useMemo } from "react";
import UserTable from "./components/UserTable";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AdminContentPage from "../../../components/Layout/AdminContentPage";
import UserProvider from "./UserProvider";

const ListPage = (props) => {
  const navigate = useNavigate();

  return (
    <UserProvider>
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
        content={<UserTable />}
      />
    </UserProvider>
  );
};

export default React.memo(ListPage);
