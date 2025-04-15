"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";

const pages = [
  { label: "Home", path: "/Home" },
  { label: "Blogs", path: "/blogs" },
  { label: "Epic Image", path: "/nasa-epic" },
  { label: "Mars-rover", path: "/mars-rover" },
];

export default function NavBar() {
  const router = useRouter();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handlePageChange = (path) => {
    router.push(path);
    handleMenuClose();
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          🚀 NASA Image Gallery
        </Typography>

        {isMobile ? (
          <>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              onClick={handleMenuClick}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.label}
                  onClick={() => handlePageChange(page.path)}
                >
                  {page.label}
                </MenuItem>
              ))}
            </Menu>
          </>
        ) : (
          pages.map((page) => (
            <Button
              key={page.label}
              color="inherit"
              onClick={() => handlePageChange(page.path)}
              sx={{ marginLeft: 2 }}
            >
              {page.label}
            </Button>
          ))
        )}
      </Toolbar>
    </AppBar>
  );
}
