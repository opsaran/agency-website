import {
  AppBar,
  Container,
  Toolbar,
  Box,
  styled,
  IconButton,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import React, { useState } from "react";
import Link from "../../utils/link";
import { useRouter } from "next/router";
export const NavBar = () => {
  const NewLink = styled(Link)(({ theme }) => ({
    color: (theme as unknown as any).palette.text.secondary,
    fontSize: "1.1rem",
  }));
  const PopNavLink = styled(Link)(({ theme }) => ({
    color: (theme as unknown as any).palette.primary.main,
    fontSize: "1.1rem",
  }));
  const NavButton = styled(Button)(({ theme }) => ({
    border: "none",
    my: 2,
    marginLeft: "0.6rem",
    display: "block",
    "&:hover": {
      background: (theme as unknown as any).cardGradient,
    },
  }));
  const [anchorElNav, setAnchorElNav] = useState<HTMLElement | null>(null);
  const handleOpen = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(e.currentTarget);
  };
  const handleClose = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(null);
  };
  const router = useRouter();

  return (
    <AppBar
      sx={{
        position: { xs: "absolute", sm: "fixed" },
        background: "#ffffff1a",
        backdropFilter: "blur(2px)",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Box width="110px" position="relative">
            <Link href="/" sx={{ position: "relative", maxWidth: "100%" }}>
              <Image
                width={110}
                height={60}
                src="/logo.png"
                alt="BoomLabs"
                loading="eager"
                layout="responsive"
                priority={true}
              />
            </Link>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="pages of BoomLabs Website"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpen}
              color="inherit"
            >
              <MenuIcon></MenuIcon>
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleClose}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem onClick={handleClose}>
                <PopNavLink href="/">Home</PopNavLink>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <PopNavLink href="/about">About</PopNavLink>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <PopNavLink href="/blog">Blog</PopNavLink>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <PopNavLink href="/contact">Contact</PopNavLink>
              </MenuItem>
            </Menu>
          </Box>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <NavButton onClick={handleClose} disabled={router.pathname === "/"}>
              <NewLink href="/">Home</NewLink>
            </NavButton>
            <NavButton
              onClick={handleClose}
              disabled={router.pathname === "/about"}
            >
              <NewLink href="/about">About</NewLink>
            </NavButton>
            <NavButton
              onClick={handleClose}
              disabled={router.pathname === "/blog"}
            >
              <NewLink href="/blog">Blog</NewLink>
            </NavButton>
            <NavButton
              onClick={handleClose}
              disabled={router.pathname === "/contact"}
            >
              <NewLink href="/contact">Contact</NewLink>
            </NavButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
