import React from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import BannerImg from '../../../Images/course-banner.png';

const Banner = () => {
    return (
        <Box
            sx={{
                height: '110vh',
                backgroundImage: `url(${BannerImg})`,
                backgroundSize: 'cover', // cover full area
                backgroundPosition: 'center', // center the image
                backgroundRepeat: 'no-repeat',
                display: 'flex',
                alignItems: 'flex-start', // optional: center content vertically

            }}
        >
            <Container maxWidth='lg'>
                <Typography sx={{ fontSize: "60px", fontWeight: "600", maxWidth: "610px", lineHeight: "138%", letterSpacing: "0%",color:"#fff",pt:"130px" }}>
                    Access the world's
                    best learning course
                    with <span style={{ color: "#FF8014" }}>MYCVI.AI</span>
                </Typography>


                
            </Container>
        </Box>
    );
};

export default Banner;
