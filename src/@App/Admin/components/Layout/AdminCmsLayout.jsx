/*
 * Created Date: 10-10-2022, 11:49:50 pm
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
import Cookies from "js-cookie";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import {
  AppBar,
  Box,
  Button,
  CircularProgress,
  CssBaseline,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";

import LeftMenu from "./LeftMenu";
import AdminInfo from "./AdminInfo";

const drawerWidth = 240;

const AdminCmsLayout = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const navigate = useNavigate();
  const cmsInfor = Cookies.get("ACCOUNT_INFO");

  // const xsrfToken = !!Cookies.get("XSRF-TOKEN");

  useEffect(() => {
    if (cmsInfor) {
      navigate(`/admin/home-page`);
    } else {
      navigate(`/admin/login`);
    }
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar className="bg-white">
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <img
            className="aspect-video"
            style={{ height: "60px" }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgB80IUrYc7YRX8rQwNaU_DlAzPff0XsGTcw&usqp=CAU"
          />
          <Box className="ml-auto">
            <Box
              sx={{
                ml: { sm: 4 },
                mr: { xs: 4, sm: 0 },
                minWidth: { md: 220 },
                "& .user-info-view": {
                  p: 0,
                },
              }}
            >
              <AdminInfo />
            </Box>
            {/* <Box>
              <Button
                variant="outlined"
                color="secondary"
                startIcon={<BiUserCircle />}
                onClick={() => navigate("/cms/admin/login")}
              >
                Đăng nhập
              </Button>
            </Box> */}
          </Box>
          {/* {isAuthenticated ? (
						<Box
							sx={{
								ml: { sm: 4 },
								mr: { xs: 4, sm: 0 },
								minWidth: { md: 220 },
								'& .user-info-view': {
									p: 0
								},
								'& .user-info': {
									display: { xs: 'none', md: 'block' }
								}
							}}
						>
							<UserInfo />
						</Box>
					) : (
						<Box>
							<Button
								variant="outlined"
								startIcon={<BiUserCircle />}
								onClick={() => Router.push('/user/login')}
							>
								{tAuth('login')}
							</Button>
						</Box>
					)} */}
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          <LeftMenu />
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
          PaperProps={{
            className: "shadow-4",
          }}
        >
          <LeftMenu />
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          backgroundColor: "#F4F7FE",
        }}
      >
        <Toolbar />
        <Box
          className="h-full admin-content"
          sx={{ minHeight: `calc(100vh - 200px)` }}
        >
          <React.Suspense
            fallback={
              <div className="text-center mt-200">
                <CircularProgress />
              </div>
            }
          >
            <Outlet />
          </React.Suspense>
        </Box>
      </Box>
    </Box>
  );
};

//AdminCmsLayout.defaultProps = {}

//AdminCmsLayout.propTypes = {}

export default React.memo(AdminCmsLayout);
