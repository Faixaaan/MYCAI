import { Box, Container, Grid, Rating, Typography } from "@mui/material";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Customers = () => {
    const reviews = [
        {
            rating: 5,
            title: "Lorem ipsum dolor sit amet, consectetur",
            desc: "Proin nec massa posuere, pellentesque massa eget, convallis arcu.",
        },
        {
            rating: 5,
            title: "Lorem ipsum dolor sit amet, consectetur",
            desc: "Proin nec massa posuere, pellentesque massa eget, convallis arcu.",
        },
        {
            rating: 4,
            title: "Lorem ipsum dolor sit amet",
            desc: "Proin nec massa posuere, pellentesque massa eget, convallis arcu.",
        },
        {
            rating: 4,
            title: "Lorem ipsum dolor sit amet",
            desc: "Proin nec massa posuere, pellentesque massa eget, convallis arcu.",
        },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 700,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        responsive: [
            {
                breakpoint: 960, // tablet
                settings: { slidesToShow: 2 },
            },
            {
                breakpoint: 600, // phone
                settings: { slidesToShow: 1 },
            },
        ],
    };

    return (
        <Box
            sx={{
                bgcolor: "#DDF2FF",
                minHeight: "400px",
                width: "100%",
                py: 8,
            }}
        >
            <Container maxWidth="lg">
                <Typography
                    sx={{
                        textAlign: "center",
                        fontSize: "48px",
                        fontWeight: 600,
                        lineHeight: "138%",
                        mb: 6,
                    }}
                >
                    What our customers are saying about us
                </Typography>

                <Grid
                    container
                    spacing={3}
                    justifyContent="center"
                    alignItems="flex-start"
                >
                    {/* Left summary */}
                    <Grid item xs={12} md={3}>
                        <Box sx={{ textAlign: "center", mb: 3 }}>
                            <Typography sx={{ fontWeight: "600", fontSize: "22px" }}>
                                4.0 out of 5
                            </Typography>
                            <Rating value={4} readOnly sx={{ mt: 1 }} />
                            <Typography sx={{ fontWeight: "600", fontSize: "24px", mt: 1 }}>
                                CVI
                            </Typography>
                            <Typography sx={{ fontSize: "16px", color: "#555" }}>
                                based on 3,112 reviews
                            </Typography>
                        </Box>
                    </Grid>

                    {/* Right side carousel */}
                    <Grid item xs={12} md={9}>
                        <Box
                            sx={{
                                ".slick-dots": {
                                    mt: "10px!important", // margin above dots
                                },
                                ".slick-dots li button:before": {
                                    fontSize: "10px",
                                    color: "#000",
                                },
                                ".slick-dots li.slick-active button:before": {
                                    color: "#FF8C00", // active dot color (orange)
                                },
                            }}
                        >
                            <Slider {...settings}>
                                {reviews.map((item, index) => (
                                    <Box key={index} sx={{ px: 2, textAlign: "center" }}>
                                        <Rating value={item.rating} readOnly sx={{ mb: 1 }} />
                                        <Typography
                                            sx={{
                                                fontWeight: "500",
                                                fontSize: "16px",
                                                lineHeight: "138%",
                                            }}
                                        >
                                            {item.title}
                                        </Typography>
                                        <Typography
                                            sx={{
                                                fontWeight: "400",
                                                fontSize: "15px",
                                                lineHeight: "138%",
                                                mt: 1,
                                            }}
                                        >
                                            {item.desc}
                                        </Typography>
                                    </Box>
                                ))}
                            </Slider>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Customers;
