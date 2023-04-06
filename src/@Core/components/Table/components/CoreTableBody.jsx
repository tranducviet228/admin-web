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

import { TableBody, TableCell, TableRow } from '@mui/material'
import { flexRender } from '@tanstack/react-table'
import React from 'react'
import { useCoreTableContext } from '../CoreTable'
import CoreTableCell from './CoreTableCell'
// import PropTypes from 'prop-types'

const CoreTableBody = ({ table, loading }) => {
	const { t } = useCoreTableContext()
	const renderRows = () => {
		const { rows } = table.getRowModel()
		const allColumns = table.getAllColumns()
		if (rows.length === 0) {
			return (
				<TableRow>
					<TableCell align="center" colSpan={allColumns.length}>
						{t('table.no_data')}
					</TableCell>
				</TableRow>
			)
		}
		return rows.map(row => (
			<TableRow key={row.id}>
				{row.getVisibleCells().map(cell => {
					return (
						<CoreTableCell
							key={cell.id}
							{...{
								style: {
									width: cell.column.getSize()
								}
							}}
						>
							{flexRender(cell.column.columnDef.cell, cell.getContext())}
						</CoreTableCell>
					)
				})}
			</TableRow>
		))
	}

	return <TableBody>{renderRows()}</TableBody>
}

//CoreTableBody.defaultProps = {}

//CoreTableBody.propTypes = {}

export default React.memo(CoreTableBody)
