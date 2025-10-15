import React from "react";
import {
    Box,
    Container,
    Grid,
    Typography,
    Card,
    CardContent,
    Button,
} from "@mui/material";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import StarIcon from "@mui/icons-material/Star";
import BarChartIcon from "@mui/icons-material/BarChart";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";

const OnlineCourse = () => {
    const features = [
        {
            icon: <LightbulbIcon sx={{ color: "#FF8C00", fontSize: 28 }} />,
            title: "Interactive learning experience",
            desc: "Get a readable, scannable, and impressive resume that passes the screening software.",
            bgColor: "#FFF3E0", // light orange background
        },
        {
            icon: <StarIcon sx={{ color: "#00C49F", fontSize: 28 }} />,
            title: "Creative skill improvement",
            desc: "Get a readable, scannable, and impressive resume that passes the screening software.",
            bgColor: "#E0F7FA", // light teal background
        },
        {
            icon: <BarChartIcon sx={{ color: "#1976D2", fontSize: 28 }} />,
            title: "Progress tracking and certification",
            desc: "Get a readable, scannable, and impressive resume that passes the screening software.",
            bgColor: "#E3F2FD", // light blue background
        },
        {
            icon: <ChatBubbleOutlineIcon sx={{ color: "#D81B60", fontSize: 28 }} />,
            title: "Expert feedback sessions",
            desc: "Get a readable, scannable, and impressive resume that passes the screening software.",
            bgColor: "#FCE4EC", // light pink background
        },
    ];


    return (
        <Box sx={{ bgcolor: "#D9D9D9", width: "100%", py: { xs: 6, md: 8 } }}>
            <Container maxWidth="lg">
                {/* Heading */}
                <Typography
                    sx={{
                        textAlign: "center",
                        fontSize: { xs: "32px", md: "48px" },
                        fontWeight: 600,
                        lineHeight: "138%",
                        color: "#000",
                    }}
                >
                    Dive into online courses on diverse subjects
                </Typography>

                {/* === Features (2x2 Grid) === */}
                <Grid
                    container
                    spacing={3}
                    sx={{
                        mt: 6,
                        justifyContent: "center",
                        boxSizing: "border-box",
                    }}
                >
                    {features.map((item, i) => (
                        <Grid
                            item
                            xs={12}
                            sm={6}
                            md={6}
                            key={i}
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                            }}
                        >
                            <Card
                                sx={{
                                    width: "100%",
                                    maxWidth: 500,
                                    borderRadius: "14px",
                                    bgcolor: "#fff",
                                    p: 2.5,
                                    display: "flex",
                                    alignItems: "center", // centers icon & text vertically
                                    gap: 3,
                                    boxShadow: "0px 2px 10px rgba(0,0,0,0.08)",
                                }}
                            >



                                <Box
                                    sx={{
                                        bgcolor: item.bgColor,
                                        borderRadius: "8px",
                                        p: 1.5,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        width: 58,
                                        height: 58,
                                        flexShrink: 0, // prevents icon box from shrinking
                                    }}
                                >



                                    {item.icon}
                                </Box>

                                <CardContent
                                    sx={{
                                        p: 0,
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "center", 
                                    }}
                                >
                                    <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 0.5 }}>
                                        {item.title}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                        sx={{ lineHeight: 1.6 }}
                                    >
                                        {item.desc}
                                    </Typography>
                                </CardContent>
                            </Card>


                        </Grid>
                    ))}
                </Grid>

                
                <Box
                    sx={{
                        mt: { xs: 6, md: 10 },
                        bgcolor: "#fff",
                        borderRadius: "24px",
                        p: { xs: 3, md: 6 },
                        display: "flex",
                        flexDirection: { xs: "column", md: "row" },
                        alignItems: "center",
                        gap: 4,
                        boxShadow: "0px 2px 10px rgba(0,0,0,0.08)",
                    }}
                >
                    {/* Image Section */}
                    <Box
                        sx={{
                            flex: 1,
                            bgcolor: "#DDF2FF",
                            borderRadius: "20px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            minHeight: 220,
                            p: 2,
                            position: "relative",
                        }}
                    >
                        <PlayCircleOutlineIcon sx={{ fontSize: 80, color: "#0862DC" }} />

                        {/* Badge */}
                        <Box
                            sx={{
                                position: "absolute",
                                bottom: 12,
                                left: "50%",
                                transform: "translateX(-50%)",
                                bgcolor: "#fff",
                                borderRadius: "8px",
                                boxShadow: "0px 2px 8px rgba(0,0,0,0.1)",
                                px: 2,
                                py: 0.5,
                                display: "flex",
                                alignItems: "center",
                                gap: 1,
                            }}
                        >
                            <Typography sx={{ fontWeight: 600, fontSize: "14px" }}>
                                1.2 M
                            </Typography>
                            <Typography sx={{ fontSize: "13px", color: "text.secondary" }}>
                                User Downloaded
                            </Typography>
                        </Box>
                    </Box>

                    {/* Text Section */}
                    <Box sx={{ flex: 1 }}>
                        <Typography
                            variant="h5"
                            sx={{
                                fontWeight: 700,
                                mb: 1,
                                color: "#000",
                            }}
                        >
                            Boost your skill set with your online courses
                        </Typography>
                        <Typography
                            variant="body1"
                            color="text.secondary"
                            sx={{ mb: 3, maxWidth: 500 }}
                        >
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy text
                            ever since the 1500s,
                        </Typography>

                        <Grid container spacing={2}>
                            {["Design Course", "Finance", "Programming", "All Category"].map(
                                (btn, i) => (
                                    <Grid item key={i}>
                                        <Button
                                            variant={i === 3 ? "outlined" : "contained"}
                                            sx={{
                                                textTransform: "none",
                                                bgcolor: i === 3 ? "#fff" : "#E0E7FF",
                                                color: "#000",
                                                borderRadius: "8px",
                                                fontWeight: 500,
                                                borderColor: "#C4C4C4",
                                                "&:hover": {
                                                    bgcolor: i === 3 ? "#f9f9f9" : "#cbd5ff",
                                                },
                                            }}
                                        >
                                            {btn}
                                        </Button>
                                    </Grid>
                                )
                            )}
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default OnlineCourse;
