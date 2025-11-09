import {
  Box,
  Container,
  TextField,
  Typography,
  InputAdornment,
  Button,
  Grid,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import bannerimg from "../../../Images/JobsBanner.png";
import Phonebannerimg from "../../../Images/mobile-jobs-banner.png";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import BusinessIcon from "@mui/icons-material/Business";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import BarChartIcon from "@mui/icons-material/BarChart";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import discover from "../../../Images/discover.png";
import { Link } from "react-router-dom";

const Banner = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const roles = [
    "Full stack developer",
    "Mobile app development",
    "Front end developer",
    "Developer",
    "UI/UX",
    "Designer",
    "Figma",
    "Graphic designer",
    "Data Scientist",
    "Cyber Security",
  ];

  return (
    <>
      <Box
        sx={{
          minHeight: "600px",
          background: "#D9D9D994",
          padding: { md: "30px", xs: "30px 0px" },
          pb: "50px",
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            sx={{
              textAlign: "center",
              fontSize: { md: "48px", xs: "34px" },
              fontWeight: "600",
              lineHeight: "138%",
              letterSpacing: "0%",
              color: "#000",
            }}
          >
            Find your dream job now
          </Typography>

          <Typography
            sx={{
              textAlign: "center",
              fontSize: { md: "34px", xs: "20px" },
              fontWeight: "400",
              lineHeight: "138%",
              letterSpacing: "0%",
              color: "#000000",
              mt: "5px",
            }}
          >
            5 lakh+ jobs for you to explore
          </Typography>

          <Box
            sx={{
              mt: "40px",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TextField
              variant="outlined"
              placeholder="Explore jobs recommended by AI"
              fullWidth
              sx={{
                maxWidth: "700px",
                "& .MuiOutlinedInput-root": {
                  borderRadius: "50px",
                  backgroundColor: "#fff",
                  paddingRight: "0px", // remove default padding for endAdornment button
                },
                "& fieldset": {
                  borderColor: "#ccc",
                },
                "&:hover fieldset": {
                  borderColor: "#0862DC",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#0862DC",
                },
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon sx={{ color: "#0862DC" }} />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <Button
                      variant="contained"
                      sx={{
                        borderRadius: "50px",
                        backgroundColor: "#0862DC",
                        textTransform: "none",
                        fontFamily: "Montserrat",
                        fontWeight: 500,
                        fontSize: "16px",
                        padding: "12.8px 25px",
                        ml: 1,
                        "&:hover": {
                          backgroundColor: "#064bb3",
                        },
                      }}
                    >
                      Search
                    </Button>
                  </InputAdornment>
                ),
              }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mt: "40px",
            }}
          >
            <img
              src={isMobile ? Phonebannerimg : bannerimg}
              alt="jobs banner"
              style={{ width: "100%", borderRadius: "15px" }}
            />
          </Box>
          {/* ======= Category Cards Section ======= */}
          <Grid
            container
            spacing={2}
            sx={{
              mt: "40px",
              justifyContent: "center",
            }}
          >
            {[
              { label: "Remote", icon: <WorkOutlineIcon /> },
              { label: "MNC", icon: <BusinessIcon /> },
              { label: "Project Mgmt.", icon: <DashboardIcon /> },
              { label: "Banking", icon: <AccountBalanceIcon /> },
              { label: "Analytics", icon: <BarChartIcon /> },
              { label: "Supply Chain", icon: <LocalShippingIcon /> },
              { label: "Project Mgmt.", icon: <DashboardIcon /> },
              { label: "Banking", icon: <AccountBalanceIcon /> },
              { label: "Analytics", icon: <BarChartIcon /> },
              { label: "Supply Chain", icon: <LocalShippingIcon /> },
            ].map((item, index) => (
              <Grid
                item
                xs={6} // ✅ 2 per row on mobile
                sm={4} // ✅ 3 per row on tablet
                md={2} // ✅ 6 per row on desktop
                key={index}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    maxWidth: "180px",
                    backgroundColor: "#FFFFFF",
                    borderRadius: "20px",
                    border: "1px solid #E0E0E0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    px: 3,
                    py: 1.5,
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Box sx={{ color: "#000000" }}>{item.icon}</Box>
                    <Typography
                      sx={{
                        fontFamily: "Montserrat",
                        fontWeight: 500,
                        fontSize: "14px",
                        color: "#000000",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {item.label}
                    </Typography>
                  </Box>
                  <ArrowForwardIosIcon
                    sx={{ color: "#000000", fontSize: "14px" }}
                  />
                </Box>
              </Grid>
            ))}
          </Grid>

          {/* ======= Discover Jobs + Role Cards Section ======= */}

          <Box
            sx={{
              width: "100%",
              py: { md: 8, xs: 5 },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Container
              maxWidth="lg"
              sx={{
                mt: 6,
                mb: 6,
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  borderRadius: "30px",
                  background:
                    "linear-gradient(to bottom, #cce0ff 0%, #0862DC 100%)",
                  minHeight: { xs: "520px", md: "370px" },
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  overflow: "visible",
                  px: { xs: 2, md: 4 },
                  py: { xs: 4, md: 4 },
                }}
              >
                {/* LEFT SIDE */}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: { xs: "center", md: "flex-start" },
                    color: "#fff",
                    textAlign: { xs: "center", md: "left" },
                    pl: { md: 6 },
                  }}
                >
                  <Box
                    component="img"
                    src={discover}
                    alt="Discover Jobs"
                    sx={{ width: "123px", mb: 2 }}
                  />
                  <Typography
                    sx={{
                      fontSize: { md: "26px", xs: "20px" },
                      fontWeight: 700,
                      fontFamily: "Montserrat",
                      mb: 1,
                    }}
                  >
                    Discover jobs <br /> across popular roles
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { md: "15px", xs: "13px" },
                      fontWeight: 400,
                      fontFamily: "Montserrat",
                      maxWidth: "280px",
                    }}
                  >
                    Select a role and we'll show you relevant jobs for it!
                  </Typography>
                </Box>

                {/* RIGHT SIDE FLOATING CARD */}
                <Box
                  sx={{
                    position: "absolute",
                    top: "50%",
                    right: { md: "50px", xs: "50%" },
                    transform: {
                      md: "translateY(-50%)",
                      xs: "translate(50%, -50%)",
                    },
                    backgroundColor: "#fff",
                    borderRadius: "25px",
                    boxShadow: "0px 6px 18px rgba(0,0,0,0.1)",
                    width: { xs: "90%", md: "380px" },
                    height: { xs: "auto", md: "450px" }, // smaller height
                    py: 3,
                    px: 3,
                  }}
                >
                  {/* Force exactly 2 cards per row */}
                  <Grid
                    container
                    spacing={1.5}
                    columns={12}
                    sx={{
                      display: "grid",
                      gridTemplateColumns: "repeat(2, 1fr)", // 👈 always 2 per row
                      gap: "10px",
                    }}
                  >
                    {roles.map((role, index) => (
                      <Box
                        key={index}
                        sx={{
                          border: "1px solid #E0E0E0",
                          borderRadius: "12px",
                          px: 1.5,
                          py: 1,
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "flex-start",
                          height: "55px",
                          transition: "all 0.3s ease",
                          "&:hover": {
                            boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
                            transform: "translateY(-3px)",
                          },
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: "13px",
                            fontWeight: 600,
                            fontFamily: "Montserrat",
                            color: "#000",
                          }}
                          component={Link}
                          to="/jobListing"
                        >
                          {role}
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "11px",
                            fontWeight: 400,
                            fontFamily: "Montserrat",
                            color: "#777",
                            mt: 0.5,
                          }}
                        >
                          23.6k+ jobs &gt;&gt;
                        </Typography>
                      </Box>
                    ))}
                  </Grid>
                </Box>
              </Box>
            </Container>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Banner;
