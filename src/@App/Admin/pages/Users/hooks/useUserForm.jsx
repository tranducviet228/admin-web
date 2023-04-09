/*
 * Created Date: 23-10-2022, 12:26:54 am
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

import { useForm } from "react-hook-form";
import { errorMsg, successMsg } from "../../../../../@Core/helper/Message";
import { yupResolver } from "@hookform/resolvers/yup";
import Yup from "../../../../../@Core/helper/Yup";

export const useUserForm = () => {
  const methodForm = useForm({
    mode: "onTouched",
    defaultValues: {
      email: "",
      username: "",
      password: "",
      roles: [],
    },
    resolver: yupResolver(
      Yup.object({
        email: Yup.string().required().email(),
        username: Yup.string().required(),
        password: Yup.string().required(),
      })
    ),
  });

  const onSubmit = methodForm.handleSubmit(
    async (data) => {
      try {
        console.log("============= data", data);
        successMsg("Create user successfully");
      } catch (e) {
        errorMsg(e);
      }
    },
    (error) => console.log("============= error", error)
  );

  return { methodForm, onSubmit };
};
