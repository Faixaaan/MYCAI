import React from "react";
import { Box, Container, Typography } from "@mui/material";
import Slider from "react-slick";
import cvpage from "../../../Images/Cvpage.png";
import cvpage1 from "../../../Images/cvpage2.png";
import cvpage2 from "../../../Images/cvpage3.png";
import cvpage3 from "../../../Images/cvpage4.png";
import cvpage4 from "../../../Images/cvpage5.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GradeIcon from '@mui/icons-material/Grade';

const Resume = () => {
  const images = [
    { src: cvpage, title: "Professional Resume" },
    { src: cvpage1, title: "Professional Resume" },
    { src: cvpage4, title: "Professional Resume" },
    { src: cvpage3, title: "Professional Resume" },
    { src: cvpage1, title: "Professional Resume" },
    { src: cvpage2, title: "Professional Resume" },
  ];

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 2500,
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerPadding: "40px",
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          centerPadding: "20px",
        },
      },
    ],
  };

  return (
    <Box
      sx={{
        minHeight: "600px",
        background: "#D9D9D994",
        py: 6,
      }}
    >
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
                px={1}
                py={2}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Box
                  component="img"
                  src={item.src}
                  alt={item.title}
                  sx={{
                    width: "100%",        // full width inside slide
                    maxWidth: "400px",    // control width
                    height: "550px",      // consistent height
                    objectFit: "cover",   // crop image nicely
                    borderRadius: "16px", // rounded corners
                    boxShadow: "0px 4px 20px rgba(0,0,0,0.2)",
                    transition: "transform 0.3s ease",
                    "&:hover": { transform: "scale(1.04)" },
                  }}
                />
              </Box>
            ))}
          </Slider>
        </Box>

        <Box sx={{paddingTop:"60px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
           <Typography sx={{fontSize:"32px",fontWeight:"600",color:"#000000",lineHeight:"138%",letterSpacing:"0%"}}>
            Excellent
           </Typography>
           <Box>
            <GradeIcon sx={{fontSize:"40px",color:"#FFD700"}}/>
            <GradeIcon sx={{fontSize:"40px",color:"#FFD700"}}/>
            <GradeIcon sx={{fontSize:"40px",color:"#FFD700"}}/>
            <GradeIcon sx={{fontSize:"40px",color:"#FFD700"}}/>
            <GradeIcon sx={{fontSize:"40px",color:"#FFD700"}}/>
           </Box>
           <Typography sx={{fontSize:"24px",fontWeight:"500",color:"#000000",lineHeight:"138%",letterSpacing:"0%",pt:"10px"}}>
            4,847 Downloads
           </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Resume;
