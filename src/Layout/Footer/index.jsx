import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
    return (
        <>
            <Box sx={{ minHeight: "200px", bgcolor: "#122D80", padding: "50px 0px" }}>
                <Container maxWidth='lg'>
                    <Grid container spacing={2}>
                        <Grid size={{ xs: 12, sm: 6, md: 4.5 }} >
                            <Box sx={{ minWidth: "100%" }}>
                                <Typography sx={{ fontSize: {sm:"36px",xs:"26px"}, fontWeight: "600", textWrap: "nowrap", letterSpacing: "0%", lineHeight: "138%",color:"#fff" }}>
                                    We are here to help
                                </Typography>
                                <Typography sx={{ maxWidth: "280px", fontSize: {sm:"20px",md:"16px"}, fontWeight: "400", letterSpacing: "0%", lineHeight: "138%",color:"#fff" }}>
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
                                            "&:hover": { backgroundColor: "#3877ff",color:"#000" },
                                            fontSize: "20px",
                                            fontWeight: "600",
                                            lineHeight: "138%",
                                            letterSpacing: "0%",
                                            color:"#000"
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
                                            "&:hover": { backgroundColor: "#3877ff",color:"#000" },
                                            fontSize: "20px",
                                            fontWeight: "600",
                                            lineHeight: "138%",
                                            letterSpacing: "0%",
                                            color:"#000"
                                        }}
                                    >
                                        Refer & Earn
                                    </Button>
                                </Stack>
                            </Box>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 2.2 }} >
                            <Box sx={{ minWidth: "100%",display:"flex",flexDirection:"column",alignItems:"flex-start" }}>
                                <Typography sx={{ fontSize: {sm:"30px",md:"16px"}, fontWeight: "600", textWrap: "nowrap", letterSpacing: "0%", lineHeight: "138%",display:"flex",justifyContent:"center",alignItems:"center",color:"#fff" }}>
                                    Quick Links
                                </Typography>
                                <ul style={{padding:"0px",margin:"0px",paddingTop:"5px"}}>
                                    <li style={{listStyle:"none",paddingBottom:"10px"}}><a href="" style={{textDecoration:"none",fontSize:"20px",color:"#fff",fontWeight:"400"}}>My Jobs</a></li>
                                    <li style={{listStyle:"none",paddingBottom:"10px"}}><a href="" style={{textDecoration:"none",fontSize:"20px",color:"#fff",fontWeight:"400"}}>My CV</a></li>
                                    <li style={{listStyle:"none",paddingBottom:"10px"}}><a href="" style={{textDecoration:"none",fontSize:"20px",color:"#fff",fontWeight:"400"}}>My Courses</a></li>
                                    <li style={{listStyle:"none",paddingBottom:"10px"}}><a href="" style={{textDecoration:"none",fontSize:"20px",color:"#fff",fontWeight:"400"}}>My Earning</a></li>
                                    
                                </ul>
                               
                            </Box>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 2.2 }} >
                            <Box sx={{ minWidth: "100%",display:"flex",flexDirection:"column",alignItems:"flex-start" }}>
                                <Typography sx={{ fontSize:{sm:"30px",md:"16px"}, fontWeight: "600", textWrap: "nowrap", letterSpacing: "0%", lineHeight: "138%",display:"flex",justifyContent:"center",alignItems:"center",color:"#fff" }}>
                                    Employers
                                </Typography>
                                <ul style={{padding:"0px",margin:"0px",paddingTop:"5px"}}>
                                    <li style={{listStyle:"none",paddingBottom:"10px"}}><a href="" style={{textDecoration:"none",fontSize:"20px",color:"#fff",fontWeight:"400"}}>Post a Job</a></li>
                                    <li style={{listStyle:"none",paddingBottom:"10px"}}><a href="" style={{textDecoration:"none",fontSize:"20px",color:"#fff",fontWeight:"400"}}>Products</a></li>
                                    <li style={{listStyle:"none",paddingBottom:"10px"}}><a href="" style={{textDecoration:"none",fontSize:"20px",color:"#fff",fontWeight:"400"}}>Subscription</a></li>
                                    <li style={{listStyle:"none",paddingBottom:"10px"}}><a href="" style={{textDecoration:"none",fontSize:"20px",color:"#fff",fontWeight:"400"}}>Employer App</a></li>
                                    
                                </ul>
                               
                            </Box>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 3 }} >
                             <Box sx={{ minWidth: "100%",display:"flex",flexDirection:"column",alignItems:"flex-start" }}>
                                <Typography sx={{ fontSize: {sm:"30px",md:"24px"}, fontWeight: "600", textWrap: "nowrap", letterSpacing: "0%", lineHeight: "138%",display:"flex",justifyContent:"center",alignItems:"center",color:"#fff" }}>
                                    Resources
                                </Typography>
                                <ul style={{padding:"0px",margin:"0px",paddingTop:"5px"}}>
                                    <li style={{listStyle:"none",paddingBottom:"10px"}}><a href="" style={{textDecoration:"none",fontSize:"20px",color:"#fff",fontWeight:"400"}}>How to hire employes</a></li>
                                    <li style={{listStyle:"none",paddingBottom:"10px"}}><a href="" style={{textDecoration:"none",fontSize:"20px",color:"#fff",fontWeight:"400"}}>How to write a job description</a></li>
                                    <li style={{listStyle:"none",paddingBottom:"10px"}}><a href="" style={{textDecoration:"none",fontSize:"20px",color:"#fff",fontWeight:"400"}}>Guide to hiring with</a></li>
                                    <li style={{listStyle:"none",paddingBottom:"10px"}}><a href="" style={{textDecoration:"none",fontSize:"20px",color:"#fff",fontWeight:"400"}}>Interview question guide</a></li>
                                    
                                </ul>
                               
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    )
}

export default Footer
