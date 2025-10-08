import React from "react";
import { Box, Container, Typography, useMediaQuery } from "@mui/material";
import Slider from "react-slick";
import cvpage from "../../../Images/Cvpage.png";
import cvpage1 from "../../../Images/cvpage2.png";
import cvpage2 from "../../../Images/cvpage3.png";
import cvpage3 from "../../../Images/cvpage4.png";
import cvpage4 from "../../../Images/cvpage5.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GradeIcon from "@mui/icons-material/Grade";

const Resume = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  const images = [
    { src: cvpage, title: "Professional Resume" },
    { src: cvpage1, title: "Professional Resume" },
    { src: cvpage4, title: "Professional Resume" },
    { src: cvpage3, title: "Professional Resume" },
    { src: cvpage1, title: "Professional Resume" },
    { src: cvpage2, title: "Professional Resume" },
  ];

  const settings = {
    infinite: true,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 2500,
    dots: true,
    arrows: false,
    slidesToShow: isMobile ? 1 : 3,
    slidesToScroll: 1,
    centerMode: !isMobile,      // disable centering on mobile
    centerPadding: isMobile ? "0px" : "60px",
  };

  return (
    <Box sx={{ background: "#D9D9D994", py: 6 }}>
      <Container maxWidth="xl">
        <Typography
          sx={{
            textAlign: "center",
            fontSize: { xs: "32px", md: "48px" },
            lineHeight: "138%",
            fontWeight: 600,
            mb: 4,
          }}
        >
          MCAI: Your Resume, Smarter
        </Typography>

        <Box className="slider-container">
          <Slider {...settings}>
            {images.map((item, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  px: { xs: 0, md: 1 },
                  py: 2,
                }}
              >
                <Box
                  component="img"
                  src={item.src}
                  alt={item.title}
                  sx={{
                    width: "100%",
                    maxWidth: { xs: "100%", md: "400px" },
                    height: { xs: "auto", md: "550px" },
                    borderRadius: "16px",
                    objectFit: "cover",
                    boxShadow: "0px 4px 20px rgba(0,0,0,0.2)",
                    transition: "transform 0.3s ease",
                    "&:hover": { transform: "scale(1.04)" },
                  }}
                />
              </Box>
            ))}
          </Slider>
        </Box>

        <Box
          sx={{
            paddingTop: "60px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontSize: "32px", fontWeight: 600, color: "#000" }}>
            Excellent
          </Typography>
          <Box>
            {[...Array(5)].map((_, i) => (
              <GradeIcon key={i} sx={{ fontSize: "40px", color: "#FFD700" }} />
            ))}
          </Box>
          <Typography
            sx={{
              fontSize: "24px",
              fontWeight: 500,
              color: "#000",
              lineHeight: "138%",
              pt: "10px",
            }}
          >
            4,847 Downloads
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Resume;
