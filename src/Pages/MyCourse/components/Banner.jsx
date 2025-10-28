import React, { useEffect, useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import BannerImg from "../../../Images/course-banner.png";
import MobileBannerImg from "../../../Images/my-courses-mobile-banner.png";
import { axiosInstance } from "../../../api/axios/axios";
import { endpoints } from "../../../api/endpoints/endpoints";

const Banner = () => {
  const [data, setData] = useState({});

  const GetBannerData = async () => {
    try {
      const res = await axiosInstance.get(endpoints.course.banner);
      console.log(res?.data, "bannerdata");
      setData(res?.data);
    } catch (err) {
      console.error(
        "Error fetching banner data:",
        err.response?.data || err.message
      );
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
          xs: `url(${data?.banner_photo_mobile})`,
          md: `url(${data?.banner_photo_desktop})`,
        },
        backgroundSize: "cover", // cover full area
        backgroundPosition: "center", // center the image
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "flex-start", // optional: center content vertically
      }}
    >
      <Container maxWidth="lg">
        <Typography
          sx={{
            fontSize: "60px",
            fontWeight: "600",
            maxWidth: "610px",
            lineHeight: "138%",
            letterSpacing: "0%",
            color: "#fff",
            pt: "130px",
          }}
        >
          {data?.banner_heading}
          
        </Typography>
      </Container>
    </Box>
  );
};

export default Banner;
