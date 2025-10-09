import {
  Box,
  Button,
  Container,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../Navbar/index.css";
import NotificationAddIcon from "@mui/icons-material/NotificationAdd";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [elevate, setElevate] = useState(false);

  // Shadow appears on scroll
  useEffect(() => {
    const handleScroll = () => {
      setElevate(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Menu items with paths
  const menuItems = [
    { label: "My Jobs", path: "/my-jobs" },
    { label: "My CV", path: "/my-cv" },
    { label: "My Courses / Certifications", path: "/my-courses" },
    { label: "My Mock Interview", path: "/my-mock-interview" },
    { label: "My Earnings", path: "/my-earnings" },
    { label: "CVI Wallet", path: "/cvi-wallet" },
  ];

  return (
    <>
      {/* Fixed Navbar */}
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          width: "100%",
          backgroundColor: "#fff",
          boxShadow: elevate ? "0px 4px 15px rgba(0,0,0,0.1)" : "none",
          transition: "box-shadow 0.3s ease-in-out, background-color 0.3s ease",
          zIndex: 1300,
          minHeight: { sm: "87px", xs: "60px" },
          display: "flex",
          alignItems: "center",
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {/* Logo */}
            <Box>
              <Typography
                component={NavLink}
                to="/"
                sx={{
                  color: "#FF8014",
                  fontSize: "24px",
                  fontWeight: "700",
                  fontFamily: "Montserrat",
                  lineHeight: "100%",
                  textDecoration: "none",
                }}
              >
                MYCVI.AI
              </Typography>
            </Box>

            {/* Desktop Menu */}
            <Box sx={{ display: { xs: "none", md: "block" } }}>
              <ul
                style={{
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
              >
                {menuItems.map((item, index) => (
                  <li key={index} style={{ listStyle: "none", fontFamily: "Montserrat" }}>
                    <NavLink
                      to={item.path}
                      style={({ isActive }) => ({
                        textDecoration: "none",
                        padding: "0px 8px",
                        fontSize: "15px",
                        fontWeight: "500",
                        color: isActive ? "#FF8014" : "#0862DC",
                        transition: "color 0.2s",
                      })}
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </Box>

            {/* Buttons + Icons */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Button
                variant="text"
                component={NavLink}
                to="/signin"
                sx={{
                  border: "1px solid #FF8014",
                  borderRadius: "10px",
                  fontFamily: "Montserrat",
                  fontSize: "15px",
                  fontWeight: "500",
                  color: "#0862DC",
                  padding: "5px 15px",
                  textTransform: "none",
                  display: { xs: "none", sm: "inline-flex" },
                }}
              >
                Sign up / Sign in
              </Button>
{/* 
              <NotificationAddIcon sx={{ color: "#0862DC" }} /> */}

              {/* Mobile Menu Button */}
              <IconButton
                onClick={() => setOpen(true)}
                sx={{ display: { xs: "flex", md: "none" }, color: "#0862DC" }}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Add top margin so content doesn't hide behind navbar */}
      <Box sx={{ height: { sm: "87px", xs: "60px" } }} />

      {/* Drawer for Mobile/Tablet */}
      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        sx={{ zIndex: "1400" }}
      >
        <Box sx={{ width: 250, p: 2 }}>
          <Typography
            component={NavLink}
            to="/"
            onClick={() => setOpen(false)}
            sx={{
              color: "#FF8014",
              fontSize: "22px",
              fontWeight: "700",
              fontFamily: "Montserrat",
              mb: 2,
              textDecoration: "none",
              display: "inline-block",
            }}
          >
            MYCVI.AI
          </Typography>

          <List>
            {menuItems.map((item, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton
                  component={NavLink}
                  to={item.path}
                  onClick={() => setOpen(false)}
                  sx={{
                    "&.active .MuiListItemText-primary": {
                      color: "#FF8014",
                    },
                  }}
                >
                  <ListItemText
                    primary={item.label}
                    primaryTypographyProps={{
                      fontFamily: "Montserrat",
                      fontSize: "15px",
                      fontWeight: "500",
                      color: "#0862DC",
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          <Button
            variant="outlined"
            component={NavLink}
            to="/signin"
            onClick={() => setOpen(false)}
            sx={{
              mt: 2,
              border: "1px solid #FF8014",
              borderRadius: "10px",
              fontFamily: "Montserrat",
              fontSize: "15px",
              fontWeight: "500",
              color: "#0862DC",
              textTransform: "none",
              width: "100%",
            }}
          >
            Sign up / Sign in
          </Button>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
