import React from 'react';
import { Box, Button, TextField, Typography, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import bannerImg from '../../../Images/banner.png';
import PhonebannerImg from '../../../Images/phoneBanner.png';

const Banner = () => {
    return (
        <Box
            sx={{
                position: 'relative',
                width: '100%',
                minHeight: {md:'810px',xs:"500px"},
                backgroundImage: {
                    xs: `url(${PhonebannerImg})`,
                    md: `url(${bannerImg})`,      
                },
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            {/* This Box is the container for the textfield + button + text content */}
            <Box
                sx={{
                    position: 'absolute', // allows free positioning over the banner
                    top: {md:'77%',xs:"60%"},  // adjust this to move vertically
                    left: {md:'70%',xs:"50%"}, // adjust this to move horizontally
                    transform: 'translate(-50%, -50%)', // center the box at the position

                    padding: 3,
                    borderRadius: 3,
                    maxHeight: "70px",

                    width: {md:'90%',xs:"90%"},
                    maxWidth: 700,
                    textAlign: 'center',
                    zIndex: 2,
                }}
            >


                <Box sx={{ display: 'flex', alignItems: 'center', backgroundColor: "#0862DC", minHeight: {md:"70px",xs:"60px"}, padding: "0px 13px", borderRadius: "32px" }}>
                    <TextField
                        variant="outlined"
                        placeholder="AI enabled jobs"
                        fullWidth
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon color="action" />
                                </InputAdornment>
                            ),
                            sx: {
                                height: {md:45,xs:35},
                                backgroundColor: "#fff",
                                borderRadius: '30px',
                                '& .MuiOutlinedInput-notchedOutline': {
                                    border: 'none',
                                },
                            },
                        }}
                        sx={{
                            bgcolor: 'transparent',
                            '& .MuiOutlinedInput-root': {
                                paddingRight: 0,
                            },
                        }}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        sx={{
                            ml: 2,
                            borderRadius: '30px',
                            height: {md:45, xs:35},
                            backgroundColor: "#fff",
                            color: "#3246C4",
                            fontSize: {md:"13px",xs:"11px"},
                            textTransform: "capitalize",
                            width: "118px",
                            whiteSpace: 'nowrap',       // Prevent text wrap
                            overflow: 'hidden',         // Hide overflow if any
                            textOverflow: 'ellipsis',
                            lineHeight: "138%",

                            fontWeight: "600"

                        }}
                    >
                        Search Jobs
                    </Button>

                </Box>

                <Typography sx={{ mt: 2, fontWeight: 600, fontSize: {md:"20px",xs:"15px"}, lineHeight: "138%", letterSpacing: "0%", color: "#fff" }}>
                    Search 119,044 new jobs - 3,408 added in the last 24 hours
                </Typography>
            </Box>
        </Box>
    );
};

export default Banner;
