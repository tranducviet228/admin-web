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
import Cookies from "js-cookie";
const AdminInfo = ({ color }) => {
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const authToken = Cookies.get("ACCOUNT_INFO");

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    // Remove all Cookie
    Object.keys(Cookies.get()).forEach(function (cookieName) {
      var neededAttributes = {};
      Cookies.remove(cookieName, neededAttributes);
    });
    await navigate(`/admin/login`);
  };

  return (
    <>
      <Box
        onClick={handleClick}
        sx={{
          cursor: "pointer",
        }}
        className="text-center"
      >
        <Avatar
          sx={{
            height: 100,
            width: 100,
            fontSize: 24,
            backgroundColor: orange[500],
          }}
          className="mx-auto mb-4"
          src="https://img.freepik.com/premium-psd/3d-male-cute-cartoon-character-avatar-isolated-3d-rendering_235528-1280.jpg?w=826"
        />
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
          {authToken ? JSON.parse(authToken)?.username : null}
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
        <MenuItem onClick={handleLogout}>
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
