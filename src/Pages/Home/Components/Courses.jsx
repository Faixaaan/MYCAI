import {
    Box,
    Container,
    Typography,
    Card,
    CardMedia,
    CardContent,
    CardActionArea,
    Stack,
    Button,
    Chip,
} from "@mui/material";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import UI from "../../../Images/Course.png";
import StarIcon from '@mui/icons-material/Star';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

// ---------------- CARD COMPONENT ---------------- //
const EarningCard = ({ job }) => (
    <Card
        sx={{
            width: { md: "440px", lg: "400px",xs:"280px" }, // full width of the slide
            borderRadius: "18px",
            boxShadow: 3,
            p: 2,
            background: "linear-gradient(to bottom right, #1B7CE5, #1B7CE5)",
            mx: "auto",
            maxHeight: "350px"
        }}
    >
        <CardActionArea
            sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}
        >
            <CardMedia
                component="img"
                image={job.img}
                alt={job.title}
                sx={{
                    width: "100%",
                    height: "142px",
                    objectFit: "contain", // 👈 ensures full image is visible without cropping
                    borderRadius: "33px",
                }}
            />

            <CardContent
                sx={{
                    p: "16px 5px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "100%",
                }}
            >
                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <StarIcon sx={{ color: "#FFD700" }} /> <StarIcon sx={{ color: "#FFD700" }} /><StarIcon sx={{ color: "#FFD700" }} /> <StarIcon sx={{ color: "#FFD700" }} /> <StarIcon /> <Typography sx={{
                        pl: "10px",
                        fontSize: "16px",
                        fontWeight: "400",
                        color: "#fff",
                    }}>
                        (2.0k)
                    </Typography>
                </Box>

                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Typography
                        sx={{
                            pl: "20px",
                            fontSize: "16px",
                            fontWeight: "400",
                            color: "#fff",
                        }}
                    >
                        View Course
                    </Typography>
                    <ChevronRightIcon sx={{ color: "#fff" }} />
                </Box>

            </CardContent>
        </CardActionArea>

        <CardContent
            sx={{
                p: "16px 5px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
            }}
        >
            <Box >
                <Typography sx={{

                    fontSize: "16px",
                    fontWeight: "600",
                    color: "#fff",
                }}>
                    Multimedia Courses with MCAI
                </Typography>
                <Typography sx={{
                    pt: "10px",
                    fontSize: "16px",
                    fontWeight: "400",
                    color: "#fff",
                }}>
                    Social Media Marketing
                </Typography>
            </Box>

            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Typography
                    sx={{

                        fontSize: "24px",
                        fontWeight: "600",
                        color: "#F5DE5D",
                    }}
                >
                    $49,88
                </Typography>

            </Box>

        </CardContent>

    </Card>
);

// ---------------- MAIN COMPONENT ---------------- //
const Courses = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2.5,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "20px", // spacing between slides
        responsive: [
            { breakpoint: 1280, settings: { slidesToShow: 3, centerPadding: "15px" } },
            { breakpoint: 1024, settings: { slidesToShow: 2, centerPadding: "15px" } },
            { breakpoint: 600, settings: { slidesToShow: 1, centerPadding: "0px" } },
        ],
    };

    const earningsData = [
        { img: UI, id: 1, title: "Graphic Designer" },
        { img: UI, id: 2, title: "Web Designer" },
        { img: UI, id: 3, title: "Graphic Designer" },
        { img: UI, id: 4, title: "UI/UX Designer" },
        { img: UI, id: 5, title: "Web Designer" },
        { img: UI, id: 6, title: "Product Designer" },
    ];

    return (
        <Box sx={{ background: "#fff", py: 5 }}>
            <Container maxWidth="xl">
                <Typography
                    sx={{
                        textAlign: "center",
                        fontSize: {md:"48px",xs:"24px"},
                        fontWeight: "600",
                        pb: "40px",
                    }}
                >
                    MCAI Courses
                </Typography>

                <Box className="slider-container">
                    <Slider {...settings}>
                        {earningsData.map((job) => (
                            <Box key={job.id} sx={{ px: 1 }}>
                                <EarningCard job={job} />
                            </Box>
                        ))}
                    </Slider>
                </Box>

                <Box className="slider-container" sx={{ padding: "30px 0px", }}>
                    <Slider {...settings}>
                        {earningsData.map((job) => (
                            <Box key={job.id} sx={{ px: 1 }}>
                                <EarningCard job={job} />
                            </Box>
                        ))}
                    </Slider>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", pb: "15px" }}>
                    <Button sx={{ padding: "10px 30px", border: "1px solid black", borderRadius: "16px", fontSize: "20px", fontWeight: "600", color: "#000000", textTransform: "capitalize" }}>
                        View more courses
                    </Button>
                </Box>
            </Container>
        </Box>
    );
};

export default Courses;
