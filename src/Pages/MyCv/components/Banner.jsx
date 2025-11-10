import React from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import BannerImg from '../../../Images/mycv-banner.png';
import MobileBannerImg from '../../../Images/my-cv-mobile-banner.png'
import { useNavigate } from 'react-router-dom';

const Banner = () => {

    const navigate = useNavigate()
  

    const handleClick = ()=>{
      window.open('https://mycvi.adretsoftware.in/cv/pricing.html', '_blank');
    }


    return (
        <Box
            sx={{
                height: '100vh',
                backgroundImage: {
                    xs: `url(${MobileBannerImg})`, // for mobile
                    md: `url(${BannerImg})`, // for tablet and desktop
                },
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                display: 'flex',
                alignItems: 'center',

            }}
        >
            <Container maxWidth='lg'>
                <Typography sx={{ fontSize: { md: "60px", xs: "38px" }, fontWeight: "600", maxWidth: "490px", lineHeight: "138%", letterSpacing: "0%",mt:{md:"0px",xs:"-130px"} }}>
                    The CV that gets
                    the job… done
                </Typography>
                <Typography sx={{ fontSize: { md: "36px", xs: "24px" }, fontWeight: "400", maxWidth: "490px", lineHeight: "138%", letterSpacing: "0%", pt: 2 }}>



                    Build a new CV or improve
                    your existing one with step-by-step
                    with <span style={{ color: "#FF8014" }}>CVI</span>
                </Typography>

                <Box sx={{ display: "flex", alignItems: "center", mt: 4 }}>
                    <Button variant='contained' sx={{ borderRadius: "22px", bgcolor: "#FF8014", textTransform: "capitalize", padding: { md: "8px 25px", xs: "8px 20px" }, fontSize: "16px", fontWeight: "400", lineHeight: "138%", letterSpacing: "0%" }} onClick={handleClick}>
                        Create your CV
                    </Button>




                    <Button variant='contained' sx={{ ml: 4, borderRadius: "22px", bgcolor: "transparent", textTransform: "capitalize", padding: { md: "8px 25px", xs: "8px 20px" }, fontSize: "16px", fontWeight: "400", lineHeight: "138%", letterSpacing: "0%", color: "#000", border: "1px solid #000" }}>
                        Upgrade a CV
                    </Button>
                </Box>
            </Container>
        </Box>
    );
};

export default Banner;
