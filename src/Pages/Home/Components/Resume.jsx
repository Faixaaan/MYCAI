import React, { useState } from "react";
import { Box, Container, Typography, useMediaQuery } from "@mui/material";
import Slider from "react-slick";
import cvpage from "../../../Images/cvPage10.png";
import cvpage1 from "../../../Images/cvPage11.png";
import cvpage2 from "../../../Images/cvPage12.png";
import cvpage3 from "../../../Images/cvPage13.png";
import cvpage4 from "../../../Images/cvPage14.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GradeIcon from "@mui/icons-material/Grade";

const Resume = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const [activeSlide, setActiveSlide] = useState(0); // 👈 added state

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
    centerMode: !isMobile,
    centerPadding: isMobile ? "0px" : "60px",
    beforeChange: (current, next) => setActiveSlide(next), // 👈 added this
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
            mb: 1,
          }}
        >
          CVI: Your Resume, Smarter
        </Typography>
        <Typography
          sx={{
            textAlign: "center",
            fontSize: { xs: "18px", md: "24px" },
            lineHeight: "138%",
            fontWeight: 400,
            mb: 4,
          }}
        >
          Over 200+ templates available
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
                    height: { xs: "auto", md: "580px" },
                    borderRadius: "16px",
                    objectFit: "cover",
                    transition: "transform 0.3s ease",
                    transform: activeSlide === index ? "scale(1.04)" : "scale(0.95)", // 👈 small zoom effect
                  }}
                />

                {/* 👇 Show content only for center image */}
                {!isMobile && activeSlide === index && (
                  <Box
                    sx={{
                      paddingTop: "60px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      sx={{ fontSize: "32px", fontWeight: 600, color: "#000" }}
                    >
                      Excellent
                    </Typography>
                    <Box>
                      {[...Array(5)].map((_, i) => (
                        <GradeIcon
                          key={i}
                          sx={{ fontSize: "40px", color: "#FFD700" }}
                        />
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
                )}
              </Box>
            ))}
          </Slider>
        </Box>
      </Container>
    </Box>
  );
};

export default Resume;
