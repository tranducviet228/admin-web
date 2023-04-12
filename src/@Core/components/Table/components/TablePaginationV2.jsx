/*
 * Created Date: 19-02-2023, 1:23:31 am
 * Author: Hai Tran
 * Email: you@you.you
 * -----
 * Last Modified: Sat Mar 18 2023
 * Modified By: Dell
 * -----
 * Copyright (c) 2023 PT CORP, Inc
 * -----
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	----------------------------------------------------------
 */

import { KeyboardArrowDown } from "@mui/icons-material";
import {
  Box,
  Button,
  Menu,
  MenuItem,
  Pagination,
  TablePagination,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useUpdateEffect } from "ahooks";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { errorMsg } from "../../../helper/Message";
import CoreInput from "../../Input/CoreInput";
// import PropTypes from 'prop-types'

const TablePaginationV2 = (props) => {
  const isMobile = useMediaQuery("(max-width:600px)");

  const {
    pageIndex,
    pageSize,
    total,
    fetchData,
    pageNumber,
    params,
    totalPage,
  } = props;

  const [rowsPerPage, setRowsPerPage] = useState(pageSize ?? 10);
  const [page, setPage] = useState(pageIndex - 1 ?? 0);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useUpdateEffect(() => {
    setValue("jump_to_page", page);
  }, [page]);

  const open = Boolean(anchorEl);
  const { control, getValues, setValue } = useForm({
    defaultValues: {
      jump_to_page: pageNumber ?? null,
    },
  });

  const handleChangePage = (event, newPage) => {
    console.log("============= newPage", newPage);
    setPage(newPage);
    fetchData({
      ...params,
      size: rowsPerPage,
      page: newPage + 1,
    });
  };

  return (
    <Box className="text-right">
      <TablePagination
        component="div"
        count={total}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        labelRowsPerPage="Số hàng hiển thị trên trang: "
        labelDisplayedRows={({ from, to, count }) => {
          return `${from}–${to} / ${count !== -1 ? count : `more than ${to}`}`;
        }}
        onRowsPerPageChange={async (event) => {
          const res = await fetchData({
            ...params,
            size: event.target.value,
            page: 1,
          });
          console.log("============= res", res);
          setPage(0);
          setRowsPerPage(event.target.value);
        }}
      />
      {/* <Box className="flex items-center justify-start w-auto mx-auto md:mx-0">
        <Typography>{"Số hàng hiển thị trên trang"}</Typography>
        <Button onClick={handleClick}>
          {rowsPerPage} <KeyboardArrowDown />
        </Button>
        {!isMobile ? (
          <Typography>{`của tổng số ${total}`}</Typography>
        ) : (
          <Typography>{`/ ${total}`}</Typography>
        )}

        <Menu open={open} onClose={handleClose} anchorEl={anchorEl}>
          {[5, 10, 12, 20, 50, 100]?.map((item, index) => {
            return (
              <MenuItem
                key={index}
                onClick={async () => {
                  handleClose();
                  const res = await fetchData({
                    ...params,
                    size: item,
                    page: 1,
                  });
                  setPage(res?.page);
                  setRowsPerPage(item);
                }}
              >
                {item}
              </MenuItem>
            );
          })}
        </Menu>
      </Box>
      <Box className="flex w-full my-10 md:my-0 md:w-auto">
        <Box className="mx-auto">
          <Pagination
            color="primary"
            boundaryCount={0}
            onChange={(e, value) => {
              setPage(value);
              fetchData({
                ...params,
                size: rowsPerPage,
                page: value,
              });
            }}
            page={pageIndex ?? 1}
            count={totalPage}
            showFirstButton
            showLastButton
            size={isMobile ? "small" : "medium"}
          />
        </Box>
      </Box>
      <Box className="flex items-center justify-end w-auto mx-auto md:mx-0">
        <Typography className="pr-8">{"Nhảy tới trang"}</Typography>
        <CoreInput
          control={control}
          type="number"
          name="jump_to_page"
          onKeyPress={(ev) => {
            if (ev.key === "Enter") {
              const toPage = getValues("jump_to_page");
              if (toPage <= pageNumber && toPage > 0) {
                fetchData({
                  ...params,
                  size: rowsPerPage,
                  page: toPage,
                });
                setPage(toPage);
              } else {
                errorMsg("Trang không tồn tại");
              }
            }
          }}
          onBlur={() => setValue("jump_to_page", page)}
          className="w-60"
          size="small"
        />
      </Box> */}
    </Box>
  );
};

// TablePaginationV2.defaultProps = {}

// TablePaginationV2.propTypes = {}

export default React.memo(TablePaginationV2);
