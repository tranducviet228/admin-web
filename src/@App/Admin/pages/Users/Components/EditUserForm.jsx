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

import { Box } from "@mui/system";
import React from "react";
import { FormProvider } from "react-hook-form";
import { Button, Typography } from "@mui/material";
import { useUserForm } from "../hooks/useUserForm";
import CoreInput from "../../../../../@Core/components/Input/CoreInput";
import { LoadingButton } from "@mui/lab";

const EditUserForm = (props) => {
  const { methodForm, onSubmit } = useUserForm();
  const { control } = methodForm;

  return (
    <FormProvider>
      <form onSubmit={onSubmit}>
        <Box className="flex flex-wrap">
          <CoreInput
            label="Email"
            control={control}
            name="email"
            placeholder="Nhập email"
            className="w-full mb-12"
            required
          />
          <CoreInput
            label="Username"
            control={control}
            name="username"
            placeholder="Nhập username"
            className="w-full mb-12"
            required
          />

          <CoreInput
            label="Mật khẩu"
            control={control}
            name="password"
            placeholder="Nhập mật khẩu"
            className="w-full mb-12"
            required
          />
        </Box>
        <Box className="text-center">
          <LoadingButton type="submit" variant="contained" color="primary">
            Xác nhận
          </LoadingButton>
        </Box>
      </form>
    </FormProvider>
  );
};

//ListSpotTable.defaultProps = {}

//ListSpotTable.propTypes = {}

export default React.memo(EditUserForm);
