import React from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import BannerImg from '../../../Images/mycv-banner.png';

const Banner = () => {
    return (
        <Box
            sx={{
                height: '100vh',
                backgroundImage: `url(${BannerImg})`,
                backgroundSize: 'cover', // cover full area
                backgroundPosition: 'center', // center the image
                backgroundRepeat: 'no-repeat',
                display: 'flex',
                alignItems: 'center', // optional: center content vertically

            }}
        >
            <Container maxWidth='lg'>
                <Typography sx={{ fontSize: "60px", fontWeight: "600", maxWidth: "490px", lineHeight: "138%", letterSpacing: "0%" }}>
                    The CV that gets
                    the job… done
                </Typography>
                <Typography sx={{ fontSize: "36px", fontWeight: "400", maxWidth: "490px", lineHeight: "138%", letterSpacing: "0%",pt:2 }}>
                    Build a new CV or improve
                    your existing one with step-by-step
                    with <span style={{color:"#FF8014"}}>CVI</span> 
                </Typography>

                <Box sx={{display:"flex",alignItems:"center",mt:4}}>
                 <Button variant='contained' sx={{borderRadius:"22px",bgcolor:"#FF8014",textTransform:"capitalize",padding:"8px 25px",fontSize:"16px",fontWeight:"400",lineHeight:"138%",letterSpacing:"0%"}}>
                    Create your CV
                 </Button>
                  <Button variant='contained' sx={{ml:4,borderRadius:"22px",bgcolor:"transparent",textTransform:"capitalize",padding:"8px 25px",fontSize:"16px",fontWeight:"400",lineHeight:"138%",letterSpacing:"0%",color:"#000",border:"1px solid #000"}}>
                    Upgrade a CV
                 </Button>
                </Box>
            </Container>
        </Box>
    );
};

export default Banner;
