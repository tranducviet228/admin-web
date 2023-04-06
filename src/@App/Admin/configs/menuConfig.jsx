/*
 * Created Date: 11-10-2022, 12:22:02 am
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

import { ROUTER_ADMIN } from './constants'

export const menuAdminConfig = [
	{
		title: 'Trang chủ',
		url: ROUTER_ADMIN.homePage
	},
	{
		title: 'Quản lý user',
		url: ROUTER_ADMIN.event.list
	}
]
