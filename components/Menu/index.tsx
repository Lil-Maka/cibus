import React from "react";
import Link from "next/link";

import {
  AppBar,
  AppBarProps,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  Toolbar,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";

const navItems = [
  {
    name: "Iniciar sesión",
    route: "/login",
  },
  {
    name: "Regístrate",
    route: "/signin",
  },
];

export default function Navbar(props: AppBarProps) {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: 1,
          py: 2,
        }}
      >
        <Link href="/">
          <Image
            src="/images/cibus.png"
            alt="cibus logo"
            width={50}
            height={20}
          />
        </Link>
        <CloseIcon />
      </Box>
      <Divider />
      <List>
        {navItems.map(({ name, route }) => (
          <>
            <ListItem key={name} disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
                <Link href={route}>{name}</Link>
              </ListItemButton>
            </ListItem>
            <Divider
              variant="middle"
              sx={{
                my: 1,
                borderColor: "grey",
                width: "90%",
              }}
            />
          </>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex", mb: 10 }}>
      <CssBaseline />
      <AppBar component="nav" {...props}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <Link href="/">
              <Image
                src="/images/cibus.png"
                alt="cibus logo"
                width={70}
                height={30}
              />
            </Link>
          </Box>
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              justifyContent: "space-between",
              px: 1,
            }}
          >
            {navItems.map(({ name, route }) => (
              <Link key={name} href={route} style={{ marginLeft: 20 }}>
                {name}
              </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
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
              width: "100%",
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
