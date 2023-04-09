/*
 * Created Date: 16-08-2022, 5:40:29 pm
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

import { TableBody, TableCell, TableRow } from "@mui/material";
import { flexRender } from "@tanstack/react-table";
import React from "react";
import CoreTableCell from "./CoreTableCell";
// import PropTypes from 'prop-types'

const CoreTableBody = ({ table, loading }) => {
  const renderRows = () => {
    const { rows } = table.getRowModel();

    console.log("============= rows", rows);
    const allColumns = table.getAllColumns();
    if (rows.length === 0) {
      return (
        <TableRow>
          <TableCell
            align="center"
            className="italic"
            colSpan={allColumns.length}
          >
            {"Không có dữ liệu để hiển thị"}
          </TableCell>
        </TableRow>
      );
    }
    return rows.map((row) => (
      <TableRow key={row.id}>
        {row.getVisibleCells().map((cell) => (
          <CoreTableCell key={cell.id}>
            {flexRender(cell.column.columnDef.cell, cell.getContext())}
          </CoreTableCell>
        ))}
      </TableRow>
    ));
  };

  return <TableBody>{renderRows()}</TableBody>;
};

//CoreTableBody.defaultProps = {}

//CoreTableBody.propTypes = {}

export default React.memo(CoreTableBody);
