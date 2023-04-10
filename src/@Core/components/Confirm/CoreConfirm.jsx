/*
 * Created Date: 08-09-2022, 12:02:23 am
 * Author: Peter
 * Email: phantrung696@gmail.com
 * -----
 * Last Modified:
 * Modified By:
 * -----
 * Copyright (c) 2022 PT CORP, Inc
 * -----
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	----------------------------------------------------------
 */

import { LoadingButton } from "@mui/lab";
import Icon from "@mui/material/Icon";

import { createContext, useCallback, useContext, useState } from "react";
import CoreDialog from "../Dialog/CoreDialog";
import { BiTrash } from "react-icons/bi";

const ConfirmContext = createContext();

const useConfirm = function useConfirm() {
  const confirm = useContext(ConfirmContext);

  return confirm;
};

const CoreConfirmProvider = (props) => {
  const [config, setConfig] = useState({});
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const confirm = useCallback((config) => {
    setConfig(config);
    setOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    config.onClose?.();
    setOpen(false);
  }, [config]);

  const handleOk = useCallback(async () => {
    setLoading(true);
    try {
      await config.onOk();
      handleClose();
    } catch (error) {
      // TODO: handle error
    }
    setLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [config]);

  const handleCancel = useCallback(async () => {
    if (!config.onCancel) {
      handleClose();
    } else {
      setLoading(true);
      try {
        await config.onCancel();
        handleClose();
      } catch (error) {
        // TODO: handle error
      }
      setLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [config]);

  return (
    <>
      <ConfirmContext.Provider {...props} value={confirm} />
      <CoreDialog
        DialogProps={{
          className: "dialog-confirm",
          sx: {
            zIndex: config?.zIndex ?? 1300,
          },
        }}
        dialogAction={
          <>
            {!config.hideCancelBtn && (
              <LoadingButton onClick={handleCancel}>
                {config.cancelText ?? "Hủy bỏ"}
              </LoadingButton>
            )}
            <LoadingButton
              color={config.color ?? "secondary"}
              loading={loading}
              variant="contained"
              onClick={handleOk}
            >
              {config.okText ?? "Xác nhận"}
            </LoadingButton>
          </>
        }
        dialogContent={
          <div className="flex">
            <Icon className="mr-8" color={config.color ?? "secondary"}>
              {config.icon ?? <BiTrash />}
            </Icon>
            {config.content}
          </div>
        }
        open={open}
        handleClose={handleClose}
      />
    </>
  );
};

export { CoreConfirmProvider, useConfirm };
