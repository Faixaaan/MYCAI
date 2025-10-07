import { Box, Button, Container, Typography, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import React, { useState } from 'react';
import '../Navbar/index.css';
import NotificationAddIcon from '@mui/icons-material/NotificationAdd';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const menuItems = [
    "My Jobs",
    "My CV",
    "My Courses / Certifications",
    "My Mock Interview",
    "My Earnings",
  ];

  return (
    <>
      <Box sx={{ minHeight: "87px", display: "flex", alignItems: "center" }}>
        <Container maxWidth='lg'>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            
            {/* Logo */}
            <Box>
              <Typography sx={{
                color: "#FF8014",
                fontSize: "24px",
                fontWeight: "700",
                fontFamily: "Montserrat",
                lineHeight: "100%",
                letterSpacing: "0%"
              }}>
                MYCVI.AI
              </Typography>
            </Box>

            {/* Desktop Menu */}
            <Box sx={{ display: { xs: "none", md: "block" } }}>
              <ul style={{
                padding: "0px",
                margin: "0px",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center"
              }}>
                {menuItems.map((item, index) => (
                  <li key={index} style={{ listStyle: "none", fontFamily: "Montserrat" }}>
                    <a href="#" style={{
                      textDecoration: "none",
                      padding: "0px 8px",
                      fontSize: "15px",
                      fontWeight: "500",
                      color: "#0862DC",
                      lineHeight: "100%",
                      letterSpacing: "0%"
                    }}>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </Box>

            {/* Buttons + Icons */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Button variant='text' sx={{
                border: "1px solid #FF8014",
                borderRadius: "10px",
                fontFamily: "Montserrat",
                fontSize: "15px",
                fontWeight: "500",
                color: "#0862DC",
                lineHeight: "100%",
                letterSpacing: "0%",
                padding: "10px 15px",
                display: { xs: "none", sm: "inline-flex" } // hide on very small phones
              }}>
                Sign up / Sign in
              </Button>

              <NotificationAddIcon sx={{ color: "#0862DC" }} />

              {/* Hamburger for Mobile/Tablet */}
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

      {/* Drawer for Mobile/Tablet */}
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 250, p: 2 }}>
          <Typography sx={{
            color: "#FF8014",
            fontSize: "22px",
            fontWeight: "700",
            fontFamily: "Montserrat",
            mb: 2
          }}>
            MYCVI.AI
          </Typography>
          <List>
            {menuItems.map((item, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton onClick={() => setOpen(false)}>
                  <ListItemText
                    primary={item}
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
