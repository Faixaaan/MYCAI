import { Box, Button, Container, Divider, Grid, IconButton, Stack, Typography } from '@mui/material'
import React from 'react'
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <Box sx={{ minHeight: "200px", bgcolor: "#122D80", padding: "50px 0px" }}>
                <Container maxWidth='lg'>
                    <Grid container spacing={2}>
                        <Grid size={{ xs: 12, sm: 6, md: 4.5 }} sx={{ mb: { xs: "15px", md: "30px" } }} >
                            <Box sx={{ minWidth: "100%" }}>
                                <Typography sx={{ fontSize: { sm: "36px", xs: "26px" }, fontWeight: "600", textWrap: "nowrap", letterSpacing: "0%", lineHeight: "138%", color: "#fff" }}>
                                    We are here to help
                                </Typography>
                                <Typography sx={{ maxWidth: "280px", fontSize: { sm: "20px", md: "16px" }, fontWeight: "400", letterSpacing: "0%", lineHeight: "138%", color: "#fff" }}>
                                    Visit our help centre for more
                                    answer question contact us
                                </Typography>
                                <Stack direction="row" spacing={2} mt={3}>
                                    <Button
                                        variant="contained"
                                        sx={{
                                            maxWidth: "100px",
                                            flex: 1,
                                            backgroundColor: "#EAEAEA",
                                            textTransform: "none",
                                            borderRadius: 2,
                                            "&:hover": { backgroundColor: "#3877ff", color: "#000" },
                                            fontSize: "20px",
                                            fontWeight: "600",
                                            lineHeight: "138%",
                                            letterSpacing: "0%",
                                            color: "#000"
                                        }}
                                    >
                                        Help
                                    </Button>
                                    <Button
                                        variant="contained"
                                        sx={{
                                            flex: 1,
                                            maxWidth: "180px",
                                            backgroundColor: "#EAEAEA",
                                            textTransform: "none",
                                            borderRadius: 2,
                                            "&:hover": { backgroundColor: "#3877ff", color: "#000" },
                                            fontSize: "20px",
                                            fontWeight: "600",
                                            lineHeight: "138%",
                                            letterSpacing: "0%",
                                            color: "#000"
                                        }}
                                    >
                                        Refer & Earn
                                    </Button>
                                </Stack>
                            </Box>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 2.2 }} sx={{ mb: { xs: "15px", md: "0px" } }} >
                            <Box sx={{ minWidth: "100%", display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                                <Typography sx={{ fontSize: { sm: "34px", xs: "24px", md: "24px" }, fontWeight: "600", textWrap: "nowrap", letterSpacing: "0%", lineHeight: "138%", display: "flex", justifyContent: "center", alignItems: "center", color: "#fff" }}>
                                    Quick Links
                                </Typography>
                                <ul style={{ padding: "0px", margin: "0px", paddingTop: "5px" }}>
                                    <li style={{ listStyle: "none", paddingBottom: "10px" }}><Link  to={'/my-jobs'} style={{ textDecoration: "none", fontSize: "18px", color: "#fff", fontWeight: "400" }}>My Jobs</Link>
                                    </li>
                                    <li style={{ listStyle: "none", paddingBottom: "10px" }}><Link to={'/my-cv'} style={{ textDecoration: "none", fontSize: "18px", color: "#fff", fontWeight: "400" }}>My CV</Link>
                                    </li>
                                    <li style={{ listStyle: "none", paddingBottom: "10px" }}><Link to={'/my-courses'} style={{ textDecoration: "none", fontSize: "18px", color: "#fff", fontWeight: "400" }}>My Courses</Link>
                                    </li>
                                    <li style={{ listStyle: "none", paddingBottom: "10px" }}><Link to={'my-mock-interview'} style={{ textDecoration: "none", fontSize: "18px", color: "#fff", fontWeight: "400" }}>My Earning</Link>
                                    </li>
                                      <li style={{ listStyle: "none", paddingBottom: "10px" }}><Link to="/" style={{ textDecoration: "none", fontSize: "18px", color: "#fff", fontWeight: "400" }}>Refund Policy</Link></li>
                                      <li style={{ listStyle: "none", paddingBottom: "10px" }}><Link to="/" style={{ textDecoration: "none", fontSize: "18px", color: "#fff", fontWeight: "400" }}>Data Protection Policy</Link></li>

                                </ul>

                            </Box>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 2.2 }} sx={{ mb: { xs: "15px", md: "0px" } }} >
                            <Box sx={{ minWidth: "100%", display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                                <Typography sx={{ fontSize: { sm: "34px", md: "24px", xs: "24px" }, fontWeight: "600", textWrap: "nowrap", letterSpacing: "0%", lineHeight: "138%", display: "flex", justifyContent: "center", alignItems: "center", color: "#fff" }}>
                                    Employers
                                </Typography>
                                <ul style={{ padding: "0px", margin: "0px", paddingTop: "5px" }}>
                                    <li style={{ listStyle: "none", paddingBottom: "10px" }}><Link to="/" style={{ textDecoration: "none", fontSize: "18px", color: "#fff", fontWeight: "400" }}>Post a Job</Link></li>
                                    <li style={{ listStyle: "none", paddingBottom: "10px" }}><Link to="/" style={{ textDecoration: "none", fontSize: "18px", color: "#fff", fontWeight: "400" }}>Products</Link></li>
                                    <li style={{ listStyle: "none", paddingBottom: "10px" }}><Link to="/" style={{ textDecoration: "none", fontSize: "18px", color: "#fff", fontWeight: "400" }}>Subscription</Link></li>
                                    <li style={{ listStyle: "none", paddingBottom: "10px" }}><Link to="/" style={{ textDecoration: "none", fontSize: "18px", color: "#fff", fontWeight: "400" }}>Employer App</Link></li>

                                </ul>

                            </Box>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 3 }} >
                            <Box sx={{ minWidth: "100%", display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                                <Typography sx={{ fontSize: { sm: "34px", md: "24px", xs: "24px" }, fontWeight: "600", textWrap: "nowrap", letterSpacing: "0%", lineHeight: "138%", display: "flex", justifyContent: "center", alignItems: "center", color: "#fff" }}>
                                    Resources
                                </Typography>
                                <ul style={{ padding: "0px", margin: "0px", paddingTop: "5px" }}>
                                    <li style={{ listStyle: "none", paddingBottom: "10px" }}><Link to="/" style={{ textDecoration: "none", fontSize: "18px", color: "#fff", fontWeight: "400" }}>How to hire employes</Link></li>
                                    <li style={{ listStyle: "none", paddingBottom: "10px" }}><Link to="/" style={{ textDecoration: "none", fontSize: "18px", color: "#fff", fontWeight: "400" }}>How to write a job description</Link></li>
                                    <li style={{ listStyle: "none", paddingBottom: "10px" }}><Link to="/" style={{ textDecoration: "none", fontSize: "18px", color: "#fff", fontWeight: "400" }}>Guide to hiring with</Link></li>
                                    <li style={{ listStyle: "none", paddingBottom: "10px" }}><Link href="#" style={{ textDecoration: "none", fontSize: "18px", color: "#fff", fontWeight: "400" }}>Interview question guide</Link>
                                    </li>

                                </ul>

                            </Box>
                        </Grid>
                        
                    </Grid>
                    <Divider sx={{ my: 2, borderColor: "#fff", opacity: 0.3 }} />

                    <Grid container spacing={2} alignItems="center" sx={{
                        justifyContent: { xs: "center", sm: "space-between" },
                    }}>
                        <Grid item xs={12} md={6}>
                            <Typography
                                sx={{
                                    fontSize: { sm: "16px", xs: "16px", md: "16px" },
                                    fontWeight: "400",
                                    color: "#fff",
                                    textAlign: { xs: "center", md: "left" },
                                }}
                            >
                                © All Rights Reserved. Developed by Adret Software
                            </Typography>
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: { xs: "center", md: "flex-end" },
                                    alignItems: "center",
                                    gap: 2,
                                    mt: { xs: 2, md: 0 },
                                }}
                            >
                                <IconButton
                                    href="https://www.youtube.com/"
                                    target="_blank"
                                    sx={{
                                        bgcolor: "#fff",
                                        color: "#FF0000",
                                        "&:hover": { bgcolor: "#FF0000", color: "#fff" },
                                        borderRadius: "50%",
                                        p: 1,
                                    }}
                                >
                                    <YouTubeIcon fontSize="medium" />
                                </IconButton>

                                <IconButton
                                    href="https://www.instagram.com/"
                                    target="_blank"
                                    sx={{
                                        bgcolor: "#fff",
                                        color: "#E1306C",
                                        "&:hover": { bgcolor: "#E1306C", color: "#fff" },
                                        borderRadius: "50%",
                                        p: 1,
                                    }}
                                >
                                    <InstagramIcon fontSize="medium" />
                                </IconButton>

                                <IconButton
                                    href="https://www.facebook.com/"
                                    target="_blank"
                                    sx={{
                                        bgcolor: "#fff",
                                        color: "#1877F2",
                                        "&:hover": { bgcolor: "#1877F2", color: "#fff" },
                                        borderRadius: "50%",
                                        p: 1,
                                    }}
                                >
                                    <FacebookIcon fontSize="medium" />
                                </IconButton>

                                <IconButton
                                    href="https://twitter.com/"
                                    target="_blank"
                                    sx={{
                                        bgcolor: "#fff",
                                        color: "#1DA1F2",
                                        "&:hover": { bgcolor: "#1DA1F2", color: "#fff" },
                                        borderRadius: "50%",
                                        p: 1,
                                    }}
                                >
                                    <TwitterIcon fontSize="medium" />
                                </IconButton>
                            </Box>
                        </Grid>
                    </Grid>

                </Container>
            </Box>
        </>
    )
}

export default Footer
