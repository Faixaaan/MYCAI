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
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../Navbar/index.css";
import MenuIcon from "@mui/icons-material/Menu";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [elevate, setElevate] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  // ✅ Get user from redux slice OR fallback to localStorage
  const userr = useSelector((state) => state.user.userData);
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem("userData");
    return stored ? JSON.parse(stored) : null;
  });

  useEffect(() => {
    if (userr) setUser(userr);
  }, [userr]);

  // Shadow on scroll
  useEffect(() => {
    const handleScroll = () => setElevate(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Logout
  const handleLogout = () => {
    localStorage.removeItem("userData");
    localStorage.removeItem("token");
    setUser(null);
    setAnchorEl(null);
    navigate("/signin");
  };

  // Avatar menu
  const handleAvatarClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

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
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          width: "100%",
          backgroundColor: "#fff",
          boxShadow: elevate ? "0px 4px 15px rgba(0,0,0,0.1)" : "none",
          transition: "box-shadow 0.3s ease-in-out",
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
            <Typography
              component={NavLink}
              to="/"
              sx={{
                color: "#FF8014",
                fontSize: "24px",
                fontWeight: "700",
                fontFamily: "Montserrat",
                textDecoration: "none",
              }}
            >
              MYCVI.AI
            </Typography>

            {/* Desktop Menu */}
            <Box sx={{ display: { xs: "none", md: "block" } }}>
              <ul
                style={{
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {menuItems.map((item, index) => (
                  <li
                    key={index}
                    style={{
                      listStyle: "none",
                      fontFamily: "Montserrat",
                    }}
                  >
                    <NavLink
                      to={item.path}
                      style={({ isActive }) => ({
                        textDecoration: "none",
                        padding: isActive ? "8px 12px" : "0px 8px",
                        fontSize: "15px",
                        fontWeight: "500",
                        color: isActive ? "#fff" : "#0862DC",
                        backgroundColor: isActive ? "#FF8014" : "#fff",
                        borderRadius: isActive ? "10px" : "0px",
                        transition: "color 0.2s",
                      })}
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </Box>

            {/* Right Side */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              {!user ? (
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
              ) : (
                <>
                  <Avatar
                    onClick={handleAvatarClick}
                    sx={{
                      bgcolor: "#FF8014",
                      color: "#fff",
                      cursor: "pointer",
                      fontWeight: 600,
                      textTransform: "uppercase",
                    }}
                  >
                    {user?.name ? user.name.charAt(0).toUpperCase() : "U"}
                  </Avatar>
                  <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                  >
                    <MenuItem disabled>{user.name || "User"}</MenuItem>
                    <MenuItem onClick={handleLogout}>Logout</MenuItem>
                  </Menu>
                </>
              )}

              {/* Mobile Menu */}
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

      <Box sx={{ height: { sm: "87px", xs: "60px" } }} />

      {/* Drawer */}
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
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

          {!user && (
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
          )}
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
