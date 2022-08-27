import { AppBar, Toolbar, Typography, Menu, MenuItem } from "@mui/material"
import { styled } from "@mui/material/styles"
import MenuIcon from "@mui/icons-material/Menu"
import { Box } from "@mui/system"
import Brightness7TwoToneIcon from "@mui/icons-material/Brightness7TwoTone"
import React, { useState } from "react"

const LogoBox = styled(Box)({
  display: "flex",
  gap: 10,
  alignItems: "center",
})
const MenuBox = styled(Box)({
  display: "flex",
  gap: 30,
})
const MenuItems = [
  { name: "Home", link: "#" },
  { name: "Djerba", link: "#" },
  { name: "Contact", link: "#" },
]
const Navbar = () => {
  const [open, SetOpen] = useState()
  return (
    <AppBar color="transparent" position="static">
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <LogoBox>
          <Box>
            <Brightness7TwoToneIcon fontSize={"large"} color="primary" />
          </Box>
          <Typography
            sx={{
              p: 0,
              cursor: "pointer",
              fontSize: "18px",
              fontWeight: "500",
            }}
          >
            Que faire à Djerba
          </Typography>
        </LogoBox>
        <MenuBox sx={{ display: { xs: "none", sm: "none", md: "flex" } }}>
          {MenuItems.map(item => (
            <Typography
              sx={{ cursor: "pointer", fontSize: "14px", fontWeight: 500 }}
            >
              {item.name}
            </Typography>
          ))}
        </MenuBox>
        <MenuIcon
          sx={{
            cursor: "pointer",
            display: { xs: "bloc", sm: "bloc", md: "none" },
          }}
          onClick={() => SetOpen(!open)}
        />
      </Toolbar>
      <Menu
        id="basic-menu"
        open={open}
        onClose={() => SetOpen(!open)}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
      >
        <Box sx={{ width: 350, height: "90vh" }}>
          {MenuItems.map(item => (
            <MenuItem>
              <Typography
                sx={{ cursor: "pointer", fontSize: "14px", fontWeight: 500 }}
              >
                {item.name}
              </Typography>
            </MenuItem>
          ))}
        </Box>
      </Menu>
    </AppBar>
  )
}

export default Navbar
