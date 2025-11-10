import { Box, Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import benficard from '../../../Images/BenifitCard1.png';
import benficard2 from '../../../Images/benifit-card2.png';
import benficard3 from '../../../Images/benifitcard3.png';
import benficard4 from '../../../Images/benifitcard4.png';
import benficard5 from '../../../Images/benifitcard5.png';
import benficard6 from '../../../Images/benifitcard6.png';
import { axiosInstance } from '../../../api/axios/axios';
import { endpoints } from '../../../api/endpoints/endpoints';

const KeyBenifit = () => {
  

   const [data, setData] = useState({});
   const [benifitData,setBenifitData] = useState([])
  
    const GetBannerData = async () => {
      try {
        const res = await axiosInstance.get(endpoints.mock.banner);
        const benifitRes = await axiosInstance.get(endpoints.mock.benifits)
        console.log(benifitRes?.data?.mockBenifit, "bannerdata");
        setBenifitData(benifitRes?.data?.mockBenifit)
        setData(res?.data);
      } catch (err) {
        console.error(
          "Error fetching banner data:",
          err.response?.data || err.message
        );
        // You might want to add error state handling here
      }
    };
  
    useEffect(() => {
      GetBannerData();
    }, []);

  return (
    <Box sx={{ bgcolor: '#D9D9D9', minHeight: '400px' }}>
      <Container maxWidth="lg">
        <Box sx={{ py: 6 }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              textAlign: 'center',
              mb: { xs: 4, md: 8 },
              color: '#000',
              fontSize: '48px',
            }}
          >
            {data?.section2_head}
          </Typography>

          {/* ✅ Correct Grid layout */}
          <Grid container spacing={8}>
            {benifitData?.map((item, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Box
                  sx={{
                    p: 4,
                    bgcolor: '#fff',
                    borderRadius: '51px',
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    transition: '0.3s',
                    '&:hover': {
                      transform: 'scale(1.03)',
                      boxShadow: '0px 4px 12px rgba(0,0,0,0.1)',
                    },
                    flexDirection:"column",
                    minWidth:"270px",
                    maxWidth:"270px"
                  }}
                >
                  <img
                    src={item.image}
                    alt={`Benefit ${index + 1}`}
                    style={{
                      width: '100%',
                      maxWidth: '300px',
                      borderRadius: '10px',
                      display: 'block',
                      height:"230px"
                    }}

                    
                  />
                  <Typography sx={{fontSize:"20px",fontWeight:"500",lineHeight:"138%",letterSpacing:"0%"}}>
                     {item?.category}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default KeyBenifit;
