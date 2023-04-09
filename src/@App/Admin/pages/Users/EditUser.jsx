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

import React from "react";
import AdminContentPage from "../../components/Layout/AdminContentPage";
import ListUserProvider from "./ListUserProvider";
import EditUserForm from "./Components/EditUserForm";

const EditUser = (props) => {
  return (
    <ListUserProvider>
      <AdminContentPage pageTitle="Thêm mới user" content={<EditUserForm />} />
    </ListUserProvider>
  );
};

export default React.memo(EditUser);
