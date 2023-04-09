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
import { useCategoryForm } from "./hooks/useCategoryForm";
import CoreInput from "../../../../../@Core/components/Input/CoreInput";
import { LoadingButton } from "@mui/lab";
import CoreAutocomplete from "../../../../../@Core/components/Input/CoreAutocomplete";
import SelectParentCategory from "./components/SelectParentCategory";

const CategoryForm = (props) => {
  const { isEdit } = props;
  const { methodForm, onSubmit } = useCategoryForm(props);
  const {
    control,
    formState: { isDirty, isSubmitting },
  } = methodForm;

  return (
    <FormProvider>
      <form onSubmit={onSubmit}>
        <Box className="flex flex-wrap">
          <CoreInput
            label="Tên danh mục"
            control={control}
            name="name"
            placeholder="Nhập tên danh mục"
            className="w-full px-8 mb-12 sm:w-1/2"
            required
          />

          <CoreAutocomplete
            control={control}
            name="categoryType"
            label="Kiểu danh mục"
            placeholder="Chọn kiểu danh mục"
            className="w-full px-8 mb-12 sm:w-1/2"
            returnValueType="enum"
            options={[
              { value: "EXPENSE", label: "Chi tiêu" },
              { value: "INCOME", label: "Thu nhập" },
            ]}
          />

          <SelectParentCategory
            control={control}
            name="parentId"
            label="Danh mục cha"
            placeholder="Chọn danh mục cha"
            className="w-full px-8 mb-12 sm:w-1/2"
            returnValueType="enum"
          />

          <CoreInput
            label="Mô tả"
            control={control}
            name="description"
            placeholder="Nhập mô tả"
            className="w-full px-8 mb-12"
            required
            multiline
            minRows={5}
          />
        </Box>
        <Box className="text-center">
          <LoadingButton
            type="submit"
            variant="contained"
            color="primary"
            loading={isSubmitting}
            disabled={!isDirty}
          >
            Xác nhận
          </LoadingButton>
        </Box>
      </form>
    </FormProvider>
  );
};

//ListSpotTable.defaultProps = {}

//ListSpotTable.propTypes = {}

export default React.memo(CategoryForm);
