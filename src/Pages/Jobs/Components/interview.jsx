import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import interview from '../../../Images/next-interview.png'

const Interview = () => {

    const roles = [
        "TCS",
        "WIPRO",
        "IBM",
        "COGNIGANT",
        "CAGEMIN",
        "DELOITE",
        "GOOGLE",
        "META",
        "FLIPLKART",
        "AMAZON",
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
                                    background: "linear-gradient(to bottom, #cce0ff 0%, #0862DC 100%)",
                                    minHeight: { xs: "520px", md: "370px" },
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    overflow: "visible",
                                    px: { xs: 2, md: 4 },
                                    py: { xs: 4, md: 3 },
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
                                        src={interview}
                                        alt="Discover Jobs"
                                        sx={{ width:"294px", mb: 0,height:"294px" }}
                                    />
                                    <Typography
                                        sx={{
                                            fontSize: { md: "40px", xs: "20px" },
                                            fontWeight: 700,
                                            fontFamily: "Montserrat",
                                            mb: 1,
                                        }}
                                    >
                                        Prepare for your <br />
                                        next interview
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
                                        width: { xs: "90%", md: "390px" },
                                        height: { xs: "auto", md: "500px" }, // smaller height
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
                                                    816 Interview &gt;&gt;
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
    )
}

export default Interview
