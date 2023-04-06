import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Icon, ListItemIcon, ListItemText } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import orange from "@mui/material/colors/orange";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import PropTypes from "prop-types";
import React from "react";
import { useNavigate } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
const AdminInfo = ({ color }) => {
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box
        onClick={handleClick}
        sx={{
          py: 3,
          px: 3,
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
        }}
        className="user-info-view"
      >
        <Box sx={{ py: 0.5 }}>
          <Avatar
            sx={{
              height: 40,
              width: 40,
              fontSize: 24,
              backgroundColor: orange[500],
            }}
            src="https://khoinguonsangtao.vn/wp-content/uploads/2022/09/hinh-anh-avatar-ff-ngau.jpg"
          />
        </Box>
        <Box
          sx={{
            width: { xs: "calc(100% - 62px)", xl: "calc(100% - 72px)" },
            ml: 2,
            // color: color
          }}
          className="user-info"
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                mb: 0,
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                fontSize: 16,
                fontWeight: 700,
                color: "black",
              }}
              component="span"
            >
              Admin User
            </Box>
            {/* <Box
							sx={{
								ml: 3,
								color: 'inherit',
								display: 'flex'
							}}
						>
							<ExpandMoreIcon />
						</Box> */}
          </Box>
          <Box
            sx={{
              mt: -0.5,
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              color: "black",
            }}
          >
            ADMIN
          </Box>
        </Box>
      </Box>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        // keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem onClick={() => navigate("/admin/login")}>
          <ListItemIcon>
            <LogoutIcon />
            {/* <Icon>logout</Icon> */}
          </ListItemIcon>
          <ListItemText>Đăng xuất</ListItemText>
        </MenuItem>
      </Menu>
    </>
  );
};

export default AdminInfo;

AdminInfo.defaultProps = {
  color: "text.secondary",
};

AdminInfo.propTypes = {
  color: PropTypes.string,
};
