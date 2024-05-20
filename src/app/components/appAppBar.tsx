"use client";
import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { AppBar } from "@/lib/styles/appBarPortal";
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "@/lib/styles/search";
import SearchIcon from "@mui/icons-material/Search";
import { Avatar, IconButton, Menu, MenuItem, Tooltip } from "@mui/material";
import { logout } from "@/lib/features/authentication/authenticationThunks";
import { useAppDispatch } from "@/lib/hook";
import { useRouter } from "next/navigation";
import Link from "next/link";
function MenuUser(props: any) {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const handleDrawerOpen = () => {
    props.setOpen(!props.open);
  };
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Open settings">
        <IconButton
          onClick={handleOpenUserMenu}
          sx={{
            p: 0,
            "&.MuiButtonBase-root:hover": {
              bgcolor: "white",
            },
          }}
        >
          <Avatar sx={{ bgcolor: "lightgrey", marginLeft: "15px" }} />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        <MenuItem onClick={handleCloseUserMenu}>
          <Typography
            textAlign="center"
            onClick={() => {
              dispatch(logout());
              router.replace("/");
            }}
          >
            Logout
          </Typography>
        </MenuItem>
      </Menu>
    </Box>
  );
}
export default function AppAppBar() {
  return (
    <>
      <AppBar
        position="fixed"
        sx={{ backgroundColor: "rgba(255, 255, 255, 255)" }}
      >
        <Toolbar>
          {/* <Image src={icon} priority={false} width="30" height="30" alt=""  /> */}

          <Typography
            variant="h5"
            sx={{
              color: "black",

              paddingLeft: "10px",
            }}
          >
            Product Store
          </Typography>
          <Link href={"/portal"} style={{textDecoration: "none"}} >
          <Typography
            sx={{
              color: "black",
              fontSize: "16px",
              paddingLeft: 10,
            }}
          >
            Home
          </Typography></Link>
          <Box sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }} />

          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="search"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <MenuUser />
        </Toolbar>
      </AppBar>
    </>
  );
}