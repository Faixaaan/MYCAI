import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  MenuItem,
  Select,
  FormControl,
} from "@mui/material";
import BannerImg from "../../../Images/Mock-interview-Banner.png";
import PhoneBannerImg from "../../../Images/mock-interview.png";
import { endpoints } from "../../../api/endpoints/endpoints";
import { axiosInstance } from "../../../api/axios/axios";

const Banner = () => {
  const [data, setData] = useState({});

  const GetBannerData = async () => {
    try {
      const res = await axiosInstance.get(endpoints.mock.banner);
      console.log(res?.data, "bannerdata");
      setData(res?.data);
    } catch (err) {
      console.error(
        "Error fetching banner data:",
        err.response?.data || err.message
      );
      // You might want to add error state handling here
    }
  };

  useEffect(() => {
    GetBannerData();
  }, []);

  return (
    <Box
      sx={{
        height: "110vh",
        backgroundImage: {
          xs: `url(${data?.mobile_banner})`,
          md: `url(${data?.desktop_banner})`,
        },
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "flex-start",
      }}
    >
      <Container maxWidth="lg">
        {/* Heading */}
        <Typography
          sx={{
            fontSize: { md: "60px", xs: "30px" },
            fontWeight: "600",
            maxWidth: "610px",
            lineHeight: "138%",
            color: "#000",
            pt: "130px",
          }}
        >
          {data?.banner_heading}
        </Typography>

        {/* Subheading */}
        <Typography
          sx={{
            fontSize: { md: "24px", xs: "20px" },
            fontWeight: "500",
            maxWidth: "610px",
            lineHeight: "138%",
            color: "#000",
            pt: "10px",
          }}
        >
          {data?.banner_desc}
        </Typography>

        {/* Dropdown and Button Bar */}
        <Box
          sx={{
            mt: 4,
            display: "flex",
            flexWrap: "wrap", // allows wrapping on small screens
            alignItems: "center",
            gap: 2,
            backgroundColor: "#fff",
            borderRadius: "10px",
            p: 1.2,
            boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
            width: { sm: "635px" }, // full width on mobile, auto on desktop
          }}
        >
          {/* Jobs Dropdown */}
          <FormControl
            size="small"
            sx={{
              minWidth: { xs: "100%", sm: 120 }, // full width on mobile
              flex: { xs: 1, sm: "unset" },
              backgroundColor: "#fff",
              borderRadius: "6px",
            }}
          >
            <Select defaultValue="Jobs">
              <MenuItem value="Jobs">Jobs</MenuItem>
              <MenuItem value="Internships">Internships</MenuItem>
              <MenuItem value="Fresher">Fresher</MenuItem>
            </Select>
          </FormControl>

          {/* Search Position Dropdown */}
          <FormControl
            size="small"
            sx={{
              minWidth: { xs: "100%", sm: 160 },
              flex: { xs: 1, sm: "unset" },
              backgroundColor: "#fff",
              borderRadius: "6px",
            }}
          >
            <Select defaultValue="Search Position">
              <MenuItem value="Search Position">Search Position</MenuItem>
              <MenuItem value="Frontend Developer">Frontend Developer</MenuItem>
              <MenuItem value="Backend Developer">Backend Developer</MenuItem>
              <MenuItem value="Full Stack">Full Stack</MenuItem>
            </Select>
          </FormControl>

          {/* Select Round Dropdown */}
          <FormControl
            size="small"
            sx={{
              minWidth: { xs: "100%", sm: 140 },
              flex: { xs: 1, sm: "unset" },
              backgroundColor: "#fff",
              borderRadius: "6px",
            }}
          >
            <Select defaultValue="Select Round">
              <MenuItem value="Select Round">Select Round</MenuItem>
              <MenuItem value="Technical">Technical</MenuItem>
              <MenuItem value="HR">HR</MenuItem>
              <MenuItem value="Managerial">Managerial</MenuItem>
            </Select>
          </FormControl>

          {/* Start Practice Button */}
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#FF8014",
              color: "#fff",
              fontWeight: 600,
              borderRadius: "6px",
              textTransform: "none",
              px: 3,
              width: { xs: "100%", sm: "auto" }, // full width on mobile
              "&:hover": {
                backgroundColor: "#e67212",
              },
            }}
          >
            START PRACTICE
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Banner;
